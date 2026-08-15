// hooks/useLatestVersion.ts
'use client'

import { useState, useEffect } from 'react'

const REGISTRY_URL = 'https://registry.npmjs.org/@nfsfu234/tour-guide/latest'
const FALLBACK_VERSION = '1.1.0'

// Module-level cache — persists across component instances within the
// same page session, so mounting Footer + LandingPage together only
// triggers one network request, not two.
let cachedVersion: string | null = null
let inFlightRequest: Promise<string | null> | null = null

function fetchLatestVersion(): Promise<string | null> {
  if (cachedVersion) return Promise.resolve(cachedVersion)
  if (inFlightRequest) return inFlightRequest

  inFlightRequest = fetch(REGISTRY_URL)
    .then(res => res.json())
    .then(data => {
      const version = data?.version ?? null
      if (version) cachedVersion = version
      return version
    })
    .catch(() => null)
    .finally(() => {
      inFlightRequest = null
    })

  return inFlightRequest
}

/**
 * Returns the latest published version of @nfsfu234/tour-guide from npm,
 * falling back to FALLBACK_VERSION until the fetch resolves (or if it fails).
 * Safe to call from multiple components — the underlying fetch is deduped.
 */
export function useLatestVersion(): string {
  const [version, setVersion] = useState(cachedVersion ?? FALLBACK_VERSION)

  useEffect(() => {
    let cancelled = false

    fetchLatestVersion().then(v => {
      if (!cancelled && v) setVersion(v)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return version
}