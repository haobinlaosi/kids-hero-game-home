# 阿里云 FC + OSS 部署指南

把后端从 Cloudflare Worker 迁到阿里云 Function Compute (FC) + Object Storage Service (OSS)，因为 Cloudflare 在中国大陆部分网络不可达。

预计耗时：**30-45 分钟**（不算实名认证）。

---

## 一次性准备

### 1. 阿里云账号

- 登录 https://www.aliyun.com → 账号必须**已实名认证**（否则用不了 FC 和 OSS）
- 确认账户已开通：
  - **Function Compute 3.0**：https://fcnext.console.aliyun.com
  - **Object Storage Service**：https://oss.console.aliyun.com
- 两个都点一次"立即开通"，**默认免费额度对家庭使用绰绰有余**（FC 每月 100 万次调用免费、OSS 每月 5 GB 存储免费）

### 2. 选区域

后续所有操作（OSS bucket、FC 函数）必须在**同一个区域**。

**本项目使用 华南1（深圳）= `cn-shenzhen`**。

⚠️ FC 3.0 **不支持华南3（广州）区域**，南方可选的只有华南1（深圳）。如果你 OSS 桶之前建在了广州，要在深圳重建一个新桶（FC 必须和 OSS 同区域，跨区调用会有性能和流量问题）。

**操作时注意每个控制台左上角的区域选择器**，确认在「华南1（深圳）」。

---

## 步骤 1：创建 OSS 存储桶（Bucket）

⚠️ **不要复用图床等已有 Bucket**。图床 Bucket 通常设置为"公共读"，游戏数据必须是"私有"，权限模型不一样，放一起会泄漏密码哈希。

1. 进入 OSS 控制台：https://oss.console.aliyun.com
2. **左上角区域切到「华南1（深圳）」**
3. 点 **Bucket 列表 → 创建 Bucket**
4. 配置：
   - **Bucket 名称**：`kids-hero-data-sz`（全局唯一，自由命名）
   - **地域**：`华南1（深圳）`
   - **存储类型**：标准存储
   - **同城冗余**：关闭（不需要）
   - **读写权限**：**私有**（重要！游戏数据涉及隐私，一定不能选"公共读"）
   - **服务端加密方式**：无（家用项目不需要）
5. 点 **创建**
6. **记下 Bucket 名称**，后面要填

---

## 步骤 2：创建 RAM 用户（FC 访问 OSS 用的"账号"）

FC 函数代码运行时，需要凭证才能读写 OSS。最简单的做法是创建一个"程序专用账号"（RAM 用户）。

1. 进入 RAM 控制台：https://ram.console.aliyun.com
2. 左侧菜单 → **身份管理 → 用户 → 创建用户**
3. 配置：
   - **登录名称**：`kids-hero-fc`
   - **显示名称**：`kids hero FC service`
   - **访问配置**（页面下半部分）：
     - ☑ **使用永久 AccessKey 访问** ← 必勾
     - ☐ 使用控制台访问 ← 不勾（这个用户不需要登录控制台）
4. 点 **确定** → 弹出"AccessKey"页面
5. **立刻复制** 两个值，找个安全地方保存（弹窗关掉就再也看不到 Secret 了）：
   - **AccessKey ID**：类似 `LTAI5tXXXXXXXXXX`
   - **AccessKey Secret**：类似 `wJalrXUtnFEMI/...`
6. 关弹窗回到用户列表 → 点你刚创建的用户 → 顶部 **权限管理** tab → **添加权限**
7. 选择 **AliyunOSSFullAccess** → 确定
   - 更安全的做法（可选）：自定义策略，只给 `kids-hero-data-sz` 这一个 bucket 的读写权限，家用看你愿不愿意折腾

---

## 步骤 3：创建 FC 函数

1. 进入 FC 3.0 控制台：https://fcnext.console.aliyun.com
2. **左上角区域切到「华南1（深圳）」**（必须和 OSS 同区域！）
3. 左侧 → **函数 → 创建函数**
4. 选择函数类型：**事件函数**（不要选 Web 函数 / GPU 函数 / 沙箱函数 / 任务函数）→ 点底部 **创建事件函数**
5. 配置：
   - **函数名**：`kids-hero-sync`
   - **运行环境**：**Node.js 20**（或 18，最新稳定版即可）
   - **请求处理程序类型**：**处理 HTTP 请求**（很重要，不要选"处理事件请求"）
   - **代码上传方式**：**使用示例代码**（先随便选一个，后面替换）
   - **HTTP 触发器**：勾选启用
   - **认证方式**：**无身份认证**（我们在代码里用自己的 X-Auth-Token 校验）
   - **请求方法**：勾选 GET、POST、OPTIONS
6. 点 **创建**

### 替换代码

6. 创建完后进入函数详情 → 顶部 **代码** tab
7. 你会看到默认的 `index.js`（hello world）→ 把内容**全部删掉**
8. 把本仓库 [aliyun-fc/index.js](aliyun-fc/index.js) 的全部内容**粘贴进去**
9. 顶部点 **添加文件** → 文件名填 `package.json` → 把本仓库 [aliyun-fc/package.json](aliyun-fc/package.json) 的内容粘进去
10. 点顶部 **构建（部署→构建）** → 等几十秒安装 ali-oss 依赖
    - 如果看不到"构建"按钮，找 **WebIDE** → 打开终端 → 输入 `cd /code && npm install` → 等完成 → 点 **部署**

### 设置环境变量

11. 函数详情页 → 顶部 **配置** tab → **环境变量**
12. 添加 5 个变量：

| Key | Value | 说明 |
|---|---|---|
| `AUTH_TOKEN` | `hero2026safe` | 跟客户端 SYNC_TOKEN 必须一致 |
| `OSS_BUCKET` | `kids-hero-data-sz`（你实际的桶名）| 步骤 1 创建的 |
| `OSS_REGION` | `oss-cn-shenzhen` | 注意要带 `oss-` 前缀！|
| `OSS_ACCESS_KEY` | 步骤 2 的 AccessKey ID | |
| `OSS_SECRET_KEY` | 步骤 2 的 AccessKey Secret | 加密存储，看不到值 |

13. **保存**（会触发函数重新部署）

### 拿访问 URL

14. 函数详情页 → 顶部 **触发器管理** tab
15. 找到 HTTP 触发器，复制 **公网访问地址**，类似：
    ```
    https://kids-hero-sync.<account_id>.cn-shenzhen.fcapp.run
    ```
    或：
    ```
    https://kids-hero-sync-<random>.cn-shenzhen.fcapp.run
    ```

**把这个 URL 发给我**（去掉末尾的 `/`，如果有的话）。我用它替换 `app.js` 里的 `SYNC_URL`，然后发布 v27。

---

## 步骤 4：本地测试 FC 是否工作（可选但推荐）

在你电脑上（不需要 VPN，因为 FC 国内可达）：

```bash
# 替换成你的实际 URL
URL="https://kids-hero-sync.xxx.cn-shenzhen.fcapp.run"

# 应该返回 NOT_FOUND（说明端点工作 + OSS 连接正常）
curl -X POST "$URL/auth/hint" \
  -H "X-Auth-Token: hero2026safe" \
  -H "Content-Type: application/json" \
  -d '{"username":"nobody"}'
```

**期望响应**：
```json
{"ok":false,"error":"NOT_FOUND","message":"用户不存在"}
```

**如果返回 403 FORBIDDEN**：环境变量 `AUTH_TOKEN` 没配对
**如果返回 500 OSS_INIT**：OSS_BUCKET / OSS_REGION / AccessKey 配置错了
**如果根本连不上**：HTTP 触发器没启用，或区域选错了

---

## 步骤 5：通知我，我发布 v27

部署确认 OK 后告诉我新的 URL。我做：

1. 改 `app.js` 的 `SYNC_URL` 为你的 fcapp.run 地址
2. 改 `_forceLogout()` 保留本地游戏数据（让"哥哥"能在 Aliyun 上用同样账号"重新注册"上传数据）
3. bump v27、push

---

## 步骤 6：哥哥 / 妹妹 / 外甥 各自注册

部署后：

1. **哥哥**（已在 Cloudflare 上有数据）：
   - 打开 PWA → 自动登录到 Aliyun 失败（Aliyun 没他记录）→ 跳到登录页 → 选"注册"tab
   - 用**完全相同的用户名/密码/提示问题/答案**填表
   - 勾选"上传现有数据"（默认勾选）→ 注册
   - 现有进度（积分、宠物、怪兽墙）原封不动迁移到 Aliyun

2. **妹妹和外甥**（全新用户）：
   - 各自打开 → 注册新账号
   - 外甥那台"屏蔽 workers.dev"的网络现在可以正常注册了

---

## 后续维护

- **关掉旧的 Cloudflare worker**：迁完数据确认无误后，可以在 Cloudflare 控制台暂停或删除 worker（或保留也行，反正没人访问）
- **OSS 数据备份**：阿里云 OSS 默认 99.9999999999% 持久性，不用额外备份。你担心的话可以定期下载 `users/` 目录的 JSON 文件
- **成本监控**：FC 控制台 → 函数 → 监控指标。家庭使用基本永远在免费额度内

## 问题排查

| 现象 | 排查 |
|---|---|
| 客户端"NETWORK_FAIL" | FC URL 错了 / FC 函数没部署 / 触发器未启用 |
| 客户端"FORBIDDEN" | AUTH_TOKEN 跟客户端的 SYNC_TOKEN 不一致 |
| 客户端"OSS_INIT" / "INTERNAL" | RAM 用户没 OSS 权限 / Bucket 名/区域写错 |
| 客户端可以注册但保存数据失败 | RAM 用户只有读权限没写权限，去检查 |
