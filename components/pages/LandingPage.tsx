"use client"


{/* 
  Welcome to the landing page of NFSFU234 Tour Guide! This is a React component library for creating interactive product tours and onboarding flows.
*/}

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import { useLatestVersion } from '@/hooks/useLatestVersion'

export function LandingPage() {
  const [copied, setCopied] = useState(false)
  const [activeTheme, setActiveTheme] = useState('dark')
  const [tourStep, setTourStep] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const version = useLatestVersion()

  const copy = () => {
    navigator.clipboard.writeText('npm install @nfsfu234/tour-guide')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // NOTE: this `themes` object is the live-demo PREVIEW data — it shows what
  // a consumer's own tour can look like via `customTheme`. It is intentionally
  // NOT tied to site-wide light/dark mode and stays exactly as-is.
  const themes = {
    dark:   { bg: '#18181b', surface: '#27272a', text: '#fafafa', muted: '#a1a1aa', border: '#3f3f46', accent: '#10b981', ring: 'rgba(16,185,129,0.4)',  progress: '#3f3f46'  },
    light:  { bg: '#ffffff', surface: '#f4f4f5', text: '#18181b', muted: '#71717a', border: '#e4e4e7', accent: '#3b82f6', ring: 'rgba(59,130,246,0.4)',  progress: '#dbeafe'  },
    purple: { bg: '#0d0019', surface: '#1a0035', text: '#faf5ff', muted: '#c4b5fd', border: '#4c1d95', accent: '#a855f7', ring: 'rgba(168,85,247,0.5)', progress: '#3b0764'  },
  }
  const th = themes[activeTheme]

  const demoSteps = [
    { target: 'demo-1', title: 'Welcome!',        body: 'This is step 1. Tooltips anchor perfectly to their target elements.' },
    { target: 'demo-2', title: 'Smart Themes',    body: 'Choose dark, light, or go fully custom with ThemeConfig.' },
    { target: 'demo-3', title: 'Mobile-First',    body: 'Device-specific steps and shorter content for small screens.' },
    { target: 'demo-4', title: 'You\'re done! 🎉', body: 'That\'s the full tour. Under 10KB and zero dependencies.' },
  ]

  const activeDemo = tourStep !== null ? demoSteps[tourStep] : null

  const code = `import { Tour } from '@nfsfu234/tour-guide'

const steps = [
  {
    target: '#hero',
    content: 'Welcome to our app!',
    position: 'bottom',
  },
  {
    target: '#features',
    content: 'Check out our features.',
    contentMobile: 'Our features!',
    device: 'both',
  },
]

export default function App() {
  return (
    <>
      <Tour
        steps={steps}
        theme="dark"
        accentColor="#10b981"
        welcomeScreen={{
          enabled: true,
          title: 'Welcome! 👋',
          message: 'Let me show you around.',
        }}
        onComplete={() => {
          localStorage.setItem('toured', 'true')
        }}
      />
      <section id="hero">Your content</section>
      <section id="features">More content</section>
    </>
  )
}`

  // ─── Docs hub cards ───
  const docsLinks = [
    { icon: '🚀', title: 'Getting Started', desc: 'Install and create your first tour in minutes.', href: '/getting-started' },
    { icon: '⚙️', title: 'Configuration',   desc: 'Set shared defaults once with defineConfig() and TourProvider.', href: '/configuration' },
    { icon: '🎨', title: 'Theming',         desc: 'Built-in presets, accent colors, and full custom themes.', href: '/theming' },
    { icon: '📖', title: 'API Reference',   desc: 'Every prop, option, and lifecycle callback.',     href: '/api-reference' },
    { icon: '🧩', title: 'Examples',        desc: 'Real implementation patterns — mobile, i18n, SaaS onboarding.', href: '/examples' },
    { icon: '🔀', title: 'Migration Guide', desc: 'Upgrading from an earlier version, including v1.1.0.', href: '/migration' },
    { icon: '📜', title: 'Changelog',       desc: 'Full version history and bundle size benchmarks.', href: '/changelog' },
    { icon: '🛠️', title: 'Troubleshooting', desc: 'Fixes for common integration issues.',            href: '/troubleshooting' },
    { icon: '❓', title: 'FAQ',             desc: 'Quick answers to common questions.',                href: '/faq' },
  ]

  if (!mounted) return null

  return (
    <div style={{ background: 'var(--tg-bg)', color: 'var(--tg-text)', fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
      {/* ─────────────── NAV ─────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid var(--tg-border)',
        background: 'color-mix(in srgb, var(--tg-bg) 85%, transparent)', backdropFilter: 'blur(12px)',
        padding: '0 clamp(1rem, 4vw, 2rem)', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: 'clamp(16px, 4vw, 20px)' }}>
          <span style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}>
            <Image src="/favicon.svg" alt="NFSFU234TourGuide" width={34} height={34} />
          </span>
          <span>nfsfu234/ <span>tour-guide</span></span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 16px)' }} className="desktop-nav">
          <a href="/getting-started" style={{ color: 'var(--tg-text-muted)', textDecoration: 'none', fontSize: '14px', padding: '6px 12px' }}>Docs</a>
          <a href="/api-reference" style={{ color: 'var(--tg-text-muted)', textDecoration: 'none', fontSize: '14px', padding: '6px 12px' }}>API</a>
          <a href="/examples" style={{ color: 'var(--tg-text-muted)', textDecoration: 'none', fontSize: '14px', padding: '6px 12px' }}>Examples</a>
          <a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide" target="_blank" style={{
            background: 'var(--tg-surface-soft)', color: 'var(--tg-text)', textDecoration: 'none',
            fontSize: '13px', padding: '8px 16px', borderRadius: '8px', fontWeight: 600,
            border: '1px solid var(--tg-border-strong)',
          }}>
            GitHub →
          </a>
        </div>

        {/* Hamburger button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ 
            background: 'none', border: 'none', color: 'var(--tg-text)', fontSize: 'clamp(24px, 6vw, 32px)',
            cursor: 'pointer', display: 'none'
          }} 
          className="hamburger"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: '64px 0 0 0', zIndex: 999,
          background: 'color-mix(in srgb, var(--tg-bg) 98%, transparent)', backdropFilter: 'blur(8px)',
          padding: 'clamp(2rem, 8vw, 3rem) 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1.8rem'
        }}>
          <a href="/getting-started" style={{ color: 'var(--tg-text)', fontSize: '1.25rem', textDecoration: 'none' }}>Docs</a>
          <a href="/api-reference"   style={{ color: 'var(--tg-text)', fontSize: '1.25rem', textDecoration: 'none' }}>API</a>
          <a href="/examples"        style={{ color: 'var(--tg-text)', fontSize: '1.25rem', textDecoration: 'none' }}>Examples</a>
          <a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide" target="_blank" style={{
            color: '#fff', background: 'rgba(16,185,129,0.4)', padding: '12px 24px', borderRadius: '10px', textAlign: 'center', textDecoration: 'none'
          }}>
            GitHub →
          </a>
        </div>
      )}

      {/* ─────────────── HERO ─────────────── */}
      <section style={{ position: 'relative', padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 5rem', textAlign: 'center', overflow: 'hidden' }}>
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: 'clamp(-80px, -15vw, -100px)', left: '50%', transform: 'translateX(-50%)',
          width: 'clamp(600px, 80vw, 900px)', height: 'clamp(400px, 60vw, 700px)', borderRadius: '50%', zIndex: 0,
          background: 'radial-gradient(ellipse, var(--tg-glow) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <a href="/whats-new" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 14px', borderRadius: '100px',
            border: '1px solid rgba(16,185,129,0.35)',
            background: 'rgba(16,185,129,0.1)',
            fontSize: 'clamp(11px, 2.5vw, 13px)', color: 'var(--tg-accent)',
            textDecoration: 'none', marginBottom: '2.5rem',
            fontWeight: 600, letterSpacing: '0.02em',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--tg-accent)', animation: 'pulse 2s infinite' }} />
            v{version} is here — See what's new →
          </a>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0,
            margin: '0 auto 1.5rem', maxWidth: '900px',
          }}>
            Guide your users.<br />
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Ship less code.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--tg-text-muted)',
            maxWidth: '520px', margin: '0 auto 3rem', lineHeight: 1.75,
          }}>
            Zero-dependency React tour guide library. Beautiful onboarding,
            walkthroughs, and product tours — just <strong style={{ color: 'var(--tg-text-soft)' }}>~3-4 kB gzipped</strong> (real app contribution).
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="/getting-started" style={{
              padding: '13px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '15px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 0 0 1px #059669, 0 8px 32px rgba(16,185,129,0.35)',
            }}>
              Get Started →
            </a>
            <a href="/api-reference" style={{
              padding: '13px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '15px',
              background: 'var(--tg-surface-soft)', color: 'var(--tg-text-soft)', textDecoration: 'none',
              border: '1px solid var(--tg-border-strong)',
            }}>
              API Reference
            </a>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '11px 18px', borderRadius: '10px',
            background: 'var(--tg-surface-soft)',
            border: '1px solid var(--tg-border)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ color: 'var(--tg-text-mute-3)', fontSize: '13px', fontFamily: 'monospace' }}>$</span>
            <code style={{ fontSize: '13px', color: 'var(--tg-text-soft)', fontFamily: "'Fira Code', monospace", userSelect: 'all' }}>
              npm install @nfsfu234/tour-guide
            </code>
            <button onClick={copy} style={{
              background: copied ? 'rgba(16,185,129,0.15)' : 'var(--tg-surface-soft)',
              border: `1px solid ${copied ? 'rgba(16,185,129,0.4)' : 'var(--tg-border-strong)'}`,
              color: copied ? 'var(--tg-accent)' : 'var(--tg-text-muted)', cursor: 'pointer',
              padding: '4px 10px', borderRadius: '6px', fontSize: '12px',
              transition: 'all 0.2s', fontWeight: 600,
            }}>
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          {/* ─── Package identity strip ─── */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexWrap: 'wrap', gap: 'clamp(10px, 3vw, 20px)',
            fontSize: '12.5px', color: 'var(--tg-text-mute-2)',
          }}>
            {[
              { label: `v${version}`, href: '/whats-new' },
              { label: 'MIT License' },
              { label: 'React 18+' },
              { label: 'TypeScript' },
              { label: '0 dependencies' },
            ].map((item, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 3vw, 20px)' }}>
                {i > 0 && <span style={{ color: 'var(--tg-text-mute-3)' }}>·</span>}
                {item.href ? (
                  <a href={item.href} style={{ color: 'var(--tg-accent)', textDecoration: 'none', fontWeight: 600 }}>
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── STATS BAR ─────────────── */}
      <div style={{ borderTop: '1px solid var(--tg-border)', borderBottom: '1px solid var(--tg-border)' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem', padding: 'clamp(1.5rem, 4vw, 3rem) 1rem',
        }}>
          {[
            { n: '0',         l: 'Runtime dependencies' },
            { n: '~3–4 kB',   l: 'Gzipped size' },
            { n: 'React 18+', l: 'Peer dependency' },
            { n: 'MIT',       l: 'License' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '2rem 1rem', textAlign: 'center',
            }}>
              <div style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 900, color: 'var(--tg-accent)', letterSpacing: '-0.03em' }}>
                {s.n}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--tg-text-mute-2)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────── COMPARISON TABLE ─────────────── */}

      <section
        style={{
          padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              color: 'var(--tg-accent)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Why This Library?
          </p>

          <h2
            style={{
              fontSize: 'clamp(2rem, 6vw, 2.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              marginBottom: '1rem',
            }}
          >
            Lean by design. Not by accident.
          </h2>

          <p
            style={{
              color: 'var(--tg-text-mute-2)',
              fontSize: 'clamp(1rem, 2.8vw, 1.05rem)',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            A focused React tour experience with a small runtime footprint,
            powerful configuration, and the features you actually need.
          </p>
        </div>

        {/* Table wrapper */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'auto',
            border: '1px solid var(--tg-border-strong)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 'clamp(12px, 2vw, 14px)',
              minWidth: '720px',
            }}
          >
            {/* Header */}
            <thead>
              <tr
                style={{
                  borderBottom: '1px solid var(--tg-border-strong)',
                }}
              >
                <th
                  style={{
                    padding: '16px 20px',
                    textAlign: 'left',
                    background: 'var(--tg-bg-raised)',
                    color: 'var(--tg-text-mute-3)',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    width: '28%',
                  }}
                >
                  Capability
                </th>

                {[
                  {
                    name: '@nfsfu234/tour-guide',
                    highlight: true,
                  },
                  {
                    name: 'React Joyride',
                    highlight: false,
                  },
                  {
                    name: 'Shepherd.js',
                    highlight: false,
                  },
                  {
                    name: 'Intro.js',
                    highlight: false,
                  },
                ].map(({ name, highlight }) => (
                  <th
                    key={name}
                    style={{
                      padding: '16px 20px',
                      textAlign: 'center',
                      background: highlight
                        ? 'rgba(16,185,129,0.06)'
                        : 'var(--tg-bg-raised)',
                      color: highlight ? 'var(--tg-accent)' : 'var(--tg-text-mute-2)',
                      fontSize: '13px',
                      fontWeight: 700,
                      borderLeft: highlight
                        ? '1px solid rgba(16,185,129,0.2)'
                        : '1px solid var(--tg-border)',
                      borderRight: highlight
                        ? '1px solid rgba(16,185,129,0.2)'
                        : 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {highlight && (
                      <span
                        style={{
                          display: 'block',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: 'var(--tg-accent)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '4px',
                        }}
                      >
                        ✦ This library
                      </span>
                    )}

                    {name}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {[
                {
                  feature: 'Bundle size (gzipped)',
                  values: ['~3–4 kB ✦', 'Approx.', 'Approx.', 'Approx.'],
                },
                {
                  feature: 'Runtime dependencies',
                  values: ['0', 'Varies', 'Varies', 'Varies'],
                },
                {
                  feature: 'React-focused',
                  values: ['✅', '✅', '❌', '❌'],
                },
                {
                  feature: 'ESM + CJS builds',
                  values: ['✅', '✅', '✅', '—'],
                },
                {
                  feature: 'TypeScript support',
                  values: ['✅', '✅', '✅', '⚠️'],
                },
                {
                  feature: 'Project-wide configuration',
                  values: ['✅', '—', '—', '—'],
                },
                {
                  feature: 'Mobile-aware steps',
                  values: ['✅', '—', '—', '—'],
                },
                {
                  feature: 'Device-specific content',
                  values: ['✅', '—', '—', '—'],
                },
                {
                  feature: 'Custom themes & colors',
                  values: ['✅', '✅', '✅', '✅'],
                },
                {
                  feature: 'Welcome screen',
                  values: ['✅', '—', 'Custom', 'Custom'],
                },
                {
                  feature: 'i18n / RTL',
                  values: ['✅', 'Partial', 'Partial', '✅'],
                },
                {
                  feature: 'Lifecycle callbacks',
                  values: ['✅', '✅', '✅', '✅'],
                },
                {
                  feature: 'Tree-shakable',
                  values: ['✅', '✅', '✅', '—'],
                },
                {
                  feature: 'License',
                  values: ['MIT', 'MIT', 'MIT', 'GPL / Commercial*'],
                },
              ].map((row, rowIndex, rows) => (
                <tr
                  key={row.feature}
                  style={{
                    borderBottom:
                      rowIndex < rows.length - 1
                        ? '1px solid var(--tg-border)'
                        : 'none',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    Array.from(e.currentTarget.cells).forEach((cell) => {
                      const tableCell = cell as HTMLTableCellElement;

                      tableCell.style.background =
                        tableCell.cellIndex === 1
                          ? 'rgba(16,185,129,0.1)'
                          : 'var(--tg-surface-soft)';
                    });
                  }}
                  onMouseLeave={(e) => {
                    Array.from(e.currentTarget.cells).forEach((cell) => {
                      const tableCell = cell as HTMLTableCellElement;

                      tableCell.style.background =
                        tableCell.cellIndex === 1
                          ? 'rgba(16,185,129,0.06)'
                          : 'transparent';
                    });
                  }}
                >
                  {/* Feature name */}
                  <td
                    style={{
                      padding: '14px 20px',
                      color: 'var(--tg-text-muted)',
                      fontWeight: 500,
                      background: 'transparent',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.feature}
                  </td>

                  {/* Values */}
                  {row.values.map((val, colIndex) => {
                    const isCurrentLibrary = colIndex === 0;

                    const valueColor = isCurrentLibrary
                      ? val.includes('✅') || val.includes('✦')
                        ? 'var(--tg-accent)'
                        : 'var(--tg-text-soft)'
                      : val.includes('✅')
                        ? '#4ade80'
                        : val.includes('❌')
                          ? 'var(--tg-text-mute-3)'
                          : val.includes('⚠️') || val === 'Partial' || val === 'Custom'
                            ? '#fbbf24'
                            : 'var(--tg-text-mute-2)';

                    return (
                      <td
                        key={colIndex}
                        style={{
                          padding: '14px 20px',
                          textAlign: 'center',
                          color: valueColor,
                          fontWeight: isCurrentLibrary ? 700 : 400,
                          background: isCurrentLibrary
                            ? 'rgba(16,185,129,0.06)'
                            : 'transparent',
                          borderLeft: isCurrentLibrary
                            ? '1px solid rgba(16,185,129,0.2)'
                            : '1px solid var(--tg-border)',
                          borderRight: isCurrentLibrary
                            ? '1px solid rgba(16,185,129,0.2)'
                            : 'none',
                          fontSize: '13px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <div
          style={{
            maxWidth: '760px',
            margin: '1.25rem auto 0',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '12px',
              color: 'var(--tg-text-mute-3)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            ✦ Bundle size is the approximate gzipped size of the ESM entry module
            before application-specific bundling. Actual application contribution
            varies with imports, tree-shaking, and bundler configuration.
          </p>

          <p
            style={{
              fontSize: '11px',
              color: 'var(--tg-text-mute-3)',
              lineHeight: 1.6,
              marginTop: '8px',
            }}
          >
            Competitor capabilities and sizes are approximate and may vary by
            version, configuration, and distribution format.
          </p>
        </div>
      </section>

      {/* ─────────────── LIVE DEMO ─────────────── */}
      <section style={{ padding: 'clamp(4rem, 10vw, 6rem) 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: 'var(--tg-accent)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Interactive Demo
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            See it before you install it
          </h2>
          <p style={{ color: 'var(--tg-text-mute-2)', fontSize: 'clamp(1rem, 2.8vw, 1.05rem)', maxWidth: '440px', margin: '0 auto' }}>
            Click the button below to experience the tour firsthand — right here on this page.
          </p>
        </div>

        {/* Browser mockup */}
        <div style={{
          borderRadius: '16px', overflow: 'visible',
          border: '1px solid var(--tg-border-strong)',
          background: 'var(--tg-bg-raised)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
        }}>
          {/* Browser chrome */}
          <div style={{
            padding: '12px 16px', borderBottom: '1px solid var(--tg-border)',
            display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--tg-bg-raised-2)',
            borderRadius: '16px 16px 0 0',
          }}>
            <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#28c840' }} />
            <div style={{
              flex: 1, maxWidth: '280px', margin: '0 auto',
              background: 'var(--tg-bg-raised-2)', borderRadius: '6px',
              padding: '4px 12px', fontSize: '12px', color: 'var(--tg-text-mute-3)', textAlign: 'center',
            }}>
              yourapp.com/dashboard
            </div>
          </div>

          {/* Demo canvas */}
          <div style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', minHeight: '320px', position: 'relative' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px', maxWidth: 'clamp(500px, 80vw, 600px)', margin: '0 auto'
            }}>
              {demoSteps.map((step, i) => (
                <div key={i} id={`demo-card-${i}`} style={{ position: 'relative' }}>
                  {/* Card */}
                  <div style={{
                    padding: '1.5rem', borderRadius: '12px',
                    background: tourStep === i ? 'rgba(16,185,129,0.06)' : 'var(--tg-surface-soft)',
                    border: tourStep === i ? '1px solid rgba(16,185,129,0.5)' : '1px solid var(--tg-border)',
                    transition: 'all 0.3s ease',
                    boxShadow: tourStep === i ? '0 0 0 4px rgba(16,185,129,0.12), 0 8px 32px rgba(16,185,129,0.1)' : 'none',
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                      {['📦', '🎨', '📱', '⚡'][i]}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>
                      {['Zero Deps', 'Themes', 'Mobile', 'Fast'][i]}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--tg-text-mute-2)' }}>
                      {['No packages', 'Full control', 'Responsive', '< 10KB'][i]}
                    </div>
                  </div>

                  {/* Tooltip */}
                  {tourStep === i && (
                    <div style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 14px)',
                      left: '50%', transform: 'translateX(-50%)',
                      width: 'clamp(200px, 45vw, 240px)', zIndex: 20,
                      background: 'var(--tg-bg-raised-2)',
                      border: '1px solid var(--tg-border-strong)',
                      borderRadius: '10px', padding: '14px',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                      animation: 'tipIn 0.2s ease',
                    }}>
                      {/* caret */}
                      <div style={{
                        position: 'absolute', bottom: '-7px', left: '50%', transform: 'translateX(-50%)',
                        width: 0, height: 0,
                        borderLeft: '7px solid transparent',
                        borderRight: '7px solid transparent',
                        borderTop: '7px solid var(--tg-border-strong)',
                      }} />
                      <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: '6px', color: 'var(--tg-text)' }}>
                        {step.title}
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--tg-text-muted)', lineHeight: 1.6, margin: '0 0 12px' }}>
                        {step.body}
                      </p>
                      {/* Progress */}
                      <div style={{ height: '3px', background: 'var(--tg-border-strong)', borderRadius: '99px', marginBottom: '12px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: 'var(--tg-accent)', width: `${((tourStep + 1) / demoSteps.length) * 100}%`, transition: 'width 0.3s' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: 'var(--tg-text-mute-3)' }}>{tourStep + 1} / {demoSteps.length}</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {tourStep > 0 && (
                            <button onClick={() => setTourStep(s => s - 1)} style={{
                              padding: '4px 10px', borderRadius: '6px', border: 'none',
                              background: 'var(--tg-bg-raised-2)', color: 'var(--tg-text-muted)', cursor: 'pointer', fontSize: '11px',
                            }}>Back</button>
                          )}
                          <button onClick={() => tourStep < demoSteps.length - 1 ? setTourStep(s => s + 1) : setTourStep(null)} style={{
                            padding: '4px 12px', borderRadius: '6px', border: 'none',
                            background: 'var(--tg-accent)', color: '#fff', cursor: 'pointer', fontSize: '11px', fontWeight: 700,
                          }}>
                            {tourStep < demoSteps.length - 1 ? 'Next →' : 'Finish ✓'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Start overlay */}
            {tourStep === null && (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
                background: 'color-mix(in srgb, var(--tg-bg) 75%, transparent)', backdropFilter: 'blur(6px)',
                borderRadius: '0 0 16px 16px',
              }}>
                <button onClick={() => setTourStep(0)} style={{
                  padding: 'clamp(12px, 4vw, 14px) clamp(28px, 6vw, 36px)', borderRadius: '12px', fontWeight: 800, fontSize: 'clamp(14px, 4vw, 16px)',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#fff', border: 'none', cursor: 'pointer',
                  boxShadow: '0 0 0 1px #059669, 0 8px 40px rgba(16,185,129,0.45)',
                  letterSpacing: '-0.01em',
                }}>
                  ▶  Start Live Demo
                </button>
                <span style={{ fontSize: '12px', color: 'var(--tg-text-mute-3)' }}>4 steps · 20 seconds</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────── CODE + EXPLANATION ─────────────── */}
      <section style={{ padding: 'clamp(3rem, 8vw, 6rem) 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4.5rem)',
          alignItems: 'start',
        }}>
          {/* Left – text */}
          <div>
            <p style={{ color: 'var(--tg-accent)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Simple API
            </p>
            <h2 style={{ fontSize: 'clamp(1.9rem, 6vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Up and running in 3 lines.
            </h2>
            <p style={{ color: 'var(--tg-text-mute-2)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              Define steps, point them at CSS selectors, and drop in the component. Smart positioning, scroll tracking, and mobile support are all automatic.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '2.5rem' }}>
              {[
                ['🎯', 'Target any element',  'Use any CSS selector — #id, .class, [data-attr]'],
                ['📍', 'Auto positioning',    'Viewport-aware — never clips off screen'],
                ['🔁', 'Lifecycle hooks',     'onStart, onStepChange, onSkip, onComplete'],
              ].map(([icon, title, desc], i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
                    background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '2px' }}>{title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--tg-text-mute-2)' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="/getting-started" style={{
              display: 'inline-block', padding: '12px 24px', borderRadius: '8px',
              background: 'var(--tg-accent)', color: '#fff', textDecoration: 'none',
              fontWeight: 700, fontSize: '14px',
            }}>
              Read Full Docs →
            </a>
          </div>

          {/*
            Code block — intentionally kept a fixed dark palette regardless of
            site theme. Syntax-highlighted code conventionally doesn't follow
            light/dark toggles (same call made for ShotSweep's terminal).
          */}
          <div style={{
            borderRadius: '14px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
          }}>
            <div style={{
              padding: '12px 16px', background: '#19191c',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ fontSize: '12px', color: '#52525b', marginLeft: '6px' }}>App.tsx</span>
            </div>
            <pre style={{
              margin: 0, padding: '1.5rem',
              fontFamily: "'Fira Code', monospace",
              fontSize: 'clamp(12px, 2.5vw, 13px)', lineHeight: 1.75, color: '#d4d4d8',
              background: '#0d0d0f', overflow: 'auto', maxHeight: '420px',
            }}>
              {code.split('\n').map((line, i) => {
                let color = '#d4d4d8'
                if (line.trim().startsWith('//'))           color = '#6b7280'
                else if (/\b(import|from|export|default|const|return)\b/.test(line)) color = '#c084fc'
                else if (/\b(true|false|null)\b/.test(line)) color = '#fb923c'
                return (
                  <span key={i} style={{ display: 'block' }}>
                    <span style={{ color: '#3f3f46', userSelect: 'none', marginRight: '16px', fontSize: '11px' }}>
                      {String(i + 1).padStart(2, ' ')}
                    </span>
                    <span style={{ color }}>{line}</span>
                  </span>
                )
              })}
            </pre>
          </div>
        </div>
      </section>

      {/* ─────────────── THEME SWITCHER ─────────────── */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        borderTop: '1px solid var(--tg-border)',
        borderBottom: '1px solid var(--tg-border)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--tg-accent)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Theming
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            Matches your brand perfectly
          </h2>
          <p style={{ color: 'var(--tg-text-mute-2)', fontSize: 'clamp(1rem, 2.8vw, 1.05rem)', maxWidth: '440px', margin: '0 auto 3rem' }}>
            Choose from built-in presets or override every color with the <code style={{ color: 'var(--tg-text-muted)', fontSize: '0.9em' }}>customTheme</code> prop.
          </p>

          <div style={{ display: 'inline-flex', gap: '4px', padding: '4px', background: 'var(--tg-surface-soft)', border: '1px solid var(--tg-border)', borderRadius: '10px', marginBottom: '2.5rem' }}>
            {Object.keys(themes).map(name => (
              <button key={name} onClick={() => setActiveTheme(name)} style={{
                padding: '8px 20px', borderRadius: '7px', border: 'none',
                background: activeTheme === name ? 'var(--tg-accent)' : 'transparent',
                color: activeTheme === name ? '#fff' : 'var(--tg-text-mute-2)',
                cursor: 'pointer', fontWeight: 700, fontSize: '13px', textTransform: 'capitalize',
                transition: 'all 0.2s',
              }}>
                {name}
              </button>
            ))}
          </div>

          {/*
            This preview card is the live-demo FEATURE itself — "here's what
            your own tour can look like." It intentionally uses `th.*` (the
            per-preset demo colors), not site theme variables, and stays
            untouched regardless of light/dark mode.
          */}
          <div style={{
            background: th.bg, borderRadius: '16px', padding: '1.75rem',
            border: `1px solid ${th.border}`, maxWidth: '380px', margin: '0 auto',
            transition: 'all 0.4s ease',
            boxShadow: `0 0 60px ${th.accent}28`,
          }}>
            <div style={{ fontWeight: 700, fontSize: '15px', color: th.text, marginBottom: '8px' }}>
              👋 Step 2 of 4
            </div>
            <p style={{ fontSize: '13px', color: th.muted, lineHeight: 1.6, margin: '0 0 14px' }}>
              This is how your tooltip looks with the <strong style={{ color: th.text }}>{activeTheme}</strong> theme. Fully customizable via <code style={{ fontSize: '0.85em', color: th.accent }}>customTheme</code>.
            </p>
            <div style={{ height: '4px', background: th.progress, borderRadius: '99px', marginBottom: '14px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '50%', background: th.accent, transition: 'background 0.4s' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: th.muted, cursor: 'pointer' }}>Skip</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ padding: '7px 14px', borderRadius: '7px', border: 'none', background: th.surface, color: th.muted, cursor: 'pointer', fontSize: '12px' }}>← Back</button>
                <button style={{ padding: '7px 18px', borderRadius: '7px', border: 'none', background: th.accent, color: '#fff', cursor: 'pointer', fontSize: '12px', fontWeight: 700 }}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── FEATURES GRID ─────────────── */}

      <section
        style={{
          padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              color: 'var(--tg-accent)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Built for real apps
          </p>

          <h2
            style={{
              fontSize: 'clamp(2rem, 6vw, 2.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              marginBottom: '1rem',
            }}
          >
            Everything you need. Nothing you don't.
          </h2>

          <p
            style={{
              color: 'var(--tg-text-mute-2)',
              fontSize: 'clamp(1rem, 2.8vw, 1.05rem)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Small enough to stay out of your way. Flexible enough to power
            onboarding, walkthroughs, and product tours.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            background: 'var(--tg-border)',
            border: '1px solid var(--tg-border)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {[
            {
              icon: '📦',
              title: 'Zero Runtime Dependencies',
              desc: 'No animation framework, icon library, utility bundle, or other runtime dependencies. React and ReactDOM are peer dependencies.',
            },
            {
              icon: '⚙️',
              title: 'Project-Wide Configuration',
              desc: 'Define shared defaults and behavior once, then reuse them across tours instead of repeating configuration in every component.',
            },
            {
              icon: '🎯',
              title: 'Smart Positioning',
              desc: 'Keep tour steps anchored to their targets with positioning and viewport-aware behavior built into the tour experience.',
            },
            {
              icon: '🌓',
              title: 'Themes & Custom Colors',
              desc: 'Start with built-in dark and light themes, then customize accent colors and visual styling to match your product.',
            },
            {
              icon: '📱',
              title: 'Mobile-Aware',
              desc: 'Define mobile-specific content and device targeting so your tours can adapt instead of forcing the same experience everywhere.',
            },
            {
              icon: '👋',
              title: 'Welcome Screens',
              desc: 'Introduce users to your product before the first step with an optional welcome screen and customizable messaging.',
            },
            {
              icon: '🔷',
              title: 'TypeScript First',
              desc: 'Full TypeScript declarations with exported types and interfaces for a better developer experience and editor IntelliSense.',
            },
            {
              icon: '🌍',
              title: 'i18n & RTL Ready',
              desc: 'Customize interface labels, support translated content, and build right-to-left experiences without requiring a translation library.',
            },
            {
              icon: '⚡',
              title: 'Lifecycle Hooks',
              desc: 'React to tour events with callbacks such as onStart, onStepChange, onSkip, and onComplete.',
            },
            {
              icon: '🔒',
              title: 'Controlled Experience',
              desc: 'Control when tours activate, how users progress, and what happens when a tour is completed or skipped.',
            },
            {
              icon: '🌲',
              title: 'Tree-Shakable Builds',
              desc: 'Distributed as modern ESM and CJS builds with a build pipeline designed to keep the package lean.',
            },
            {
              icon: '🧩',
              title: 'Composable React API',
              desc: 'Use the Tour component directly in your React application and compose it with your existing UI, state, and application logic.',
            },
          ].map((f, i) => (
            <div
              key={i}
              style={{
                padding: '2rem',
                background: 'var(--tg-bg)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--tg-bg-raised)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--tg-bg)';
              }}
            >
              <div
                style={{
                  fontSize: '1.75rem',
                  marginBottom: '12px',
                }}
              >
                {f.icon}
              </div>

              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                {f.title}
              </h3>

              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--tg-text-mute-2)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────── DOCUMENTATION HUB ─────────────── */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        borderTop: '1px solid var(--tg-border)',
        maxWidth: '1100px', margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: 'var(--tg-accent)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Documentation
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            Everything is documented.
          </h2>
          <p style={{ color: 'var(--tg-text-mute-2)', fontSize: 'clamp(1rem, 2.8vw, 1.05rem)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            From your first tour to production edge cases — guides, API reference, and real-world examples.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px',
          background: 'var(--tg-border)',
          border: '1px solid var(--tg-border)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          {docsLinks.map((d, i) => (
            <a
              key={i}
              href={d.href}
              style={{
                padding: '2rem',
                background: 'var(--tg-bg)',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--tg-bg-raised)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--tg-bg)' }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '12px' }}>{d.icon}</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: 'var(--tg-text)' }}>
                {d.title} <span style={{ color: 'var(--tg-accent)' }}>→</span>
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--tg-text-mute-2)', lineHeight: 1.7, margin: 0 }}>
                {d.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem', textAlign: 'center',
        borderTop: '1px solid var(--tg-border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 'clamp(500px, 80vw, 700px)', height: 'clamp(300px, 50vw, 500px)', pointerEvents: 'none',
          background: 'radial-gradient(ellipse, var(--tg-glow) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            Ready to guide your users?
          </h2>
          <p style={{ color: 'var(--tg-text-mute-2)', fontSize: 'clamp(1rem, 3vw, 1.1rem)', maxWidth: '400px', margin: '0 auto 2.5rem' }}>
            Install in 30 seconds. No config. No setup. Just copy, paste, and ship.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/getting-started" style={{
              padding: '15px 32px', borderRadius: '10px', fontWeight: 800, fontSize: '15px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 0 0 1px #059669, 0 8px 40px rgba(16,185,129,0.4)',
            }}>
              Get Started for Free →
            </a>
            <a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide" target="_blank" style={{
              padding: '15px 32px', borderRadius: '10px', fontWeight: 800, fontSize: '15px',
              background: 'var(--tg-surface-soft)', color: 'var(--tg-text-soft)', textDecoration: 'none',
              border: '1px solid var(--tg-border-strong)',
            }}>
              ⭐ Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <Footer />

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: block !important; }
        }
        @media (min-width: 821px) {
          .hamburger { display: none !important; }
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes tipIn { from{opacity:0;transform:translateX(-50%) translateY(6px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
      `}</style>
    </div>
  )
}
