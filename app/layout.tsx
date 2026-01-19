import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Debayudh Basu - Full-Stack & Web3 Developer",
  description: "Portfolio of Debayudh Basu, a Full-Stack & Web3 Developer from Kolkata. Building decentralized protocols, enterprise backends, and AI-powered solutions. Specialized in blockchain architecture, full-stack development, and scalable system design.",
  keywords: ["Web3 Developer", "Blockchain Developer", "Full-Stack Developer", "Smart Contracts", "DeFi", "React", "Next.js", "Solidity", "NestJS", "Mobile Development"],
  authors: [{ name: "Debayudh Basu" }],
  creator: "Debayudh Basu",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Debayudh Basu - Full-Stack & Web3 Developer",
    description: "Building decentralized protocols, enterprise backends, and AI-powered solutions",
    siteName: "Debayudh Basu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debayudh Basu - Full-Stack & Web3 Developer",
    description: "Building decentralized protocols, enterprise backends, and AI-powered solutions",
    creator: "@BasuDebayudh",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
