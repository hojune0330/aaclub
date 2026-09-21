---
name: aaclub-design
description: Athletics Athlete Club (AAC · AA CLUB) 브랜드 산출물과 공식 문서를 만들 때 사용합니다. 로고·태그·명함·SNS·커버·매거진 컨셉 같은 브랜드 접점은 Mood 04 (Editorial × Sports Club 80/20) 원칙을 따르고, 계약 안내·정책 요약·보상 가이드·A4 인포그래픽 같은 문서 산출물은 별도의 Editorial Document 서브시스템(paper + Deep Teal)을 따릅니다. 이모지 없음, 라운드 코너 없음, 그림자 없음, 조용한 톤.
user-invocable: true
---

# AAC Design — Skill Body

Athletics Athlete Club (풀네임) · AA CLUB (로고·태그) · AAC (약칭).
슬로건: **`for Athlete.`**

이 시스템은 **두 개의 레이어**로 나뉩니다. 만들려는 산출물이 어느 레이어인지 먼저 정하세요.

## 어느 레이어를 쓸지 결정

| 만드는 것 | 레이어 | 진입점 |
|---|---|---|
| 로고, 명함, SNS 프로필, 웨어러블, 커버, 매거진 컨셉, 웹 랜딩, 브랜드 캔버스 | **① Brand Identity** | `colors_and_type.css` · `aa-*.jsx` · `ui_kits/brand-system/` |
| 계약 안내, 정책 요약, 보상 가이드, Q&A, 1페이지 브리프, 인포그래픽, PDF·A4·PNG 문서 | **② Editorial Document** | `doc-tokens.css` · `ui_kits/editorial-document/` |

**둘을 섞지 마세요.** 문서에 Fraunces 헤드라인을 넣거나, 로고 캔버스에 Deep Teal을 쓰지 마세요. 만약 산출물이 두 레이어를 동시에 요구하는 것 같다면 (예: 브랜드 브로셔), 먼저 어느 쪽이 주(主)인지 정하고 그 쪽 토큰만 씁니다.

## Required Inputs

1. 반드시 [README.md](README.md)를 먼저 읽고 어느 레이어인지 확정.
2. 로고·워드마크는 `assets/AA_CLUB_logo.svg`, `assets/aac-wordmark-dark.png`, `assets/aac-wordmark-light.png`에서 **그대로** 사용. 다시 그리지 마세요.
3. Brand Layer 컴포넌트는 `aa-logo.jsx` · `aa-icons.jsx` · `aa-hybrid-mood.jsx` · `aa-shared-boards.jsx`에 있음. 새로 만들지 말고 재사용.
4. Editorial Document Layer 컴포넌트는 `ui_kits/editorial-document/*.jsx`에 있음 (Page · MetaRail · PageHeader · EditorialHero · LeadRule · SectionHead · RewardTable · NotesRail · Timeline · Conditions · QARow · StatBlock · DataTable · CarouselFrame · PageFooter). 재사용.
5. 이미 완성된 6종 문서 템플릿(`templates/a~f`)이 있음. 새 문서를 만들 때는 **가장 가까운 템플릿을 fork**해서 시작하세요. 처음부터 그리지 마세요.
6. 사진 슬롯이 필요하면 [`PHOTO_BRIEF.md`](PHOTO_BRIEF.md)의 톤 가이드를 따르고, 실제 사진이 없으면 `templates/a_athlete_profile.html`의 `PortraitSlot`처럼 명시적인 플레이스홀더를 남기세요. AI로 인물 사진을 생성해서 넣지 마세요.
7. 4 Pillars 아이콘은 `assets/icons/pillars/*.png` (에디토리얼 인그레이빙, 생성됨). 다른 은유가 필요하면 SVG를 새로 그리지 말고 같은 스타일로 이미지 생성을 요청하세요.

## Non-negotiable rules (양 레이어 공통)

- **`border-radius: 0`** — chip 2px만 예외
- **이모지 금지**
- **그라디언트 · 3D · 그림자 금지**
- **네이비 최대 12%** (Brand Layer)
- **강한 표현 금지** ("최고", "압도", "유일무이", "!") — 조용한 톤
- **캐릭터/사실적 러닝 일러스트 금지** — 은유만
- **골드(`#C4B27A`) 금지**
- **로고**: 확정 조합 **MAIN=H2 · STACK=S2 · SHORT=SF2** (2026-09-21 픽). 파일은 `assets/logos/AA-CLUB_{MAIN|STACK|SHORT}_{black|navy|white}[_{1x|3x|5x}].{svg|png}`
- **로고 최소 크기**: MAIN 220px, STACK 110px, SHORT 40px. 그 아래로 내려가면 한 단계 축약형 사용
- **로고 컬러**: Black이 기본 (오프-화이트 배경). Navy는 특별 강조 (12% 룰 지킴). White는 다크 반전 배경만
- **로고 금지**: 스트레치·회전·다른 컬러·그라디언트 배경. `preview/logo-donts.html` 참고
- **웜톤 유지**: 순수 흰색보다 오프-화이트(`#F5F3EE`) 또는 paper(`#FAFAF7`)
- **AI로 렌더한 한글을 이미지로 굽지 말 것** — live text HTML/SVG로

## Brand Layer (① Mood 04) — 요약

- 배경 오프화이트 (`#F5F3EE`) 55% / 블랙 25% / 네이비 12% / 그레이 8%
- 폰트: Fraunces (display italic만 `Athlete`) + Archivo Narrow (eyebrow UPPERCASE) + Pretendard (KR body) + Inter (EN body) + IBM Plex Mono (data)
- 태그: 검정 바탕 오프화이트 텍스트 `.tag-for-athlete` — 5px 12px, `FOR ATHLETE.`
- 버튼: 흰 바탕 검정 보더 → hover 100ms 색 반전
- 데이터 언어: `LAT 37.55 / LON 126.97`, `SS26 · N° 001`, 배번 `017`, 시간 `1:03.8` — 모두 mono
- 12단 그리드, 좌우 패딩 최소 48px, 좌정렬 기본
- Rule: `1px solid #DAD6CC` (thin) / `2px solid #0A0A0A` (strong = 20% club)

## Editorial Document Layer (②) — 요약

- Canvas: A4 portrait 794×1123 CSS px · 2× PNG export
- Surfaces: paper `#FAFAF7` / surface `#FFFFFF` / surface-muted `#F3F2EE`
- Ink: `#0E1412` → `#3A4340` → `#6B7571`
- Rules: 1px `#E4E2DC` / strong 1px ink / accent top 2px `#0D5F5A`
- Fonts: Instrument Serif (오프너만) + Pretendard/Noto Sans KR (body) + IBM Plex Mono (meta·figures, tabular-nums)
- **Deep Teal 액센트는 페이지당 1회** — 원칙 rule 또는 헤드라인 수치에만
- 아이콘 거의 안 씀. mono 번호(`01`), 헤어라인, 정렬로 계층 전달
- 외곽 마진 48–56px, 컨텐츠 폭 682px, 12단·18px 거터
- 섹션 리듬 16 / 24 / 40 / 64px
- 그레이스케일 인쇄에서도 읽혀야 함 — 색만으로 의미를 나르지 말 것

## Delivery checklist

- 로고·워드마크 파일을 원본 그대로 참조했는가 (SVG/PNG 리드로잉 금지)
- 톤은 짧고 조용한가 · `!` 없는가 · 이모지 없는가
- 라운드 코너 0인가 · 그림자 없는가 · 그라디언트 없는가
- (Brand) 네이비가 12% 이하인가
- (Doc) Deep Teal이 페이지당 1회인가 · 그레이스케일에서 읽히는가
- (Doc) 한글 본문이 15px 이상인가 (A4 기준)
- 한 산출물이 한 레이어의 토큰만 사용했는가
