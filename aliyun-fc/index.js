'use strict';

// 阿里云 Function Compute (FC) 3.0 — 事件函数 + HTTP 触发器
// 替换原来的 Cloudflare Worker（kids-hero-sync.yiyuluzhb.workers.dev）
// 因为 *.workers.dev 在中国大陆部分网络被屏蔽
//
// 端点（与原 worker.js 完全一致）：
//   POST /auth/register  注册
//   POST /auth/login     登录（== /data/load）
//   POST /auth/hint      查密码提示
//   POST /auth/reset     重置密码
//   POST /data/load      加载用户数据
//   POST /data/save      保存用户数据
//
// 必需的环境变量：
//   AUTH_TOKEN     —— X-Auth-Token 校验值（同客户端，默认 hero2026safe）
//   OSS_BUCKET     —— OSS 存储桶名称
//   OSS_REGION     —— OSS 区域，与 FC 同区域（如 oss-cn-shenzhen）
//   OSS_ACCESS_KEY —— RAM 用户的 AccessKey ID（OSSFullAccess 权限）
//   OSS_SECRET_KEY —— RAM 用户的 AccessKey Secret

const OSS = require('ali-oss');

const USERNAME_RE = /^[一-龥a-zA-Z0-9_]{3,20}$/;

const CORS_HEADERS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'Content-Type, X-Auth-Token',
  'access-control-max-age': '86400',
  'content-type': 'application/json; charset=utf-8'
};

function makeOssClient() {
  return new OSS({
    region: process.env.OSS_REGION,
    bucket: process.env.OSS_BUCKET,
    accessKeyId: process.env.OSS_ACCESS_KEY,
    accessKeySecret: process.env.OSS_SECRET_KEY,
    secure: true,
    timeout: 8000
  });
}

const respond = (status, obj) => ({
  statusCode: status,
  headers: CORS_HEADERS,
  body: JSON.stringify(obj),
  isBase64Encoded: false
});

const errResp = (code, msg, status = 400) =>
  respond(status, { ok: false, error: code, message: msg });

async function ossGetRecord(client, key) {
  try {
    const result = await client.get(key);
    return JSON.parse(result.content.toString('utf-8'));
  } catch (e) {
    if (e.code === 'NoSuchKey' || e.status === 404) return null;
    throw e;
  }
}

async function ossPutRecord(client, key, obj) {
  await client.put(key, Buffer.from(JSON.stringify(obj), 'utf-8'), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

// 取 header 不区分大小写
function getHeader(headers, name) {
  if (!headers) return '';
  const lower = name.toLowerCase();
  for (const k of Object.keys(headers)) {
    if (k.toLowerCase() === lower) return headers[k];
  }
  return '';
}

exports.handler = async (event, context) => {
  // event 可能是 Buffer / 字符串 / 对象
  if (Buffer.isBuffer(event)) {
    event = event.toString('utf-8');
  }
  if (typeof event === 'string') {
    try { event = JSON.parse(event); } catch (e) { event = {}; }
  }
  if (!event || typeof event !== 'object') event = {};

  const method = (event.requestContext && event.requestContext.http && event.requestContext.http.method)
    || event.httpMethod || event.method || '';
  const path = (event.requestContext && event.requestContext.http && event.requestContext.http.path)
    || event.rawPath || event.path || '/';
  const headers = event.headers || {};

  console.log('[FC] event method=', method, 'path=', path);
  console.log('[FC] env check: BUCKET=', process.env.OSS_BUCKET, 'REGION=', process.env.OSS_REGION,
    'ACCESS_KEY_set=', !!process.env.OSS_ACCESS_KEY, 'SECRET_KEY_set=', !!process.env.OSS_SECRET_KEY);

  // CORS preflight
  if (method === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  // 全局 token 校验（防随手访问）
  const expectedToken = process.env.AUTH_TOKEN || 'hero2026safe';
  const headerToken = getHeader(headers, 'x-auth-token');
  if (headerToken !== expectedToken) {
    console.log('[FC] token mismatch, got=', headerToken ? '<set>' : '<empty>');
    return errResp('FORBIDDEN', 'Forbidden', 403);
  }

  // 老 Cloudflare 客户端兜底
  if (path === '/' || path === '') {
    return errResp('DEPRECATED', '请升级到最新版客户端', 410);
  }

  if (method !== 'POST') {
    return errResp('METHOD_NOT_ALLOWED', 'POST only', 405);
  }

  // Parse body
  let body = {};
  try {
    let rawBody = event.body || '';
    if (event.isBase64Encoded && rawBody) {
      rawBody = Buffer.from(rawBody, 'base64').toString('utf-8');
    }
    body = JSON.parse(rawBody || '{}');
  } catch (e) {
    console.error('[FC] body parse fail:', e);
    return errResp('BAD_JSON', '请求格式错误');
  }

  const { username } = body;
  if (!username || !USERNAME_RE.test(username)) {
    return errResp('BAD_USERNAME', '用户名格式错误（3-20 字符，仅允许中英文、数字、下划线）');
  }

  const ossKey = `users/${username}.json`;
  let oss;
  try {
    oss = makeOssClient();
    console.log('[FC] OSS client created');
  } catch (e) {
    console.error('[FC] OSS init failed:', e);
    return errResp('OSS_INIT', String(e && e.message || e), 500);
  }

  try {
    console.log('[FC] dispatching path=', path);

    // 注册
    if (path === '/auth/register') {
      const { passwordHash, hint, hintAnswerHash, data } = body;
      if (!passwordHash || !hint || !hintAnswerHash) return errResp('MISSING', '缺少必要字段');
      const existing = await ossGetRecord(oss, ossKey);
      if (existing) return errResp('USER_EXISTS', '用户名已存在，请换一个');
      const now = Date.now();
      const record = {
        passwordHash, hint, hintAnswerHash,
        data: data || {},
        _lastSync: now,
        createdAt: now
      };
      await ossPutRecord(oss, ossKey, record);
      return respond(200, { ok: true, _lastSync: now });
    }

    // 登录 / 加载数据
    if (path === '/auth/login' || path === '/data/load') {
      const { passwordHash } = body;
      if (!passwordHash) return errResp('MISSING', '缺少密码');
      const record = await ossGetRecord(oss, ossKey);
      if (!record) return errResp('INVALID', '用户名或密码错误');
      if (record.passwordHash !== passwordHash) return errResp('INVALID', '用户名或密码错误');
      return respond(200, { ok: true, data: record.data, _lastSync: record._lastSync });
    }

    // 查密码提示
    if (path === '/auth/hint') {
      const record = await ossGetRecord(oss, ossKey);
      if (!record) return errResp('NOT_FOUND', '用户不存在', 404);
      return respond(200, { ok: true, hint: record.hint });
    }

    // 重置密码
    if (path === '/auth/reset') {
      const { hintAnswerHash, newPasswordHash } = body;
      if (!hintAnswerHash || !newPasswordHash) return errResp('MISSING', '缺少字段');
      const record = await ossGetRecord(oss, ossKey);
      if (!record) return errResp('NOT_FOUND', '用户不存在', 404);
      if (record.hintAnswerHash !== hintAnswerHash) return errResp('WRONG_ANSWER', '答案错误');
      record.passwordHash = newPasswordHash;
      record._lastSync = Date.now();
      await ossPutRecord(oss, ossKey, record);
      return respond(200, { ok: true, data: record.data, _lastSync: record._lastSync });
    }

    // 保存数据
    if (path === '/data/save') {
      const { passwordHash, data } = body;
      if (!passwordHash || !data) return errResp('MISSING', '缺少字段');
      const record = await ossGetRecord(oss, ossKey);
      if (!record) return errResp('INVALID', '用户名或密码错误');
      if (record.passwordHash !== passwordHash) return errResp('INVALID', '用户名或密码错误');
      record.data = data;
      record._lastSync = Date.now();
      await ossPutRecord(oss, ossKey, record);
      return respond(200, { ok: true, _lastSync: record._lastSync });
    }

    return errResp('NOT_FOUND', 'Not found', 404);
  } catch (e) {
    console.error('[FC] 处理错误:', e);
    return errResp('INTERNAL', String(e && e.message || e), 500);
  }
};
