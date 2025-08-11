// app/page.tsx
import Script from "next/script";

export default function Page() {
  return (
    <>
      {/* JSON-LD LocalBusiness */}
      <Script id="ld-local" type="application/ld+json">{`
      {
        "@context":"https://schema.org",
        "@type":"LocalBusiness",
        "name":"Solar Earl",
        "image":"https://www.solarearl.example/images/logo.svg",
        "telephone":"+1-407-555-0199",
        "address":{"@type":"PostalAddress","addressRegion":"FL","addressLocality":"Orlando","addressCountry":"US"},
        "areaServed":"Central Florida",
        "url":"https://www.solarearl.example/",
        "description":"Solar consulting and design for homeowners across Central Florida. Honest numbers. No-pressure guidance."
      }
      `}</Script>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white/60 sticky top-0 z-40 backdrop-blur">
        <div className="container mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Solar Earl logo" className="h-10" />
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+14075550199" className="btn btn-outline hidden sm:inline-flex">
              Call (407) 555-0199
            </a>
            <a href="#estimate" className="btn btn-primary rounded-3xl">Free Savings Estimate</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-sun">
        <div className="container mx-auto max-w-[1200px] px-4 grid md:grid-cols-2 gap-8 items-center py-14">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Own Your Power. Pay Less to the Utility.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              I’m <strong>Solar Earl</strong>—your friendly neighborhood <em>Solar Nerd</em>.
              I design no-pressure, custom solar systems for Central Florida families so you
              can slash bills and enjoy predictable energy costs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+14075550199" className="btn btn-outline rounded-3xl">Call Now</a>
              <a href="#estimate" className="btn btn-primary rounded-3xl">See My Savings</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <span>⭐️⭐️⭐️⭐️⭐️ Dozens of 5-Star Reviews</span>
              <span>·</span>
              <span>NABCEP Certified</span>
            </div>
          </div>
          <div className="relative">
            {/* Put your hero character PNG here */}
            <img
              src="/images/solarearl-hero.png"
              alt="Solar Earl character"
              className="mx-auto max-h-[480px] drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12">
        <div className="container mx-auto max-w-[1200px] px-4 grid md:grid-cols-4 gap-5">
          <div className="card">
            <h3 className="font-bold text-lg">Lower Monthly Bills</h3>
            <p className="text-gray-600">Produce your own power and buy less from the utility.</p>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg">Predictable Rates</h3>
            <p className="text-gray-600">Protect yourself from rate hikes with long-term stability.</p>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg">Increase Home Value</h3>
            <p className="text-gray-600">Solar homes can sell for more—future buyers love low bills.</p>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg">Incentives & Rebates</h3>
            <p className="text-gray-600">Use federal credits and local programs to cut upfront cost.</p>
          </div>
        </div>
      </section>

      {/* Calculator / CTA */}
      <EstimateSection />

      {/* How it works */}
      <section className="py-12">
        <div className="container mx-auto max-w-[1200px] px-4">
          <h2 className="text-3xl font-extrabold">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="card">
              <div className="text-sm font-semibold text-orange-600">Step 1</div>
              <h3 className="font-bold text-xl">Share a little info</h3>
              <p className="text-gray-600">Just your address and average bill. I’ll do the rest.</p>
            </div>
            <div className="card">
              <div className="text-sm font-semibold text-orange-600">Step 2</div>
              <h3 className="font-bold text-xl">I run the numbers</h3>
              <p className="text-gray-600">Local weather, roof size, shade, and utility rates—no guesswork.</p>
            </div>
            <div className="card">
              <div className="text-sm font-semibold text-orange-600">Step 3</div>
              <h3 className="font-bold text-xl">Get your custom plan</h3>
              <p className="text-gray-600">Clear report, financing options, and a design that fits your life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <h2 className="text-3xl font-extrabold">Real Results from Local Homeowners</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="card">
              <p className="text-xl">“Our bill went from $210 to under $30 a month. We wish we did it sooner.”</p>
              <p className="mt-2 text-sm text-gray-600">— The Martinez Family, Orlando, FL</p>
            </div>
            <div className="card">
              <p className="text-xl">“It’s nice knowing we’re producing our own clean power and not at the mercy of the utility company.”</p>
              <p className="mt-2 text-sm text-gray-600">— J. Smith, Kissimmee, FL</p>
            </div>
            <div className="card">
              <p className="text-xl">“Earl made everything simple and stress-free. Honest, responsive, and the system performs exactly as promised.”</p>
              <p className="mt-2 text-sm text-gray-600">— D. Nguyen, Winter Garden, FL</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div className="container mx-auto max-w-[1200px] px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            {/* About image */}
            <img
              src="/images/solarearl-about.png"
              alt="About Solar Earl character"
              className="mx-auto max-h-[420px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">About Solar Earl</h2>
            <p className="mt-3 text-gray-700">
              Hi, I’m Earl—your friendly neighborhood <strong>Solar Nerd</strong>. I’ve lived in Central Florida for
              over 40 years and spent my career helping families live smarter and save more. With <strong>7+ years in
              renewable energy</strong> and <strong>15 years in smart-home tech at Samsung Electronics</strong>, I bring
              practical know-how and straight talk to every project.
            </p>
            <p className="mt-3 text-gray-700">
              As a former VP of a solar division and a family man, I care about solutions that protect your wallet and
              your home. No pressure. No fluff. Just clear answers, honest numbers, and a design built for your roof.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="tel:+14075550199" className="btn btn-outline rounded-3xl">Call Earl</a>
              <a href="#estimate" className="btn btn-primary rounded-3xl">Get My Savings</a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="card">✅ Central Florida Resident (Winter Park/Orlando)</li>
              <li className="card">✅ NABCEP Certified</li>
              <li className="card">✅ BBB Accredited</li>
              <li className="card">✅ Dozens of 5-Star Reviews</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <details className="card"><summary className="font-semibold">How much can I really save?</summary>
              Savings vary, but many Central Florida homeowners see 30–60% lower annual electricity costs depending on usage, roof, and incentives.
            </details>
            <details className="card"><summary className="font-semibold">What incentives are available?</summary>
              The federal solar Investment Tax Credit (ITC) can offset a significant portion of costs, with additional utility and local programs when available.
            </details>
            <details className="card"><summary className="font-semibold">Will solar work with my roof?</summary>
              I evaluate roof size, shade, pitch, and age, and give you a custom design—no cookie-cutter layouts.
            </details>
            <details className="card"><summary className="font-semibold">Is financing available?</summary>
              Yes. We’ll walk through options that fit your budget so you can go solar with confidence.
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-100">
        <div className="container mx-auto max-w-[1200px] px-4 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <img src="/images/logo.svg" alt="Solar Earl logo" className="h-10 mb-2" />
            <p className="text-gray-400 text-sm">Serving homeowners across Central Florida.</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <p className="text-gray-300 text-sm mt-2">Phone: <a href="tel:+14075550199" className="underline">(407) 555-0199</a></p>
            <p className="text-gray-300 text-sm">Email: <a href="mailto:earl@example.com" className="underline">earl@example.com</a></p>
          </div>
          <div>
            <p className="font-semibold">Hours</p>
            <p className="text-gray-300 text-sm mt-2">Mon–Sat: 8am–7pm</p>
          </div>
        </div>
        <div className="container mx-auto max-w-[1200px] px-4 mt-8 text-xs text-gray-400">
          <p>Disclaimer: Savings vary based on energy usage, location, and system size. This tool provides an estimate only.</p>
          <p className="mt-1">© 2025 Solar Earl. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

/** ---------- Client Component (inline) ---------- */
"use client";

import { useId, useMemo, useState } from "react";

function EstimateSection() {
  const [address, setAddress] = useState("");
  const [bill, setBill] = useState<string>("");
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);
  const id = useId();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const monthly = parseFloat(bill || "0");
    if (!address || isNaN(monthly) || monthly <= 0) {
      alert("Please add your address and average monthly bill.");
      return;
    }
    const annual = monthly * 12;
    const low = Math.round(annual * 0.3);
    const high = Math.round(annual * 0.6);
    setResult({ low, high });
  }

  return (
    <section id="estimate" className="py-12 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 grid md:grid-cols-2 gap-8 items-start">
        <div className="card rounded-3xl">
          <h2 className="text-2xl font-extrabold">See Your Potential Savings in Seconds</h2>
          <p className="text-gray-600 mt-1">No pushy calls—just a quick estimate based on your address and bill.</p>
          <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
            <input
              className="input"
              type="text"
              name={`address-${id}`}
              placeholder="Home address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              className="input"
              type="number"
              name={`bill-${id}`}
              placeholder="Average monthly bill ($)"
              min={10}
              step={1}
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
            <div className="flex gap-3">
              <button className="btn btn-primary rounded-3xl" type="submit">Get My Free Estimate</button>
              <a href="tel:+14075550199" className="btn btn-outline rounded-3xl">Talk to Earl</a>
            </div>
            {result && (
              <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="font-semibold">Estimated Annual Savings:</p>
                <p className="text-2xl font-extrabold">
                  ${result.low.toLocaleString()} – ${result.high.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  Based on your input. Actual savings depend on usage, roof, incentives, and utility rates.
                </p>
              </div>
            )}
            <p className="text-xs text-gray-500 mt-2">
              Disclaimer: Savings vary by usage, roof, location, and system size. This is an estimate only.
            </p>
          </form>
        </div>
        <div className="card rounded-3xl">
          {/* Put your “money pose” PNG here */}
          <img
            src="/images/solarearl-savings.png"
            alt="Solar Nerd showing savings"
            className="mx-auto max-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
