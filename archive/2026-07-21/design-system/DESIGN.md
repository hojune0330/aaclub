# AAC Content Reward Editorial Guide Design System

## 0. Research Log

- Live reference: inspected `00_Moodboard.html` at 1280 px on 2026-07-21 and extracted computed color, type, spacing, grid, and border values.
- Runtime grammar: warm paper `#FAFAF7`, ink `#0E1412`, line `#E4E2DC`, deep teal `#0D5F5A`; Instrument Serif + Korean sans + mono metadata; 1 px square rules and wide editorial spacing.
- Reference adaptation: retained the document grammar while replacing TRAINORACLE identity with the supplied AAC wordmark and AAC policy content.
- Skipped lanes: no external inspiration or image concepts; the user supplied a concrete visual contract.

## 1. Atmosphere & Identity

An official athlete-facing brief: quiet, exact, and generous. The signature is a serif editorial statement sitting above disciplined Korean information rows, with one restrained teal cue and no promotional-card styling.

## 2. Color

| Role | Token | Value | Usage |
|---|---|---|---|
| Paper | `--paper` | `#FAFAF7` | Page background |
| Surface | `--surface` | `#FFFFFF` | Table header or selected block |
| Surface muted | `--surface-muted` | `#F3F2EE` | Quiet emphasis |
| Ink | `--ink` | `#0E1412` | Headlines and body |
| Ink secondary | `--ink-2` | `#3A4340` | Lead and notes |
| Ink muted | `--ink-3` | `#6B7571` | Metadata |
| Line | `--line` | `#E4E2DC` | Rules and table separators |
| Accent | `--accent` | `#0D5F5A` | One key rule or amount |
| Accent wash | `--accent-wash` | `#E8F0EE` | Subtle emphasis |

Use accent sparingly. The design must remain legible in grayscale.

## 3. Typography

| Level | Size | Weight | Line height | Family |
|---|---:|---:|---:|---|
| Display | 58 px | 400 | 0.98 | Instrument Serif |
| H1 | 34 px | 500 | 1.2 | Noto Sans KR |
| H2 | 25 px | 500 | 1.3 | Noto Sans KR |
| Body large | 18 px | 400 | 1.6 | Noto Sans KR |
| Body | 15 px | 400 | 1.65 | Noto Sans KR |
| Caption | 11 px | 400 | 1.45 | IBM Plex Mono |
| Figure | 24 px | 500 | 1.1 | IBM Plex Mono |

Fallbacks: Pretendard Variable and Malgun Gothic for Korean; Times New Roman for display; Consolas for mono.

## 4. Spacing & Layout

- Base unit: 4 px.
- Canvas: A4 portrait, 794 x 1123 CSS px; 2x PNG export.
- Outer margin: 56 px; content width 682 px.
- Grid: 12 columns, 18 px gutters.
- Section rhythm: 16 / 24 / 40 / 64 px.
- Rules: 1 px; no shadows; no rounded card containers.

## 5. Components

### Metadata Rail
- Structure: four compact mono fields in a horizontal grid.
- States: static print only.
- Spacing: 8 px local, 24 px below.
- Accessibility: uppercase labels remain secondary to readable values.

### Page Header
- Structure: AAC wordmark, document metadata, page number.
- Layout: cluster aligned to the 12-column grid.
- Accessibility: logo has descriptive alt text in HTML.

### Editorial Lead
- Structure: serif statement plus one Korean explanatory paragraph.
- Variant: italic accent word may use `--accent`.
- Layout: max 8 columns; asymmetric blank space is intentional.

### Reward Table
- Structure: category, qualifying condition, amount.
- Layout: flat three-column grid; amount right-aligned with tabular figures.
- Surface: horizontal rules only; optional muted header.
- Accessibility: real table semantics in HTML.

### Procedure Timeline
- Structure: step number, deadline, action, evidence.
- Layout: vertical rows with number in mono and no arrows or icon badges.

### Rule Note
- Structure: short label plus one or two sentences.
- Variant: accent rule for the general rule; plain rule for exceptions.

### Source Footer
- Structure: governing document name, precedence note, page number.
- Layout: fixed to the bottom rule when content permits.

## 6. Motion & Interaction

This is a print/static surface. No animation or decorative interaction. Browser previews may use only focus outlines for links.

## 7. Depth & Surface

Strategy: borders-only. Use paper, surface-muted bands, and 1 px rules. Zero box shadows and zero gradients.

## 8. Accessibility Constraints & Accepted Debt

- Target WCAG 2.2 AA contrast for all live text.
- Minimum Korean body size is 15 CSS px on the A4 canvas, exported at 2x.
- Do not encode meaning by color alone; labels and alignment carry meaning.
- Accepted debt: none.
