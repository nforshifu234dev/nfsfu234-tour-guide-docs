import { NextResponse } from 'next/server'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { siteConfig } from '@/config/site'

function getMdxPages(dir: string, baseRoute = ''): string[] {
  const entries = readdirSync(dir)
  const routes: string[] = []

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      const nested = getMdxPages(fullPath, `${baseRoute}/${entry}`)
      routes.push(...nested)
    } else if (entry === 'page.mdx' || entry === 'page.md') {
      routes.push(baseRoute)
    }
  }

  return routes
}

function routeToTitle(route: string): string {
  return route
    .replace(/^\//, '')
    .split('/')
    .map((part) =>
      part
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    )
    .join(' — ')
}

export async function GET() {
  const docsDir = join(process.cwd(), 'app', '(docs)')
  const routes = getMdxPages(docsDir)

  const pageLinks = routes
    .map((route) => `- [${routeToTitle(route)}](${siteConfig.url}${route})`)
    .join('\n')

  const content = `# ${siteConfig.name}

> ${siteConfig.description}

## Documentation

${pageLinks}

## Key Facts

- Package: ${siteConfig.packageName}
- Install: npm install ${siteConfig.packageName}
- Zero dependencies (only React & ReactDOM as peer deps)
- License: ${siteConfig.license}
- GitHub: ${siteConfig.github}
- npm: ${siteConfig.npm}
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}