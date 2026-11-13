/** 首屏大插画：风格化的侧脸小猪 + 泥坑，全部内联 SVG。 */
export function HeroPig() {
  return (
    <svg
      className="hero-pig"
      viewBox="0 0 360 320"
      role="img"
      aria-label="一只穿着红裙子、站在泥坑边的小猪插画"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 背景装饰 */}
      <circle cx="180" cy="150" r="140" fill="#ffe4ec" />
      <circle cx="180" cy="150" r="140" fill="none" stroke="#f9cdda" strokeWidth="2" strokeDasharray="7 9" />
      <g fill="#ffffff" opacity="0.85">
        <circle cx="52" cy="66" r="16" />
        <circle cx="70" cy="66" r="22" />
        <circle cx="92" cy="66" r="15" />
        <circle cx="286" cy="52" r="13" />
        <circle cx="304" cy="52" r="19" />
        <circle cx="322" cy="52" r="12" />
      </g>
      <g fill="#f7bfd0">
        <circle cx="44" cy="196" r="5" />
        <circle cx="322" cy="178" r="6" />
        <circle cx="300" cy="238" r="4" />
      </g>

      {/* 泥坑 */}
      <ellipse cx="184" cy="272" rx="112" ry="24" fill="#c98a58" opacity="0.28" />
      <ellipse cx="184" cy="276" rx="96" ry="17" fill="#c98a58" opacity="0.7" />
      <ellipse cx="184" cy="276" rx="96" ry="17" fill="none" stroke="#a76c40" strokeWidth="2" opacity="0.5" />
      <g fill="#b47a4a" opacity="0.75">
        <circle cx="104" cy="252" r="4" />
        <circle cx="264" cy="248" r="5" />
        <circle cx="286" cy="262" r="3.5" />
        <circle cx="88" cy="268" r="3" />
      </g>

      {/* 雨靴与腿 */}
      <g stroke="#4a3b3f" strokeWidth="4" strokeLinecap="round">
        <path d="M158 232 L156 258" />
        <path d="M210 232 L212 258" />
      </g>
      <g fill="#e8443f" stroke="#bf3330" strokeWidth="2">
        <path d="M146 254 h22 v14 q0 8 -11 8 h-11 q-8 0 -8 -8 v-6 q0 -8 8 -8 Z" />
        <path d="M202 254 h22 q8 0 8 8 v6 q0 8 -8 8 h-11 q-11 0 -11 -8 Z" />
      </g>

      {/* 身体 / 红裙子 */}
      <path d="M150 172 C140 196 136 224 134 240 L230 240 C228 220 224 194 214 172 Z" fill="#e8443f" stroke="#c93a36" strokeWidth="2" />
      <path d="M150 172 Q182 186 214 172" fill="none" stroke="#f47c78" strokeWidth="3" strokeLinecap="round" />

      {/* 手臂 */}
      <path d="M150 184 L120 206 L112 198" fill="none" stroke="#f7a8bf" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M214 184 L242 202" fill="none" stroke="#f7a8bf" strokeWidth="7" strokeLinecap="round" />
      <circle cx="110" cy="196" r="6" fill="#f7a8bf" />
      <circle cx="244" cy="202" r="6" fill="#f7a8bf" />

      {/* 卷尾巴 */}
      <path d="M230 214 C248 210 252 226 242 230 C234 233 230 226 236 222" fill="none" stroke="#ef8ca8" strokeWidth="4" strokeLinecap="round" />

      {/* 耳朵 */}
      <g fill="#f7a8bf" stroke="#d5809a" strokeWidth="2">
        <path d="M168 72 C160 46 166 36 176 46 C184 54 186 64 186 72 Z" />
        <path d="M204 70 C206 44 214 38 220 50 C225 59 222 68 218 72 Z" />
      </g>

      {/* 头 */}
      <circle cx="190" cy="132" r="76" fill="#f7a8bf" stroke="#d5809a" strokeWidth="2.5" />

      {/* 朝左突出的鼻子 */}
      <ellipse cx="118" cy="118" rx="30" ry="23" fill="#f49ab4" stroke="#d5809a" strokeWidth="2" />
      <ellipse cx="110" cy="118" rx="4" ry="6" fill="#bd6c86" />
      <ellipse cx="126" cy="118" rx="4" ry="6" fill="#bd6c86" />

      {/* 眼睛 */}
      <g>
        <ellipse cx="166" cy="100" rx="13" ry="14" fill="#ffffff" />
        <ellipse cx="202" cy="100" rx="13" ry="14" fill="#ffffff" />
        <circle cx="169" cy="102" r="5" fill="#3b2b30" />
        <circle cx="205" cy="102" r="5" fill="#3b2b30" />
        <circle cx="171" cy="99" r="1.6" fill="#ffffff" />
        <circle cx="207" cy="99" r="1.6" fill="#ffffff" />
      </g>

      {/* 腮红与微笑 */}
      <ellipse cx="150" cy="142" rx="15" ry="9" fill="#ef7694" opacity="0.55" />
      <path d="M156 158 Q178 176 200 154" fill="none" stroke="#a4586d" strokeWidth="3.5" strokeLinecap="round" />

      {/* 水花 */}
      <g fill="#ffffff" opacity="0.9">
        <path d="M96 268 C90 258 94 250 100 248 C98 256 104 260 106 266 Z" />
        <path d="M272 268 C278 258 274 250 268 248 C270 256 264 260 262 266 Z" />
      </g>
    </svg>
  )
}
