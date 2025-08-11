// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solar Earl | Best Solar Energy Company in Central Florida",
  description:
    "Own your power and cut your bill with Solar Earl — Florida’s friendly Solar Nerd. Honest numbers, custom designs, and quick savings estimates.",
  icons: { icon: "/images/logo.svg" },
  openGraph: {
    title: "Solar Earl | Best Solar Energy Company in Central Florida",
    description:
      "Own your power and cut your bill with Solar Earl — honest answers, custom designs, quick savings estimates.",
    images: ["/images/og-share.png"],
    url: "https://www.solarearl.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Earl",
    description:
      "Florida’s friendly Solar Nerd. Honest numbers, custom designs, fast savings estimate.",
    images: ["/images/og-share.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-cream">{children}</body>
    </html>
  );
}
