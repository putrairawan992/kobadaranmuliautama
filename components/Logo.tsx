// Real brand logo. Drop the file at public/logo.png (transparent background).
// Full lockup includes the company name, so no separate text is needed.
export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.png" alt="PT. Kobadaran Mulia Utama" className={className} />;
}

// Alias kept for existing call sites that want just the mark-sized logo.
export function LogoMark({ className = "" }: { className?: string }) {
  return <Logo className={className} />;
}
