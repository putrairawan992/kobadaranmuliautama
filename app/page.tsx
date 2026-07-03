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
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    email: site.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: "Prabumulih, Sumatera Selatan, Indonesia",
    makesOffer: services.map((s) => ({ "@type": "Offer", name: s.title })),
  };
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700">
              Prabumulih · Sumatera Selatan
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Solusi <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">Supply, Konstruksi & IT</span> untuk Bisnis Anda
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              {site.name} menghadirkan layanan <strong>General Supplier, Contractor, Technical Service</strong>, dan <strong>IT Solution</strong> yang profesional, terpercaya, dan terintegrasi.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kontak" className="rounded-full bg-sky-600 px-7 py-3 font-semibold text-white shadow-lg shadow-sky-600/25 transition hover:bg-sky-700">
                Konsultasi Gratis
              </a>
              <a href="#layanan" className="rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-600">
                Lihat Layanan
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="animate-floaty rounded-[2rem] bg-white/60 p-10 shadow-2xl shadow-sky-600/10 ring-1 ring-white/60 backdrop-blur">
              <LogoMark className="h-56 w-auto drop-shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Layanan Kami</h2>
          <p className="mt-4 text-slate-600">Empat pilar layanan untuk memenuhi kebutuhan operasional dan pengembangan bisnis Anda.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-600/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="keunggulan" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Mengapa Memilih Kami</h2>
            <p className="mt-4 text-slate-600">Komitmen kami pada kualitas, ketepatan, dan kepuasan klien.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="text-3xl font-extrabold text-sky-200">0{i + 1}</span>
                <h3 className="mt-3 text-base font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Tentang Perusahaan</h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              <strong>{site.name}</strong> adalah perusahaan yang bergerak di bidang pengadaan barang, jasa kontraktor, layanan teknis, dan solusi teknologi informasi. Berbasis di Prabumulih, Sumatera Selatan, kami berkomitmen memberikan layanan berkualitas dengan pendekatan profesional dan solusi yang tepat sasaran.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Dengan tim yang berpengalaman di berbagai bidang, kami siap menjadi mitra terpercaya bagi kebutuhan supply, konstruksi, teknis, hingga transformasi digital bisnis Anda.
            </p>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="rounded-3xl bg-white p-12 shadow-2xl shadow-sky-600/20 ring-1 ring-sky-100">
              <LogoMark className="h-44 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontak" className="bg-gradient-to-br from-sky-600 to-sky-800 text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hubungi Kami</h2>
              <p className="mt-4 max-w-md text-sky-100">Diskusikan kebutuhan proyek Anda bersama tim kami. Kami siap membantu.</p>
              <a href={`mailto:${site.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-sky-700 shadow-lg transition hover:bg-sky-50">
                Kirim Email
              </a>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                </span>
                <div>
                  <p className="font-semibold">Alamat Kantor</p>
                  <p className="mt-1 text-sm text-sky-100">{site.address.street}<br />{site.address.locality}, {site.address.region}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-sky-100 underline-offset-2 hover:underline">{site.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-auto rounded bg-white/95 p-1" />
            <span className="font-semibold text-slate-200">{site.name}</span>
          </div>
          <p>&copy; {new Date().getFullYear()} {site.shortName}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
