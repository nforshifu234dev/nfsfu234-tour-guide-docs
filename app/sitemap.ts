import { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { siteConfig } from '@/config/site'

const EXCLUDED_ROUTES = new Set([
  '/hello',
])

function getMdxPages(dir: string, baseRoute = ''): string[] {
  let routes: string[] = []

  try {
    const entries = readdirSync(dir)

    for (const entry of entries) {
      // skip layout, loading, error files
      if (
        ['layout.tsx', 'layout.ts', 'error.tsx', 'loading.tsx'].includes(entry)
      ) {
        continue
      }

      const fullPath = join(dir, entry)
      const stat = statSync(fullPath)

      if (stat.isDirectory()) {
        const nested = getMdxPages(
          fullPath,
          `${baseRoute}/${entry}`
        )

        routes.push(...nested)
      } else if (
        entry === 'page.mdx' ||
        entry === 'page.md' ||
        entry === 'page.tsx'
      ) {
        const route = baseRoute || '/'

        if (!EXCLUDED_ROUTES.has(route)) {
          routes.push(route)
        }
      }
    }
  } catch {
    // directory doesn't exist, skip
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const docsDir = join(process.cwd(), 'app', '(docs)')
  const docRoutes = getMdxPages(docsDir)

  const docEntries: MetadataRoute.Sitemap = docRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/getting-started' ? 0.9 : 0.7,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...docEntries,
  ]
}