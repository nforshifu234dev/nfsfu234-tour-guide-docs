# 📚 NFSFU234TourGuide Documentation

Official documentation site for [nfsfu234-tour-guide](https://github.com/nforshifu234dev/nfsfu234-tour-guide).

🌐 **Live site:** [tour-guide.nforshifu234dev.com](https://tour-guide.nforshifu234dev.com)

---

## 🚀 Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run start
```

---

## 📁 Structure

```
app/
├── (home)/           # Landing page (no Nextra chrome)
├── (docs)/           # All documentation pages
│   ├── getting-started/
│   ├── api-reference/
│   ├── examples/
│   │   ├── basic/
│   │   ├── conditional/
│   │   ├── custom-theme/
│   │   ├── i18n/
│   │   ├── mobile-aware/
│   │   └── saas-onboarding/
│   ├── migration/
│   ├── faq/
│   ├── troubleshooting/
│   └── contributing/
├── sitemap.ts        # Auto-generated /sitemap.xml
├── robots.ts         # /robots.txt
└── opengraph-image.tsx
config/
└── site.ts           # Central config — base URL, GA4, metadata
```

---

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) — React framework
- [Nextra v4](https://nextra.site/) — Documentation framework  
- [Tailwind CSS v4](https://tailwindcss.com/) — Styling
- [MDX](https://mdxjs.com/) — Markdown + JSX

---

## 📝 Editing Content

All docs are MDX files inside `app/(docs)/`. Each page needs frontmatter:

```mdx
---
title: Page Title
description: Page description for SEO.
---
```

---

## 🏷️ Branding Badge

The library ships with an optional **"Built with NFSFU234TourGuide"** badge that appears on the welcome screen. It is **opt-out** — enabled by default, disabled with `showBranding={false}`.

If you'd like to update badge copy, styling, or the destination URL, edit:

```
components/Tour/Branding.tsx   # (or wherever the badge lives in the lib source)
```

The badge links to `https://tour-guide.nforshifu234dev.com` — keep that URL stable so existing installs continue to resolve correctly.

---

## 🚢 Deployment

Deployed on Vercel, served via `tour-guide.nforshifu234dev.com` (Cloudflare DNS → Vercel).

---

## 🤝 Contributing

1. Fork this repo
2. Edit `.mdx` files in `app/(docs)/`
3. Submit a PR

---

## 📄 License

MIT © [NFORSHIFU234 Dev](https://nforshifu234dev.com)