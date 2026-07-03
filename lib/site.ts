// Single source of truth for company info — used by metadata, JSON-LD, and UI.
export const site = {
  name: "PT. KOBADARAN MULIA UTAMA",
  shortName: "Kobadaran Mulia Utama",
  tagline: "General Supplier, Contractor, Technical Service & IT Solution",
  description:
    "PT. Kobadaran Mulia Utama — penyedia jasa General Supplier, Contractor, Technical Service, dan IT Solution profesional di Prabumulih, Sumatera Selatan. Solusi teknis & pengadaan terpercaya untuk industri dan bisnis Anda.",
  email: "kobadaranmu@gmail.com",
  email2: "putrairawan993@gmail.com",
  phone: "+62 819-9494-7275",
  phoneHref: "+6281994947275",
  whatsappHref: "https://wa.me/6281994947275",
  address: {
    street: "Jl. Alipatan Gang Amir, RT 029/RW 012, Mangga Besar",
    locality: "Prabumulih Utara",
    region: "Kota Prabumulih, Sumatera Selatan",
    country: "ID",
    postalCode: "31121",
  },
  // Change this to your final Vercel/custom domain before/after deploy.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kobadaran-mulia-utama.vercel.app",
} as const;
