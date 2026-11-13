import { awards, facts } from '../data'

export function Profile() {
  return (
    <section className="section" id="profile">
      <header className="section-head">
        <span className="section-index">01</span>
        <div>
          <h2>作品档案</h2>
          <p className="section-sub">一部从泥坑开始的英国学前动画</p>
        </div>
      </header>

      <div className="fact-grid">
        {facts.map((fact) => (
          <article className="fact-card" key={fact.label}>
            <span className="fact-label">{fact.label}</span>
            <strong className="fact-value">{fact.value}</strong>
            {fact.note && <span className="fact-note">{fact.note}</span>}
          </article>
        ))}
      </div>

      <div className="awards">
        <span className="awards-title">主要荣誉</span>
        <ul>
          {awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
