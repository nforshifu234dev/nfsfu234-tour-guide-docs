// mdx-components.tsx

import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getNextraMDXComponents } from 'nextra-theme-docs'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...getNextraMDXComponents(components as any),
    ...components,
  }
}