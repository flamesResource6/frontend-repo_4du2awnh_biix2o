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
    <section className="py-16 bg-gradient-to-b from-[#0b0a17] to-[#121026]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-200">Special Bundles</h2>
        <p className="mt-2 text-teal-200/80 max-w-2xl">Get more spins for less. Some bundles include boosted chances for rarer foxes.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bundles.map((b) => (
            <div key={b.name} className="relative rounded-xl p-5 bg-[#141228] border border-teal-500/20 shadow-[0_10px_30px_rgba(20,18,40,0.5)]">
              {b.badge && (
                <div className="absolute -top-2 right-4 px-2 py-0.5 rounded bg-pink-500 text-white text-xs font-bold shadow">{b.badge}</div>
              )}
              <h3 className="text-lg font-bold text-white">{b.name}</h3>
              <p className="mt-1 text-sm text-teal-200/80 min-h-[40px]">{b.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-pink-300 font-extrabold">{b.price_eth} ETH</span>
                <span className="text-xs text-teal-300/80">{b.spins} spins</span>
              </div>
              {b.bonus_chance > 0 && (
                <div className="mt-2 text-xs text-teal-300/80">+{Math.round(b.bonus_chance*100)}% epic/legendary chance</div>
              )}
              <button className="mt-5 w-full rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-100 border border-teal-300/20 py-2 font-semibold transition">Buy Bundle</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bundles
