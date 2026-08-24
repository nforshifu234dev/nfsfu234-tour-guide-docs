// This file defines the Open Graph image for the site, which is used when sharing links on social media platforms. It uses Next.js's ImageResponse API to generate a dynamic image on the fly. 
import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Grid layer ── */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          backgroundImage: [
            'linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '50px 50px',
        }} />

        {/* ── Dot grid overlay (every 50px intersection) ── */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.25) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0',
        }} />

        {/* ── Corner accent lines — top left ── */}
        <div style={{
          position: 'absolute', top: 40, left: 40,
          width: 60, height: 2,
          background: 'rgba(16,185,129,0.5)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', top: 40, left: 40,
          width: 2, height: 60,
          background: 'rgba(16,185,129,0.5)',
          display: 'flex',
        }} />

        {/* ── Corner accent lines — top right ── */}
        <div style={{
          position: 'absolute', top: 40, right: 40,
          width: 60, height: 2,
          background: 'rgba(16,185,129,0.5)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', top: 40, right: 40,
          width: 2, height: 60,
          background: 'rgba(16,185,129,0.5)',
          display: 'flex',
        }} />

        {/* ── Corner accent lines — bottom left ── */}
        <div style={{
          position: 'absolute', bottom: 40, left: 40,
          width: 60, height: 2,
          background: 'rgba(16,185,129,0.5)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: 40, left: 40,
          width: 2, height: 60,
          background: 'rgba(16,185,129,0.5)',
          display: 'flex',
        }} />

        {/* ── Corner accent lines — bottom right ── */}
        <div style={{
          position: 'absolute', bottom: 40, right: 40,
          width: 60, height: 2,
          background: 'rgba(16,185,129,0.5)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: 40, right: 40,
          width: 2, height: 60,
          background: 'rgba(16,185,129,0.5)',
          display: 'flex',
        }} />

        {/* ── Central radial glow ── */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.14) 0%, transparent 68%)',
          display: 'flex',
        }} />

        {/* ── Floating emoji decorations ── */}
        {/* top-left */}
        <div style={{
          position: 'absolute', top: 100, left: 80,
          fontSize: 28, opacity: 0.25, display: 'flex',
        }}>⚡</div>
        {/* top-right */}
        <div style={{
          position: 'absolute', top: 90, right: 110,
          fontSize: 24, opacity: 0.2, display: 'flex',
        }}>📦</div>
        {/* bottom-left */}
        <div style={{
          position: 'absolute', bottom: 100, left: 100,
          fontSize: 22, opacity: 0.2, display: 'flex',
        }}>🔷</div>
        {/* bottom-right */}
        <div style={{
          position: 'absolute', bottom: 95, right: 90,
          fontSize: 26, opacity: 0.22, display: 'flex',
        }}>🌍</div>
        {/* mid-left */}
        <div style={{
          position: 'absolute', top: 280, left: 55,
          fontSize: 20, opacity: 0.18, display: 'flex',
        }}>📱</div>
        {/* mid-right */}
        <div style={{
          position: 'absolute', top: 270, right: 60,
          fontSize: 20, opacity: 0.18, display: 'flex',
        }}>🔒</div>

        {/* ── Horizontal scan line accent ── */}
        <div style={{
          position: 'absolute', top: 200, left: 0, right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.15), transparent)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', top: 430, left: 0, right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.15), transparent)',
          display: 'flex',
        }} />

        {/* ── Main content ── */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          gap: 0,
        }}>
          {/* Icon + name row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 18,
          }}>
            <span style={{ fontSize: 72 }}>🎯</span>
            <div style={{
              fontSize: 62, fontWeight: 900, color: '#fafafa',
              letterSpacing: '-3px', lineHeight: 1,
            }}>
              {siteConfig.name}
            </div>
          </div>

          {/* Tagline */}
          <div style={{
            fontSize: 26, color: '#10b981',
            fontWeight: 600, marginBottom: 32,
            letterSpacing: '-0.3px',
          }}>
            Zero-dependency React tour guide library ✨
          </div>

          {/* Pills row */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { emoji: '📦', label: '~3-4kB gzipped' },
              { emoji: '🚫', label: 'Zero deps' },
              { emoji: '⚖️', label: 'MIT' },
              { emoji: '⚛️', label: 'React 18+' },
            ].map(({ emoji, label }) => (
              <div key={label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                padding: '10px 18px',
                borderRadius: 100,
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.28)',
                color: '#6ee7b7',
                fontSize: 19,
                fontWeight: 600,
              }}>
                <span style={{ fontSize: 16 }}>{emoji}</span>
                {label}
              </div>
            ))}
          </div>

          {/* Domain watermark */}
          <div style={{
            position: 'absolute',
            bottom: 48,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#3f3f46',
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}>
            <span style={{ color: '#10b981', opacity: 0.5 }}>🌐</span>
            tourguide.nforshifu234dev.com
          </div>
        </div>
      </div>
    ),
    size
  )
}