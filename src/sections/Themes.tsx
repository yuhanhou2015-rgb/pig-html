import { ThemeIcon } from '../components/ThemeIcon'
import { themes } from '../data'

export function Themes() {
  return (
    <section className="section" id="themes">
      <header className="section-head">
        <span className="section-index">03</span>
        <div>
          <h2>经典日常主题</h2>
          <p className="section-sub">没有大冒险，故事都发生在生活里</p>
        </div>
      </header>

      <div className="theme-grid">
        {themes.map((theme) => (
          <article className="theme-card" key={theme.id}>
            <div className="theme-icon" style={{ backgroundColor: `${theme.color}18` }}>
              <ThemeIcon icon={theme.icon} color={theme.color} />
            </div>
            <div className="theme-text">
              <h3>{theme.title}</h3>
              <span className="theme-en">{theme.en}</span>
              <p>{theme.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
