import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a17]/40 via-[#0b0a17]/60 to-[#0b0a17] pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-end pb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 border border-teal-300/30 text-teal-200 text-xs tracking-wider uppercase">
            Pixel Art • Procedurally Generated • On-Chain Ready
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)]">
            Crypto Foxes
          </h1>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-teal-100/90">
            Spin the gacha, mint a retro fox. A limited pixel-art collection inspired by classic 8-bit adventures.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href="#spin" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-pink-500 hover:bg-pink-400 text-white font-semibold shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition">
              Spin One
            </a>
            <a href="#learn" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-teal-300/30 text-teal-100/90 hover:bg-white/5 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
