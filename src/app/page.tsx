// app/page.tsx
import Header from "../../components/Header";
import Estimate from "../../components/Estimate";


export default function Page() {
  return (
    <>
      <Header />

      {/* HERO (strong visual like FSC, but with Earl) */}
      <section className="relative hero-grad">
        <div className="container-max grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <p className="kicker">Florida’s Friendly Solar Nerd</p>
            <h1 className="section-title">
              Own Your Power. <span className="text-amber-600">Cut Your Bill.</span>
            </h1>
            <p className="sub mt-3">
              Custom, no-pressure solar designs for Central Florida homes. Clear answers. Honest numbers. Fast savings estimate.
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
      <section id="about" className="section bg-white">
        <div className="container-max grid lg:grid-cols-2 gap-10 items-center">
          <div className="card">
            <img src="/images/solarearl-about.png" alt="About Solar Earl" className="mx-auto max-h-[420px]" />
          </div>
          <div>
            <p className="kicker">About Solar Earl</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Straight Talk. Smart Design. Local Expertise.</h2>
            <p className="mt-3 text-slate-700">
              40+ years in Central Florida. <strong>7+ years in renewable energy</strong> and
              <strong> 15 years in smart-home tech at Samsung</strong>. Former VP of a solar division.
              No pressure. No fluff. Just solutions that protect your wallet and your home.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="soft">✅ Central Florida (Winter Park/Orlando)</li>
              <li className="soft">✅ NABCEP Certified</li>
              <li className="soft">✅ BBB Accredited</li>
              <li className="soft">✅ Dozens of 5-Star Reviews</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS (cards like FSC) */}
      <section id="process" className="section bg-cream">
        <div className="container-max">
          <p className="kicker">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">A simple path to energy independence</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="soft">
              <div className="text-amber-600 font-bold text-sm">Step 1</div>
              <h3 className="font-bold text-xl mt-1">Share a little info</h3>
              <p className="text-slate-600 mt-1">Just your address and average bill. I’ll do the rest.</p>
            </div>
            <div className="soft">
              <div className="text-amber-600 font-bold text-sm">Step 2</div>
              <h3 className="font-bold text-xl mt-1">I run the numbers</h3>
              <p className="text-slate-600 mt-1">Local weather, roof, shade and utility rates—no guesswork.</p>
            </div>
            <div className="soft">
              <div className="text-amber-600 font-bold text-sm">Step 3</div>
              <h3 className="font-bold text-xl mt-1">Get your custom plan</h3>
              <p className="text-slate-600 mt-1">Clear report, financing options, and a design that fits your life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAVINGS */}
      <Estimate />

      {/* TESTIMONIALS */}
      <section id="reviews" className="section bg-cream">
        <div className="container-max">
          <p className="kicker">Real homeowners, real savings</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">What your neighbors are saying</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { q:"Our bill went from $210 to under $30. We wish we did it sooner.", a:"The Martinez Family, Orlando" },
              { q:"We love producing our own power and avoiding the rate hikes.", a:"J. Smith, Kissimmee" },
              { q:"Earl made everything simple and the system performs as promised.", a:"D. Nguyen, Winter Garden" },
            ].map((t,i)=>(
              <figure key={i} className="soft">
                <blockquote className="text-lg">“{t.q}”</blockquote>
                <figcaption className="mt-2 text-sm text-slate-600">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIPE */}
      <section id="cta" className="section hero-grad">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to see your savings?</h2>
          <p className="mt-2 text-slate-700">Get a fast, no-pressure solar estimate in minutes.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a className="btn btn-primary" href="#savings">Get My Free Estimate</a>
            <a className="btn btn-outline" href="tel:+14075550199">Call Earl</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200">
        <div className="container-max py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© 2025 Solar Earl • Central Florida</div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-amber-600">About</a>
            <a href="#process" className="hover:text-amber-600">Process</a>
            <a href="#reviews" className="hover:text-amber-600">Reviews</a>
            <a href="#savings" className="hover:text-amber-600">Estimate</a>
          </div>
        </div>
      </footer>
    </>
  );
}
