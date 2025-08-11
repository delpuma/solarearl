// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Solar Energy Company in Central Florida | Solar Earl",
  description:
    "Lower your electric bill and own your power with Solar Earl — Central Florida’s friendly Solar Nerd. Honest numbers, custom designs, and fast savings estimates.",
  alternates: { canonical: "https://www.solarearl.example/" },
  openGraph: {
    title: "Best Solar Energy Company in Central Florida | Solar Earl",
    description:
      "Lower your electric bill and own your power with Solar Earl — honest answers, custom designs, fast savings estimate.",
    type: "website",
    url: "https://www.solarearl.example/",
    images: [{ url: "/images/logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Solar Energy Company in Central Florida | Solar Earl",
    description:
      "Lower your electric bill and own your power with Solar Earl — honest answers, custom designs, fast savings estimate.",
    images: ["/images/logo.svg"],
  },
  icons: { icon: "/images/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-900">{children}</body>
    </html>
  );
}
