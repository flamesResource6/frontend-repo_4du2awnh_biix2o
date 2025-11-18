function About() {
  return (
    <section id="learn" className="py-16 sm:py-20 bg-gradient-to-b from-[#121026] to-[#0b0a17]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-300/20 text-purple-200 text-[11px] tracking-wider uppercase">About “Crypto Foxes”</div>
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-teal-100">Procedurally Generated, Pixel-Perfect Collectibles</h2>
        <p className="mt-3 text-teal-200/85 max-w-3xl">
          Crypto Foxes is a limited NFT collection of <span className="font-semibold text-teal-100">11,111</span> ERC-721 digital collectibles crafted with
          handcrafted pixel-art assets and assembled by a custom Python generation script. Each fox is rendered at crisp
          <span className="font-semibold text-teal-100"> 480x480</span> for that authentic retro look, exported as lightweight GIF/SVG for optimal performance.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg p-4 bg-[#141228] border border-teal-500/20">
            <h3 className="text-white font-bold">Supply & Standard</h3>
            <p className="mt-1 text-sm text-teal-200/80">Fixed 11,111 supply. Ethereum-based <span className="font-semibold">ERC-721</span> smart contract.</p>
          </div>
          <div className="rounded-lg p-4 bg-[#141228] border border-teal-500/20">
            <h3 className="text-white font-bold">Handcrafted Assets</h3>
            <p className="mt-1 text-sm text-teal-200/80">Curated pixel layers and rare traits with generative rules and rarity weights.</p>
          </div>
          <div className="rounded-lg p-4 bg-[#141228] border border-teal-500/20">
            <h3 className="text-white font-bold">On-Chain Ready</h3>
            <p className="mt-1 text-sm text-teal-200/80">Optimized metadata for marketplaces and future staking and utility.</p>
          </div>
        </div>
        <div className="mt-6 text-sm text-teal-300/80">
          Keywords: NFT Collection, Procedural Generation, Ethereum Blockchain, Digital Collectibles, 11,111 Supply, ERC-721, Handcrafted Assets, 480x480 GIF, Rare Traits, NFT Utility, Roadmap 2024/2025
        </div>
      </div>
    </section>
  )
}

export default About
