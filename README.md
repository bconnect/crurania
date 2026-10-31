# CRURANIA — 朱曦的数字花园

> 在记录中生长。

## 日常维护（只需会这三件事）

**方式一：网页后台（推荐）**
访问 `https://crurania.cn/admin` → 登录 → 新建/编辑内容 → 点发布。
自动构建部署，约 2 分钟后网站更新。

**方式二：Obsidian 本地写作（进阶）**
1. 用 Obsidian 打开本仓库的 `src/content/` 文件夹
2. 在对应板块文件夹里新建 Markdown 文件，照抄示例的头部格式
3. 保存 → 提交到 Git → 自动部署

**上传照片**：两种方式都支持。照片自动存入 `public/images/uploads/`。
原图请另外保存在自己的相册里——网站上的只是展示副本。

## 五板块结构

| 文件夹 | 板块 | 内容形式 |
|---|---|---|
| `src/content/photography/` | 摄影 | 一组照片 + 文字 |
| `src/content/reading/` | 读书笔记 | 一本书一篇，支持评分和阅读状态 |
| `src/content/travel/` | 旅游纪实 | 图文游记，带地点 |
| `src/content/timeline/` | 大事记 | 一个事件一条（年份驱动） |
| `src/content/works/` | 作品 | 工程/艺术创作 |

新增内容 = 新建一个 `.md` 文件。删除内容 = 删文件。没有数据库，没有复杂性。

## 本地预览

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 产物在 dist/
```

## 技术栈

Astro 5（静态生成）· Decap CMS（网页后台）· Markdown（内容源文件）
设计：瑞士国际主义网格 + 晨曦琥珀 `#b8621e`

## 数据主权原则

**源文件永远在仓库里。** 服务器上跑的只是 `dist/` 的静态拷贝。
任何服务商倒闭，拿仓库重新构建，十分钟满血复活。
