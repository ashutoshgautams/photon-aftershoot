# Photon by Aftershoot — Marketing Site (v2, bold direction)

A free photo editor that *teaches you as you go*. Next.js 14 + Tailwind + Framer Motion.

## Run locally (Node 18.17+)
```bash
npm install
npm run dev      # → http://localhost:3000
```
Build: `npm run build` then `npm run start`.

## The concept
**"A photographer in your pocket."** Meet **Iris** — the AI coach (think Dr. Wolf for chess).
She doesn't just fix the photo, she teaches you why, step by step, until you outgrow her.

## Design language (high-temperature, gen-Z editorial)
- **Type:** Bricolage Grotesque (chunky display) + Plus Jakarta Sans + JetBrains Mono
- **Color:** warm paper cream, electric coral, acid lime surprise, electric grape, sky
- **Motif:** hard black borders + offset "sticker" shadows, floating UI chips, ticker marquee
- **Less text, more motion:** real product video on autoplay loops; short punchy copy
- Tokens live in `tailwind.config.mjs`; shared styles in `src/app/globals.css`

## Real product video
`public/media/` holds web-optimized loops + posters generated from the source clips:
- `intro.mp4` / `intro_poster.jpg`  → hero showcase
- `coach.mp4` / `coach_poster.jpg`  → the Iris (AI coach) section
Swap these files to update the footage (keep filenames, or update paths in `Hero.jsx` / `Coach.jsx`).

## Sections (`src/components/`)
Hero (video + sticker chips) → Marquee → **Coach/Iris** (video + interactive step card) →
Features (sticker bento) → Ladder ("glow-up path") → Audience → Download → Footer.

## Next steps to production
1. Swap demo videos for final captures; add WebM versions for smaller files.
2. Wire the Download button to the real installer.
3. Split `/features`, `/about`, `/contact`, `/blog`, `/learn` into App Router folders.
4. Add a CMS (Sanity/Notion) for the blog + tutorials library.
5. Real OG image at `public/og.png`; analytics in `layout.js`.
# photon-aftershoot
