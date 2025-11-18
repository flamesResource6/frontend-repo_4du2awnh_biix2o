import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Gallery() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch(`${API_URL}/api/last-foxes?limit=12`)
        const d = await r.json()
        setItems(d)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section className="py-16 bg-[#121026]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-200">Last Adopted Foxes</h2>
            <p className="mt-2 text-teal-200/80">Recently minted by the community.</p>
          </div>
          <a href="#" className="text-xs text-teal-300/80 hover:text-teal-200">View all</a>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.token_id} className="group rounded-lg overflow-hidden bg-[#141228] border border-teal-500/20 shadow pixel-border">
              <div className="relative">
                <img src={it.image_url} alt={it.name} className="w-full aspect-square object-cover pixel-img" loading="lazy" />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-xs font-bold">#{it.token_id}</div>
              </div>
              <div className="p-2 flex items-center justify-between">
                <span className="text-teal-100 text-sm">{it.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-200 border border-yellow-300/20">{it.rarity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
