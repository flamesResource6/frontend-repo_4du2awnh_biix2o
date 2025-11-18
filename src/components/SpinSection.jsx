import { useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function SpinSection() {
  const [wallet, setWallet] = useState('demo-wallet')
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [tickets, setTickets] = useState(12)
  const [balanceEth] = useState(0.24)

  const spin = async () => {
    if (tickets <= 0) return
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/spin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet, count })
      })
      const data = await res.json()
      setResults(data)
      setTickets(t => Math.max(0, t - count))
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="spin" className="relative py-14 sm:py-18 md:py-24 retro-bg">
      <div className="absolute inset-0 pointer-events-none opacity-40 retro-grid" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Controls + Steps */}
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-100">Spin the Gacha</h2>
            <p className="mt-2 text-teal-200/80">Use tickets to spin and reveal a unique pixel fox. Rarity odds are transparent and fair.</p>

            {/* Wallet / tickets / balance */}
            <div className="mt-5 p-4 bg-[#0f0d22] border border-teal-500/20 rounded-xl pixel-border">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                <div className="col-span-2 sm:col-span-3">
                  <label className="block text-[11px] tracking-wide text-teal-300/70 mb-1">Wallet</label>
                  <input value={wallet} onChange={e=>setWallet(e.target.value)} className="w-full bg-[#141228] border border-teal-500/20 rounded px-3 py-2 text-teal-100 placeholder:text-teal-300/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="0x..." />
                </div>
                <div className="col-span-1">
                  <div className="text-[11px] tracking-wide text-teal-300/70">Tickets</div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="px-2 py-1 rounded bg-green-500/20 border border-green-400/30 text-green-200 font-bold text-xs">{tickets}</div>
                    <button className="ml-auto text-xs px-2 py-1 rounded bg-teal-500/20 hover:bg-teal-500/30 text-teal-100 border border-teal-300/20">Buy</button>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="text-[11px] tracking-wide text-teal-300/70">Balance</div>
                  <div className="mt-1 px-2 py-1 rounded bg-yellow-500/20 border border-yellow-300/30 text-yellow-200 font-bold text-xs">{balanceEth.toFixed(2)} ETH</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[11px] tracking-wide text-teal-300/70 mb-1">Spins</label>
                  <select value={count} onChange={e=>setCount(parseInt(e.target.value))} className="w-full bg-[#141228] border border-teal-500/20 rounded px-3 py-2 text-teal-100">
                    {[1,3,5,10].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <button onClick={spin} disabled={loading || tickets<=0} className="mt-4 w-full h-11 rounded bg-pink-500 hover:bg-pink-400 text-white font-extrabold pixel-button shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition">
                {loading ? 'Spinning...' : 'Spin One'}
              </button>
              <div className="mt-2 text-[11px] text-teal-300/60">Game/Gacha Mechanism • Spin Button • Ticket System • NFT Mint</div>
            </div>

            {/* Procedural generation visual flow - horizontal 6 steps */}
            <div className="mt-6">
              <div className="text-xs text-teal-300/70 uppercase tracking-wider mb-2">Procedural Generation Flow</div>
              <div className="w-full overflow-x-auto">
                <div className="min-w-[680px] grid grid-cols-6 gap-3">
                  {[
                    {label:'Choose Ticket', color:'from-emerald-400 to-teal-500'},
                    {label:'Insert', color:'from-teal-400 to-cyan-500'},
                    {label:'Spin', color:'from-purple-500 to-indigo-500'},
                    {label:'Reveal', color:'from-pink-500 to-rose-500'},
                    {label:'Mint', color:'from-yellow-400 to-orange-400'},
                    {label:'Own', color:'from-lime-400 to-green-500'}
                  ].map((step, i)=> (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className={`w-12 h-12 rounded-sm bg-gradient-to-br ${step.color} grid place-items-center text-white text-xs font-black pixel-border`}>{i+1}</div>
                      <span className="mt-2 text-teal-200/90 text-xs leading-tight">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results grid */}
          <div className="md:w-1/2">
            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {results.map(fx => (
                  <div key={fx.token_id} className="rounded-lg overflow-hidden bg-[#141228] border border-teal-500/20 pixel-border">
                    <div className="relative">
                      <img src={fx.image_url} alt={fx.name} className="w-full aspect-square object-cover pixel-img" />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-xs font-bold">#{fx.token_id}</div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-teal-100 font-semibold">{fx.name}</p>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-teal-400/20 text-teal-200 border border-teal-300/20">{fx.rarity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full min-h-[240px] rounded-xl border border-dashed border-teal-500/20 flex items-center justify-center text-teal-300/60 pixel-border bg-[#0f0d22]">
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
