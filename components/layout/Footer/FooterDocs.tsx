// components/layout/FooterDocs.tsx

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function FooterDocs() {
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
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-950 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-12">
        {/* Product */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="/getting-started" className="hover:text-zinc-300 transition-colors">Getting Started</a></li>
            <li><a href="/api-reference" className="hover:text-zinc-300 transition-colors">API Reference</a></li>
            <li><a href="/examples" className="hover:text-zinc-300 transition-colors">Examples</a></li>
            <li><a href="/migration" className="hover:text-zinc-300 transition-colors">Migration</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Community</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide/discussions" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Discussions ↗</a></li>
            <li><a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide/issues/new" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Report Bug ↗</a></li>
            <li><a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide/issues/new" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Feature Request ↗</a></li>
            <li><a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide/pulls" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Contribute ↗</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="https://www.npmjs.com/package/nfsfu234-tour-guide" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">npm ↗</a></li>
            <li><a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">GitHub Repo ↗</a></li>
            <li><a href="https://github.com/nforshifu234dev/nfsfu234-tour-guide/blob/main/CHANGELOG.md" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Changelog ↗</a></li>
            <li><a href="/faq" className="hover:text-zinc-300 transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* NFORSHIFU234 Dev (new cross-promotion column) */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">NFORSHIFU234 Dev</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li>
              <a 
                href="https://nforshifu234dev.com" 
                target="_blank" 
                className="hover:text-zinc-300 transition-colors flex items-center gap-1 font-medium text-emerald-400"
              >
                nforshifu234dev.com ↗
              </a>
            </li>
            <li><a href="https://nforshifu234dev.com/#projects" target="_blank" className="hover:text-zinc-300 transition-colors">Open-Source Projects</a></li>
            <li><a href="https://nforshifu234dev.com/#apps" target="_blank" className="hover:text-zinc-300 transition-colors">Public Apps (WishIT)</a></li>
            <li><a href="https://nforshifu234dev.com/#clients" target="_blank" className="hover:text-zinc-300 transition-colors">Client Work</a></li>
            <li><a href="https://www.youtube.com/@nforshifu234dev" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">YouTube ↗</a></li>
            <li><a href="https://instagram.com/nforshifu234dev" target="_blank" className="hover:text-zinc-300 transition-colors flex items-center gap-1">Instagram ↗</a></li>
          </ul>
        </div>

        {/* Meta / Legal */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Meta</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="/contributing" className="hover:text-zinc-300 transition-colors">Contributing</a></li>
            <li><a href="/troubleshooting" className="hover:text-zinc-300 transition-colors">Troubleshooting</a></li>
            <li className="mt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-md text-xs text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                v{version} — Latest
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-600">
        <p>
          &copy; {new Date().getFullYear()} NFSFU234TourGuide • MIT License
        </p>
        <p className="mt-1">
          Built with ❤️ by{' '}
          <a
            href="https://nforshifu234dev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            NFORSHIFU234 Dev
          </a>{' '}
          🇳🇬
        </p>
      </div>
    </footer>
  )
}