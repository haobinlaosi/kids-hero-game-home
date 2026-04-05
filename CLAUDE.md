# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指导。

## 项目概述

面向约4岁儿童的网页小游戏。孩子通过完成日常任务赚取积分，用积分装饰小屋、购买/培养宠物、打怪兽。主题角色：乐迪（超级飞侠）和迪迦（奥特曼）。本项目为**家庭专属版**，公众号通用版在 `kids-hero-game` 仓库。

## 技术栈

- 纯静态 HTML + CSS + JavaScript（无框架、无构建步骤）
- 通过 GitHub Pages 部署：https://haobinlaosi.github.io/kids-hero-game-home/
- 数据存储在 `localStorage`，key 为 `babyTaskGame_v3`
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

单页应用，包含 6 个页面（`page-home`、`page-task`、`page-house`、`page-shop`、`page-battle`、`page-pet`），通过 CSS 类名切换显示。所有逻辑集中在 `app.js` 的全局 `app` 对象中。

### app.js 结构（从上到下）
1. **数据常量** — `CHARACTERS`、`TASKS`、`SHOP_ITEMS`（6 个分类：家具/墙饰/地板/特殊/宠物/音乐）、`MONSTERS`、`BOSSES`、`PIXEL_PETS`
2. **`renderPixelPet()`** — 根据像素网格定义生成 SVG
3. **`SFX` 音效引擎** — Web Audio 合成，含 7 种基础音效 + 11 种宠物叫声 + `bossVictory`
4. **`BGM` 背景音乐引擎** — HTML `<audio>` 单例，循环播放 MP3
5. **`app` 对象** — 所有游戏逻辑，按功能模块组织：
   - 初始化 / Service Worker 注册 / 数据迁移（支持 v1→v2→v3 + 多轮字段兼容）
   - 页面导航（SPA 淡入淡出切换）
   - 积分显示与动画
   - 家长 PIN 系统（4 位密码用于记录任务）
   - 任务系统（完成任务、历史记录、积分奖惩）
   - 小屋系统（房间渲染、宠物漫游定时器、普通战利品墙 + BOSS 战利品墙）
   - 商店系统（购买流程、6 种商品分类，含音乐播放/停止切换）
   - 宠物培养（属性：饥饿/清洁/快乐，三种喂食：喂肉/喂菜/喂饭，每种独立每日免费 1 次）
   - 战斗系统（3 种攻击方式 + 宠物辅助攻击 + BOSS 机制：每 5 只小怪出 1 个 BOSS）
   - 音乐控制（购买、播放、静音按钮）
   - GIF 播放、庆祝特效、宠物叫声

### 数据流
- 所有状态保存在 `this.data` 中，每次修改后通过 `saveData()` 持久化到 localStorage
- 两个角色共享积分，但各自拥有独立的小屋、宠物和宠物状态
- 音乐购买状态是**全局**的（不分角色），存在 `this.data.music = { owned, current, enabled }`
- 宠物属性在应用加载时根据距上次更新的天数进行衰减
- 云同步（`_syncToCloud`/`_loadFromCloud`）通过 Cloudflare Worker + KV 存储

### 关键约定
- HTML 通过 JS 模板字符串生成，用 `.innerHTML` 注入
- 事件处理使用生成 HTML 中的内联 `onclick="app.method()"`
- 弹窗通过 `.classList.add('show')` / `.classList.remove('show')` 控制
- 宠物漫游使用 `setInterval`（2 秒间隔）配合 CSS 过渡实现平滑移动
- BOSS 战斗中使用 `getBattleTarget()`（返回 `currentBoss || currentMonster`）统一访问当前目标

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
├── index.html          # SPA 主页（6个页面 + 多个弹窗）
├── app.js              # 所有游戏逻辑（约 1900 行）
├── style.css           # 所有样式（约 1000 行）
├── sw.js               # Service Worker（网络优先缓存）
├── manifest.json       # PWA 配置
├── bump-version.js     # 版本号自动 bump 脚本
├── music/              # 背景音乐 MP3（5 首公版）
├── gifs/               # 宠物 GIF 动画（11 个文件）
├── icons/              # 角色图片（leidi.png、dijia.png、icon.svg）
└── .github/workflows/deploy.yml
```

## 游戏数值参考

### 任务与商店
- 每日任务收入：约 50-80 积分
- 商店物品：10-60 积分
- 宠物价格：40-80 积分
- 音乐价格：30-50 积分

### 战斗
- **普通怪兽**：10 血
  - 普通攻击（1 伤害，每日 1 次免费）
  - 强力攻击（3 伤害，10 积分）
  - 必杀技（8 伤害，25 积分）
  - 宠物辅助攻击（2 伤害，每只宠物每日 1 次免费）
- **BOSS**：50 血，每击杀 5 只普通小怪后必定出现 1 只
  - 奖励：普通 BOSS +50 积分，终极大魔王 +80 积分
  - 击败后加入独立的"BOSS 战利品墙"
- 共 8 只小怪 + 5 只 BOSS

### 宠物培养
- 三种喂食：喂肉 / 喂菜 / 喂饭，每种 +20 饱食度，各自独立的每日 1 次免费
- 洗澡、玩耍各 +30，每日 1 次免费
- 之后每次操作 5 积分
- 属性衰减：每天 -20（饥饿、清洁、快乐各自独立）

## 注意事项

- 代码修改后发布前务必运行 `node bump-version.js` bump 版本号
- 添加新的数据字段时，务必在 `_applyDataCompat()` 中加入向后兼容初始化
- 新增宠物时，除了 `SHOP_ITEMS.pet` 中添加条目，还需：
  1. 在 `PIXEL_PETS` 中定义像素艺术（可选，目前 p_whale/p_shark 未定义但仍可用 emoji 显示）
  2. 添加 `voice` 字段并在 `SFX.play()` 的 switch 中新增对应叫声 case
