// components/Header.tsx
export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="Solar Earl" className="h-10" />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#process" className="hover:opacity-80">Process</a>
          <a href="#savings" className="hover:opacity-80">Savings</a>
          <a href="#testimonials" className="hover:opacity-80">Reviews</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+14075550199" className="btn btn-outline hidden sm:inline-flex">Call (407) 555-0199</a>
          <a href="#cta" className="btn btn-primary">Free Estimate</a>
        </div>
      </div>
    </header>
  );
}
