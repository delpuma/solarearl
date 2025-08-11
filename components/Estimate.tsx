"use client";

import { useState } from "react";

export default function Estimate() {
  const [bill, setBill] = useState<number | "">("");
  const savingsLow = typeof bill === "number" ? Math.round(bill * 0.3) : null;
  const savingsHigh = typeof bill === "number" ? Math.round(bill * 0.6) : null;

  return (
    <section id="savings" className="section bg-white">
      <div className="mx-auto max-w-3xl px-4 soft-card">
        <h2 className="text-2xl font-extrabold">Free Savings Estimate</h2>
        <div className="mt-4 flex gap-3">
          <input
            type="number"
            min={0}
            placeholder="Avg monthly bill ($)"
            value={bill}
            onChange={(e) => {
              const v = e.target.value;
              setBill(v === "" ? "" : Number(v));
            }}
            className="input"
          />
          <button className="btn btn-primary">Calculate</button>
        </div>
        {savingsLow !== null && savingsHigh !== null && (
          <p className="mt-4 text-slate-700">
            Estimated monthly savings: ${savingsLow}–${savingsHigh}
          </p>
        )}
      </div>
    </section>
  );
}