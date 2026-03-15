# 超级英雄任务小游戏 - 家庭专属版

## 项目简介
一个面向4岁左右儿童的网页小游戏，通过完成日常任务赚取积分，用于装饰小屋、购买宠物、打怪兽。
主题角色：乐迪（超级飞侠）和迪迦（奥特曼）。
本版本为家庭专属版，可根据孩子需求自由深度定制。

## 技术栈
- 纯静态网页：HTML + CSS + JavaScript（无框架）
- 部署：GitHub Pages（https://haobinlaosi.github.io/kids-hero-game-home/）
- 数据存储：浏览器 localStorage（key: `babyTaskGame_v2`）
- 仓库：https://github.com/haobinlaosi/kids-hero-game-home

## 项目结构
```
├── index.html        # 主页面
├── app.js            # 核心逻辑（任务、商店、小屋、战斗）
├── style.css         # 样式
├── manifest.json     # PWA 配置
├── gifs/             # 宠物GIF动画
├── icons/            # 角色图片（leidi.png, dijia.png）
└── .github/workflows/deploy.yml  # GitHub Pages 自动部署
```

## 核心功能
1. **任务积分** — 家长通过PIN记录任务，孩子赚积分（日均50-80分）
2. **小屋装饰** — 两个角色各有小屋，购买家具/墙饰/地板/特殊装饰
3. **宠物系统** — 购买宠物有GIF动画，可在战斗中辅助攻击
4. **打怪兽** — 回合制战斗，普通攻击每日1次免费，可花积分买强力/必杀攻击
5. **战利品墙** — 在小屋中展示打败的怪兽

## 注意事项
- 微信浏览器缓存激进，每次更新 app.js/style.css 后必须在 index.html 中 bump 版本号（如 `?v=7` → `?v=8`）
- 这是**家庭专属版**，公众号通用版在 `kids-hero-game` 仓库
- 可以大胆根据孩子喜好定制任务、角色、功能，不影响公众号版
