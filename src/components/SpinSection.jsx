import { useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function SpinSection() {
  const [wallet, setWallet] = useState('demo-wallet')
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])

  const spin = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/spin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet, count })
      })
      const data = await res.json()
      setResults(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="spin" className="relative py-14 sm:py-18 md:py-24 bg-[#0b0a17]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-100">Spin the Gacha</h2>
            <p className="mt-2 text-teal-200/80">Use tickets to spin and reveal a unique pixel fox. Rarity odds are transparent and fair.</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="block text-xs text-teal-300/70 mb-1">Wallet</label>
                <input value={wallet} onChange={e=>setWallet(e.target.value)} className="w-full bg-[#141228] border border-teal-500/20 rounded px-3 py-2 text-teal-100 placeholder:text-teal-300/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="0x..." />
              </div>
              <div>
                <label className="block text-xs text-teal-300/70 mb-1">Spins</label>
                <select value={count} onChange={e=>setCount(parseInt(e.target.value))} className="w-full bg-[#141228] border border-teal-500/20 rounded px-3 py-2 text-teal-100">
                  {[1,3,5,10].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div className="flex items-end">
                <button onClick={spin} disabled={loading} className="w-full h-10 rounded bg-pink-500 hover:bg-pink-400 text-white font-semibold shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition">
                  {loading ? 'Spinning...' : 'Spin One'}
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-6 gap-2">
              {["Choose Ticket","Insert","Spin","Reveal","Mint","Own"].map((step, i)=> (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-500 to-teal-400 flex items-center justify-center text-white text-xs font-bold shadow"></div>
                  <span className="mt-2 text-teal-200/80 text-xs">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {results.map(fx => (
                  <div key={fx.token_id} className="rounded-lg overflow-hidden bg-[#141228] border border-teal-500/20">
                    <img src={fx.image_url} alt={fx.name} className="w-full aspect-square object-cover" />
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-teal-100 font-semibold">#{fx.token_id}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-teal-400/20 text-teal-200 border border-teal-300/20">{fx.rarity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full min-h-[220px] rounded-xl border border-dashed border-teal-500/20 flex items-center justify-center text-teal-300/60">
                Results will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpinSection
