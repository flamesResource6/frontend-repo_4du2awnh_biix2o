import Hero from './components/Hero'
import SpinSection from './components/SpinSection'
import Bundles from './components/Bundles'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0a17] text-white">
      {/* SEO meta via index.html will be updated */}
      {/* Hero with Spline cover */}
      <Hero />
      {/* Spin mechanics */}
      <SpinSection />
      {/* Bundles */}
      <Bundles />
      {/* Recent mints */}
      <Gallery />

      <footer className="bg-[#0a091a] border-t border-teal-500/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-teal-300/70 text-sm">© {new Date().getFullYear()} Crypto Foxes. All rights reserved.</p>
          <div className="text-xs text-teal-300/60">Made for NFT collectors and retro gaming lovers.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
