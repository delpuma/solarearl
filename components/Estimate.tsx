"use client";
import { useState } from "react";

export default function Estimate(){
  const [address, setAddress] = useState("");
  const [bill, setBill] = useState("");
  const [res, setRes] = useState<{low:number;high:number}|null>(null);

  function onSubmit(e:React.FormEvent){
    e.preventDefault();
    const m = parseFloat(bill||"0");
    if(!address || isNaN(m) || m<=0){ alert("Add address + monthly bill."); return; }
    const annual = m*12;
    setRes({ low: Math.round(annual*.30), high: Math.round(annual*.60) });
  }

  return (
    <section id="savings" className="section bg-white">
      <div className="container-max grid md:grid-cols-2 gap-8 items-start">
        <div className="soft">
          <p className="kicker">Instant estimate</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">See Your Potential Savings</h2>
          <p className="mt-2 text-slate-600">No pushy calls—just a quick estimate based on your address and bill.</p>
          <form onSubmit={onSubmit} className="mt-4 grid gap-3">
            <input className="input" placeholder="Home address" value={address} onChange={e=>setAddress(e.target.value)} />
            <input className="input" type="number" placeholder="Average monthly bill ($)" value={bill} onChange={e=>setBill(e.target.value)} />
            <div className="flex gap-3">
              <button className="btn btn-primary" type="submit">Get My Free Estimate</button>
              <a className="btn btn-outline" href="tel:+14075550199">Talk to Earl</a>
            </div>
            {res && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl">
                <p className="font-semibold">Estimated Annual Savings</p>
                <p className="text-2xl font-extrabold">${res.low.toLocaleString()} – ${res.high.toLocaleString()}</p>
                <p className="text-xs text-slate-600">Actual savings depend on usage, roof, incentives, and utility rates.</p>
              </div>
            )}
            <p className="text-xs text-slate-500 mt-2">Disclaimer: Savings vary by usage, roof, location, and system size. This is an estimate only.</p>
          </form>
        </div>
        <div className="card">
          <img src="/images/solarearl-savings.png" alt="Solar Earl showing savings" className="mx-auto max-h-[420px]" />
        </div>
      </div>
    </section>
  );
}
