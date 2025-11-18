function Roadmap() {
  const items = [
    { q: 'Q4 2024', title: 'Launch & Community', pts: ['Public mint + gacha spins', 'Rarity explorer & traits wiki', 'Community quests'] },
    { q: 'Q1 2025', title: 'Staking & Tokenomics', pts: ['Stake Crypto Foxes for rewards', 'Introduce ecosystem token', 'Marketplace perks'] },
    { q: 'Q2 2025', title: 'DAO & Metaverse', pts: ['DAO governance proposals', 'Voxel/Metaverse avatars', 'IRL + virtual events'] },
  ]
  return (
    <section id="roadmap" className="py-16 bg-gradient-to-b from-[#0b0a17] to-[#121026]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-200">Roadmap</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.q} className="rounded-lg p-5 bg-[#141228] border border-teal-500/20">
              <div className="text-xs text-teal-300/70">{it.q}</div>
              <h3 className="mt-1 text-white font-bold">{it.title}</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-teal-200/85">
                {it.pts.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-teal-300/80">Keywords: NFT Roadmap, Tokenomics, Metaverse Integration, DAO Governance</p>
      </div>
    </section>
  )
}

export default Roadmap
