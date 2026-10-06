@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 语言要求

- 所有对话使用中文。
- 所有文档使用中文。
- 所有代码注释使用中文。

## 执行要求

- 在生成说明、总结、计划、提交说明时，统一使用中文。
- 在新增或修改 Markdown 文档时，统一使用中文。
- 在新增或修改代码注释时，统一使用中文。

## 项目概述

ZHC 个人品牌网站 — 展示游戏广告设计 / AI 创意设计作品集的单页网站。使用 Next.js 16 + React 19 + Tailwind CSS v4 + Framer Motion 构建，静态导出部署。

## 常用命令

```bash
npm run dev      # 开发服务器（localhost:3000）
npm run build    # 生产构建（静态导出到 out/）
npm run start    # 启动生产服务器
```

## 核心架构

### 技术栈

- **Next.js 16.2.6**（App Router）— 注意：此版本有破坏性变更，编写代码前查阅 `node_modules/next/dist/docs/`
- **React 19.2.4** — 所有组件默认是 Server Components，只有带 `"use client"` 的才是客户端组件
- **Tailwind CSS v4** — 使用 `@tailwindcss/postcss` 插件，自定义主题和 CSS utility 定义在 `src/app/globals.css`
- **Framer Motion 12** — 所有入场动画、布局动画、模态框过渡
- **TypeScript 5** — strict 模式，路径别名 `@/*` → `./src/*`

### 构建输出

`next.config.ts` 配置了 `output: "export"`（静态导出），这意味着：
- 不能使用 Next.js 服务端功能（API routes、server components、middleware 等）
- 图片优化已禁用（`images.unoptimized: true`）
- 构建产物在 `out/` 目录

### 数据驱动架构

所有网站内容集中在 **`src/data/content.ts`**，通过 `SiteConfig` 类型定义。修改网站文案、导航、作品列表、技能标签等只需编辑这个文件，无需修改组件。类型定义在 `src/types/index.ts`。

### 组件层级

```
src/app/layout.tsx          # 根布局：字体加载（Noto Sans SC）、metadata、viewport
src/app/page.tsx            # 主页面：组装所有 section + 特效层
├── effects/LightOrbs       # 背景浮动光球（纯装饰）
├── effects/CursorGlow      # 鼠标跟随光晕
├── layout/Navbar           # 固定导航栏（滚动时毛玻璃效果，移动端有侧滑菜单）
│   └── layout/MobileMenu   # 移动端全屏菜单（Framer Motion 动画）
├── sections/Hero           # 首屏：姓名、头衔、标语 + 向下滚动指示器
├── sections/About          # 关于：个人介绍段落
├── sections/Skills         # 技能：分类标签展示
├── sections/Portfolio      # 作品：按分类分组，视频卡片网格 + 展开/收起
│   ├── ui/VideoCard        #   单个视频缩略图卡片（hover 播放预览）
│   ├── ui/VideoModal       #   视频弹窗播放器（ESC 关闭）
│   └── ui/SectionHeading   #   章节标题组件
├── sections/Contact        # 联系：邮箱 + 社交媒体链接
└── layout/Footer           # 页脚
```

### 自定义 Hooks

| Hook | 用途 |
|------|------|
| `useScrollSpy(sectionIds)` | 检测当前视口内哪个 section，返回 activeSection id |
| `useReducedMotion()` | 检测用户系统偏好，动画组件据此跳过动画 |
| `useMousePosition()` | 追踪鼠标位置 |
| `useMediaQuery(query)` | 响应式断点检测 |

### 自定义 CSS（`globals.css`）

网站采用深色主题（`--color-background: #06060e`），定义了 3 层 glass utility：
- `glass` — 半透明 + blur 12px
- `glass-strong` — 更暗 + blur 24px
- `glass-heavy` — 最深 + blur 40px

还有 `gradient-border`（渐变边框遮罩）和 `text-gradient`（渐变文字）。

### 作品集视频

视频文件存放在 `public/videos/`，按数字前缀的类别文件夹组织：
```
public/videos/
├── 1Puzzle/        # 竖版
├── 2Merge/         # 竖版
├── 3数独/          # 竖版
├── 4割草/          # 竖版
├── 5模拟经营/      # 竖版
├── 6三国SLG/       # 横版（保持大卡布局）
├── 二合脚本演示视频/
├── 传奇脚本演示视频/
└── 头图视频/
```

Portfolio 布局：竖版分类一行两个类型、每类最多 3 个 9:16 竖版卡片（无文字）；`portfolioLandscapeCategories` 中列出的分类（三国SLG）用横版大卡（带标题/描述）。作品顺序由 `content.ts` 中 `portfolioItems` 的排列顺序决定，新增分类或换视频只需编辑该数组。

## 部署

> ⚠️ **服务器已到期（2026-09 起）**：zichuanhai.top 服务器已到期，后续更新只做本地修改，不再部署到服务器。等用户购买新服务器后再恢复部署。

### 服务器信息

- **生产地址**：http://121.40.220.150/ / https://zichuanhai.top/
- **服务器访问**：`ssh root@121.40.220.150`
- **Web 根目录**：`/var/www/zhc-site/`

### 部署流程

```bash
# 1. 构建
npm run build

# 2. 上传静态文件
cd out
scp index.html 404.html _not-found.html favicon.ico root@121.40.220.150:/var/www/zhc-site/
scp -r _next root@121.40.220.150:/var/www/zhc-site/

# 3. 如果视频有新增/变更，上传 videos 目录
scp -r videos root@121.40.220.150:/var/www/zhc-site/

# 4. 如果有旧类别被移除，需手动清理服务器旧目录
ssh root@121.40.220.150 "rm -rf /var/www/zhc-site/videos/旧目录名"
```

> scp 上传是合并模式，不会自动删除服务器旧文件。如果重构了视频目录结构（重命名/删除类别），需要手动 SSH 进去清理旧目录。

### Git 远程

- 远程地址：`git@github.com:987396361/personal-website.git`
- 分支：`master`
- 注意：视频文件较大（~80MB+），避免添加更多大文件导致 GitHub 拒绝推送。除非用户明确要求，否则不要主动 `git push`。
