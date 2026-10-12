# 2026-10-12 AAC 디자인 시스템 확정본 · 문서 템플릿 · 브랜드 컬래터럴

- **스냅샷 날짜**: 2026-10-12
- **작업 범위**: AAC(AA CLUB) 브랜드 디자인 시스템 정비 + 문서 템플릿 10종 + 브랜드 컬래터럴 확장
- **이전 스냅샷**: [2026-09-21 AAC 디자인 시스템 핸드오프](../2026-09-21/README.md) · 문서 시스템 기반 [2026-07-21](../2026-07-21/README.md) (문서 디자인 시스템 최초 정의)
- **기반 자산**: [2026-05-20](../2026-05-20/README.md) AA CLUB 원본 SVG 컨테이너(래스터 포함)

## 이번 스냅샷에서 확정된 것

### 1. 로고 조합 최종 확정

| 슬롯 | 픽 | 원본 크기 | 최소 크기 | 용도 |
|---|---|---|---|---|
| **MAIN** | H2 · Clean One Line (태그 없음) | 900 × 140 | 220px | 문서 헤더·웹 상단·이메일 사인 |
| **STACK** | S2 · Two Lines (태그 없음) | 640 × 260 | 110px | SNS·배번·표지·명함 뒷면 |
| **SHORT** | SF2 · AA Club Horizontal | 600 × 120 | 40px | 파비콘·워터마크·소품 라벨 |

- **컬러 3종**: Black `#0A0A0A` · Navy `#0F1B3D` · White `#F5F3EE`
- **포맷**: SVG (편집) + PNG 1x / 3x / 5x (3,000px 이상 인쇄·간판 대응)
- 파일 위치: `design-system/assets/logos/`
- 파일명 규약: `AA-CLUB_{MAIN|STACK|SHORT}_{black|navy|white}[_{1x|3x|5x}].{svg|png}`

### 2. 브랜드명 표기 규칙

- **Athletics Athlete Club** — 풀네임. 공식 문서·계약·헤더에 최우선 사용.
- **AA CLUB** — 로고·태그·명함 등 브랜드 접점에서의 표기.
- **AAC** — 구어 약자. 파일명 접두어·문서 코드·SNS 핸들·해시태그.
- SNS 핸들: `@athleticsathleteclub` (변경 없음)

### 3. 두 개 시스템 레이어로 정리

한 브랜드 아래 성격이 다른 두 산출물 층위를 명시적으로 분리했습니다.

| 레이어 | 진입점 | 쓰는 곳 |
|---|---|---|
| **① Brand Identity** (Mood 04 · Editorial × Sports Club 80/20) | `colors_and_type.css`, `aa-*.jsx`, `ui_kits/brand-system/`, `ui_kits/logo-library/` | 로고·명함·SNS·커버·웨어러블·매거진 컨셉 |
| **② Editorial Document** | `doc-tokens.css`, `ui_kits/editorial-document/`, `templates/`, `preview-doc/` | 계약 안내·정책 요약·보상 가이드·PDF·A4 문서 |

두 레이어는 톤 원칙을 공유하지만 **폰트·컬러·조판 그리드를 의도적으로 분리**합니다. 문서는 그레이스케일 인쇄에서도 읽혀야 하기 때문입니다.

### 4. 4 Pillars 아이콘 재제작

기존 손그림 SVG를 **에디토리얼 인그레이빙(Editorial Engraving)** 스타일 PNG 4장으로 대체했습니다.

| 이름 | 은유 | 파일 |
|---|---|---|
| Feedback · 피드백 | 마주보는 두 개의 열린 노트 + 화살표 | `assets/icons/pillars/feedback.png` |
| Training · 트레이닝 | 빈티지 기계 스톱워치 + 트랙 오벌 | `assets/icons/pillars/training.png` |
| Belonging · 소속 | 월계관 + 3인 실루엣 | `assets/icons/pillars/belonging.png` |
| Management · 매니지먼트 | 앤티크 나침반 로즈 + fleur-de-lis | `assets/icons/pillars/management.png` |

- 1024×1024, 흰 배경 PNG. CSS `mix-blend-mode: multiply` 로 오프화이트 지면에 합성.
- `aa-icons.jsx` 의 `<PillarIcon>` 이 이 PNG를 참조하도록 교체.

### 5. 문서 템플릿 10종

| ID | 파일 | 내용 |
|---|---|---|
| A | `templates/a_athlete_profile.html` | 선수 프로필 2페이지 (후원 제안용) |
| B | `templates/b_contract_summary.html` | 계약 요약 2페이지 |
| C | `templates/c_qa_faq.html` | 신인 선수 Q&A 2페이지 |
| D | `templates/d_instagram_carousel.html` | 인스타 4:5 캐러셀 5장 |
| E | `templates/e_session_log.html` | 훈련 노트 (Session Log) |
| F | `templates/f_sponsorship_cover.html` | 후원 제안서 커버 |
| G | `templates/g_document_covers.html` | 문서 커버·백커버 3종 + 반전 백커버 |
| H | `templates/h_content_brief.html` | SNS 콘텐츠 브리프 2페이지 |
| I | `templates/i_race_result.html` | 선수 성적표 2페이지 (경기 후 코치 리뷰) |
| J | `templates/j_annual_report.html` | 연간 리포트 8페이지 |

- 공용 재사용 부품: `templates/_partials/` (DocumentHeader · EditorialOpener · SourceFooter · SignatureBlock · WatermarkDraft · ConfidentialStrip)
- 인덱스: `templates/index.html`

### 6. 브랜드 컬래터럴 확장

`brand-collateral/` 아래:

- `email-signature.html` — 이메일 서명 (Gmail/Outlook 붙여넣기 HTML)
- `business-card.html` — 명함 인쇄 대지 (90×54mm · 재단선·안전선 · Pantone 매칭)
- `uniform-spec.html` — 유니폼·훈련복 프린트 스펙 (위치·크기·기법·색상)
- `thumbnails.html` — 팟캐스트·유튜브 썸네일 (1280×720 / 3000×3000)
- `animated-logo.html` — 애니메이션 로고 4 프리셋 (Type-build · Rule-reveal · Compress · Tag-breathe)
- `web/` — 파비콘 6종 · Apple touch icon · Android/PWA 아이콘 · OG 이미지 1200×630 · manifest.json · HTML head snippet
- `index.html` — 진입 인덱스

### 7. 랜딩 페이지 목업

`landing/index.html` — 브랜드 사이트 홈 5섹션 (히어로 · 4 Pillars · 선수 카드 6인 예시 · 매니페스토 · 후원 CTA · 저널 · 풋터).

### 8. 사진 촬영 브리프

`../2026-09-21/design-system-handoff/PHOTO_BRIEF.md` — 톤 가이드 + 우선순위 컷 리스트. **실제 사진은 아직 없음** (다음 스냅샷에서 채울 예정).

## 폴더 구조

```
design-system/
├── colors_and_type.css        ← 이전 Brand Identity 토큰을 참조하는 어댑터 (Mood 04)
├── doc-tokens.css             ← Editorial Document 토큰
├── SKILL.md                   ← 스킬 매니페스트 (aaclub-design)
├── PHOTO_BRIEF.md             ← 사진 톤 가이드 + 촬영 리스트
├── brand-tokens.jsx
├── AACLogo.jsx                ← 확정 로고 이미지 컴포넌트
├── aa-logo.jsx                ← 이전 스냅샷 무드 비교용 참고(공용 자산 목록 참조)
├── aa-icons.jsx               ← 4 Pillars + UI 아이콘 (PNG 참조)
├── aa-hybrid-mood.jsx         ← Mood 04 컴포넌트 세트
├── aa-shared-boards.jsx
├── aa-mood-covers.jsx
├── aa-logo-selection.jsx      ← 로고 후보 10종 + SVG 다운로드 빌더
├── assets/
│   ├── AA_CLUB_logo.svg       ← 벡터 원본 (2026-05-20 스냅샷에서)
│   ├── aac-wordmark-{dark,light}.png
│   ├── logos/                 ← 확정 로고 36개 파일 + index.html + README.md
│   ├── icons/pillars/         ← 4 Pillars 인그레이빙 PNG 4장
│   └── samples/               ← 참여보상 A4 렌더 PNG 2장
├── fonts/                     ← Instrument Serif · IBM Plex Mono (Latin subset)
├── ui_kits/
│   ├── brand-system/          ← Mood 04 브랜드 캔버스
│   ├── logo-library/          ← 로고 후보 셀렉션 시트
│   └── editorial-document/    ← A4 문서 컴포넌트 15종
├── templates/                 ← 문서 템플릿 A~J + _partials
├── preview/                   ← 브랜드 카드 26개
├── preview-doc/               ← 문서 카드 22개
├── brand-collateral/          ← 이메일 서명·명함·유니폼 스펙·썸네일·애니메이션 로고·web
├── landing/                   ← 랜딩 페이지 목업
└── references/                ← 원본 프로토타입 HTML (Brand System · Logo Selection)
```

## 공용 자산 참조와 예시 자료

동일 파일은 중복 보관하지 않습니다. 파일 구조의 공용 항목은 `design-system/asset-map.json` 및 [공용 자산 목록](design-system/REUSED_ASSETS.md)의 이전 스냅샷 경로를 사용합니다. 새 HTML의 실제 링크도 해당 경로를 참조합니다. 참고 원본 프로토타입은 원형을 보존합니다.

템플릿 A~J와 랜딩은 디자인 예시입니다. 선수명·기록·계약 조건·재무 수치·출처 표기는 실제 확인 자료로 취급하지 않습니다. 각 문서 메타데이터에도 샘플 상태를 표시합니다. 실제 사진은 아직 없으며 사진 슬롯을 유지합니다.

## 미결 사항 (다음 스냅샷에서)

- **실제 사진** — 선수 초상 9인(4:5) · 팀 훈련 와이드(3:2) · 트랙 모션 블러(4:5). `PHOTO_BRIEF.md` 참조.
- **로고 outline 변환** — SVG가 폰트(Fraunces)를 참조하므로 인쇄 넘길 때 아웃라인 변환 필요.
- **연간 리포트 수치** — 현재 샘플 값. 실제 시즌 데이터로 교체 필요.
- **랜딩 페이지 실 도메인** — 배포 환경 확정 시 `brand-collateral/web/HEAD_SNIPPET.html` 의 도메인 교체.

## 참고

- 이 스냅샷의 산출물은 **디자인 레퍼런스** 입니다. 프로덕션 코드가 아니며, 실제 개발은 타깃 코드베이스의 기존 패턴·라이브러리로 재구현해야 합니다.
- 개발자 인계용 패키지는 별도 생성 가능합니다.
