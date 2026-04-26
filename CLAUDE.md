# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指导。

## 项目概述

面向约4岁儿童的网页小游戏。孩子通过完成日常任务赚"钱"（v29 起，原"积分"），用钱装饰小屋、购买/培养宠物、打怪兽，并在心愿商店兑换现实奖励。主题角色：乐迪（超级飞侠）和迪迦（奥特曼）。本项目为**家庭专属版**，公众号通用版在 `kids-hero-game` 仓库。

**核心闭环（v29 起）**：完成任务 → 赚钱 → 照顾宠物（每日固定支出）→ 宠物助攻打怪 → 剩余的钱存起来 → 心愿商店兑换现实奖励。让 4 岁孩子在游戏里理解赚钱、花钱、存钱、延迟满足。

## 技术栈

- 纯静态 HTML + CSS + JavaScript（无框架、无构建步骤）
- 通过 GitHub Pages 部署：https://haobinlaosi.github.io/kids-hero-game-home/
- 数据存储在 `localStorage`：游戏数据 `babyTaskGame_v3`、登录态 `kids_hero_auth_v1`
- 云同步：**阿里云 Function Compute + OSS**（v27 起，从 Cloudflare 迁过来，详见"用户注册登录"章节）
- 支持 PWA（manifest.json + Service Worker 网络优先缓存）

## 部署方式

推送到 `master` 分支会触发 `.github/workflows/deploy.yml` 自动部署到 GitHub Pages。**无需构建**——文件直接提供服务。

### 版本号 bump（发布前必做）

修改 `app.js`、`style.css` 或 `sw.js` 后，**必须**同步 bump 版本号，否则客户端（微信浏览器 + iOS PWA）会用旧缓存。

**使用自动脚本**（推荐）：
```bash
node bump-version.js          # 自动 +1
node bump-version.js 25       # 设为指定版本
```

脚本会同步更新 3 处：
1. `index.html` 中 `style.css?v=N`（约第 15 行）
2. `index.html` 中 `app.js?v=N`（约第 229 行）
3. `sw.js` 中 `CACHE_VERSION = 'vN'`（约第 5 行）

### 缓存策略

- **微信浏览器**：靠 `?v=N` 查询参数强制刷新 JS/CSS
- **iOS PWA**：靠 Service Worker 网络优先策略自动更新（详见下方"PWA 与 Service Worker"）
- **index.html 本身**：靠 `<meta http-equiv="Cache-Control" content="no-cache">` 等标签 + SW 抓取时更新

## 架构设计

单页应用，包含 7 个页面（`page-auth`、`page-home`、`page-task`、`page-house`、`page-shop`、`page-battle`、`page-pet`），通过 CSS 类名切换显示。所有逻辑集中在 `app.js` 的全局 `app` 对象中。

### app.js 结构（从上到下）
1. **数据常量** — `CHARACTERS`、`TASK_CATEGORIES`/`TASK_CATEGORY_ORDER`、`TASKS`（4 分类：基础/成长/特别/扣分）、`SHOP_ITEMS`（7 个分类：家具/墙饰/地板/特殊/宠物/音乐/💝心愿）、`WISH_RATE = 50`、`MONSTERS`、`BOSSES`、`PIXEL_PETS`
2. **`renderPixelPet()`** — 根据像素网格定义生成 SVG
3. **`SFX` 音效引擎** — Web Audio 合成，含 7 种基础音效 + 11 种宠物叫声 + `bossVictory`
4. **`BGM` 背景音乐引擎** — HTML `<audio>` 单例，循环播放 MP3
5. **`Auth` 用户认证模块** — SHA-256 客户端哈希 + 后端 `/auth/*` 端点调用（10 秒 fetch 超时 + 1 次重试 + 结构化 `AuthError`）
6. **`app` 对象** — 所有游戏逻辑，按功能模块组织：
   - 初始化（Service Worker 注册、检查登录态、自动跳转 auth/home）
   - 用户认证（登录/注册/忘记密码/登出/数据迁移）
   - 页面导航（SPA 淡入淡出切换）
   - 钱的显示与动画（v29 起从"积分"重命名为"钱"，字段名 `this.data.points` 保留）
   - 任务系统（4 分类分组渲染、自定义任务支持选分类、↑↓ 排序、完成任务、历史记录）
   - 小屋系统（房间渲染、宠物漫游定时器、普通战利品墙 + BOSS 战利品墙）
   - 商店系统（购买流程、7 种商品分类含心愿，宠物分稀有/普通档位，含音乐播放/停止切换）
   - 宠物培养（属性：饱食/清洁/快乐 3 项，操作：喂饭/陪玩/洗澡 各 4 钱/次/天，宠物上限 4 只 + 宠物乐园）
   - 心愿商店（家长上架 → 孩子兑换 → 等待发放 → 已完成，状态机驱动）
   - 战斗系统（3 种攻击方式 + 宠物辅助攻击需当日完成三项照顾 + BOSS 机制：每只小怪 25% 随机触发 + 3 天限时 + 专属装饰奖励）
   - 音乐控制（购买、播放、静音按钮）
   - GIF 播放、庆祝特效、宠物叫声

**v29 移除**：原家长 4 位 PIN 系统（`requirePin` / `pin-modal` / `this.data.parentPin`）已全部删除。任务管理、心愿管理直接打开；心愿兑换用浏览器原生 `confirm()` 二次确认防误点。

### 数据流
- 所有状态保存在 `this.data` 中，每次修改后通过 `saveData()` 持久化到 localStorage
- 两个角色共享钱（`this.data.points`，UI 文案叫"钱"），但各自拥有独立的小屋、宠物和宠物状态
- 音乐、心愿商店物品、宠物位解锁数都是**全局**的（不分角色）：`this.data.music`、`this.data.wishShop.items`、`this.data.petSlots.unlockedCount`
- 宠物乐园按角色分（`this.data.petPark[charId]`），与 `this.data.houses[charId].pets` 形成"家里 vs 乐园"两个池子
- 宠物属性在应用加载时根据距上次更新的天数进行衰减（每天 -20）
- 云同步（`_syncToCloud`/`_loadFromCloud`）通过阿里云 FC + OSS 存储，按用户名分 key

### 关键约定
- HTML 通过 JS 模板字符串生成，用 `.innerHTML` 注入
- 事件处理使用生成 HTML 中的内联 `onclick="app.method()"`
- 弹窗通过 `.classList.add('show')` / `.classList.remove('show')` 控制
- 宠物漫游使用 `setInterval`（2 秒间隔）配合 CSS 过渡实现平滑移动
- BOSS 战斗中使用 `getBattleTarget()`（返回 `currentBoss || currentMonster`）统一访问当前目标

## 用户注册登录

v25 引入完整的注册登录系统，每个用户有独立数据（此前为单账户共享云文档）。

### 客户端 localStorage

- `kids_hero_auth_v1` → `{ username, passwordHash }`，登录态凭据（登出/密码失效时清空）
- `babyTaskGame_v3` → 当前登录用户的游戏数据副本（登出时清空）

### 密码哈希

客户端 SHA-256（`crypto.subtle.digest`），盐为用户名：

```
passwordHash = sha256(username + ':' + password)
hintAnswerHash = sha256(username + ':' + hintAnswer.trim().toLowerCase())
```

**明文密码/答案从不发送到 Worker**。Worker 只比较哈希。`X-Auth-Token: hero2026safe` 仍作为 App 级防刷门卫（第一道鉴权）。

### 同步后端：阿里云 FC + OSS（v27 起）

**基础 URL**：`https://kids-hero-sync-hvwpmkqqqp.cn-shenzhen.fcapp.run`（在 [app.js](app.js) 的 `SYNC_URL` 常量里）

**为什么不用 Cloudflare**：v25-v26 后端用的是 Cloudflare Workers (`*.workers.dev`)，但中国大陆部分 ISP 网络对该域名做 DNS 污染/TCP 重置导致不可达。诊断显示连 `cloudflare-dns.com` 都连不上，整个 Cloudflare 边缘 IP 段被屏蔽，自定义域名也救不了。v27 整体迁阿里云。

**资源配置**（账号 5158\*\*\*\*\*@qq.com）：
- 区域：**华南1（深圳）`cn-shenzhen`**（FC 不支持华南3 广州）
- FC 函数：`kids-hero-sync`，类型"事件函数"+ HTTP 触发器，认证"无需认证"
- OSS Bucket：`kids-hero-data-sz`（私有），key 格式 `users/<username>.json`
- RAM 用户：`kids-hero-fc`，绑 `AliyunOSSFullAccess`
- 环境变量：`AUTH_TOKEN` / `OSS_BUCKET` / `OSS_REGION=oss-cn-shenzhen` / `OSS_ACCESS_KEY` / `OSS_SECRET_KEY`
- 源码：本仓库 [aliyun-fc/index.js](aliyun-fc/index.js) + [aliyun-fc/package.json](aliyun-fc/package.json)（需手动粘贴到 FC 控制台 WebIDE 部署，详见 [DEPLOY-ALIYUN.md](DEPLOY-ALIYUN.md)）
- 旧 Cloudflare worker（[worker.js](worker.js)）保留作冷备份，客户端不再调用

| 方法 | 路径 | 用途 |
|---|---|---|
| POST | `/auth/register` | 注册新用户（可选带初始数据） |
| POST | `/auth/login` | 登录，返回用户数据 |
| POST | `/auth/hint` | 查某用户的密码提示问题（忘记密码第一步） |
| POST | `/auth/reset` | 用提示问题答案重置密码 |
| POST | `/data/load` | 加载当前用户的云端数据 |
| POST | `/data/save` | 保存当前用户的数据到云端 |

OSS 记录格式：`users/<username>.json` → `{ passwordHash, hint, hintAnswerHash, data, _lastSync, createdAt }`。

旧根路径 `/` 返回 410 Gone（v24 及以前的客户端会被拦住）。

#### FC 关键陷阱

- "事件函数"的 handler 签名是 `(event, context)`，event 是 API Gateway 风格 JSON（含 `requestContext.http.method/path`、`headers`、`body`），**不是** Express 风格的 `(req, res, ctx)`。错误的签名导致 502 + 日志显示 `method=undefined`
- 返回值用 `{statusCode, headers, body, isBase64Encoded}` 对象

### 启动流程

```
init():
  1. 读 kids_hero_auth_v1
     a. 存在 → loadData() → goToPage('home') → _loadFromCloud()
     b. 不存在 → 检查 babyTaskGame_v3 是否非空
         i.  非空（老用户升级）→ page-auth 注册 tab，默认勾选"上传现有数据"
         ii. 空 → page-auth 登录 tab
```

### 登出

`logout()` → 确认对话框 → 清 `kids_hero_auth_v1` + `babyTaskGame_v3` → 停 BGM → `location.reload()`。云端数据保留。

### 凭据失效处理

云同步返回 `INVALID`/`NOT_FOUND` → alert → `_forceLogout()` → 清 `kids_hero_auth_v1` + reload。

⚠️ **`_forceLogout()` 不再清 `babyTaskGame_v3`**（v27 起）。这样后端切换或密码失效时，本地游戏数据保留，用户可以通过"重新注册 + 上传现有数据"无缝迁移。手动 `logout()` 还是会清两份。

### 网络诊断（v26+）

`Auth._post` 用 `AbortController` 加 10 秒超时 + 1 次重试，避免在网络屏蔽时"一直转圈"。失败时抛 `AuthError(code, phase, raw)`，phase 取 `network`/`timeout`/`parse`/`server`。

登录页底部有"🔍 网络诊断"链接，调 `app.runDiagnostics()`：依次跑 Cloudflare DNS-over-HTTPS、后端 `/auth/hint` 探针、`crypto.subtle.digest` 检查，结果显示在 `#diag-modal`，可一键复制。出现网络/超时错误时错误区会自动出现"网络诊断"按钮。

> 历史记录：v26 上线诊断工具后立刻定位到外甥手机的 workers.dev 不可达，进而推动 v27 迁阿里云。诊断现在仍保留（同样的代码也能验证阿里云 fcapp.run 的可达性），未来如果阿里云出问题第一时间能用得上。

### 三层防御保留

- `saveData()` 未登录直接 return（首屏最强防线）
- `_syncToCloud()` 未登录 return + 会话未成功加载云端时 return
- `_loadFromCloud()` 有 `forceReplace` 参数，登录/注册/重置后强制采用云端数据

## PWA 与 Service Worker

- `sw.js` 采用**网络优先策略**：每次请求先走网络，成功则用新版本并更新缓存；断网才回退到缓存
- 新版本 SW 安装后**自动 `skipWaiting` + `controllerchange` 监听 → 页面自动刷新一次**，用户无感更新
- `CACHE_VERSION` 变化会触发 SW 激活时清空所有老版本缓存
- SW 只拦截**同源 GET 请求**，跳过云同步（跨域）
- 首次从老 PWA 迁移：iOS 用户需手动删除图标 → 重新添加到主屏幕一次（因为老 PWA 没注册 SW）

## 音频系统

- **音效（SFX）**：Web Audio API 合成（`_beep`/`_noise`/`_sweep`），零资产依赖，详见 `app.js` 中的 `SFX` 对象
- **背景音乐（BGM）**：HTML `<audio>` 加载 `music/` 目录下的 MP3 文件
- **音乐文件**：5 首公版（Public Domain）MP3 来自 Archive.org FreePD 集合，存放在 `music/` 目录：
  - `happy.mp3` - 欢快口哨尤克里里
  - `adventure.mp3` - 冒险主题
  - `lullaby.mp3` - 舒缓钢琴
  - `hero.mp3` - 英雄史诗
  - `magic.mp3` - 魔法精灵
- **微信/iOS 音频解锁**：首次用户交互时调用 `SFX.init()` + `tryRestoreBGM()`，处理 `WeixinJSBridge` 和 `WeixinJSBridgeReady` 事件

## 文件结构
```
├── index.html              # SPA 主页（7 个页面 + 多个弹窗）
├── app.js                  # 所有游戏逻辑（约 3300 行，含 Auth 模块、诊断、BOSS、心愿商店、宠物乐园）
├── style.css               # 所有样式（约 1500 行）
├── sw.js                   # Service Worker（网络优先缓存）
├── manifest.json           # PWA 配置
├── bump-version.js         # 版本号自动 bump 脚本
├── aliyun-fc/
│   ├── index.js            # 阿里云 FC 函数源码（当前后端，手动粘到 Dashboard）
│   └── package.json        # ali-oss 依赖声明
├── worker.js               # 旧 Cloudflare Worker 源码（已停用，保留作冷备份）
├── DEPLOY-ALIYUN.md        # 阿里云部署详细步骤
├── music/                  # 背景音乐 MP3（5 首公版）
├── gifs/                   # 宠物 GIF 动画（11 个文件）
├── icons/                  # 角色图片（leidi.png、dijia.png、icon.svg）
└── .github/workflows/deploy.yml
```

## 游戏数值参考（v29 经济系统）

### 任务收入
| 分类 | 数量 | 单题分值 | 满分 |
|---|---|---|---|
| 基础任务 | 7 项 | 5-10 | 65 |
| 成长任务 | 4 项 | 10-15 | 50 |
| 特别奖励 | 5 项 | 15-20 | 100（按表现发） |
| 扣分项 | 1 项（打人） | -10 | — |

| 当天表现 | 建议收入区间 |
|---|---|
| 普通一天 | 50-70 钱 |
| 表现不错 | 80-100 钱 |
| 特别优秀 | 110-140 钱 |

### 商店价格（v29 重新定价 ~3x）
- **家具**：50-140 钱（10 件）
- **墙饰**：40-70 钱（10 件）
- **地板墙纸**：120-200 钱（8 件）
- **特殊装饰**：160-240 钱（10 件）
- **音乐**：120-200 钱（5 首）
- **宠物**：普通 200 / 稀有 400 钱
- **宠物位解锁**：第 3 位 300 钱、第 4 位 800 钱
- **宠物乐园接回家**：20 钱/只（送出免费）

### 心愿商店
- **兑换比例**：50 钱 = 1 元人民币（`WISH_RATE` 常量；家长上架时自动按比例算钱数，可手动覆盖）
- **状态机**：`active`（已上架孩子可兑）→ `pending`（已扣钱待发放）→ `completed`（家长已发放）/ `delisted`（已下架）
- **数据**：`this.data.wishShop.items[]`，全局共享（不分角色），每条 `{ id, name, icon, rmbPrice, gamePrice, status, createdAt, redeemedAt, fulfilledAt }`
- **入口**：装饰商店第 7 个 tab "💝 心愿"
- **家长管理**：tab 顶部"⚙️ 家长管理"按钮（v29 起无 PIN 门）→ `showWishManager()` 直接打开 `wish-mgr-modal`
- **孩子兑换**：钱够显示"我要兑换 ✨"按钮 → 浏览器 `confirm()` 二次确认 → 扣钱、状态置 `pending`、撒彩带

### 战斗
- **普通怪兽**：10 血
  - 普通攻击（1 伤害，每日 1 次免费）
  - 强力攻击（3 伤害，10 钱）
  - 必杀技（8 伤害，25 钱）
  - 宠物辅助攻击（2 伤害）：v29 起**必须当日喂饭+陪玩+洗澡都做完**才能助攻，每只每日 1 次（仍免费）
- **BOSS**（v28+）：50 血，**每击杀小怪 25% 随机概率触发**（已有 BOSS 在场则忽略再次触发）
  - **限时 3 天**，跨天血量保留（昨天打掉 30 血今天接着打剩余 20 血）；超时 BOSS 逃跑，不扣东西
  - 奖励：钱（普通 +50 / 终极 +80）+ **专属装饰**（自动加入当前角色小屋，商店买不到）
    - 炎魔王 → 🔥 火焰王座（家具）
    - 冰封巨兽 → 🐻‍❄️ 冰雕熊（家具）
    - 暗影恶龙 → 🛡️ 龙鳞盾（墙饰）
    - 雷霆魔神 → 🔨 雷神锤（墙饰）
    - 终极大魔王 → 👑 黄金王冠（特殊装饰）
  - 击败后加入独立的"BOSS 战利品墙"
  - 实现关键：`spawnBoss()` 写 `spawnedAt`、`_checkBossExpiry()` 在 loadData/renderBattle 检查、SHOP_ITEMS 里 BOSS 装饰打 `bossOnly:true` 标记被 `renderShop` 过滤
- 共 8 只小怪 + 5 只 BOSS

### 宠物培养（v29 重写）
- **3 个属性**：饱食（hunger）/清洁（clean）/快乐（happy），各 0-100，初始 80
- **3 个动作**：喂饭、陪玩、洗澡，每个动作每天**只能做 1 次**，每次 4 钱，对应属性 +30
- 取消了"每日免费 1 次"机制 — 简化逻辑，每天每只宠物固定 12 钱（4 × 3）
- 属性衰减：每天 -20（三个属性独立衰减）
- **宠物上限**：家里最多 4 只，初始 2 只（`this.data.petSlots.unlockedCount = 2`），第 3 位 300 钱解锁、第 4 位 800 钱解锁
- **宠物乐园**：超出上限的宠物可送去 `this.data.petPark[charId]`（免费），乐园里宠物不消耗钱、不渲染在小屋、不参战。接回家 20 钱/只
- **辅助打怪门槛**：宠物当天三项照顾全部完成才能助攻（`hasFullCareToday()`）
- **属性数据迁移**：v28 及以前的 5 字段结构（meat/veg/rice/clean/happy + feedMeat/feedVeg/feedRice）在 `_applyDataCompat()` 检测到旧字段时**强制重置**为 80/80/80

## 注意事项

- 代码修改后发布前务必运行 `node bump-version.js` bump 版本号
- 改 `aliyun-fc/index.js` 或 `package.json` 后需手动粘贴到阿里云 FC 控制台 WebIDE 部署（未自动部署，详见 [DEPLOY-ALIYUN.md](DEPLOY-ALIYUN.md)）
- 添加新的数据字段时，务必在 `_applyDataCompat()` 中加入向后兼容初始化
- **不要重新引入家长 PIN 系统**（v29 已彻底移除）。如果某个动作需要"家长二次确认"，用浏览器 `confirm()` 即可（参考 `redeemWish` 的实现）。重建 PIN 模态会让 4 岁孩子困惑且家长嫌麻烦
- 新增宠物时，除了 `SHOP_ITEMS.pet` 中添加条目，还需：
  1. 在 `PIXEL_PETS` 中定义像素艺术（可选，目前 p_whale/p_shark 未定义但仍可用 emoji 显示）
  2. 添加 `voice` 字段并在 `SFX.play()` 的 switch 中新增对应叫声 case
  3. 标记 `tier: 'common'`（200 钱）或 `'rare'`（400 钱），稀有宠物在商店有金色边框
- 新增 BOSS 时，除了 `BOSSES` 中加条目，还需在 `SHOP_ITEMS` 对应分类（furniture/wallDecor/special）末尾加 `{ ..., bossOnly: true }` 的奖励物品条目，否则 `findItem` 找不到，小屋渲染会失败
- 新增任务时（在 `TASKS` 数组里），**必须**指定 `category` 字段（`basic` / `growth` / `special` / `penalty`），否则在 `getActiveTasksByCategory()` 里会被错误地归类到 `special`
- 心愿商店占位项（`SHOP_ITEMS.wish`）的 `items` 永远是空数组——真实数据走 `this.data.wishShop.items`，`renderShop()` 检测到 `shopCategory === 'wish'` 时分流到 `renderWishShop()`。**不要**往 `SHOP_ITEMS.wish.items` 里塞东西，会被 `findItem` 误命中
- **网络可达性的 VPN 假象**：用户自己常开 VPN 但不自知，会让外部域名"看起来一直工作"，但其他家人/孩子的设备没 VPN 就会失败。任何外部依赖（fetch、CDN、字体）选型时优先国内可达的服务（阿里云/腾讯云）。fetch 必须有 timeout（10 秒），错误信息要给出可操作建议
