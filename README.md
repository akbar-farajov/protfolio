# Akbar Farajov - Portfolio

Personal portfolio built with Next.js, Once UI, and MDX.

## Quick start

1. Install dependencies:
```bash
pnpm install
```

2. Run the dev server:
```bash
pnpm dev
```

If you prefer npm:
```bash
npm install
npm run dev
```

## Customize

- Global config: `src/resources/once-ui.config.ts` (baseURL, routes, theme)
- Content: `src/resources/content.tsx` (person, about, work, studies, skills)
- Resume content: `public/akbar.md`
- Avatar and images: `public/images`
- Blog posts: `src/app/blog/posts`
- Project pages: `src/app/work/projects`

## Tech

- Next.js App Router
- Once UI
- MDX for blog and project content
- TypeScript

## Notes

- Requires Node.js 18.17+.
- Location uses an IANA time zone string for the live clock.

## Credits

Based on the Magic Portfolio template by Once UI: https://once-ui.com

## License

CC BY-NC 4.0. See `LICENSE`.
