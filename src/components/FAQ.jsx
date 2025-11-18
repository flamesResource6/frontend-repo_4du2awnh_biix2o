function FAQ() {
  const items = [
    { q: 'Which wallet should I use?', a: 'We support popular Ethereum wallets. Choose a wallet with strong security and an easy UX.' },
    { q: 'How much are gas fees?', a: 'We optimize minting for the lowest gas fees possible. Actual fees depend on network congestion.' },
    { q: 'Where can I trade Crypto Foxes?', a: 'We plan an OpenSea listing and other marketplaces post-mint.' },
  ]
  return (
    <section id="faq" className="py-16 bg-[#0b0a17]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-200">FAQ</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-lg p-5 bg-[#141228] border border-teal-500/20">
              <h3 className="text-white font-bold">{it.q}</h3>
              <p className="mt-1 text-sm text-teal-200/85">{it.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-teal-300/80">Keywords: Lowest Gas Fees NFT, Best NFT Wallet, OpenSea Listing, What is an NFT?</p>
      </div>
    </section>
  )
}

export default FAQ
