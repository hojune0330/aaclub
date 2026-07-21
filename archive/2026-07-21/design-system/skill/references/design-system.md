# AAC Editorial Document System

Derived from the user-provided TRAINORACLE design-direction reference on 2026-07-21, then adapted to AAC's black-and-white wordmark and official athlete communications. This file is self-contained so future work does not depend on the reference URL remaining available.

## Direction

Quiet, precise, official. The signature is a warm paper field structured by thin rules, a serif editorial statement, compact mono metadata, and highly legible Korean operational copy. Information, not decoration, is the visual center.

## Tokens

| Role | Value |
|---|---|
| Paper | `#FAFAF7` |
| Surface | `#FFFFFF` |
| Surface muted | `#F3F2EE` |
| Ink | `#0E1412` |
| Ink secondary | `#3A4340` |
| Ink muted | `#6B7571` |
| Line | `#E4E2DC` |
| Accent | `#0D5F5A` |
| Accent wash | `#E8F0EE` |
| Error, only if necessary | `#A11F1F` |

Use the accent for one rule, one figure, or one navigation cue per page. Never flood large areas with it.

## Typography

- Editorial display: `Instrument Serif`, fallback `Times New Roman`, regular or italic.
- Korean/body: `Pretendard Variable`, fallback `Noto Sans KR`, `Malgun Gothic`, sans-serif.
- Metadata/numbers: `JetBrains Mono`, fallback `IBM Plex Mono`, `Consolas`, monospace.
- A4 display: 44-64 px, line-height 0.95-1.04, tracking -0.03em.
- Section title: 25-32 px, 500 weight, line-height 1.25.
- Korean body: 15-18 px, line-height 1.65.
- Metadata/caption: 10-12 px, line-height 1.45, tracking 0.08-0.14em.
- Use tabular figures for amounts, dates, counts, and limits.

## Page geometry

- Default: A4 portrait, 794 x 1123 CSS px; export at 2x for 1588 x 2246 PNG.
- Outer margin: 48-56 px on small digital A4; 64-80 px on larger print canvases.
- Grid: 12 columns with 16-20 px gutters; align every headline, table, and footer to it.
- Major section gap: 56-72 px. Local gap: 12-24 px.
- Use 1 px rules in `Line`; do not use shadows.
- Borders are square. Radius is 0; allow 2 px only for small status chips.

## Page anatomy

1. Metadata rail: document name, version/date, audience, page number.
2. Wordmark: small, black variant on light paper.
3. Editorial title: serif-led statement or short bilingual title.
4. Lead rule: one concise sentence that explains the governing principle.
5. Main evidence: table, timeline, or numbered definition rows.
6. Conditions: short list or two-column notes separated by rules.
7. Footer: source document name and precedence notice.

## Tables

- Prefer a header rule plus horizontal row separators instead of boxed cells.
- Left-align labels; right-align amounts and deadlines.
- Use 16-22 px vertical cell padding.
- Keep labels concise; move exceptions below the table as editorial notes.
- Use a subtle `Surface muted` header only when scanning materially improves.
- Never use bright filled reward cards, large price tiles, or alternating rainbow rows.

## Multi-page series

- Keep dimensions, metadata rail, title position, and footer identical.
- Page 1 answers “what and how much.” Page 2 answers “how to qualify and receive it.”
- Repeat only the AAC wordmark and page metadata, not the full title.

## Prohibited patterns

- Neon lime, poster-scale Korean display type, rounded card grids, sparkle icons, emojis, gradients, drop shadows, fake 3D, and promotional CTA language.
- AI-rendered Korean text. Build operational copy with live text.
- Dense contract paragraphs inside the image. Link or name the governing source instead.

