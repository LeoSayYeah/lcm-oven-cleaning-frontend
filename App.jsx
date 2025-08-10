import React, { useEffect, useRef, useState } from 'react'

const brand = {
  primary: '#0e3a67',
  secondary: '#D4AF37',
  accent: '#1f6feb',
}

const services = [
  {
    category: 'Oven Cleaning',
    items: [
      { name: 'Single oven clean', price: '£50', duration: '1.5 hours' },
      { name: 'Oven and grill', price: '£75', duration: '2 hours' },
      { name: 'Side by side single ovens', price: '£90', duration: '—' },
      { name: 'Range oven', price: '£125', duration: '—' },
      { name: 'Ceramic hob', price: '£10', duration: '—' },
      { name: 'Gas hob 4 burner', price: '£20', duration: '(+£5 per extra)' },
      { name: 'Extractor', price: '£20', duration: '—' },
    ],
  },
  {
    category: 'Carpet Cleaning',
    items: [
      { name: '1 carpet', price: '£50', duration: '1 hour' },
      { name: '2 carpets', price: '£70', duration: '1.5 hours' },
      { name: '3 carpets', price: '£90', duration: '1.5 hours' },
      { name: '4 carpets', price: '£110', duration: '2 hours' },
      { name: '5 carpets', price: '£125', duration: '2 hours' },
      { name: 'Stairs & landing', price: '£50', duration: '1 hour' },
      { name: 'Stairs & landing x2', price: '£75', duration: '1.5 hours' },
    ],
  },
  {
    category: 'Sofa Cleaning',
    items: [
      { name: 'Arm chair / love chair', price: '£30', duration: '1 hour' },
      { name: '2 seater', price: '£50', duration: '1 hour' },
      { name: '3 seater', price: '£75', duration: '1.5 hours' },
      { name: 'Corner sofa', price: '£100', duration: '2 hours' },
    ],
  },
  {
    category: 'White Goods',
    items: [
      { name: 'Washing machine service', price: '£30', duration: '30 min' },
      { name: 'Dishwasher service', price: '£30', duration: '30 min' },
      { name: 'Fridge freezer clean', price: '£30', duration: '30 min' },
      { name: 'American fridge freezer clean', price: '£50', duration: '1 hour' },
    ],
  },
]

const testimonials = [
  {
    name: 'Danielle H.',
    text: 'Amazing oven clean — looks like new! On time, polite and left everything spotless.',
  },
  {
    name: 'James P.',
    text: 'Carpets came up brilliantly. Great value and super friendly service.',
  },
  {
    name: 'Laura S.',
    text: 'Range cooker transformed. Highly recommend LCM Oven Cleaning!',
  },
]

function SectionTitle({ children, kicker }) {
  return (
    <div className="mb-4">
      {kicker && (
        <div className="text-xs uppercase tracking-wider" style={{ color: brand.secondary }}>{kicker}</div>
      )}
      <h2 className="text-2xl font-bold" style={{ color: brand.primary }}>{children}</h2>
    </div>
  )
}

function Reel({ url }) {
  const [muted, setMuted] = useState(true)
  const iframeRef = useRef(null)
  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow">
      <button
        onClick={() => setMuted(!muted)}
        className="absolute z-10 right-2 top-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full"
      >
        {muted ? 'Tap to unmute' : 'Tap to mute'}
      </button>
      <iframe
        ref={iframeRef}
        title="Instagram Reel"
        src={url}
        className="w-full h-full"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
      />
    </div>
  )
}

function ServiceCard({ name, price, duration }) {
  return (
    <div className="rounded-2xl p-4 shadow bg-white border border-slate-100">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-semibold text-slate-800">{name}</h4>
        <span className="text-sm font-bold" style={{ color: brand.secondary }}>{price}</span>
      </div>
      {duration && <p className="text-xs text-slate-500 mt-1">Estimated: {duration}</p>}
    </div>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-8">
      <SectionTitle kicker="Our Work">Services & Pricing</SectionTitle>
      <div className="space-y-8">
        {services.map((group) => (
          <div key={group.category}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: brand.primary }}>{group.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {group.items.map((i) => (
                <ServiceCard key={i.name} name={i.name} price={i.price} duration={i.duration} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function GalleryItem({ src, label }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow">
      <img src={src} alt={label} className="w-full h-52 object-cover" />
      <span className="absolute left-2 top-2 text-[11px] font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: label === 'Before' ? '#ef4444' : '#22c55e', color: 'white' }}>{label}</span>
    </div>
  )
}

function GallerySection() {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1601050690089-9aa3a84f8be4?w=1200', label: 'Before' },
    { src: 'https://images.unsplash.com/photo-1617038260897-03496e0cc063?w=1200', label: 'After' },
    { src: 'https://images.unsplash.com/photo-1598300182776-8d8b1d74f6a9?w=1200', label: 'Before' },
    { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200', label: 'After' },
  ]
  return (
    <section id="gallery" className="py-8">
      <SectionTitle kicker="Results">Before & After Gallery</SectionTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {photos.map((p, i) => (
          <GalleryItem key={i} src={p.src} label={p.label} />
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-8">
      <SectionTitle kicker="Reviews">What Customers Say</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-2xl bg-white p-4 shadow border border-slate-100">
            <p className="text-slate-700">“{t.text}”</p>
            <div className="mt-3 text-sm font-semibold" style={{ color: brand.primary }}>{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
            <img src="/logo.png" alt="LCM Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-slate-900">LCM Oven Cleaning</div>
            <div className="text-xs" style={{ color: brand.primary }}>Let Me Do The Dirty Work</div>
          </div>
        </div>
        <a href="#book" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: brand.secondary, color: '#0b1220' }}>Book Now</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: brand.primary }}>
            Professional Oven, Carpet & Sofa Cleaning
          </h1>
          <p className="mt-3 text-slate-600">Serving local homes with sparkling results. Smart, postcode‑efficient scheduling.</p>
          <div className="mt-4 flex gap-3">
            <a href="#book" className="px-4 py-2 rounded-full font-semibold" style={{ backgroundColor: brand.secondary, color: '#0b1220' }}>Book Now</a>
            <a href="#services" className="px-4 py-2 rounded-full font-semibold border" style={{ borderColor: brand.primary, color: brand.primary }}>View Services</a>
          </div>
          <div className="mt-4 text-sm"><span className="font-semibold">Hours:</span> Mon–Fri, 8:15am – 2:00pm</div>
          <div className="mt-2 text-sm"><span className="font-semibold">Contact:</span> 07565873770 · lcmovencleaning@hotmail.com</div>
        </div>
        <div className="grid gap-3">
          <Reel url="https://www.instagram.com/reel/DIbYtvto-fG/embed" />
          <Reel url="https://www.instagram.com/reel/C-vEYEGI5qa/embed" />
        </div>
      </div>
    </section>
  )
}

function ContactBar() {
  return (
    <section className="py-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
        <a href="tel:07565873770" className="rounded-2xl p-4 bg-white shadow border border-slate-100">
          <div className="text-xs text-slate-500">Call</div>
          <div className="font-semibold">07565873770</div>
        </a>
        <a href="https://wa.me/447565873770" target="_blank" className="rounded-2xl p-4 bg-white shadow border border-slate-100">
          <div className="text-xs text-slate-500">WhatsApp</div>
          <div className="font-semibold">Message us</div>
        </a>
        <a href="https://www.facebook.com/share/17FSCs5xqU/" target="_blank" className="rounded-2xl p-4 bg-white shadow border border-slate-100">
          <div className="text-xs text-slate-500">Facebook</div>
          <div className="font-semibold">LCM Oven Cleaning</div>
        </a>
        <a href="https://www.instagram.com/lcmovencleaning?igsh=MW44NmlpOGRiNW9rMQ==" target="_blank" className="rounded-2xl p-4 bg-white shadow border border-slate-100">
          <div className="text-xs text-slate-500">Instagram</div>
          <div className="font-semibold">@lcmovencleaning</div>
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center text-sm text-slate-500">© {new Date().getFullYear()} LCM Oven Cleaning · All rights reserved</div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('bg-slate-50')
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main className="max-w-5xl mx-auto px-4">
        <ServicesSection />
        <GallerySection />
        <Testimonials />
        <section id="book" className="py-8">
          <SectionTitle kicker="Ready to go?">Booking Opens 18 August 2025</SectionTitle>
          <div className="rounded-2xl p-5 bg-white border border-slate-100 shadow">
            <p className="text-slate-700">Online bookings start from <strong>18 August 2025</strong>. The booking form will appear here at launch. In the meantime, call or WhatsApp us to reserve a slot.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="tel:07565873770" className="px-4 py-2 rounded-full font-semibold text-center" style={{ backgroundColor: brand.secondary, color: '#0b1220' }}>Call 07565 873 770</a>
              <a href="https://wa.me/447565873770" className="px-4 py-2 rounded-full font-semibold text-center border" style={{ borderColor: brand.primary, color: brand.primary }}>WhatsApp Us</a>
            </div>
          </div>
        </section>
      </main>
      <ContactBar />
      <Footer />
    </div>
  )
}
