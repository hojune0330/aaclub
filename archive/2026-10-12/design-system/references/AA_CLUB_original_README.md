# AA CLUB Design System

> **Athletics Athlete Club · 에이에이 클럽 — 애슬레틱스 애슬리트 클럽**
> 육상 선수를 위한 피드백 · 트레이닝 · 소속 · 매니지먼트 클럽의 브랜드 아이덴티티 시스템.

**슬로건 · Slogan**: `for Athlete.` / `for 애슬리트.`

**최종 확정 무드**: **Mood 04 — Editorial × Sports Club (Hybrid, 80/20)**
- 80% Editorial: Fraunces 세리프 헤드라인, 오프 화이트 배경, 넓은 여백
- 20% Sports Club: Archivo Narrow 컨덴스드 태그, 블랙 `FOR ATHLETE.` 라벨, 2px 두꺼운 룰, 배번·좌표 데이터 언어

---

## 소스 · Sources

이 디자인 시스템은 다음 핸드오프 자료를 정리해 만든 시스템입니다:

- **원본 프로토타입 프로젝트**: `/projects/6b501935-29ed-4736-aa9a-18109afec7e4/`
  - `AA CLUB Brand System.html` — 4개 무드 비교 + Mood 04 하이브리드 상세 캔버스
  - `AA CLUB Logo Selection.html` — 10개 로고 후보 시트 (H1–H4 · S1–S2 · SF1–SF4)
  - `design_handoff_aa_club_brand_system/README.md` — 원본 핸드오프 문서
- **참고용 스탠드얼론 HTML** (이 프로젝트 안): `reference/AA CLUB Brand System.html`, `reference/AA CLUB Logo Selection.html`

---

## Index · 파일 구조

```
AA CLUB Design System/
├── README.md                       ← 지금 이 파일
├── SKILL.md                        ← 스킬 매니페스트 (attach 시 로드)
├── colors_and_type.css             ← 컬러 · 타이포 CSS 토큰 (전체)
├── thumbnail.png                   ← 프로젝트 커버 이미지
│
├── brand-tokens.jsx                ← 무드별 JS 토큰
├── aa-logo.jsx                     ← 로고 컴포넌트 (Monogram, Wordmark, Short)
├── aa-icons.jsx                    ← 4 Pillars 아이콘 + UI 아이콘
├── aa-hybrid-mood.jsx              ← Mood 04 (★ 확정 방향) 컴포넌트
├── aa-shared-boards.jsx            ← 공통 아트보드 컴포넌트
├── aa-mood-covers.jsx              ← 참고용 3개 무드 커버
├── aa-logo-selection.jsx           ← 10개 로고 후보 + SVG 다운로드 빌더
│
├── preview/                        ← Design System 탭 카드들 (~700×150 각)
│   ├── palette-primary.html
│   ├── palette-neutral.html
│   ├── palette-navy-accent.html
│   ├── color-usage.html
│   ├── type-display.html
│   ├── type-eyebrow.html
│   ├── type-body.html
│   ├── type-mono.html
│   ├── type-scale.html
│   ├── spacing-scale.html
│   ├── borders-rules.html
│   ├── radius-zero.html
│   ├── icon-pillars.html
│   ├── icon-ui.html
│   ├── tag-for-athlete.html
│   ├── btn-download.html
│   ├── logo-h-primary.html
│   ├── logo-short.html
│   ├── voice-do-dont.html
│   └── grid-rules.html
│
├── ui_kits/
│   ├── brand-system/               ← 하이브리드 무드 브랜드 캔버스
│   │   ├── index.html
│   │   ├── Cover.jsx
│   │   ├── ColorBoard.jsx
│   │   ├── PillarsBoard.jsx
│   │   └── ApplicationsBoard.jsx
│   └── logo-library/               ← 10개 로고 후보 셀렉션 시트
│       ├── index.html
│       ├── LogoCard.jsx
│       └── LogoBuilder.jsx
│
└── reference/                      ← 원본 프로토타입 (그대로 열어봐도 됨)
    ├── AA CLUB Brand System.html
    └── AA CLUB Logo Selection.html
```

---

## Content Fundamentals · 카피 톤

**말투 5원칙**
| 속성 | 설명 |
|---|---|
| **Short · 짧게** | 설명보다 태도. 문장은 짧고 마침표로 끝. |
| **Honest · 솔직하게** | 과장 · 최상급 표현 금지. |
| **Athlete-centered** | 항상 선수의 입장에서 (우리 관점보다 선수 관점). |
| **Trustworthy · 신뢰감** | 조용한 확신. 감탄사 없음. |
| **Quiet · 조용하게** | 느낌표 없음. 이모지 없음. |

**호칭**: **"선수"** — "고객"/"사용자"가 아님. **"코치"**, **"AA CLUB"** — "우리"는 최소.
**케이싱**: 본문은 소문자/한글 문장 표기 그대로. 태그·라벨(Eyebrow)만 `UPPERCASE + 자간 넓힘`.

**✓ Do (사용할 카피 예시)**
- "선수를 위해."
- "기존 환경을 존중합니다."
- "함께 달릴 수 있는 울타리를 만듭니다."
- "기록만이 아니라, 방향을 봅니다."
- "혼자 뛰는 선수가 함께 성장할 수 있도록."
- "Run with the athletes who take running seriously."

**✗ Don't (피할 표현)**
- ~~"우리는 최고의 팀입니다."~~
- ~~"압도적인 성장을 보장합니다."~~
- ~~"누구나 엘리트로 만듭니다."~~
- ~~"국내 최초, 유일무이한."~~
- ~~"불가능을 넘어서는 도전."~~
- 느낌표(!), 이모지(🏃‍♂️🔥), "매우/정말/너무" 같은 강조어

**슬로건 표기**: `for Athlete.` (소문자 시작 + 마침표) — 태도의 조용한 선언.

---

## Visual Foundations

### 컬러 · Color
- **팔레트**: `--aa-black`, `--aa-off-white`, `--aa-navy`, warm gray scale.
- **사용 비율 (권장)**: **White/Off White 55% · Black 25% · Navy 12% · Gray 8%.**
- **네이비는 최대 12%** — 과사용 금지. 액센트로만.
- **골드(`#C4B27A`) 사용 금지** — Mood 04 확정 방향에서는 제외.
- **화이트는 오프-화이트 우선** (`#F5F3EE`, warm-tinted) — 순수 흰색은 서페이스에만.

### 타이포 · Type
- **디스플레이**: Fraunces (세리프, 300–400 italic) — "Athlete"만 이탤릭 강조.
- **아이브로/태그**: Archivo Narrow (컨덴스드 산세리프, 700–800, UPPERCASE, 자간 0.18–0.24em).
- **본문 KR**: Pretendard 500. **본문 EN**: Neue Haas Grotesk / Inter 400.
- **데이터/좌표**: IBM Plex Mono (예: `LAT 37.55 / LON 126.97`, `1:03.8`).
- **자간**: 헤드라인 `-0.02em`, 태그 `+0.18~0.24em`, 본문 `0`.

### 배경 · Backgrounds
- **기본은 오프 화이트** (`#F5F3EE`) — 매거진의 지면 느낌.
- **다크는 pure black** (`#0A0A0A`) — 반전 서페이스, 명함 뒷면, 태그 배경.
- **그라데이션 · 3D · 그림자 금지** — 배경은 flat.
- **이미지 사용 시**: 아직 실제 사진 자료 없음. 확보되는 시점에 이미지 톤 가이드(warm, natural, motion-blurred, film-grain) 추가 예정.

### 애니메이션 · Motion
- **매우 조용함**. 페이드/컬러 트랜지션만.
- **hover transition: 100ms** (예: 다운로드 버튼 배경 반전).
- **바운스 · 스프링 · 페럴랙스 금지**.

### Hover / Press 상태
- **버튼 hover**: 배경 반전(흰→검), 텍스트 반전 — 100ms.
- **링크 hover**: 언더라인만 or 아주 살짝 opacity 0.7.
- **press**: 별도 shrink 없음. 그냥 색만 살짝 더 어둡게.

### 보더 · Borders
- **얇은 룰**: `1px solid #DAD6CC` — 기본 구분선.
- **파선**: `0.5px dashed #DAD6CC` — 서브 구분선 (예: 세이프 존).
- **강한 룰**: `2px solid #0A0A0A` — 섹션 강조, 20% 클럽 요소 (헤더/푸터 앵커).

### 셰도우 · Shadows
- **없음**. Inner/outer shadow 전부 사용 금지.
- 리프트 표현이 필요하면 얇은 보더 + 배경 대비로만.

### 코너 · Corner Radius
- **`border-radius: 0` — 브랜드 원칙**.
- 라운드 코너 절대 금지. 버튼, 카드, 태그, 이미지 프레임 전부 각지게.

### 카드 · Cards
- 배경: `#FFFFFF` 또는 `#F5F3EE`.
- 보더: `1px solid #DAD6CC`.
- 패딩: 24–48px (에디토리얼 여백).
- 그림자: 없음. 라운드: 없음.

### 투명도 · Blur
- **거의 사용 안 함**. Glassmorphism · 백드롭 블러 금지.
- 예외: 다크 반전 서페이스에서 로케이터 텍스트 `opacity: 0.7`.

### 레이아웃 · Layout
- **12단 그리드**.
- **데스크탑 좌우 패딩 최소 48px** — 컨텐츠보다 여백을 넓게 (에디토리얼 원칙).
- **로고 안전 영역**: 로고의 "A" 높이만큼 사방 여백.
- **로고 최소 크기**: 가로형 220px / 스택형 110px 미만에서는 축약형(AA Club) 사용.
- **정렬**: 좌정렬 기본. 배번(bib) 등 특수 케이스만 중앙.

### 데이터 언어 · Data Language
- 배번 번호(`017`), 좌표(`LAT 37.55 / LON 126.97`), 시즌 코드(`SS26 · N° 001`), 시간(`1:03.8`) — 전부 mono.
- 매거진 느낌 위에 스포츠 클럽의 "기록 계측" 감성.

---

## Iconography

### 접근 방식
아이콘은 **모두 커스텀 SVG** — 별도 아이콘 폰트나 CDN 세트 사용 안 함. 이유는 브랜드의 4가지 기둥(피드백/트레이닝/소속/매니지먼트)이 존재하고, 이 4개는 브랜드 그 자체이기 때문에 다른 아이콘 라이브러리에 없는 은유가 필요합니다.

### 4 Pillars — 브랜드 시그니처 아이콘
| 이름 | 은유 | SVG |
|---|---|---|
| **Feedback · 피드백** | 두 방향 화살표가 서로 마주보는 대화 | `<PillarIcon name="feedback" />` |
| **Training · 트레이닝** | 트랙 라인 (겹친 두 곡선) | `<PillarIcon name="training" />` |
| **Belonging · 소속** | 원 안의 세 점 (팀) | `<PillarIcon name="belonging" />` |
| **Management · 매니지먼트** | 수직 성장 바 (커리어 방향) | `<PillarIcon name="management" />` |

**구성 원칙**:
- **40 × 40 grid**, **stroke-width 1.25px**
- **Line style only** (fill 최소화, 벨롱깅 아이콘 점만 fill)
- **단색** (컬러 아이콘 금지)
- **은유적 형태만** — 사실적 표현 금지 (러닝하는 사람 그리지 말 것)
- 캐릭터형 X · 3D X · 그라데이션 X

### UI 아이콘
- `UIIcon`: `arrow`, `plus`, `dot` — 필요 최소한. 24×24 뷰박스, stroke 1.25px.
- **CDN 아이콘 세트 (Lucide/Heroicons 등)는 사용하지 마세요.** 필요 시 위 원칙(1.25px stroke, 단색, 각진 라인)에 맞춰 신규 SVG를 aa-icons.jsx에 추가.

### 이모지 · Unicode
- **이모지 사용 금지** — 브랜드 원칙.
- **Unicode 심볼** 최소한: `·` (interpunct — 세퍼레이터), `—` (em-dash), `|` (파이프 · 로고 H4에서만).

### 로고 · Logo
- **총 10종 후보**: 가로형 H1–H4 (4종) + 스택형 S1–S2 (2종) + 축약형 SF1–SF4 (4종).
- **컬러 3종**: Black `#0A0A0A` · Navy `#0F1B3D` · White `#F5F3EE`.
- **포맷**: SVG (편집용) + PNG 3000px (즉시 사용).
- **파일명 규약**: `AA-CLUB_{id}_{color}.{ext}` (예: `AA-CLUB_H1_black.svg`).
- 로고 SVG는 런타임에 `aa-logo-selection.jsx`의 `buildHorizontalSVG` 등 함수로 생성 → 즉시 다운로드.

---

## 절대 지켜야 할 브랜드 규칙 · Non-Negotiables

1. **`border-radius: 0`** — 어디에도 라운드 코너 금지
2. **이모지 사용 금지**
3. **불필요한 그라데이션 · 3D · 그림자 금지**
4. **네이비 최대 12%** — 과사용 금지
5. **강한 표현 금지** ("최고", "압도", "유일무이" 등)
6. **최소 텍스트 크기**: 인쇄 12pt / 웹 10px
7. **로고 최소 크기**: 가로형 220px, 세로 110px 미만은 축약형 사용
8. **캐릭터/3D/사실적 러닝 일러스트 금지** — 은유만
9. **골드 액센트(`#C4B27A`) 사용 금지** — Mood 04에서 제외
10. **웜톤 유지** — 순수 흰색보다 오프 화이트(`#F5F3EE`) 우선

---

## Caveats · 참고

- **실제 사진 자료 없음** — 훈련·트랙·선수 사진이 확보되면 이미지 톤 가이드 추가 예정.
- **폰트는 전부 무료 CDN 로드** (Google Fonts + Pretendard) — 별도 폰트 파일 배포 불필요.
- **로고 최종 조합 미확정** — 후보 10종 중 추천은 `H1 (메인) + SF1 (축약)`. 사용자 최종 픽 필요.
