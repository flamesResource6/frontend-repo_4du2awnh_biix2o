import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Bundles() {
  const [bundles, setBundles] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch(`${API_URL}/api/bundles`)
        const d = await r.json()
        setBundles(d)
      } catch (e) {
        setBundles([])
      }
    }
    load()
  }, [])

  return (
    <section className="py-16 retro-bg">
      <div className="absolute inset-0 pointer-events-none opacity-30 retro-grid" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-200">Special Bundles</h2>
            <p className="mt-2 text-teal-200/80 max-w-2xl">High-value packs with boosted chances and arcade-grade savings.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-teal-300/70">
            <span className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-400/30 text-purple-200">Arcade Deal</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-200">Best Value</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bundles.map((b) => (
            <div key={b.name} className="relative rounded-xl p-5 bg-[#0f0d22] border border-teal-500/20 pixel-border overflow-hidden">
              {b.badge && (
                <div className="absolute -top-2 right-4 px-2 py-0.5 rounded bg-pink-500 text-white text-xs font-black shadow">{b.badge}</div>
              )}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-600/20 to-teal-400/20" />

              <h3 className="relative text-lg font-black text-white tracking-wide">{b.name}</h3>
              <p className="relative mt-1 text-sm text-teal-200/80 min-h-[40px]">{b.description}</p>
              <div className="relative mt-4 flex items-center justify-between">
                <span className="text-pink-300 font-extrabold text-xl">{b.price_eth} ETH</span>
                <span className="text-xs px-2 py-0.5 rounded bg-teal-500/20 text-teal-100 border border-teal-300/20">{b.spins} spins</span>
              </div>
              {b.bonus_chance > 0 && (
                <div className="relative mt-2 text-[11px] text-emerald-200 bg-emerald-500/10 border border-emerald-400/20 inline-block px-2 py-0.5 rounded">+{Math.round(b.bonus_chance*100)}% epic/legendary chance</div>
              )}
              <button className="relative mt-5 w-full h-11 rounded bg-gradient-to-b from-teal-400 to-emerald-500 text-[#0b0a17] font-extrabold pixel-button uppercase tracking-wide">
                Buy Bundle
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bundles
