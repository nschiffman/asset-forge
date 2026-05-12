const shards = [
  ['Output', 'Ebook', 'left-[3%] top-[15%]', '-42px', '-36px', '-18deg'],
  ['Output', 'Lead Magnet', 'right-[-1%] top-[18%]', '46px', '-32px', '14deg'],
  ['Output', 'Email Drip', 'left-[-2%] bottom-[24%]', '-54px', '28px', '18deg'],
  ['Output', 'Blog Series', 'right-[4%] bottom-[18%]', '58px', '34px', '-16deg'],
  ['Output', 'White Paper', 'left-[38%] top-[-1%]', '0px', '-58px', '10deg'],
  ['Output', 'FAQ Page', 'left-[36%] bottom-[-1%]', '0px', '58px', '-10deg'],
  ['Output', 'Course Notes', 'left-[10%] top-[45%]', '-76px', '0px', '-8deg'],
  ['Output', 'Sales Kit', 'right-[10%] top-[47%]', '76px', '0px', '8deg'],
]

export function HeroAnimation() {
  return (
    <div className="hero-shell relative grid h-[580px] place-items-center overflow-visible" aria-hidden="true">
      <div className="absolute inset-[18%] rounded-full bg-[conic-gradient(from_90deg,rgba(114,241,255,0),rgba(114,241,255,.35),rgba(255,114,200,.3),rgba(125,255,191,.2),rgba(114,241,255,0))] blur-3xl opacity-70" />

      <div className="orbital-shell relative h-[520px] w-[520px] max-w-[86vw]">
        <div className="ring inset-[8%]" />
        <div className="ring inset-[17%] animate-[spin_13s_linear_infinite_reverse] border-cyan/25" />
        <div className="ring inset-0 animate-[spin_24s_linear_infinite] border-pink/20" />

        <div className="absolute inset-[29%] grid place-items-center rounded-[34px] border border-white/25 bg-white/10 shadow-glow backdrop-blur-xl rotate-45 translate-z-20">
          <span className="-rotate-45 text-center text-2xl font-black leading-none tracking-[-0.08em]">
            Webinar Knowledge Core
          </span>
        </div>

        {shards.map(([label, title, position, tx, ty, rz]) => (
          <div
            key={title}
            className={`shard absolute ${position} w-28 min-h-16 rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl`}
            style={{ '--tx': tx, '--ty': ty, '--rz': rz } as React.CSSProperties}
          >
            <small className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</small>
            <strong className="block text-sm font-black leading-tight tracking-[-0.04em]">{title}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
