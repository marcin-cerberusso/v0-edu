import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Eduhuśtawka - Wsparcie w rozwoju dziecka",
  description: "Centrum rozwoju dla dzieci w wieku 2-6 lat. Odkrywaj, ucz się i rozwijaj razem z nami!",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
