import type { Theme } from '../data'

interface Props {
  icon: Theme['icon']
  color: string
}

/** 经典日常主题的小图标，全部为内联 SVG。 */
export function ThemeIcon({ icon, color }: Props) {
  const common = { stroke: color, strokeWidth: 3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }

  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#fff8fa" />
      {icon === 'puddle' && (
        <g>
          <ellipse cx="32" cy="47" rx="22" ry="7" fill={color} opacity="0.35" />
          <path d="M12 47 Q32 40 52 47" {...common} />
          <path d="M22 28 l-4 10 h9 l-4 -10 Z" fill={color} opacity="0.75" />
          <path d="M42 24 l-4 10 h9 l-4 -10 Z" fill={color} opacity="0.75" />
          <circle cx="32" cy="20" r="3" fill={color} />
        </g>
      )}
      {icon === 'cake' && (
        <g>
          <path d="M14 44 h36 v8 a3 3 0 0 1 -3 3 H17 a3 3 0 0 1 -3 -3 Z" fill={color} opacity="0.3" />
          <rect x="14" y="36" width="36" height="16" rx="3" {...common} />
          <path d="M14 40 q6 6 12 0 q6 6 12 0 q6 6 12 0" {...common} />
          <path d="M24 36 v-9 M32 36 v-11 M40 36 v-9" {...common} />
          <g fill={color}>
            <circle cx="24" cy="24" r="2.6" />
            <circle cx="32" cy="22" r="2.6" />
            <circle cx="40" cy="24" r="2.6" />
          </g>
        </g>
      )}
      {icon === 'playground' && (
        <g>
          <path d="M12 50 h40" {...common} />
          <path d="M18 46 L34 18 L42 46" {...common} />
          <path d="M34 18 L44 22" {...common} />
          <path d="M24 38 h16" {...common} />
          <circle cx="48" cy="18" r="7" fill={color} opacity="0.35" />
          <path d="M48 25 v8" {...common} />
        </g>
      )}
      {icon === 'grandparents' && (
        <g>
          <path d="M12 30 L32 14 L52 30" {...common} />
          <path d="M17 28 v22 h30 V28" {...common} />
          <rect x="27" y="36" width="10" height="14" rx="1" {...common} />
          <circle cx="32" cy="12" r="3" fill={color} />
        </g>
      )}
      {icon === 'dino' && (
        <g>
          <path d="M12 44 C8 44 8 34 14 32 C14 22 26 18 32 26 L44 26 L44 34 L38 34 C40 42 30 50 22 44 Z" fill={color} opacity="0.28" />
          <path d="M12 44 C8 44 8 34 14 32 C14 22 26 18 32 26 L44 26 L44 34 L38 34 C40 42 30 50 22 44 Z" {...common} />
          <circle cx="36" cy="29" r="2" fill={color} />
          <path d="M18 44 v6 M32 44 v6" {...common} />
        </g>
      )}
      {icon === 'bike' && (
        <g>
          <circle cx="17" cy="43" r="9" {...common} />
          <circle cx="47" cy="43" r="9" {...common} />
          <path d="M17 43 L28 26 L38 43 Z" {...common} />
          <path d="M28 26 h9 M38 43 l5 -17 h6" {...common} />
          <circle cx="32" cy="19" r="4" fill={color} opacity="0.35" />
        </g>
      )}
    </svg>
  )
}
