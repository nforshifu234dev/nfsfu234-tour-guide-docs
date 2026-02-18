// import type { Metadata } from 'next'
// import 'nextra-theme-docs/style.css'
// import './globals.css'

// export const metadata: Metadata = {
//   metadataBase: new URL('https://nfsfu234-tour-guide.nforshifu234dev.com'),
//   title: 'NFSFU234TourGuide — Zero-dependency React Tour Guide',
//   description: 'Beautiful product tours and onboarding flows. Zero dependencies, ~3-4kB gzipped.',
//   openGraph: {
//     title: 'NFSFU234TourGuide',
//     description: 'Beautiful product tours and onboarding flows. Zero dependencies, ~3-4kB gzipped.',
//     url: 'https://nfsfu234-tour-guide.nforshifu234dev.com',
//     siteName: 'NFSFU234TourGuide',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'NFSFU234TourGuide',
//     description: 'Zero-dependency React tour guide library.',
//   },
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>{children}</body>
//     </html>
//   )
// }

import type { Metadata } from 'next'
import Script from 'next/script'
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
      </body>
    </html>
  )
}
