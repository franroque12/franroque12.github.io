# Francisco Roque — CV / Portfolio

Personal CV site for Francisco Roque, Senior Quality Engineer. Built with Next.js, Tailwind CSS, and Framer Motion. Single-page, bilingual (EN/PT), editorial dark-theme design.

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, static export
- [React 19](https://react.dev/) — TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered animations

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command         | Description                        |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start development server           |
| `npm run build` | Production build + static export   |
| `npm run start` | Serve production build locally     |
| `npm run lint`  | Run ESLint                         |

## Project structure

```
src/
├── app/            # Next.js App Router (layout, page, metadata, sitemap, icon, OG image)
├── components/     # One file per section (Hero, About, Skills, Certifications, Experience, Education, Contact)
└── i18n/           # Client-side i18n (context, en.json, pt.json)
public/             # Static assets (robots.txt, icons)
```

## Still to do before publishing

This was scaffolded from the CV on file — a few things are placeholders and need a decision before it goes live:

- **Domain**: `metadataBase` / OG / sitemap URLs currently point to `francisco-roque-cv.example.com`. Swap for the real domain once one is chosen (or a GitHub Pages URL).
- **Hero photo**: currently an "FR" initials mark instead of a photo. Drop a real image into `public/images/` and swap it into `src/components/Hero.tsx` if a photo is wanted.
- **GitHub link**: left out of `src/components/Contact.tsx` since no username was provided — add it there if wanted.
- **Deploy target**: no CI/CD or hosting configured yet (the reference project deploys to GitHub Pages via `output: "export"` in `next.config.ts`, which is already set up here).

## License

The **source code** (everything under `src/`, configuration files, and build tooling) is licensed under the [MIT License](LICENSE).

The **content** — CV data, translations, and any personal information — is **not licensed for reuse** and remains the property of Francisco Roque.

## Author

**Francisco Roque** — Senior Quality Engineer.

- [LinkedIn](https://linkedin.com/in/francisco-roque)
- franroque12@gmail.com
