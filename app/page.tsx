import { LogoMark } from "@/components/Logo";
import { site } from "@/lib/site";

const services = [
  {
    title: "General Supplier",
    desc: "Pengadaan barang & material industri, ATK, hingga peralatan teknis dengan harga kompetitif dan pengiriman tepat waktu.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Contractor",
    desc: "Jasa kontraktor sipil & mekanikal, renovasi, dan proyek konstruksi dikerjakan oleh tim berpengalaman dan bergaransi.",
    icon: "M3 21h18M5 21V7l8-4v18m6 0V11l-6-4m0 14h6M9 9v.01M9 12v.01M9 15v.01",
  },
  {
    title: "Technical Service",
    desc: "Perawatan, instalasi, dan perbaikan peralatan teknis & elektrikal dengan standar keselamatan dan mutu terbaik.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63",
  },
  {
    title: "IT Solution",
    desc: "Pembuatan website, jaringan, sistem informasi, dan solusi IT terintegrasi untuk mendukung pertumbuhan bisnis Anda.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

const features = [
  { title: "Profesional & Berpengalaman", desc: "Tim ahli lintas bidang dengan rekam jejak proyek yang terbukti." },
  { title: "Tepat Waktu", desc: "Komitmen penyelesaian sesuai jadwal yang disepakati." },
  { title: "Harga Kompetitif", desc: "Penawaran transparan dan efisien tanpa mengorbankan kualitas." },
  { title: "Layanan Menyeluruh", desc: "Dari pengadaan, konstruksi, teknis, hingga solusi digital dalam satu pintu." },
];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    email: site.email,
    telephone: site.phoneHref,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-3.4286",
      longitude: "104.2289",
    },
    areaServed: ["Prabumulih", "Sumatera Selatan", "Indonesia"],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      name: s.title,
      description: s.desc,
    })),
  };
}

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-industrial-900 bg-tech-grid pb-20 pt-24 text-white lg:pb-32 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-industrial-900/50 via-transparent to-industrial-900"></div>
        <div className="absolute right-0 top-0 -mr-48 -mt-48 h-[600px] w-[600px] rounded-full bg-industrial-700/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-48 -ml-48 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />
        
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 border-l-4 border-amber-500 bg-industrial-800/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              Prabumulih · Sumatera Selatan
            </div>
            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Solusi <span className="text-amber-500">Supply, Konstruksi & IT</span> untuk Bisnis Anda
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              {site.name} menghadirkan layanan <strong>General Supplier, Contractor, Technical Service</strong>, dan <strong>IT Solution</strong> yang profesional, terpercaya, dan terintegrasi.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#kontak" className="inline-flex items-center justify-center rounded bg-amber-500 px-8 py-3.5 font-bold text-industrial-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-industrial-900">
                Konsultasi Gratis
              </a>
              <a href="#layanan" className="inline-flex items-center justify-center rounded border border-slate-600 bg-industrial-800/50 px-8 py-3.5 font-semibold text-white backdrop-blur transition hover:border-slate-400 hover:bg-industrial-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
                Lihat Layanan
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="glass-panel animate-floaty rounded-2xl p-12 shadow-2xl">
              <LogoMark className="h-48 w-auto md:h-56 lg:h-64 drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-amber-500">Layanan Kami</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-industrial-900 sm:text-4xl">Empat Pilar Layanan</h2>
            <p className="mt-4 text-lg text-slate-600">Solusi menyeluruh untuk mendukung kebutuhan operasional dan pengembangan bisnis Anda.</p>
          </div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-200">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-slate-50 transition-transform duration-500 group-hover:scale-150 group-hover:bg-amber-50"></div>
              
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-industrial-900 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-industrial-900">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="relative text-xl font-bold text-industrial-900">{s.title}</h3>
              <p className="relative mt-3 text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="keunggulan" className="bg-industrial-900 text-white relative py-24">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Keunggulan Utama</h2>
            <p className="mt-4 text-lg text-slate-400">Komitmen kami pada kualitas, ketepatan, dan kepuasan klien di setiap proyek.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.title} className="border-l-2 border-industrial-700 bg-industrial-800/40 p-8 hover:border-amber-500 transition-colors duration-300">
                <span className="text-4xl font-black text-industrial-700">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-2xl transform -rotate-3 z-0"></div>
            <div className="relative z-10 bg-white rounded-xl p-10 shadow-lg border border-slate-100 flex justify-center items-center h-full min-h-[320px]">
              <LogoMark className="w-3/5 h-auto text-industrial-900 opacity-90 grayscale contrast-125" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-amber-500">Profil Perusahaan</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-industrial-900 sm:text-4xl">Mitra Terpercaya Anda</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                <strong>{site.name}</strong> adalah perusahaan yang bergerak di bidang pengadaan barang, jasa kontraktor, layanan teknis, dan solusi teknologi informasi. 
              </p>
              <p>
                Berbasis di Prabumulih, Sumatera Selatan, kami berkomitmen memberikan layanan berkualitas dengan pendekatan profesional dan solusi yang tepat sasaran. Dengan tim yang tangguh dan sarat pengalaman di berbagai sektor industri, kami siap menjadi partner utama dalam operasional dan transformasi digital bisnis Anda.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-industrial-900">100%</span>
                <span className="text-sm font-semibold text-slate-500 uppercase">Komitmen Kualitas</span>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-industrial-900">24/7</span>
                <span className="text-sm font-semibold text-slate-500 uppercase">Dukungan Teknis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontak" className="bg-amber-500 text-industrial-900">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Mari Berdiskusi.</h2>
              <p className="mt-6 text-lg font-medium text-industrial-900/80 max-w-md">Konsultasikan kebutuhan suplai, konstruksi, atau infrastruktur IT proyek Anda bersama tim ahli kami hari ini juga.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded bg-industrial-900 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-industrial-800 hover:-translate-y-1">
                  Hubungi via WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded border-2 border-industrial-900 px-8 py-4 font-bold text-industrial-900 transition hover:bg-industrial-900 hover:text-amber-500">
                  Kirim Email
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-8 bg-industrial-900/5 p-8 rounded-2xl border border-industrial-900/10">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-industrial-900 text-amber-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Alamat Kantor</p>
                  <p className="mt-1 text-industrial-900/80 font-medium leading-relaxed">{site.address.street}<br />{site.address.locality}, {site.address.region}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-industrial-900 text-amber-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-3.4a1.5 1.5 0 00-1.264-1.482l-4.163-.693a1.5 1.5 0 00-1.517.71l-.706 1.176a11.25 11.25 0 01-5.61-5.61l1.176-.706a1.5 1.5 0 00.71-1.517l-.693-4.163A1.5 1.5 0 007.35 3H3.75a1.5 1.5 0 00-1.5 1.5v2.25z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Telepon / WhatsApp</p>
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-1 block font-semibold text-industrial-900/80 hover:text-industrial-900">{site.phone}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-industrial-900 text-amber-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Email</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block font-semibold text-industrial-900/80 hover:text-industrial-900">{site.email}</a>
                  <a href={`mailto:${site.email2}`} className="mt-0.5 block font-semibold text-industrial-900/80 hover:text-industrial-900">{site.email2}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-900 text-slate-400 border-t border-industrial-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-sm sm:flex-row">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-auto rounded bg-white p-1" />
            <span className="font-bold text-white tracking-wide">{site.name}</span>
          </div>
          <p className="font-medium">&copy; {new Date().getFullYear()} {site.shortName}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
