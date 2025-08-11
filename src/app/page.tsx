// app/page.tsx
import Header from "@/components/Header";
import Estimate from "@/components/Estimate";

export default function Page(){
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative hero-grad">
        <div className="blob sun -top-16 -left-10"></div>
        <div className="blob sea -bottom-24 -right-10"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <p className="kicker">Florida’s Friendly Solar Nerd</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Own Your Power. <span className="text-amber-600">Cut Your Bill.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              I’m <strong>Solar Earl</strong>—I design no-pressure, custom solar systems for Central Florida families so
              you can slash bills and enjoy predictable energy costs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#cta">Free Savings Estimate</a>
              <a className="btn btn-outline" href="tel:+14075550199">Call Now</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <span>⭐️⭐️⭐️⭐️⭐️ Dozens of 5-Star Reviews</span><span>·</span><span>NABCEP Certified</span>
            </div>
          </div>
          <div className="card">
            <img src="/images/solarearl-hero.png" alt="Solar Earl" className="mx-auto max-h-[520px]" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="card">
            <img src="/images/solarearl-about.png" className="mx-auto max-h-[420px]" alt="About Solar Earl" />
          </div>
          <div>
            <p className="kicker">About Solar Earl</p>
            <h2 className="section-title">Straight Talk. Smart Design. Local Expertise.</h2>
            <p className="mt-3 text-slate-700">
              I’ve lived in Central Florida for 40+ years and spent my career helping families live smarter and save
              more. With <strong>7+ years in renewable energy</strong> and <strong>15 years in smart-home tech at Samsung</strong>,
              I bring practical know-how to every project—no pressure, no fluff.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="soft-card">✅ Central Florida (Winter Park/Orlando)</li>
              <li className="soft-card">✅ NABCEP Certified</li>
              <li className="soft-card">✅ BBB Accredited</li>
              <li className="soft-card">✅ Dozens of 5-Star Reviews</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="kicker">How it works</p>
          <h2 className="section-title">A simple path to energy independence</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t:"Share a little info", d:"Just your address and average bill. I’ll do the rest."},
              { t:"I run the numbers", d:"Local weather, roof, shade and utility rates—no guesswork."},
              { t:"Get your custom plan", d:"Clear report, financing options, and a design that fits your life."},
            ].map((s, i)=>(
              <div key={i} className="soft-card">
                <div className="text-amber-600 font-bold text-sm">Step {i+1}</div>
                <h3 className="font-bold text-xl mt-1">{s.t}</h3>
                <p className="text-slate-600 mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAVINGS */}
      <Estimate />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section bg-cream">
        <div className="mx-auto max-w-6xl px-4">
          <p className="kicker">Real homeowners, real savings</p>
          <h2 className="section-title">What your neighbors are saying</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { q:"Our bill went from $210 to under $30. We wish we did it sooner.", a:"The Martinez Family, Orlando" },
              { q:"We love producing our own power and avoiding the rate hikes.", a:"J. Smith, Kissimmee" },
              { q:"Earl made everything simple and the system performs as promised.", a:"D. Nguyen, Winter Garden" },
            ].map((t,i)=>(
              <figure key={i} className="soft-card">
                <blockquote className="text-lg">“{t.q}”</blockquote>
                <figcaption className="mt-2 text-sm text-slate-600">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section hero-grad">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-4xl font-extrabold">Ready to see your savings?</h2>
          <p className="mt-2 text-slate-700">Get a free custom estimate—no obligation, no pressure.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a className="btn btn-primary" href="#savings">Get My Free Estimate</a>
            <a className="btn btn-outline" href="tel:+14075550199">Call Earl</a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-4 soft-card text-center">
          <h3 className="text-2xl font-extrabold">Tips, incentives & Florida solar news</h3>
          <p className="text-slate-600 mt-2">Join Earl’s monthly email (no spam — ever).</p>
          <form className="mt-4 grid sm:grid-cols-[1fr_auto] gap-3">
            <input className="input" type="email" placeholder="Your email address" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
          <p className="text-xs text-slate-500 mt-2">Unsubscribe anytime.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-100 pt-12 pb-8">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8">
          <div>
            <img src="/images/logo.svg" className="h-10 mb-3" alt="Solar Earl" />
            <p className="text-slate-300 text-sm">Serving homeowners across Central Florida.</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <p className="text-slate-300 text-sm mt-2">Phone: <a className="underline" href="tel:+14075550199">(407) 555-0199</a></p>
            <p className="text-slate-300 text-sm">Email: <a className="underline" href="mailto:earl@example.com">earl@example.com</a></p>
          </div>
          <div>
            <p className="font-semibold">Hours</p>
            <p className="text-slate-300 text-sm mt-2">Mon–Sat: 8am–7pm</p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 text-xs text-slate-400 mt-8">
          <p>Disclaimer: Savings vary by usage, location, and system size. This estimate is informational only.</p>
          <p className="mt-1">© {new Date().getFullYear()} Solar Earl. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
