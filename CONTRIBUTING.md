# Contributing to NFSFU234TourGuide Docs

Thanks for taking the time to contribute! 🎉 This is the official documentation site for [nfsfu234-tour-guide](https://github.com/nforshifu234dev/nfsfu234-tour-guide).

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Doc Page Structure](#doc-page-structure)

---

## Code of Conduct

Be respectful. Be constructive. We're all here to make the docs better.

---

## How Can I Contribute?

- **Fix a typo** — just open a PR directly
- **Improve an explanation** — edit the relevant `.mdx` file
- **Add a missing example** — add a new file under `app/(docs)/examples/`
- **Report broken content** — open an issue with the `[Bug]` prefix
- **Suggest new doc pages** — open an issue with the `[Feature]` prefix

---

## Getting Started

```bash
# 1. Fork the repo and clone it
git clone https://github.com/YOUR_USERNAME/nfsfu234-tour-guide-docs.git
cd nfsfu234-tour-guide-docs

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Visit `http://localhost:3000` to preview your changes.

---

## Commit Convention

This repo uses [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>: <short description>
```

| Type | When to use |
|------|-------------|
| `docs` | Editing or adding documentation content |
| `fix` | Fixing broken links, typos, or incorrect info |
| `feat` | Adding a new doc page or section |
| `style` | Formatting, whitespace, no content change |
| `chore` | Config, dependencies, tooling |
| `refactor` | Restructuring content without changing meaning |

**Examples:**
```
docs: add conditional steps example page
fix: correct wrong prop name in api-reference
feat: add saas-onboarding example
chore: update nextra to v4.7
```

---

## Pull Request Process

1. Branch off `main` — use a descriptive name:
   ```
   docs/add-rtl-example
   fix/broken-link-api-reference
   ```

2. Make your changes to `.mdx` files in `app/(docs)/`

3. Make sure every edited page has proper frontmatter:
   ```mdx
   ---
   title: Your Page Title
   description: A clear one-sentence description for SEO.
   keywords: [relevant, keywords, here]
   ---
   ```

4. Run the build to check nothing is broken:
   ```bash
   npm run build
   ```

5. Open your PR with a clear title following the commit convention above

6. A maintainer will review within a few days

---

## Doc Page Structure

All documentation lives in `app/(docs)/`. Each page is a folder with a `page.mdx` file:

```
app/(docs)/
├── getting-started/
│   └── page.mdx
├── api-reference/
│   └── page.mdx
├── examples/
│   ├── page.mdx
│   ├── basic/
│   │   └── page.mdx
│   └── ...
```

### Adding a new page

1. Create a new folder: `app/(docs)/your-page-name/`
2. Add `page.mdx` inside it with frontmatter
3. It will automatically appear in the sitemap and sidebar

---

## Questions?

Open a [GitHub Discussion](https://github.com/nforshifu234dev/nfsfu234-tour-guide-docs/discussions) — don't open an issue for questions.

---

MIT © [nforshifu234dev](https://nforshifu234dev.com)