# Wedding Card Template

Personalize a modern, mobile-first wedding or ceremony invitation in minutes. This Quasar + Vue 3 single-page experience ships with pre-built hero, invitation, gallery, timeline, poem, countdown, and venue sections that can all be controlled from one configuration file.

---

## Why this template?
- **Content-driven** – update `src/content/eventConfig.ts` once, reuse everywhere
- **Production ready** – Quasar CLI (Vite) build, code-split assets, progressive images
- **Design tuned for events** – typography, spacing, AOS animations, and polished states already dialed in
- **Localizable** – swap fonts/direction for any language without touching component logic
- **MIT licensed** – fork, remix, or sell the final invite with zero strings attached

---

## Tech stack
| Layer | Details |
| --- | --- |
| Framework | [Quasar 2](https://quasar.dev/) on top of Vue 3 + Vite |
| Styling | SCSS modules + Quasar variables |
| Animations | [AOS](https://michalsnik.github.io/aos/) scroll reveals |
| Tooling | ESLint (flat config), Prettier, TypeScript-ready scripts |

---

## Getting started
```bash
# 1. install dependencies
npm install          # or: yarn

# 2. run the dev server with hot reload + ESLint overlay
npm run dev          # aliases to: quasar dev
```

### Recommended scripts
```bash
npm run lint         # eslint + vue plugin
npm run format       # prettier (respects .gitignore)
npm run build        # quasar build -> dist/ ready for hosting
```

`npm run build` outputs a fully static site inside `dist/`; deploy that folder to Netlify, Vercel, Cloudflare Pages, Firebase Hosting, GitHub Pages, or any static host.

---

## Customize the invite
All primary content lives in `src/content/eventConfig.ts`. Update these keys:

| Section | Fields |
| --- | --- |
| `hero` | Couple names, dates, hero/background images |
| `invitation.paragraphs` | Each array item is rendered line-by-line |
| `timeline` | Reorder/duplicate entries; change icon filenames in `src/assets/img/` |
| `countdown.targetDate` | ISO string (`YYYY-MM-DDTHH:mm:ss±hh:mm`) |
| `poem.image` + `poem.texts` | Swap background photo and copy/emoji |
| `venue` | Labels, address, map links, and Google Maps embed URL |

### Assets & theming
- Place new photos in `src/assets/img/` and reference by filename in the config.
- Adjust fonts, brand colors, or spacing token overrides inside `src/css/quasar.variables.scss`.
- Update SEO/share metadata (title, description, og:image) inside `index.html`.

### Localization / RTL
The components are TypeScript + computed-style friendly. To convert to another language:
1. Swap copy inside `eventConfig`.
2. Switch fonts in `quasar.variables.scss`.
3. Toggle layout direction (RTL/LTR) in the relevant component styles if required.

---

## Deployment checklist
1. `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure the correct base path (set `QUASAR_PUBLIC_PATH` or the provider’s base URL when deploying to a subdirectory)
4. Enable HTTPS + custom domain (optional but recommended)
5. Double-check share previews via `https://cards-dev.twitter.com/validator` or Facebook Debugger

---

## Contributing
PRs and forks are welcome! Suggested improvements:
- add RSVP form integration (Supabase, Airtable, Formspree, etc.)
- create light/dark theme toggles
- supply translation presets (EN, ES, FA, etc.)

Please run `npm run lint` before opening a pull request.

---

## License
[MIT](./LICENSE) © Pedram — build beautiful invites and celebrate! 🎉
