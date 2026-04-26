// Service Worker — 网络优先策略
// 每次打开 PWA 时优先从服务器拉新版本，离线时才用缓存
// 版本号改动会强制 Service Worker 更新并清空老缓存

const CACHE_VERSION = 'v29';
const CACHE_NAME = 'kids-hero-home-' + CACHE_VERSION;

// 安装阶段：跳过等待，立即激活新 SW
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// 激活阶段：清空所有老版本缓存，立即接管所有页面
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// 拦截请求：网络优先，失败时回退到缓存
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // 只处理 GET 同源请求，跳过云同步等跨域请求
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        // 成功从网络获取 → 存入缓存供离线时用
        if (res && res.status === 200 && res.type === 'basic') {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || Response.error()))
  );
});

// 支持来自页面的手动"立即更新"消息
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
