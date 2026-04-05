#!/usr/bin/env node
// 版本号自动 bump 脚本
// 用法:
//   node bump-version.js          # 自动 +1
//   node bump-version.js 25       # 设为指定版本
//
// 会同步更新以下 3 处：
//   1. sw.js          CACHE_VERSION
//   2. index.html     style.css?v=N
//   3. index.html     app.js?v=N

const fs = require('fs');
const path = require('path');

const root = __dirname;
const indexHtml = path.join(root, 'index.html');
const swJs = path.join(root, 'sw.js');

// 以 sw.js 为单一真实来源读取当前版本
const swContent = fs.readFileSync(swJs, 'utf8');
const match = swContent.match(/CACHE_VERSION\s*=\s*['"]v(\d+)['"]/);
if (!match) {
  console.error('❌ 无法在 sw.js 中找到 CACHE_VERSION');
  process.exit(1);
}
const currentVersion = parseInt(match[1], 10);

// 确定新版本
const arg = process.argv[2];
const newVersion = arg ? parseInt(arg, 10) : currentVersion + 1;
if (isNaN(newVersion) || newVersion < 1) {
  console.error('❌ 无效的版本号:', arg);
  process.exit(1);
}
if (newVersion === currentVersion) {
  console.log('版本号未变化，无需更新');
  process.exit(0);
}

console.log(`版本号: v${currentVersion} → v${newVersion}\n`);

// 更新 sw.js
const newSw = swContent.replace(
  /CACHE_VERSION\s*=\s*['"]v\d+['"]/,
  `CACHE_VERSION = 'v${newVersion}'`
);
fs.writeFileSync(swJs, newSw);
console.log('  ✓ sw.js');

// 更新 index.html（两处：style.css 和 app.js）
let html = fs.readFileSync(indexHtml, 'utf8');
const cssBefore = (html.match(/style\.css\?v=\d+/g) || []).length;
const jsBefore = (html.match(/app\.js\?v=\d+/g) || []).length;
html = html.replace(/style\.css\?v=\d+/g, `style.css?v=${newVersion}`);
html = html.replace(/app\.js\?v=\d+/g, `app.js?v=${newVersion}`);
fs.writeFileSync(indexHtml, html);
console.log(`  ✓ index.html  (style.css × ${cssBefore}, app.js × ${jsBefore})`);

console.log('\n✅ 完成！接下来提交：');
console.log('  git add index.html sw.js');
console.log(`  git commit -m "Bump version to v${newVersion}"`);
console.log('  git push');
