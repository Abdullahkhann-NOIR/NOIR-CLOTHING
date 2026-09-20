'use client'

import { useState, useEffect } from 'react'
import { Search, X, ChevronRight, Instagram, ArrowRight, Menu } from 'lucide-react'

const HERO_IMG = 'https://images.unsplash.com/photo-1582284834275-c4651b85b3fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxibGFjayUyMGhvb2RpZSUyMGVkaXRvcmlhbHxlbnwwfHx8YmxhY2t8MTc4OTg1MTY0Mnww&ixlib=rb-4.1.0&q=85'

const LOOK = [
  { id: 1, title: 'The Hooded Study', tag: 'HOODED / N°01', category: 'HOODIE', img: 'https://images.unsplash.com/photo-1647390018132-1a9b3368f130?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxibGFjayUyMHN0cmVldHdlYXIlMjBtb2RlbHxlbnwwfHx8YmxhY2t8MTc4OTg1MTY0N3ww&ixlib=rb-4.1.0&q=85' },
  { id: 2, title: 'Uniform Silhouette', tag: 'TEE + TROUSER', category: 'ESSENTIAL', img: 'https://images.unsplash.com/photo-1582127975623-baf1e7eed613?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxibGFjayUyMGhvb2RpZSUyMGVkaXRvcmlhbHxlbnwwfHx8YmxhY2t8MTc4OTg1MTY0Mnww&ixlib=rb-4.1.0&q=85' },
  { id: 3, title: 'Tailored In Shadow', tag: 'SUIT / N°02', category: 'TAILORING', img: 'https://images.unsplash.com/photo-1654160655268-420e885f1f94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxibGFjayUyMHN1aXQlMjBlZGl0b3JpYWx8ZW58MHx8fGJsYWNrfDE3ODk4NTE2NTd8MA&ixlib=rb-4.1.0&q=85' },
  { id: 4, title: 'Cotton Study', tag: 'TEE / N°03', category: 'ESSENTIAL', img: 'https://images.pexels.com/photos/20084625/pexels-photo-20084625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 5, title: 'Wide-Leg Trouser', tag: 'TROUSER / N°04', category: 'TROUSER', img: 'https://images.pexels.com/photos/20900467/pexels-photo-20900467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 6, title: 'Streetline', tag: 'OUTERWEAR / N°05', category: 'HOODIE', img: 'https://images.unsplash.com/photo-1616259179104-36bf5b49b6a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxibGFjayUyMHN0cmVldHdlYXIlMjBtb2RlbHxlbnwwfHx8YmxhY2t8MTc4OTg1MTY0N3ww&ixlib=rb-4.1.0&q=85' },
]

const PRODUCT = {
  name: 'THE NOIR HOODED ESSENTIAL',
  subtitle: 'Heavyweight Cotton Hoodie / Cut in Portugal',
  fabric: '100% Heavyweight Loopback Cotton (480 GSM)',
  origin: 'Cut & sewn in Porto, Portugal',
  fit: 'Relaxed · Boxy Shoulder · Cropped Hem',
  details: [
    'Double-lined hood with matte black drawcords',
    'Kangaroo pouch pocket, garment-dyed jet black',
    'Tonal NOIR embroidery at back of collar',
    'Stone-washed for a lived-in, matte finish',
  ],
  gallery: [
    { label: 'Front View', img: 'https://images.unsplash.com/photo-1582284834275-c4651b85b3fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxibGFjayUyMGhvb2RpZSUyMGVkaXRvcmlhbHxlbnwwfHx8YmxhY2t8MTc4OTg1MTY0Mnww&ixlib=rb-4.1.0&q=85' },
    { label: 'On Model', img: 'https://images.unsplash.com/photo-1647390018132-1a9b3368f130?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxibGFjayUyMHN0cmVldHdlYXIlMjBtb2RlbHxlbnwwfHx8YmxhY2t8MTc4OTg1MTY0N3ww&ixlib=rb-4.1.0&q=85' },
    { label: 'Hood Detail', img: 'https://images.unsplash.com/photo-1582127975623-baf1e7eed613?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxibGFjayUyMGhvb2RpZSUyMGVkaXRvcmlhbHxlbnwwfHx8YmxhY2t8MTc4OTg1MTY0Mnww&ixlib=rb-4.1.0&q=85' },
    { label: 'Fabric Texture', img: 'https://images.unsplash.com/photo-1604828538836-b35298b0dcd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGJsYWNrfGVufDB8fHxibGFja3wxNzg5ODUxNjUyfDA&ixlib=rb-4.1.0&q=85' },
  ],
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target) } })
    }, { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-xl font-bold tracking-widest-xl">NOIR</div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest">
          <a href="#" className="hover:text-neutral-400 transition">COLLECTION</a>
          <a href="#" className="hover:text-neutral-400 transition">ESSENTIALS</a>
          <a href="#" className="hover:text-neutral-400 transition">LOOKBOOK</a>
          <a href="#" className="hover:text-neutral-400 transition">ABOUT</a>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-neutral-400 transition">JOURNAL</a>
          <button onClick={() => setOpen(true)} aria-label="Menu" className="md:hidden text-neutral-200">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-lg font-bold">NOIR</div>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              {['COLLECTION','ESSENTIALS','LOOKBOOK','ABOUT'].map(l => (
                <a key={l} href="#" onClick={() => setOpen(false)} className="hover:text-neutral-400 transition">{l}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero({ onExplore }) {
  return (
    <section className="h-screen relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Hero" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-2xl">
          <div className="text-xs tracking-[0.2em] text-neutral-400">
            FW26 — CAMPAIGN N°01
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight">
            NOIR — Everyday<br />
            Essentials.
          </h1>
          <p className="text-neutral-400 text-sm tracking-widest">Simple &nbsp;·&nbsp; Clean &nbsp;·&nbsp; Timeless</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button onClick={onExplore} className="px-8 py-3 bg-white text-black text-xs tracking-widest-xl hover:bg-neutral-200 transition flex items-center gap-2 justify-center">
              EXPLORE COLLECTION
              <ArrowRight size={16} />
            </button>
            <button className="px-8 py-3 border border-white text-xs tracking-widest-xl hover:bg-white/5 transition">
              VIEW THE HOODIE
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-neutral-500 tracking-widest">SCROLL — 01 / 04</div>
    </section>
  )
}

function Marquee() {
  const items = ['THE HOODED ESSENTIAL — NEW', 'FW26 CAMPAIGN LIVE', 'HEAVYWEIGHT COTTON · 480 GSM', 'CUT IN PORTUGAL — MADE TO LAST']
  const row = [...items, ...items, ...items]
  return (
    <div className="bg-black py-4 overflow-hidden border-y border-neutral-800">
      <div className="animate-marquee flex gap-12">
        {row.map((t, i) => (
          <span key={i} className="text-xs tracking-widest whitespace-nowrap text-neutral-400">{t} ✦</span>
        ))}
      </div>
    </div>
  )
}

function Lookbook({ onView }) {
  return (
    <section id="lookbook" className="bg-[#0A0A0A] py-24 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-widest text-neutral-500 mb-2">— THE LOOKBOOK FEED</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">Studies in Black.</h2>
          <p className="text-neutral-400 text-sm tracking-widest">HOODIE · TEE · TROUSER · SUIT</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LOOK.map((item, i) => (
            <div key={item.id} onClick={() => onView(item)} className="grid-tile group relative overflow-hidden bg-[#141414] aspect-[4/5] reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs tracking-widest text-neutral-300">{item.tag}</p>
                  <h3 className="text-xl md:text-2xl font-light mt-2">{item.title}</h3>
                </div>
                <button className="text-xs tracking-widest-xl underline underline-offset-4">VIEW DETAILS</button>
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-neutral-500">0{item.id}</div>
              <div className="absolute top-4 right-4 text-xs tracking-widest text-neutral-400 bg-black/50 px-3 py-1">{item.category}</div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-xs tracking-widest text-neutral-500 border-t border-neutral-800 pt-6">
          <a href="#" className="hover:text-white transition">@NOIR.CLOTHING</a>
          <span>06 / 24 LOOKS</span>
        </div>
      </div>
    </section>
  )
}

function ProductShowcase() {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <section className="bg-[#0A0A0A] py-24 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-[#141414] border border-neutral-700">
              <img src={PRODUCT.gallery[activeImg].img} alt={PRODUCT.gallery[activeImg].label} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {PRODUCT.gallery.map((g, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`aspect-square overflow-hidden bg-[#141414] border ${activeImg===i ? 'border-white' : 'border-transparent hover:border-neutral-700'} transition`}>
                  <img src={g.img} alt={g.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex justify-between text-xs text-neutral-500 tracking-widest pt-4">
              <span>{PRODUCT.gallery[activeImg].label.toUpperCase()}</span>
              <span>{activeImg+1} / {PRODUCT.gallery.length}</span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest text-neutral-500 mb-2">— ESSENTIALS / N°01</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-2">{PRODUCT.name}</h2>
              <p className="text-neutral-400 text-sm">{PRODUCT.subtitle}</p>
            </div>

            <div className="space-y-4 border-y border-neutral-800 py-6">
              <div className="flex justify-between"><span className="text-xs tracking-widest text-neutral-500">COMPOSITION</span><span className="text-sm">{PRODUCT.fabric}</span></div>
              <div className="flex justify-between"><span className="text-xs tracking-widest text-neutral-500">ORIGIN</span><span className="text-sm">{PRODUCT.origin}</span></div>
              <div className="flex justify-between"><span className="text-xs tracking-widest text-neutral-500">FIT</span><span className="text-sm">{PRODUCT.fit}</span></div>
            </div>

            <div className="space-y-4">
              <p className="text-xs tracking-widest text-neutral-500">— THE DETAILS</p>
              <ul className="space-y-3">
                {PRODUCT.details.map((d, i) => (
                  <li key={i} className="text-sm flex gap-3">
                    <span className="text-neutral-600">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <p className="text-sm italic text-neutral-400 mb-6">A single silhouette. Refined until nothing else is required. Made to be worn every day, then every day after.</p>
              <div className="flex gap-4 text-xs tracking-widest">
                <span className="bg-neutral-900 px-4 py-2">MADE IN PORTUGAL</span>
                <span className="bg-neutral-900 px-4 py-2">480 GSM COTTON</span>
                <span className="bg-neutral-900 px-4 py-2">MADE TO LAST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LookModal({ item, onClose }) {
  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onEsc)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onEsc); document.body.style.overflow = '' }
  }, [onClose])
  if (!item) return null
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div onClick={e => e.stopPropagation()} className="bg-[#141414] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
          <X size={24} />
        </button>
        
        <div className="space-y-6">
          <img src={item.img} alt={item.title} className="w-full aspect-[4/5] object-cover" />
          
          <div className="space-y-4">
            <div>
              <p className="text-xs tracking-widest text-neutral-500">{item.tag}  ·  {item.category}</p>
              <h2 className="text-2xl font-light mt-2">{item.title}</h2>
            </div>
            <p className="text-sm text-neutral-400">Captured under studio light for the NOIR FW26 campaign. A quiet study in silhouette, weight, and shadow — where the black tells the story and nothing else needs to.</p>
            
            <div className="space-y-2 border-y border-neutral-800 py-4">
              <div className="flex justify-between text-sm"><span className="text-neutral-500">CATEGORY</span><span>{item.category}</span></div>
              <div className="flex justify-between text-sm"><span className="text-neutral-500">CAMPAIGN</span><span>FW26 · N°01</span></div>
              <div className="flex justify-between text-sm"><span className="text-neutral-500">STYLING</span><span>NOIR ATELIER</span></div>
            </div>
            
            <div className="space-y-3 pt-4">
              <button className="w-full py-3 bg-white text-black text-xs tracking-widest-xl hover:bg-neutral-200 transition flex items-center justify-center gap-2">
                EXPLORE THE PIECE
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [modal, setModal] = useState(null)
  useReveal()

  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <Hero onExplore={() => document.getElementById('lookbook')?.scrollIntoView({ behavior: 'smooth' })} />
      <Marquee />
      <Lookbook onView={setModal} />
      <ProductShowcase />

      {/* Manifesto */}
      <section className="bg-black py-24 px-4 border-t border-neutral-800">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-xs tracking-widest text-neutral-500">— NOIR MANIFESTO</p>
          <h2 className="text-3xl md:text-4xl font-light">
            "Built for everyday movement.  Tailored for perfection."
          </h2>
          <p className="text-xs text-neutral-600 tracking-widest">© 2026 NOIR CLOTHING — ALL RIGHTS RESERVED</p>
        </div>
      </section>

      <LookModal item={modal} onClose={() => setModal(null)} />
    </div>
  )
}