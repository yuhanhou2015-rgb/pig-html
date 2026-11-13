export function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-mark" aria-hidden="true" />
          <div>
            <strong>小猪佩奇 · 作品与角色介绍</strong>
            <p>一份关于日常、家人和跳泥坑的小小档案</p>
          </div>
        </div>
        <div className="footer-notes">
          <p>本页为非官方的介绍性示例，与作品版权方无关；角色插画为风格化自绘。</p>
          <p>文字资料整理自维基百科、百度百科等公开资料，仅作知识性介绍。</p>
          <p>页面由 Vite + React + TypeScript 构建，纯静态前端，所有插画均为内联 SVG / CSS 绘制。</p>
        </div>
      </div>
      <a className="back-top" href="#top">回到顶部 ↑</a>
    </footer>
  )
}
