import Hero from './components/Hero'
import SpinSection from './components/SpinSection'
import Bundles from './components/Bundles'
import Gallery from './components/Gallery'
import About from './components/About'
import HowTo from './components/HowTo'
import Roadmap from './components/Roadmap'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0a17] text-white">
      <Hero />
      <SpinSection />
      <Bundles />
      <About />
      <HowTo />
      <Roadmap />
      <Gallery />
      <FAQ />

      <footer className="bg-[#0a091a] border-t border-teal-500/10">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-bold text-teal-100">Crypto Foxes</h4>
            <p className="mt-2 text-teal-300/70 text-sm">Retro 8-bit pixel art NFTs on the Ethereum blockchain. Procedural generation. Rare traits. Digital collectibles.</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-teal-100">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm text-teal-300/70">
              <li><a href="#" className="hover:text-teal-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-200">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-teal-100">Follow</h4>
            <div className="mt-2 flex items-center gap-3">
              <a aria-label="Discord" href="https://discord.gg/" className="w-9 h-9 grid place-items-center rounded-lg border border-teal-500/20 hover:bg-white/5 transition" rel="noreferrer" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-teal-200"><path d="M20.317 4.369A19.91 19.91 0 0 0 16.558 3c-.197.356-.42.83-.575 1.205a18.136 18.136 0 0 0-4.005 0 12.3 12.3 0 0 0-.58-1.205 19.9 19.9 0 0 0-3.761 1.369C4.156 8.053 3.28 11.6 3.555 15.105a19.9 19.9 0 0 0 3.993 2.03c.323-.444.611-.915.86-1.41a12.7 12.7 0 0 1-1.36-.656c.114-.083.226-.17.334-.26 2.62 1.226 5.45 1.226 8.06 0 .11.09.222.177.334.26-.438.252-.9.469-1.36.656.25.495.538.966.86 1.41a19.9 19.9 0 0 0 3.993-2.03c.314-3.993-.536-7.516-2.935-10.736zM9.68 13.623c-.79 0-1.438-.73-1.438-1.63 0-.9.64-1.63 1.438-1.63.8 0 1.446.73 1.438 1.63 0 .9-.64 1.63-1.438 1.63zm4.64 0c-.79 0-1.438-.73-1.438-1.63 0-.9.64-1.63 1.438-1.63.8 0 1.446.73 1.438 1.63 0 .9-.64 1.63-1.438 1.63z"/></svg>
              </a>
              <a aria-label="Twitter" href="https://twitter.com/" className="w-9 h-9 grid place-items-center rounded-lg border border-teal-500/20 hover:bg-white/5 transition" rel="noreferrer" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-teal-200"><path d="M22 5.92c-.77.34-1.6.57-2.47.68a4.24 4.24 0 0 0 1.86-2.34 8.49 8.49 0 0 1-2.69 1.03A4.23 4.23 0 0 0 12.1 9.1a12 12 0 0 1-8.72-4.42 4.23 4.23 0 0 0 1.31 5.65 4.2 4.2 0 0 1-1.92-.53v.05a4.23 4.23 0 0 0 3.39 4.15c-.46.13-.94.2-1.44.2-.35 0-.69-.03-1.02-.1a4.23 4.23 0 0 0 3.95 2.94A8.49 8.49 0 0 1 2 19.54 12 12 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.35 8.35 0 0 0 22 5.92z"/></svg>
              </a>
              <a aria-label="OpenSea" href="https://opensea.io/" className="w-9 h-9 grid place-items-center rounded-lg border border-teal-500/20 hover:bg-white/5 transition" rel="noreferrer" target="_blank">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" className="text-teal-200"><path d="M16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2zm5.61 18.48h-3.37l-2.47 3.85h-.02l.01.02h-.03c-.08 0-.14-.06-.14-.14v-3.73h-2.47c-.08 0-.14-.06-.14-.14v-2.52c0-.08.06-.14.14-.14h2.47v-2.47c0-.08.06-.14.14-.14h2.52c.08 0 .14.06.14.14v2.47h3.37c.08 0 .14.06.14.14v2.52c0 .08-.06.14-.14.14z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-teal-300/70 text-xs">© {new Date().getFullYear()} Crypto Foxes. All rights reserved.</p>
          <div className="text-[11px] text-teal-300/60">NFT Collection • Procedural Generation • Ethereum Blockchain • Digital Collectibles</div>
        </div>
      </footer>
    </div>
  )
}

export default App
