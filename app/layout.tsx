import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"
import { AOSInit } from "@/components/AOSInit"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ONE STOP SIGNATURE TECHNICAL SERVICES LLC",
  description: "Your Partner in Total Facility Management Solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AOSInit />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Script to scroll to top on page navigation */}
        <Script id="scroll-to-top">
          {`
            if (typeof window !== 'undefined') {
              // When the page loads
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
              });
              
              // When navigating using browser back/forward buttons
              window.addEventListener('popstate', function() {
                window.scrollTo(0, 0);
              });
              
              // For Next.js route changes
              if (typeof window.__NEXT_DATA__ !== 'undefined') {
                const originalPush = history.pushState;
                history.pushState = function() {
                  originalPush.apply(this, arguments);
                  window.scrollTo(0, 0);
                };
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}
