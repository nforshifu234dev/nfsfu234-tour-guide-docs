// components/layout/Footer/index.tsx  (marketing/landing version)

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [version, setVersion] = useState('1.0.1') // fallback

  useEffect(() => {
    fetch('https://registry.npmjs.org/nfsfu234-tour-guide/latest')
      .then(res => res.json())
      .then(data => {
        if (data?.version) setVersion(data.version)
      })
      .catch(() => {}) // silent fail
  }, [])

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#070709',
      padding: 'clamp(4rem, 10vw, 6rem) 1.5rem 3rem',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 'clamp(2.5rem, 6vw, 4rem)',
      }}>
        {/* Brand column - kept big and promotional for landing */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '22px' }}>
              <Image src="/favicon.svg" alt="NFSFU234TourGuide" width={34} height={34} />
            </span>
            <span style={{ fontWeight: 800, fontSize: '16px', color: '#fafafa' }}>NFSFU234TourGuide</span>
          </div>
          <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '260px' }}>
            Zero-dependency React tour guide library for beautiful onboarding, walkthroughs, and product tours.
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 14px', borderRadius: '8px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ color: '#3f3f46', fontSize: '12px', fontFamily: 'monospace' }}>$</span>
            <code style={{ fontSize: '12px', color: '#a1a1aa', fontFamily: 'monospace' }}>npm i nfsfu234-tour-guide</code>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide" target="_blank" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#71717a', textDecoration: 'none', fontSize: '16px',
            }}>
              ⭐
            </a>
            <a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide/issues" target="_blank" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#71717a', textDecoration: 'none', fontSize: '16px',
            }}>
              🐛
            </a>
            <a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide/discussions" target="_blank" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#71717a', textDecoration: 'none', fontSize: '16px',
            }}>
              💬
            </a>
          </div>
        </div>

        {/* Docs column */}
        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#fafafa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Documentation
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Getting Started', href: '/getting-started' },
              { label: 'API Reference', href: '/api-reference' },
              { label: 'Examples', href: '/examples' },
              { label: 'Migration Guide', href: '/migration' },
              { label: 'Changelog', href: 'https://github.com/nforshifu234dev/nfsfu234-tour-guide/blob/main/CHANGELOG.md', external: true },
            ].map(link => (
              <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} style={{
                fontSize: '13px', color: '#52525b', textDecoration: 'none',
              }}>
                {link.label}{link.external ? ' ↗' : ''}
              </a>
            ))}
          </div>
        </div>

        {/* Resources column */}
        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#fafafa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Resources
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'FAQ', href: '/faq' },
              { label: 'Troubleshooting', href: '/troubleshooting' },
              { label: 'Contributing', href: '/contributing' },
              { label: 'npm Package', href: 'https://www.npmjs.com/package/nfsfu234-tour-guide', external: true },
              { label: 'GitHub Repo', href: 'https://github.com/nforshifu234dev/nfsfu234-tour-guide', external: true },
            ].map(link => (
              <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} style={{
                fontSize: '13px', color: '#52525b', textDecoration: 'none',
              }}>
                {link.label}{link.external ? ' ↗' : ''}
              </a>
            ))}
          </div>
        </div>

        {/* NFORSHIFU234 Dev - new cross-promotion column */}
        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#10b981', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            NFORSHIFU234 Dev
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://nforshifu234dev.com" target="_blank" style={{
              fontSize: '13px', color: '#10b981', fontWeight: 600, textDecoration: 'none',
            }}>
              nforshifu234dev.com ↗
            </a>
            <a href="https://www.nforshifu234dev.com/projects/open-source" target="_blank" style={{
              fontSize: '13px', color: '#52525b', textDecoration: 'none',
            }}>
              Open-Source Projects
            </a>
            <a href="https://www.nforshifu234dev.com/projects/apps" target="_blank" style={{
              fontSize: '13px', color: '#52525b', textDecoration: 'none',
            }}>
              Public Apps (WishIT)
            </a>
            <a href="https://www.nforshifu234dev.com/projects/clients" target="_blank" style={{
              fontSize: '13px', color: '#52525b', textDecoration: 'none',
            }}>
              Client Work
            </a>
            <a href="https://www.youtube.com/@nforshifu234dev" target="_blank" style={{
              fontSize: '13px', color: '#52525b', textDecoration: 'none',
            }}>
              YouTube ↗
            </a>
            <a href="https://instagram.com/nforshifu234dev" target="_blank" style={{
              fontSize: '13px', color: '#52525b', textDecoration: 'none',
            }}>
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Community column */}
        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#fafafa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Community
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'GitHub Discussions', href: 'https://github.com/nforshifu234dev/nfsfu234-tour-guide/discussions', external: true },
              { label: 'Report a Bug', href: 'https://github.com/nforshifu234dev/nfsfu234-tour-guide/issues/new', external: true },
              { label: 'Request a Feature', href: 'https://github.com/nforshifu234dev/nfsfu234-tour-guide/issues/new', external: true },
              { label: 'Open a PR', href: 'https://github.com/nforshifu234dev/nfsfu234-tour-guide/pulls', external: true },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" style={{
                fontSize: '13px', color: '#52525b', textDecoration: 'none',
              }}>
                {link.label} ↗
              </a>
            ))}
          </div>
          <div style={{
            marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 10px', borderRadius: '6px',
            background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 600 }}>v{version} — Latest</span>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '1.5rem 1.5rem',
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px', fontSize: '12px', color: '#3f3f46',
      }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} NFSFU234TourGuide. Released under the MIT License.
        </p>
        <p style={{ margin: 0 }}>
          Built with ❤️ by <a href="https://nforshifu234dev.com" target="_blank" style={{ color: '#10b981' }}>NFORSHIFU234 Dev</a> 🇳🇬
        </p>
      </div>
    </footer>
  )
}