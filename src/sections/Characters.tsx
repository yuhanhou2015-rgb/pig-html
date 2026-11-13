import { CharacterAvatar } from '../components/CharacterAvatar'
import { characters } from '../data'

export function Characters() {
  return (
    <section className="section section-tinted" id="characters">
      <header className="section-head">
        <span className="section-index">02</span>
        <div>
          <h2>角色图鉴</h2>
          <p className="section-sub">佩奇一家，和总是同时出现的朋友们</p>
        </div>
      </header>

      <div className="character-grid">
        {characters.map((character) => (
          <article className="character-card" key={character.id}>
            <div className="character-avatar">
              <CharacterAvatar
                kind={character.kind}
                tone={character.tone}
                outfit={character.outfit}
                accessory={character.accessory}
                label={character.name}
              />
            </div>
            <span className="character-tag">{character.tag}</span>
            <h3>{character.name}</h3>
            <span className="character-en">{character.en}</span>
            <span className="character-role">{character.role}</span>
            <p>{character.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
