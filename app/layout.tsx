import type React from "react"
import type { Metadata } from "next"
import { Inter, Fredoka } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Solar Earl - Best Solar Company Central Florida | Beat Duke Energy Bills",
  description:
    "Central Florida's #1 solar company! Earl saves you hundreds on Duke Energy bills with premium solar installations. Free quotes, expert service, and guaranteed savings in Orlando, Tampa, and surrounding areas.",
  keywords:
    "best solar company central florida, solar panels florida, duke energy alternative, solar installation orlando, solar panels tampa, florida solar savings, residential solar florida",
  authors: [{ name: "Solar Earl" }],
  creator: "Solar Earl",
  publisher: "Solar Earl",
  robots: "index, follow",
  openGraph: {
    title: "Solar Earl - Best Solar Company Central Florida",
    description:
      "Stop overpaying Duke Energy! Earl's solar solutions save Central Florida families hundreds every month.",
    url: "https://solarearl.com",
    siteName: "Solar Earl",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Earl - Best Solar Company Central Florida",
    description:
      "Stop overpaying Duke Energy! Earl's solar solutions save Central Florida families hundreds every month.",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <head>
        <link rel="canonical" href="https://solarearl.com" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Central Florida" />
        <meta name="geo.position" content="28.5383;-81.3792" />
        <meta name="ICBM" content="28.5383, -81.3792" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
