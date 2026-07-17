# 实验室网站模板

仿照 [PeAR WPI](https://pear.wpi.edu/) 的结构搭建（原模板来自 Colorlib，免费可商用，保留页脚署名即可）。

## 本地预览

```bash
cd 网站
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

注意：必须通过本地服务器打开，直接双击 index.html 部分 JS 可能不生效。

## 要改哪些地方

### 1. 文字内容 — `index.html`
搜索 `★改这里` 注释，共 7 处：
- `<title>` 标签页标题
- 导航栏 logo + 实验室名称
- 导航菜单项（其他页面如 research.html 还没建，链接会 404，需要的自己加）
- About Us 简介
- 邮箱 / GitHub / 地图三个图标链接（两处）
- 赞助商 logo
- 页脚版权信息

### 2. 轮播图 — `js/carousel-data.js`
每张幻灯片一个对象（图片、标题、副标题、链接），`active: false` 可隐藏。
图片放 `img/banner/`，建议 1920×700 左右、所有图同一尺寸。

### 3. 成员列表 — `js/team-data.js`
每位成员一个对象，头像放 `img/team/`（正方形最好，非正方形会自动裁成圆形）。
`links` 里不需要的社交链接直接删掉键即可。

### 4. 图片替换
- `img/fav.png` — 浏览器标签小图标
- `img/logos/logo-white.svg`（深色导航栏用）、`logo-black.svg`（白色页脚用）
- `img/banner/`、`img/team/`、`img/sponsors/` — 目前都是灰色占位图，直接换成同名文件或改代码里的路径

### 5. 主题色
模板主色是 PeAR 的酒红色 `rgba(172, 43, 55, ...)`，出现在 `index.html` 的两条 `<hr>` 和 `css/main.css` 里（搜索 `ac2b37` / `172, 43, 55`）。
