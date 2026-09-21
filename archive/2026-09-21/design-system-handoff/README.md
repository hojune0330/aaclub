# Handoff: Athletics Athlete Club — Design System

**브랜드**: Athletics Athlete Club (풀네임) · AA CLUB (로고·태그) · AAC (구어·파일명·SNS)
**슬로건**: `for Athlete.`
**개발자 인계 패키지 · 2026-09-21**

---

## Overview

Athletics Athlete Club은 육상 선수를 위한 **피드백 · 트레이닝 · 소속 · 매니지먼트 클럽**입니다. 이 핸드오프 패키지는 브랜드 아이덴티티부터 공식 문서 산출물까지 두 개 시스템 레이어로 정돈되어 있습니다:

1. **Brand Identity Layer** — 로고, 태그, 명함, SNS, 웨어러블, 매거진 컨셉
2. **Editorial Document Sub-system** — 계약 안내, 정책 요약, 보상 가이드, PDF 문서

---

## About the Design Files

이 번들의 HTML/JSX 파일은 **디자인 레퍼런스** 입니다. 실제 프로덕션 코드로 그대로 옮기지 마세요. 대신, **타깃 코드베이스의 기존 환경(React, Vue, Next.js, SwiftUI, Flutter, native, WordPress, Framer, Webflow 등)의 확립된 패턴과 라이브러리에 맞춰 재구현**하는 참고 자료로 사용해주세요.

- 만약 타깃 앱이 **React (Next.js, Remix, Vite 등)** 라면 `components/` 안의 JSX는 거의 그대로 이식 가능. React 18.3 + Babel standalone 전제로 작성됨.
- **Vue/Svelte/Angular** 라면 컴포넌트 구조(props, 자식 렌더링 규칙, CSS 변수 참조 방식)를 그대로 옮기고 프레임워크 문법으로 재작성.
- **iOS SwiftUI · Android Compose · Flutter** 는 이 문서의 "Design Tokens" 섹션에 정의된 컬러·타이포·스페이싱 값을 네이티브 토큰으로 매핑하고, 컴포넌트 레이아웃을 참고해 재구성.
- **CMS/노코드(Webflow, Framer, WordPress 등)** 는 `reference_html/` 파일을 브라우저에서 열어보며 CSS 값·구조를 육안으로 옮기고, 폰트·컬러 변수만 도구 내에서 정의.
- 기존 환경이 없다면 **Next.js 14 + Tailwind CSS + shadcn/ui** 조합을 추천 (문서 산출물 + 브랜드 사이트 양쪽 다 잘 맞음).

---

## Fidelity

**High-fidelity (hifi)**.

컬러, 타이포, 스페이싱, 그리드, 컴포넌트 크기, 인터랙션 상태가 최종 값으로 픽스되어 있습니다. 개발자는 **픽셀 단위로 이 디자인을 재현**해야 하며, 임의의 색 조정·폰트 대체·라운드 코너 추가 등은 하지 마세요. 브랜드 원칙은 "Non-Negotiables" 섹션에 명시되어 있습니다.

---

## Screens / Views

### Brand Identity Layer

#### 1. AAC Brand Canvas (`reference_html/brand-canvas.html`)
- **Purpose**: Mood 04 (Editorial × Sports Club 80/20) 브랜드 전체 개관. 개발자·마케터·파트너에게 브랜드 톤을 전달할 때 사용
- **Layout**: 단일 세로 스크롤 캔버스. 좌우 패딩 48px. 총 5개 섹션:
  1. Cover (Athletics *Athlete* Club 대형 워드마크 + `FOR ATHLETE.` 태그)
  2. Color Palette (Black·Navy·Off-white·Warm gray + 55/25/12/8 비율 바)
  3. Four Pillars (Feedback · Training · Belonging · Management, 편집적 인그레이빙 아이콘 4장)
  4. Typography (Fraunces display · Archivo Narrow eyebrow · Pretendard body)
  5. Applications (시즌 포스터 · 명함 · 배번 · 인스타 · Session Log 목업)
- **Components**: 모두 `components/brand/`에 있음

#### 2. Logo System (`assets/logos/`)
- **Purpose**: 확정된 로고 3종의 정식 파일 매트릭스
- **Files**:
  - **MAIN (H2)** 900×140 · 가로 한 줄 · 문서·웹·이메일 사인
  - **STACK (S2)** 640×260 · 두 줄 스택 · SNS·배번·표지
  - **SHORT (SF2)** 600×120 · `AA Club` · 파비콘·워터마크
- **각각 컬러 3종 × 포맷 (SVG + PNG 3x)** = 이 번들에는 코어 파일만 포함. 5x PNG는 원본 리포 `assets/logos/`에 있음
- **Minimum sizes**: MAIN 220px · STACK 110px · SHORT 40px 아래로 내려가면 다음 단계로 스텝다운

### Editorial Document Sub-system

#### 3. Editorial Document Component Kit (`reference_html/editorial-document-kit.html`)
- **Purpose**: A4 문서 산출 컴포넌트 라이브러리. 참여보상 안내 A4 2p 재현
- **Layout**: A4 portrait 794×1123 CSS px, 외곽 마진 48px, 컨텐츠 폭 698px, 12단 그리드 18px 거터
- **Toggle**: Page 01 / Page 02 / Both 탭 (localStorage 저장)
- **Components** (모두 `components/editorial-document/`에 있음, 15개):
  - `Page` — A4 컨테이너
  - `MetaRail` — 상단 4-필드 모노 메타 (Document · Program · Audience · Page)
  - `PageHeader` — AAC 워드마크 + 문서 코드
  - `AACWordmark` — 워드마크 이미지 (basePath prop으로 경로 조정)
  - `EditorialHero` — eyebrow + Instrument Serif 디스플레이 + H1
  - `LeadRule` — 2px accent top + 원칙 문장
  - `SectionHead` — H2 + 우측 mono 캡션 · 하단 1px ink 룰
  - `RewardTable` — 3열 플랫 테이블 (콘텐츠 유형·인정 기준·금액)
  - `DataTable` — 범용 5열 플랫 테이블 (제네릭 columns[] props)
  - `NotesRail` — n열 균등 노트 그리드
  - `Timeline` — 번호·마감·본문 3열 스텝 (신청·검토·지급 절차)
  - `Conditions` — 2열 조건 블록
  - `QARow` — 번호 + 질문 + 답 Q&A row
  - `StatBlock` — mono 대형 수치 + KR 라벨 + 부가 캡션
  - `CarouselFrame` — 인스타 4:5 프레임 (540×675 프리뷰, 1080×1350 최종)
  - `PageFooter` — 출처 + 우선순위 안내

#### 4. Document Templates (6종)
| 파일 | 용도 | 스크린 크기 |
|---|---|---|
| `reference_html/template-a-athlete-profile.html` | 선수 1p 프로필 (후원 제안) | 794×1123 A4 |
| `reference_html/template-b-contract-summary.html` | 계약서 6줄 핵심 요약 1p | 794×1123 A4 |
| `reference_html/template-c-qa-faq.html` | 신인 선수 온보딩 Q&A 6개 | 794×1123 A4 |
| `reference_html/template-d-instagram-carousel.html` | 참여보상 인스타 4:5 캐러셀 5장 | 540×675 프리뷰 |
| `reference_html/template-e-session-log.html` | 훈련 노트 (세트 + 코치 피드백) | 794×1123 A4 |
| `reference_html/template-f-sponsorship-cover.html` | SS26 후원 제안서 커버 1p | 794×1123 A4 |

---

## Interactions & Behavior

### 브랜드 원칙 (모든 인터랙션 공통)

- **Hover 트랜지션**: **100ms** 컬러 페이드만. bounce · spring · parallax 금지
- **Button hover**: 배경 반전 (흰→검, 검→흰) + 텍스트 반전
- **Link hover**: underline 표시 또는 opacity 0.7
- **Press**: shrink 없음. 색만 약간 어둡게
- **페이지 전환**: 페이드만. 슬라이드·튐 금지

### Editorial Document Kit — 페이지 토글
- 상단 toolbar에서 Page 01 / Page 02 / Both 클릭 → 해당 페이지만 렌더
- 선택 상태는 `localStorage['aac-doc-page']`에 저장 (0=Both, 1=P1, 2=P2)
- `aria-pressed` 속성으로 활성 탭 표시

### Instagram Carousel
- 5장이 세로로 나열됨. 실제 인스타 게시는 각 슬라이드를 개별 이미지로 export
- Slide 1 하단: `SWIPE →` 오른쪽 정렬 mono 캡션
- Slide 5 하단: `@athleticsathleteclub · 링크` CTA

### Interactive states 없는 곳
문서 템플릿은 대부분 **정적 (인쇄·PDF·PNG 출력용)**. 링크·버튼·폼 인터랙션 없음.

---

## State Management

기본적으로 이 디자인은 **stateless 정적 렌더**입니다. 예외:

1. **Editorial Document Kit — 페이지 토글**
   - `useState<number>`로 페이지 인덱스 (0/1/2) 관리
   - `useEffect`로 localStorage sync
   - `window.__setPage(n)` 전역 함수로 외부 toolbar에서 호출

2. **동적 데이터가 들어올 자리** (실제 앱 통합 시)
   - 선수 프로필: 이름·기록·최근 경기 (API/CMS)
   - 계약 요약: 계약서별 조항 데이터
   - Session Log: 훈련 세트별 기록 (fetch from training log DB)
   - Reward Table: 콘텐츠 유형별 금액 (config or admin panel)

컴포넌트 대부분은 이미 **props 기반**으로 작성되어 있어서 데이터 인터페이스는 명확합니다.

---

## Design Tokens

**두 개 CSS 파일에 완전히 정의되어 있음**:
- `tokens/colors_and_type.css` — Brand Identity Layer (Mood 04)
- `tokens/doc-tokens.css` — Editorial Document Sub-system

### Colors — Brand Identity Layer

```
Primary
  --aa-black         #0A0A0A    Pure Black · 텍스트 기본
  --aa-ink           #141414    Ink · 다크 서페이스

Secondary (12% 최대 사용)
  --aa-navy          #0F1B3D    Deep Navy
  --aa-navy-deep     #0A1230

Neutrals (warm)
  --aa-white         #FFFFFF    Pure White (서페이스만)
  --aa-off-white     #F5F3EE    ★ 기본 배경 (55% 사용)
  --aa-paper         #EFECE4    Paper 대체

Grays (warm-tinted)
  --aa-gray-900      #1C1C1C
  --aa-gray-700      #3A3A3A    본문 서브
  --aa-gray-500      #6B6B6B    캡션·라벨
  --aa-gray-300      #B8B5AC
  --aa-gray-200      #D6D3CB
  --aa-gray-100      #E8E5DC
  --aa-gray-50       #F2EFE7
  --aa-line          #DAD6CC    구분선

절대 사용 금지
  --aa-accent-gold   #C4B27A    (Mood 04에서 제외)

Semantic
  --bg               #F5F3EE
  --surface          #FFFFFF
  --fg1              #0A0A0A
  --fg2              #3A3A3A
  --fg3              #6B6B6B
  --accent           #0F1B3D
  --tag-bg           #0A0A0A
  --tag-fg           #F5F3EE
```

**사용 비율 (권장)**: 오프-화이트 **55%** · 블랙 **25%** · 네이비 **12%** (최대) · 그레이 **8%**

### Colors — Editorial Document Sub-system

```
Surfaces
  --paper            #FAFAF7    warm off-white (문서 페이지)
  --surface          #FFFFFF
  --surface-muted    #F3F2EE    quiet band

Ink
  --ink              #0E1412    본문·헤드라인
  --ink-2            #3A4340    리드·노트
  --ink-3            #6B7571    메타데이터

Structure
  --line             #E4E2DC    1px 헤어라인
  --line-strong      #0E1412

Accent (Deep Teal · 페이지당 1회)
  --accent           #0D5F5A
  --accent-wash      #E8F0EE

Error (최소 사용)
  --error            #A11F1F
```

### Typography

**Brand Identity Layer** (Google Fonts + Pretendard CDN):
```
Display     Fraunces          300–400, italic on "Athlete" only
Eyebrow/Tag Archivo Narrow    700–800, UPPERCASE, +0.18–0.24em
Body KR     Pretendard        500
Body EN     Inter / Neue Haas 400
Data/Mono   IBM Plex Mono     좌표·기록·배번
```

**Editorial Document Layer** (Local WOFF2 + Google Fonts KR):
```
Serif       Instrument Serif  400, italic — 오프너에만
Sans (KR)   Pretendard / Noto Sans KR    400/500/600
Mono        IBM Plex Mono     400/500, tabular-nums
```

**Type Scale (Doc Layer, px)**:
| Class | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| `.display` | 58 | 400 | 0.98 | -0.03em |
| `.h1.aac` | 34 | 500 | 1.25 | -0.02em |
| `.h2.aac` | 25 | 500 | 1.25 | -0.02em |
| `.h3.aac` | 20 | 500 | 1.25 | 0 |
| `.body-lg` | 18 | 400 | 1.65 | 0 |
| `.body` | 15 | 400 | 1.65 | 0 |
| `.body-sm` | 13 | 400 | 1.55 | 0 |
| `.caption` | 11 | 400 | 1.45 | 0.08em |
| `.figure` | 24 | 500 | 1.1 | 0 · tabular |

### Spacing

**Brand Layer** (`--space-*`): 4 · 8 · 16 · 24 · 40 · 64
**Doc Layer** (`--s1`–`--s18`): 4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 56 · 64 · 72

**섹션 리듬 (Doc)**: 16 (tight) / 24 (base) / 40 (loose) / 64 (major)

### Border Radius

**모든 요소 `border-radius: 0`** — 브랜드 절대 원칙.
예외 하나: status chip 최대 2px.

### Shadows / Elevation

**전면 금지** (모든 레이어). box-shadow · text-shadow · gradient · 3D · drop-shadow 절대 사용하지 마세요.
리프트 표현이 필요하면: 얇은 보더 + 배경 대비로만.

### Border Rules

```
--border-thin       1px solid #DAD6CC       기본 구분선
--border-dashed     0.5px dashed #DAD6CC    서브 구분선 (safe zone 등)
--border-strong     2px solid #0A0A0A       섹션 강조 (20% 클럽 요소)
--rule              1px solid #E4E2DC       (Doc) 헤어라인
--rule-strong       1px solid #0E1412       (Doc) 섹션 헤드 아래
--rule-accent-top   2px solid #0D5F5A       (Doc) Lead rule 강조
```

### Grid

- **12단 그리드**
- **데스크탑 좌우 패딩 최소 48px** (에디토리얼 원칙)
- **좌정렬 기본** (배번 등 특수 케이스만 중앙)
- Doc A4: 794×1123 CSS px · 외곽 48-56px · 컨텐츠 682px · 18px gutter

---

## Assets

### 이 번들에 포함된 자산

**로고 (18개 · 원본 리포에는 총 36개)**
- `assets/logos/AA-CLUB_MAIN_{black|navy|white}.svg` — H2 가로형 3색
- `assets/logos/AA-CLUB_STACK_{black|navy|white}.svg` — S2 세로형 3색
- `assets/logos/AA-CLUB_SHORT_{black|navy|white}.svg` — SF2 축약형 3색
- `assets/logos/AA-CLUB_{MAIN|STACK|SHORT}_black_3x.png` — 인쇄용 300dpi
- 5x (배너·간판용) PNG는 원본 프로젝트 리포의 `assets/logos/`에 있음

**워드마크 (GitHub 원본 · 계속 사용)**
- `assets/AA_CLUB_logo.svg` — 벡터 마스터
- `assets/aac-wordmark-dark.png` — 종이 배경용 (문서에 사용 중)
- `assets/aac-wordmark-light.png` — 잉크 배경용

**4 Pillars 아이콘 (에디토리얼 인그레이빙 스타일 · 이미지 생성)**
- `assets/icons/pillars/feedback.png` — 마주보는 두 노트 + 화살표
- `assets/icons/pillars/training.png` — 빈티지 스톱워치 + 트랙
- `assets/icons/pillars/belonging.png` — 월계관 + 3인 실루엣
- `assets/icons/pillars/management.png` — 앤티크 컴퍼스 로즈 + fleur-de-lis
- 특징: 1024×1024 흰 배경 PNG. CSS `mix-blend-mode: multiply`로 오프-화이트 페이퍼에 합성

**폰트 (Latin subset 로컬)**
- `fonts/InstrumentSerif-Regular.woff2`, `InstrumentSerif-Italic.woff2`
- `fonts/IBMPlexMono-Regular.woff2`, `IBMPlexMono-Medium.woff2`
- Fraunces · Archivo Narrow · Pretendard · Noto Sans KR — 모두 CDN 임포트 (CSS 파일에 정의됨)

### 없는 자산 (사용자 채워야 함)

- **실제 훈련·트랙·선수 사진** — [`PHOTO_BRIEF.md`](PHOTO_BRIEF.md) 참고. 우선순위:
  - P0: 선수 정면 초상 9인 (4:5) + 팀 훈련 와이드 (3:2) + 트랙 모션-블러 뒷모습 (4:5)
  - P1: 스톱워치·운동화·트랙 접사·코치 대화·정물 6종
- 사진 톤: warm · natural · motion-blurred · film-grain 400 · 채도 -10~15
- **AI로 인물 사진 생성 금지** (브랜드 원칙 위반)

---

## Non-Negotiables (브랜드 절대 원칙 · 개발자 지켜야 함)

1. **`border-radius: 0`** — 어디에도 라운드 코너 금지 (chip 2px만 예외)
2. **이모지 금지** (🏃‍♂️🔥 등 절대 사용 금지)
3. **그라디언트 · 3D · 그림자 금지**
4. **네이비 사용 최대 12%** — 액센트로만
5. **강한 표현 금지** — "최고", "압도", "유일무이", "!" 등
6. **최소 텍스트 크기**: 인쇄 12pt · 웹 10px · 문서 한글 15px @ A4
7. **로고 최소 크기**: MAIN 220px · STACK 110px · SHORT 40px
8. **캐릭터/3D/사실적 러닝 일러스트 금지** — 은유만
9. **골드(`#C4B27A`) 사용 금지** — Mood 04에서 제외
10. **웜톤 유지** — 순수 흰색보다 오프-화이트(`#F5F3EE`) 또는 paper(`#FAFAF7`)
11. **문서 Deep Teal 액센트는 페이지당 1회** — 규칙·수치 스캔에만
12. **의미를 색만으로 전달하지 말 것** — 라벨·정렬이 함께 의미
13. **AI로 렌더한 한글 텍스트를 이미지로 굽지 말 것** — live text로

---

## Content Tone (카피 원칙)

카피 이식할 때 개발자·마케터가 알아야 할 톤:

| 속성 | 설명 |
|---|---|
| Short | 짧게. 설명보다 태도. 마침표로 끝. |
| Honest | 과장·최상급 표현 금지. |
| Athlete-centered | 항상 선수의 입장에서. "우리" 최소. |
| Trustworthy | 조용한 확신. 감탄사 없음. |
| Quiet | 느낌표 없음. 이모지 없음. |

**호칭**: "**선수**" (고객·사용자 아님), "**코치**", "**AA CLUB**" 또는 "**AAC**"
**케이싱**: 본문은 소문자/한글 그대로. 태그·라벨(Eyebrow)만 `UPPERCASE + 자간 +0.18~0.24em`
**슬로건**: `for Athlete.` (소문자 시작 + 마침표 포함)

---

## Files

### `tokens/`
- `colors_and_type.css` — Brand Identity Layer 전체 토큰 + 세미틱 클래스
- `doc-tokens.css` — Editorial Document Sub-system 토큰

### `assets/`
- `AA_CLUB_logo.svg`, `aac-wordmark-{dark,light}.png` — 원본 워드마크
- `logos/` — 확정 로고 3종 × 3컬러 (SVG + 3x PNG)
- `icons/pillars/` — 4 Pillars 인그레이빙 아이콘 4장

### `fonts/`
- Instrument Serif · IBM Plex Mono woff2 (Latin subset)

### `components/brand/`
- `aa-icons.jsx` — `PillarIcon`, `UIIcon` (curl PNG import 방식)
- `aa-logo.jsx` — 로고 컴포넌트 (Monogram · Wordmark · Short)
- `brand-tokens.jsx` — 무드별 JS 토큰

### `components/editorial-document/`
- 15개 재사용 컴포넌트 JSX (위 Screens 섹션 참고)

### `reference_html/`
- `brand-canvas.html` — Brand Identity Layer 전체 캔버스
- `editorial-document-kit.html` — 컴포넌트 킷 데모 (참여보상 A4 2p)
- `templates-index.html` — 6종 템플릿 인덱스
- `template-a-athlete-profile.html` — 선수 프로필
- `template-b-contract-summary.html` — 계약 요약
- `template-c-qa-faq.html` — Q&A/FAQ
- `template-d-instagram-carousel.html` — 인스타 5장
- `template-e-session-log.html` — 훈련 노트
- `template-f-sponsorship-cover.html` — 후원 제안서 커버

### 루트
- `README.md` — 이 파일
- `SKILL.md` — 이 시스템의 스킬 매니페스트 (attach 대상 프로젝트에서 자동 로드)
- `PHOTO_BRIEF.md` — 사진 촬영 요청서 (사진 없음, 사용자가 채워야 함)

---

## Contact & Next Steps

- **디자인 이슈** — 원본 프로젝트 (Genspark Design) 에서 이슈 논의
- **로고 최소 크기 미준수 · 컬러 왜곡 발견 시** — 이 문서의 Non-Negotiables 재확인
- **문서 템플릿 추가 요청** (예: 시즌 리포트, 성적표, 콘텐츠 브리프) — 원본 디자인 시스템에 요청 → `templates/g_*.html` 추가되면 이 핸드오프도 재빌드
- **사진 확보 후** — `assets/photos/` 경로 규약대로 배치 (PHOTO_BRIEF.md 참고). 개발자는 프로필 A · 후원 커버 F · 캐러셀 D의 이미지 슬롯을 실제 사진으로 교체

**배포 목표**: 이 핸드오프는 개발자 인계용. **Genspark Design 위에서 그대로 배포는 불가** — Genspark Code (또는 별도 프론트엔드 프로젝트)로 이관해서 프로덕션 빌드로 배포해야 합니다.
