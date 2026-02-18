"use client"


{/* 
  Welcome to the landing page of nfsfu234-tour-guide! This is a React component library for creating interactive product tours and onboarding flows.
*/}

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'

export function LandingPage() {
  const [copied, setCopied] = useState(false)
  const [activeTheme, setActiveTheme] = useState('dark')
  const [tourStep, setTourStep] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const copy = () => {
    navigator.clipboard.writeText('npm install nfsfu234-tour-guide')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

  const code = `import Tour from 'nfsfu234-tour-guide'

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

  if (!mounted) return null

  return (
    // <div style={{ background: '#09090b', color: '#fafafa', fontFamily: "'DM Sans', -apple-system, sans-serif", overflowX: 'hidden' }}>
    <div style={{ background: '#09090b', color: '#fafafa', fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
      {/* ─────────────── NAV ─────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(12px)',
        padding: '0 clamp(1rem, 4vw, 2rem)', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: 'clamp(16px, 4vw, 20px)' }}>
          <span style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}>
            <Image src="/favicon.svg" alt="NFSFU234TourGuide" width={34} height={34} />
          </span>
          <span>NFSFU234TourGuide</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 16px)' }} className="desktop-nav">
          <a href="/getting-started" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px', padding: '6px 12px' }}>Docs</a>
          <a href="/api-reference" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px', padding: '6px 12px' }}>API</a>
          <a href="/examples" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px', padding: '6px 12px' }}>Examples</a>
          <a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide" target="_blank" style={{
            background: 'rgba(255,255,255,0.08)', color: '#fafafa', textDecoration: 'none',
            fontSize: '13px', padding: '8px 16px', borderRadius: '8px', fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            GitHub →
          </a>
        </div>

        {/* Hamburger button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ 
            background: 'none', border: 'none', color: '#fafafa', fontSize: 'clamp(24px, 6vw, 32px)',
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
          background: 'rgba(9,9,11,0.98)', backdropFilter: 'blur(8px)',
          padding: 'clamp(2rem, 8vw, 3rem) 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1.8rem'
        }}>
          <a href="/getting-started" style={{ color: '#fafafa', fontSize: '1.25rem', textDecoration: 'none' }}>Docs</a>
          <a href="/api-reference"   style={{ color: '#fafafa', fontSize: '1.25rem', textDecoration: 'none' }}>API</a>
          <a href="/examples"        style={{ color: '#fafafa', fontSize: '1.25rem', textDecoration: 'none' }}>Examples</a>
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
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <a href="/migration" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 14px', borderRadius: '100px',
            border: '1px solid rgba(16,185,129,0.35)',
            background: 'rgba(16,185,129,0.1)',
            fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#10b981',
            textDecoration: 'none', marginBottom: '2.5rem',
            fontWeight: 600, letterSpacing: '0.02em',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', animation: 'pulse 2s infinite' }} />
            v1.0.0 is here — See what's new →
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
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#a1a1aa',
            maxWidth: '520px', margin: '0 auto 3rem', lineHeight: 1.75,
          }}>
            Zero-dependency React tour guide library. Beautiful onboarding,
            walkthroughs, and product tours — all <strong style={{ color: '#e4e4e7' }}>~3-4 kB gzipped</strong> (real app contribution).
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
              background: 'rgba(255,255,255,0.06)', color: '#e4e4e7', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              API Reference
            </a>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '11px 18px', borderRadius: '10px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <span style={{ color: '#52525b', fontSize: '13px', fontFamily: 'monospace' }}>$</span>
            <code style={{ fontSize: '13px', color: '#d4d4d8', fontFamily: "'Fira Code', monospace", userSelect: 'all' }}>
              npm install nfsfu234-tour-guide
            </code>
            <button onClick={copy} style={{
              background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.08)',
              border: `1px solid ${copied ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.1)'}`,
              color: copied ? '#10b981' : '#a1a1aa', cursor: 'pointer',
              padding: '4px 10px', borderRadius: '6px', fontSize: '12px',
              transition: 'all 0.2s', fontWeight: 600,
            }}>
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────── STATS BAR ─────────────── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem', padding: 'clamp(1.5rem, 4vw, 3rem) 1rem',
        }}>
          {[
            { n: '0',       l: 'Dependencies' },
            { n: '~3-4 kB',   l: 'Gzipped size'  },
            { n: 'React 18+', l: 'Peer dep'    },
            { n: 'MIT',     l: 'License'        },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '2rem 1rem', textAlign: 'center',
            }}>
              <div style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 900, color: '#10b981', letterSpacing: '-0.03em' }}>
                {s.n}
              </div>
              <div style={{ fontSize: '12px', color: '#71717a', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────── COMPARISON TABLE ─────────────── */}

        <section style={{ padding: 'clamp(4rem, 10vw, 6rem) 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#10b981', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Why This Library?
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            Lean by design. Not by accident.
            </h2>
            <p style={{ color: '#71717a', fontSize: 'clamp(1rem, 2.8vw, 1.05rem)', maxWidth: '480px', margin: '0 auto' }}>
            Most tour libraries ship with everything. You pay for what you don't use. We ship only what matters.
            </p>
        </div>

        {/* Table wrapper */}
        <div style={{
            borderRadius: '16px', overflow: 'auto',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
        }}>
            <table style={{
            width: '100%', borderCollapse: 'collapse',
            fontSize: 'clamp(12px, 2vw, 14px)',
            minWidth: '580px',
            }}>
            {/* Header */}
            <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <th style={{
                    padding: '16px 20px', textAlign: 'left',
                    background: '#111113', color: '#52525b',
                    fontSize: '12px', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    width: '28%',
                }}>
                    Feature
                </th>
                {[
                    { name: 'nfsfu234-tour-guide', highlight: true },
                    { name: 'React Joyride',       highlight: false },
                    { name: 'Shepherd.js',         highlight: false },
                    { name: 'Intro.js',            highlight: false },
                ].map(({ name, highlight }) => (
                    <th key={name} style={{
                    padding: '16px 20px', textAlign: 'center',
                    background: highlight ? 'rgba(16,185,129,0.06)' : '#111113',
                    color: highlight ? '#10b981' : '#71717a',
                    fontSize: '13px', fontWeight: 700,
                    borderLeft: highlight ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(255,255,255,0.04)',
                    borderRight: highlight ? '1px solid rgba(16,185,129,0.2)' : 'none',
                    whiteSpace: 'nowrap',
                    }}>
                    {highlight && (
                        <span style={{
                        display: 'block', fontSize: '10px', fontWeight: 700,
                        color: '#10b981', letterSpacing: '0.08em',
                        textTransform: 'uppercase', marginBottom: '4px',
                        }}>
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
                    values: ['~3-4 kB ✦', '~13 kB', '~22 kB', '~15 kB'],
                },
                {
                    feature: 'Dependencies',
                    values: ['0', '3', '0', '0'],
                },
                {
                    feature: 'React peer dep only',
                    values: ['✅', '✅', '❌', '❌'],
                },
                {
                    feature: 'TypeScript support',
                    values: ['✅', '✅', '⚠️ partial', '❌'],
                },
                {
                    feature: 'Mobile-aware steps',
                    values: ['✅', '❌', '❌', '❌'],
                },
                {
                    feature: 'Device-specific content',
                    values: ['✅', '❌', '❌', '❌'],
                },
                {
                    feature: 'Custom theme / colors',
                    values: ['✅', '✅', '✅', '⚠️ CSS only'],
                },
                {
                    feature: 'Welcome screen',
                    values: ['✅', '❌', '⚠️ custom', '⚠️ custom'],
                },
                {
                    feature: 'i18n / RTL support',
                    values: ['✅', '⚠️ partial', '⚠️ partial', '✅'],
                },
                {
                    feature: 'Lifecycle hooks',
                    values: ['✅', '✅', '✅', '✅'],
                },
                {
                    feature: 'License',
                    values: ['MIT', 'MIT', 'MIT', 'GPL / Commercial'],
                },
                ].map((row, rowIndex) => (
                <tr
                    key={row.feature}
                    style={{
                    borderBottom: rowIndex < 10 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => {
                    Array.from(e.currentTarget.cells).forEach(cell => {
                        (cell as HTMLTableCellElement).style.background =
                        cell.cellIndex === 1
                            ? 'rgba(16,185,129,0.1)'
                            : 'rgba(255,255,255,0.02)'
                    })
                    }}
                    onMouseLeave={e => {
                    Array.from(e.currentTarget.cells).forEach(cell => {
                        (cell as HTMLTableCellElement).style.background =
                        cell.cellIndex === 1
                            ? 'rgba(16,185,129,0.06)'
                            : 'transparent'
                    })
                    }}
                >
                    {/* Feature name */}
                    <td style={{
                    padding: '14px 20px',
                    color: '#a1a1aa', fontWeight: 500,
                    background: 'transparent',
                    }}>
                    {row.feature}
                    </td>

                    {/* Values */}
                    {row.values.map((val, colIndex) => (
                    <td key={colIndex} style={{
                        padding: '14px 20px', textAlign: 'center',
                        color: colIndex === 0
                        ? val.includes('✅') || val.includes('✦') ? '#10b981' : '#e4e4e7'
                        : val.includes('✅') ? '#4ade80'
                        : val.includes('❌') ? '#52525b'
                        : val.includes('⚠️') ? '#fbbf24'
                        : '#71717a',
                        fontWeight: colIndex === 0 ? 700 : 400,
                        background: colIndex === 0 ? 'rgba(16,185,129,0.06)' : 'transparent',
                        borderLeft: colIndex === 0
                        ? '1px solid rgba(16,185,129,0.2)'
                        : '1px solid rgba(255,255,255,0.04)',
                        borderRight: colIndex === 0 ? '1px solid rgba(16,185,129,0.2)' : 'none',
                        fontSize: '13px',
                    }}>
                        {val}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* Footnote */}
        <p style={{
            textAlign: 'center', marginTop: '1rem',
            fontSize: '12px', color: '#3f3f46',
        }}>
            ✦ Real app contribution (tree-shaken). Sizes are approximate and may vary by version.
        </p>
        </section>

      {/* ─────────────── LIVE DEMO ─────────────── */}
      <section style={{ padding: 'clamp(4rem, 10vw, 6rem) 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#10b981', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Interactive Demo
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            See it before you install it
          </h2>
          <p style={{ color: '#71717a', fontSize: 'clamp(1rem, 2.8vw, 1.05rem)', maxWidth: '440px', margin: '0 auto' }}>
            Click the button below to experience the tour firsthand — right here on this page.
          </p>
        </div>

        {/* Browser mockup */}
        <div style={{
          borderRadius: '16px', overflow: 'visible',
          border: '1px solid rgba(255,255,255,0.08)',
          background: '#111113',
          boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
        }}>
          {/* Browser chrome */}
          <div style={{
            padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', gap: '8px', background: '#19191c',
            borderRadius: '16px 16px 0 0',
          }}>
            <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#28c840' }} />
            <div style={{
              flex: 1, maxWidth: '280px', margin: '0 auto',
              background: '#27272a', borderRadius: '6px',
              padding: '4px 12px', fontSize: '12px', color: '#52525b', textAlign: 'center',
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
                    background: tourStep === i ? 'rgba(16,185,129,0.06)' : 'rgba(255,255,255,0.03)',
                    border: tourStep === i ? '1px solid rgba(16,185,129,0.5)' : '1px solid rgba(255,255,255,0.07)',
                    transition: 'all 0.3s ease',
                    boxShadow: tourStep === i ? '0 0 0 4px rgba(16,185,129,0.12), 0 8px 32px rgba(16,185,129,0.1)' : 'none',
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                      {['📦', '🎨', '📱', '⚡'][i]}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>
                      {['Zero Deps', 'Themes', 'Mobile', 'Fast'][i]}
                    </div>
                    <div style={{ fontSize: '12px', color: '#71717a' }}>
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
                      background: '#18181b',
                      border: '1px solid #3f3f46',
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
                        borderTop: '7px solid #3f3f46',
                      }} />
                      <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: '6px', color: '#fafafa' }}>
                        {step.title}
                      </div>
                      <p style={{ fontSize: '12px', color: '#a1a1aa', lineHeight: 1.6, margin: '0 0 12px' }}>
                        {step.body}
                      </p>
                      {/* Progress */}
                      <div style={{ height: '3px', background: '#3f3f46', borderRadius: '99px', marginBottom: '12px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: '#10b981', width: `${((tourStep + 1) / demoSteps.length) * 100}%`, transition: 'width 0.3s' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: '#52525b' }}>{tourStep + 1} / {demoSteps.length}</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {tourStep > 0 && (
                            <button onClick={() => setTourStep(s => s - 1)} style={{
                              padding: '4px 10px', borderRadius: '6px', border: 'none',
                              background: '#27272a', color: '#a1a1aa', cursor: 'pointer', fontSize: '11px',
                            }}>Back</button>
                          )}
                          <button onClick={() => tourStep < demoSteps.length - 1 ? setTourStep(s => s + 1) : setTourStep(null)} style={{
                            padding: '4px 12px', borderRadius: '6px', border: 'none',
                            background: '#10b981', color: '#fff', cursor: 'pointer', fontSize: '11px', fontWeight: 700,
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
                background: 'rgba(9,9,11,0.75)', backdropFilter: 'blur(6px)',
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
                <span style={{ fontSize: '12px', color: '#52525b' }}>4 steps · 20 seconds</span>
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
            <p style={{ color: '#10b981', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Simple API
            </p>
            <h2 style={{ fontSize: 'clamp(1.9rem, 6vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Up and running in 3 lines.
            </h2>
            <p style={{ color: '#71717a', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
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
                    <div style={{ fontSize: '13px', color: '#71717a' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="/getting-started" style={{
              display: 'inline-block', padding: '12px 24px', borderRadius: '8px',
              background: '#10b981', color: '#fff', textDecoration: 'none',
              fontWeight: 700, fontSize: '14px',
            }}>
              Read Full Docs →
            </a>
          </div>

          {/* Code block */}
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
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#10b981', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Theming
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            Matches your brand perfectly
          </h2>
          <p style={{ color: '#71717a', fontSize: 'clamp(1rem, 2.8vw, 1.05rem)', maxWidth: '440px', margin: '0 auto 3rem' }}>
            Choose from built-in presets or override every color with the <code style={{ color: '#a1a1aa', fontSize: '0.9em' }}>customTheme</code> prop.
          </p>

          <div style={{ display: 'inline-flex', gap: '4px', padding: '4px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', marginBottom: '2.5rem' }}>
            {Object.keys(themes).map(name => (
              <button key={name} onClick={() => setActiveTheme(name)} style={{
                padding: '8px 20px', borderRadius: '7px', border: 'none',
                background: activeTheme === name ? '#10b981' : 'transparent',
                color: activeTheme === name ? '#fff' : '#71717a',
                cursor: 'pointer', fontWeight: 700, fontSize: '13px', textTransform: 'capitalize',
                transition: 'all 0.2s',
              }}>
                {name}
              </button>
            ))}
          </div>

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
      <section style={{ padding: 'clamp(4rem, 10vw, 6rem) 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            Everything you need. Nothing you don't.
          </h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px', background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden',
        }}>
          {[
            { icon: '📦', title: 'Zero Dependencies',   desc: 'Only React & ReactDOM. No framer-motion, no lucide-react, no lodash. Ships lean.'     },
            { icon: '🎯', title: 'Smart Positioning',   desc: 'Intersection Observer API keeps tooltips anchored to targets even while scrolling.'   },
            { icon: '🌓', title: 'Dark & Light Themes', desc: 'Two beautiful presets out of the box, plus full custom color control.'                  },
            { icon: '📱', title: 'Mobile-First',        desc: 'Device-specific steps, mobile-only content, and auto-responsive tooltip sizing.'       },
            { icon: '🔒', title: 'Scroll Lock',         desc: 'Welcome screen locks body scroll. The backdrop stays fixed and immovable.'             },
            { icon: '🔷', title: 'TypeScript',          desc: 'Full type safety with exported interfaces. IntelliSense works out of the box.'          },
            { icon: '🌍', title: 'i18n Support',        desc: 'Every label is a prop. Swap languages or go RTL without a translation library.'        },
            { icon: '⚡', title: 'Lifecycle Hooks',     desc: 'onStart, onStepChange, onSkip, onComplete — hook into every moment of the tour.'      },
          ].map((f, i) => (
            <div key={i} style={{ padding: '2rem', background: '#09090b', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#111113'}
              onMouseLeave={e => e.currentTarget.style.background = '#09090b'}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '12px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem', textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 'clamp(500px, 80vw, 700px)', height: 'clamp(300px, 50vw, 500px)', pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            Ready to guide your users?
          </h2>
          <p style={{ color: '#71717a', fontSize: 'clamp(1rem, 3vw, 1.1rem)', maxWidth: '400px', margin: '0 auto 2.5rem' }}>
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
              background: 'rgba(255,255,255,0.05)', color: '#e4e4e7', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
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
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  )
}

<LandingPage />