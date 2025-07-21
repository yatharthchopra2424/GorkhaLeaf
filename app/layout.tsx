import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Gorkha Leaf - Premium Darjeeling Tea | Authentic Tea Estate Since 1870s",
  description:
    "Experience authentic Darjeeling tea crafted with the Gorkha spirit. Premium first flush, second flush, green tea, and specialty blends direct from our tea gardens. Free shipping on orders above ₹999.",
  keywords:
    "Darjeeling tea, premium tea, first flush, second flush, green tea, white tea, tea estate, organic tea, fair trade tea, Gorkha Leaf, authentic tea, tea online, buy tea",
  authors: [{ name: "Gorkha Leaf Tea Estate" }],
  openGraph: {
    title: "Gorkha Leaf - Premium Darjeeling Tea Estate",
    description:
      "Authentic Darjeeling tea crafted with heritage, pride, and the Gorkha spirit. Shop premium teas direct from our gardens.",
    type: "website",
    locale: "en_US",
    siteName: "Gorkha Leaf",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gorkha Leaf - Where Every Leaf Tells a Tale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorkha Leaf - Premium Darjeeling Tea Estate",
    description: "Authentic Darjeeling tea crafted with heritage, pride, and the Gorkha spirit.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
