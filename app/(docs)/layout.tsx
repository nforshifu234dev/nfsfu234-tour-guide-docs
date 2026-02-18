import FooterDocs from '@/components/layout/Footer/FooterDocs'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://nfsfu234-tour-guide.nforshifu234dev.com'), // ← your actual domain
  title: {
    default: 'NFSFU234TourGuide',
    template: '%s – NFSFU234TourGuide',  // "Getting Started – NFSFU234TourGuide"
  },
  description: 'Zero-dependency React tour guide library for React apps.',
  openGraph: {
    siteName: 'NFSFU234TourGuide',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <Layout
      navbar={
        <Navbar
          logo={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '22px' }}>
              <Image src="/favicon.svg" alt="NFSFU234TourGuide" width={34} height={34} />
            </span>
            <span style={{ fontWeight: 800, fontSize: '16px', color: '#fafafa' }}>NFSFU234TourGuide</span>
          </div>
          }
          projectLink="https://github.com/nforshifu234dev/nfsfu234-tour-guide"
        />
      }
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/nforshifu234dev/nfsfu234-tour-guide-docs/tree/main"
    //   footer={<Footer>MIT {new Date().getFullYear()} © NFSFU234TourGuide</Footer>}
      footer={<FooterDocs />}
      editLink="Edit this page on GitHub →"
      sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
      toc={{ backToTop: true }}
    //   timestamp={true}   // ← add this line

    >
      {children}
    </Layout>
  )
}