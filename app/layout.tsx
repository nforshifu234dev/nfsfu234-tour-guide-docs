import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { siteConfig } from '@/config/site'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s – ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/*
          Same defaults nextra-theme-docs uses internally (attribute="class",
          defaultTheme="system", storageKey="theme"). The docs route already
          gets an equivalent ThemeProvider bundled inside nextra's own Layout
          component — this one at the root is what makes the homepage (which
          has no theming of its own) actually respond to light/dark/system.
          Matching storageKey means both stay in sync either way.
        */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
          {/* GA4 — only loads in production */}
          {process.env.NODE_ENV === 'production' && siteConfig.ga4 && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4}`}
                strategy="afterInteractive"
              />
              <Script id="ga4-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.ga4}');
                `}
              </Script>
            </>
          )}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}