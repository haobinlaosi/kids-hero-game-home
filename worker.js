// Cloudflare Worker — kids-hero-sync (v2 多用户版)
//
// 部署方式：
//   1. Cloudflare Dashboard → Workers & Pages → kids-hero-sync → Edit code → 粘贴此文件
//   2. 确认 Bindings 中 KV 绑定名为 GAME_DATA
//   3. 确认 Variables and Secrets 中 AUTH_TOKEN = 'hero2026safe'
//   4. Save & Deploy
//
// 端点（全部 POST，body = JSON）：
//   /auth/register  { username, passwordHash, hint, hintAnswerHash, data }
//   /auth/login     { username, passwordHash }           → { data, _lastSync }
//   /auth/hint      { username }                         → { hint }
//   /auth/reset     { username, hintAnswerHash, newPasswordHash } → { data, _lastSync }
//   /data/load      { username, passwordHash }           → { data, _lastSync }
//   /data/save      { username, passwordHash, data }     → { _lastSync }
//
// 所有请求需带 X-Auth-Token header（等于 env.AUTH_TOKEN 或兜底 'hero2026safe'）

const USERNAME_RE = /^[一-龥a-zA-Z0-9_]{3,20}$/;
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
  'Content-Type': 'application/json'
};

const jsonRes = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: CORS });
const errRes  = (code, msg, status = 400) => jsonRes({ ok: false, error: code, message: msg }, status);

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });

    const expectedToken = env.AUTH_TOKEN || 'hero2026safe';
    if (req.headers.get('X-Auth-Token') !== expectedToken) {
      return errRes('FORBIDDEN', 'Forbidden', 403);
    }

    const url  = new URL(req.url);
    const path = url.pathname;

    // 旧客户端的根路径访问 — 明确废弃，防止污染新数据
    if (path === '/' || path === '') {
      return errRes('DEPRECATED', '请升级到最新版客户端', 410);
    }

    if (req.method !== 'POST') {
      return errRes('METHOD_NOT_ALLOWED', 'POST only', 405);
    }

    let body = {};
    try { body = await req.json(); }
    catch (e) { return errRes('BAD_JSON', '请求格式错误'); }

    const { username } = body;
    if (!username || !USERNAME_RE.test(username)) {
      return errRes('BAD_USERNAME', '用户名格式错误（3-20 字符，仅允许中英文、数字、下划线）');
    }

    const key = 'user:' + username;

    // ---------- 注册 ----------
    if (path === '/auth/register') {
      const { passwordHash, hint, hintAnswerHash, data } = body;
      if (!passwordHash || !hint || !hintAnswerHash) {
        return errRes('MISSING', '缺少必要字段');
      }
      const existing = await env.GAME_DATA.get(key);
      if (existing) return errRes('USER_EXISTS', '用户名已存在，请换一个');
      const now = Date.now();
      const record = {
        passwordHash,
        hint,
        hintAnswerHash,
        data: data || {},
        _lastSync: now,
        createdAt: now
      };
      await env.GAME_DATA.put(key, JSON.stringify(record));
      return jsonRes({ ok: true, _lastSync: now });
    }

    // ---------- 登录 / 加载数据 ----------
    if (path === '/auth/login' || path === '/data/load') {
      const { passwordHash } = body;
      if (!passwordHash) return errRes('MISSING', '缺少密码');
      const raw = await env.GAME_DATA.get(key);
      if (!raw) return errRes('INVALID', '用户名或密码错误');
      const record = JSON.parse(raw);
      if (record.passwordHash !== passwordHash) {
        return errRes('INVALID', '用户名或密码错误');
      }
      return jsonRes({ ok: true, data: record.data, _lastSync: record._lastSync });
    }

    // ---------- 查密码提示（重置流程第一步）----------
    if (path === '/auth/hint') {
      const raw = await env.GAME_DATA.get(key);
      if (!raw) return errRes('NOT_FOUND', '用户不存在', 404);
      const record = JSON.parse(raw);
      return jsonRes({ ok: true, hint: record.hint });
    }

    // ---------- 重置密码 ----------
    if (path === '/auth/reset') {
      const { hintAnswerHash, newPasswordHash } = body;
      if (!hintAnswerHash || !newPasswordHash) return errRes('MISSING', '缺少字段');
      const raw = await env.GAME_DATA.get(key);
      if (!raw) return errRes('NOT_FOUND', '用户不存在', 404);
      const record = JSON.parse(raw);
      if (record.hintAnswerHash !== hintAnswerHash) {
        return errRes('WRONG_ANSWER', '答案错误');
      }
      record.passwordHash = newPasswordHash;
      record._lastSync = Date.now();
      await env.GAME_DATA.put(key, JSON.stringify(record));
      return jsonRes({ ok: true, data: record.data, _lastSync: record._lastSync });
    }

    // ---------- 保存数据 ----------
    if (path === '/data/save') {
      const { passwordHash, data } = body;
      if (!passwordHash || !data) return errRes('MISSING', '缺少字段');
      const raw = await env.GAME_DATA.get(key);
      if (!raw) return errRes('INVALID', '用户名或密码错误');
      const record = JSON.parse(raw);
      if (record.passwordHash !== passwordHash) {
        return errRes('INVALID', '用户名或密码错误');
      }
      record.data = data;
      record._lastSync = Date.now();
      await env.GAME_DATA.put(key, JSON.stringify(record));
      return jsonRes({ ok: true, _lastSync: record._lastSync });
    }

    return errRes('NOT_FOUND', 'Not found', 404);
  }
};
