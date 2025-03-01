// app/layout.tsx

import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"

export const metadata: Metadata = {
  title: "Next.js App with Dark Mode",
  description: "Next.js uygulaması dark mod desteği ile",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}