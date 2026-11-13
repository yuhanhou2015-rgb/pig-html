# 小猪佩奇 · 作品与角色介绍

一个用 Vite + React + TypeScript 开发的纯静态介绍页，作为资料库工程化页面（git-project）的前端源码。

## 本地开发

```bash
npm ci            # 或 npm install
npm run dev       # 本地预览
npm run build:static
```

`build:static` 产出 `dist/`，可直接作为资料库页面的构建产物上传。

## 产物约束

- `vite.config.ts` 设置 `base: './'`，产物内所有资源均为相对路径，无根相对引用；
- 关闭 sourcemap，产物不含 `.tsx` 源码；
- 不使用 history router、不依赖任何服务端运行时；
- 所有插画均为内联 SVG / CSS 绘制，无外链图片、无外链字体、无第三方 CDN。

## 页面模块

1. 首屏 Hero
2. 作品档案
3. 角色图鉴
4. 经典日常主题
5. 页脚说明

## 说明

本页为非官方的介绍性示例，与作品版权方无关。文字资料整理自维基百科、百度百科等公开资料；插画为风格化自绘。
