import type { Accessory, AvatarKind } from '../data'

interface Props {
  kind: AvatarKind
  tone: string
  outfit: string
  accessory: Accessory
  label: string
  className?: string
}

/** 全部用内联 SVG 绘制的风格化角色头像，不依赖任何外链图片。 */
export function CharacterAvatar({ kind, tone, outfit, accessory, label, className }: Props) {
  const isRabbit = kind === 'rabbit'
  const isSheep = kind === 'sheep'
  const earFill = kind === 'pig' ? tone : '#f6e6d5'

  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      role="img"
      aria-label={`${label}的风格化头像`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="80" cy="80" r="78" fill="#fff1f4" />
      <circle cx="80" cy="80" r="78" fill="none" stroke="#f6d9e1" strokeWidth="2" />

      {/* 身体与衣服 */}
      <path d="M42 156 C42 124 58 112 80 112 C102 112 118 124 118 156 Z" fill={outfit} />
      <path d="M42 156 C42 124 58 112 80 112 C102 112 118 124 118 156" fill="none" stroke="#00000018" strokeWidth="2" />

      {/* 耳朵：兔耳长、羊耳圆、猪耳三角 */}
      {isRabbit ? (
        <g>
          <ellipse cx="63" cy="27" rx="9" ry="27" transform="rotate(-12 63 27)" fill={tone} stroke="#8a6b5d" strokeWidth="1.5" />
          <ellipse cx="97" cy="27" rx="9" ry="27" transform="rotate(12 97 27)" fill={tone} stroke="#8a6b5d" strokeWidth="1.5" />
          <ellipse cx="63" cy="27" rx="4" ry="18" transform="rotate(-12 63 27)" fill="#f7c1cf" />
          <ellipse cx="97" cy="27" rx="4" ry="18" transform="rotate(12 97 27)" fill="#f7c1cf" />
        </g>
      ) : isSheep ? (
        <g fill={earFill} stroke="#d9c6b6" strokeWidth="1.5">
          <ellipse cx="46" cy="56" rx="12" ry="9" transform="rotate(-25 46 56)" />
          <ellipse cx="114" cy="56" rx="12" ry="9" transform="rotate(25 114 56)" />
        </g>
      ) : (
        <g fill={tone} stroke="#d5809a" strokeWidth="1.5">
          <path d="M56 46 C50 28 54 20 62 26 C68 31 70 39 70 45 Z" />
          <path d="M104 46 C110 28 106 20 98 26 C92 31 90 39 90 45 Z" />
        </g>
      )}

      {/* 头顶羊毛卷 */}
      {isSheep && (
        <g fill="#fffaf3" stroke="#e6d8cb" strokeWidth="1.2">
          <circle cx="62" cy="40" r="12" />
          <circle cx="80" cy="34" r="14" />
          <circle cx="98" cy="40" r="12" />
        </g>
      )}

      {/* 脸 */}
      <ellipse cx="80" cy="74" rx="38" ry="35" fill={tone} stroke={kind === 'pig' ? '#d5809a' : '#ddc9b8'} strokeWidth="1.8" />

      {/* 眼睛 */}
      <g>
        <ellipse cx="67" cy="62" rx="9" ry="10" fill="#ffffff" />
        <ellipse cx="93" cy="62" rx="9" ry="10" fill="#ffffff" />
        <circle cx="69" cy="63" r="3.4" fill="#3b2b30" />
        <circle cx="95" cy="63" r="3.4" fill="#3b2b30" />
        <circle cx="70" cy="61.5" r="1.1" fill="#ffffff" />
        <circle cx="96" cy="61.5" r="1.1" fill="#ffffff" />
      </g>

      {/* 腮红 */}
      <ellipse cx="54" cy="82" rx="8" ry="5" fill="#ef7694" opacity="0.55" />
      <ellipse cx="106" cy="82" rx="8" ry="5" fill="#ef7694" opacity="0.55" />

      {/* 鼻子 / 口鼻 */}
      {kind === 'pig' ? (
        <g>
          <ellipse cx="80" cy="88" rx="15" ry="11" fill="#ef8ca8" stroke="#d5809a" strokeWidth="1.4" />
          <ellipse cx="75" cy="88" rx="2.4" ry="3.4" fill="#b8627c" />
          <ellipse cx="85" cy="88" rx="2.4" ry="3.4" fill="#b8627c" />
        </g>
      ) : (
        <g>
          <ellipse cx="80" cy="88" rx="10" ry="7" fill="#fbe4d6" />
          <path d="M80 91 Q74 98 69 93 M80 91 Q86 98 91 93" fill="none" stroke="#a97c6c" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {/* 微笑 */}
      <path d="M69 100 Q80 109 91 100" fill="none" stroke="#a4586d" strokeWidth="2.4" strokeLinecap="round" />

      {/* 配饰 */}
      {accessory === 'glasses' && (
        <g fill="none" stroke="#4b5b6b" strokeWidth="2.4">
          <circle cx="67" cy="62" r="12" />
          <circle cx="93" cy="62" r="12" />
          <path d="M79 60 L85 60 M55 59 L46 56 M105 59 L114 56" />
        </g>
      )}
      {accessory === 'bow' && (
        <g transform="translate(108 38)">
          <path d="M0 0 C-14 -10 -14 10 0 4 C14 10 14 -10 0 0 Z" fill="#e8443f" />
          <circle cx="0" cy="2" r="3.5" fill="#c9342f" />
        </g>
      )}
      {accessory === 'flower' && (
        <g transform="translate(110 38)">
          <g fill="#f3a7bf">
            <circle cx="0" cy="-6" r="5" />
            <circle cx="6" cy="0" r="5" />
            <circle cx="0" cy="6" r="5" />
            <circle cx="-6" cy="0" r="5" />
          </g>
          <circle cx="0" cy="0" r="4" fill="#f6d06a" />
        </g>
      )}
      {accessory === 'dino' && (
        <g transform="translate(112 118) scale(0.9)">
          <path d="M2 20 C-6 20 -8 8 0 6 C2 -4 14 -6 18 2 L26 2 L26 10 L20 10 C22 16 14 22 8 20 Z" fill="#7bbd86" stroke="#4f9661" strokeWidth="1.5" />
          <circle cx="17" cy="6" r="1.8" fill="#2f5c3a" />
        </g>
      )}
    </svg>
  )
}
