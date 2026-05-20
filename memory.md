# STS-SOLUTION 外贸独立站项目记忆

## 版本号：V1.0 | 压缩时间：2026-05-20

---

# 项目信息

- **项目名称**: 南京瑟路绅新型材料有限公司（STS-SOLUTION）外贸独立站
- **技术栈**: Next.js 14 (App Router, 静态导出) + TypeScript + Tailwind CSS + Framer Motion
- **核心需求**: B2B外贸独立站，面向一带一路沿线国家（中东、东南亚、俄罗斯、非洲、南亚），重点突出工厂生产能力
- **开发目标**: 建立专业B2B网站，集成WhatsApp询盘+邮件表单，嵌入4分钟工厂宣传视频
- **启动时间**: 2026-05-20
- **项目路径**: `d:\独立站\防火门\建站材料\selushen-website`
- **GitHub仓库**: https://github.com/Seiano/selushen-website

# 解决方案

- 静态导出方案（`output: 'export'`），部署CDN优化非洲/南亚慢网速体验
- 视频使用HTML5 `<video>` 标签本地播放（239MB MP4已复制到public/videos/）
- 数字滚动动效使用全局Set记录动画状态，防止页面切换后重置为0
- Logo使用SVG格式（深蓝+金色），有深色/浅色两个版本
- 询盘表单暂为前端演示，需接入Formspree/Resend实现邮件发送

# 关键决策

- 颜色方案：主色#1B3A5C深蓝，辅助色#D4A84B金色，WhatsApp#25D366
- 字体：Montserrat（标题）+ Inter（正文）
- 产品数据为静态JSON文件（src/data/products.ts），16款产品
- 公司数据为静态JSON文件（src/data/company.ts）
- .gitignore排除大视频文件（public/videos/*.mp4）
- 认证仅包含：ISO 9001/14001/45001、UL、3C（无马来西亚认证）
- ESLint规则：`@next/next/no-img-element` 设为off（静态导出不支持next/image优化）

# 进度待办

- 已完成：7个页面（首页/关于/产品/产品详情/工厂/认证/联系）
- 已完成：WhatsApp悬浮按钮+询盘表单+工厂视频嵌入
- 已完成：SEO优化（meta标签+sitemap.xml+robots.txt+JSON-LD结构化数据）
- 待办：配置询盘表单后端（Formspree/Resend）
- 待办：注册企业邮箱（当前info@sts-solution.com为占位）
- 待办：补充更多产品图片
- 待办：从公司logo.doc提取正式logo替换SVG
- 待办：域名注册+Vercel部署

# 代码片段

- AnimatedCounter修复：使用`animatedCounters`全局Set追踪已动画的计数器，组件重挂载时直接显示最终值
- VideoPlayer组件：HTML5 video + 点击播放覆盖层，工厂页和首页共用
- Header组件：滚动时切换logo版本（深色背景用logo-white.svg，浅色用logo.svg）

---

# 最近详细记忆区

## 轮次 1 | 时间：2026-05-20 | 标签：#项目初始化

**用户**: 要求查看建站材料，为南京瑟路绅新型材料有限公司建设面向一带一路国家的B2B外贸独立站
**AI**: 探索了建站材料目录，发现78+文件（图片71张+视频1个+PPTX1个+文档2个+认证2张），创建了完整规划方案
**决策**: Next.js静态站+Tailwind CSS，7页面架构，深蓝金色工业风设计

## 轮次 2 | 时间：2026-05-20 | 标签：#开发实施

**用户**: 批准规划方案，开始实施
**AI**: 完成项目初始化、设计系统搭建、布局组件、数据层、全部7个页面开发、图片资源复制、SEO优化
**结果**: 构建成功，26个静态页面生成

## 轮次 3 | 时间：2026-05-20 | 标签：#Bug修复

**用户**: 提出5个首页问题：1)Logo需保持样式和颜色 2)视频改本地播放 3)数字滚动动效bug 4)产品分类图片不显示 5)移除马来西亚认证
**AI**: 逐一修复：
1. 创建SVG logo（盾牌图标+品牌名），滚动时切换深/浅色版本
2. 将YouTube iframe改为HTML5 video本地播放，工厂页创建独立VideoPlayer组件
3. 使用全局Set（animatedCounters）追踪动画状态，组件重挂载时直接显示最终值
4. 从成品展示/五金展示目录复制3张分类图片
5. 从company.ts、certifications页面、WhyChooseUs组件、Hero区域共5处移除马来西亚认证
**结果**: 构建通过，提交推送至GitHub
