import { Characters } from './sections/Characters'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Profile } from './sections/Profile'
import { Themes } from './sections/Themes'

const navItems = [
  { href: '#profile', label: '作品档案' },
  { href: '#characters', label: '角色图鉴' },
  { href: '#themes', label: '经典日常' },
  { href: '#about', label: '关于本页' },
]

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top">
            <span className="brand-dot" aria-hidden="true" />
            <span>小猪佩奇</span>
            <small>Peppa Pig</small>
          </a>
          <nav aria-label="页面导航">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Profile />
        <Characters />
        <Themes />
      </main>

      <Footer />
    </>
  )
}
