import { HeroPig } from '../components/HeroPig'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Peppa Pig · 作品介绍</p>
        <h1>
          小猪<span>佩奇</span>
        </h1>
        <p className="hero-lede">
          一只爱跳泥坑的小猪，和她的家人、朋友们，
          把平凡的日常过成了全世界孩子都爱看的小故事。
        </p>
        <ul className="hero-tags" aria-label="作品速览">
          <li>英国学龄前动画</li>
          <li>2004 年首播</li>
          <li>单集约 5 分钟</li>
          <li>180+ 国家与地区</li>
        </ul>
        <a className="hero-cta" href="#profile">
          先看看作品档案
          <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-art">
        <HeroPig />
      </div>
    </section>
  )
}
