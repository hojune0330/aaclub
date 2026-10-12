# AAC Logo Files — 확정 조합 (H2 · S2 · SF2)

**호준님이 픽하신 최종 조합** (2026-09-21).

| 슬롯 | 픽 | 컴포넌트 이름 | 원본 크기 (SVG viewBox) |
|---|---|---|---|
| **가로형 (Main)** | H2 · Clean One Line (no tag) | `AA-CLUB_MAIN` | 900 × 140 |
| **세로형 (Stack)** | S2 · Two Lines (no tag) | `AA-CLUB_STACK` | 640 × 260 |
| **축약형 (Short)** | SF2 · AA Club Horizontal | `AA-CLUB_SHORT` | 600 × 120 |

## 파일 매트릭스 — 총 36개

### SVG (9개) — 편집·확대 무한
- `AA-CLUB_{MAIN|STACK|SHORT}_{black|navy|white}.svg`
- 예: `../../../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_MAIN_black.svg`
- **컬러**: black `#0A0A0A` · navy `#0F1B3D` · white(오프-화이트) `#F5F3EE`
- 폰트: Fraunces (SVG는 폰트 참조만 하므로 렌더 환경에 Fraunces 필요. 확정 전달 시 outline 변환 권장)

### PNG (27개) — 즉시 사용
- `AA-CLUB_{MAIN|STACK|SHORT}_{black|navy|white}_{1x|3x|5x}.png`
- 예: `AA-CLUB_MAIN_black_5x.png`
- **투명 배경** (PNG-32)

| 스케일 | MAIN | STACK | SHORT | 용도 |
|---|---|---|---|---|
| **1x** | 900 × 140 | 640 × 260 | 600 × 120 | 웹 · 문서 · 이메일 사인 · 뉴스레터 |
| **3x** | 2700 × 420 | 1920 × 780 | 1800 × 360 | 인쇄물 (명함 · 리플렛 · 프로파일 300dpi) |
| **5x** | 4500 × 700 | 3200 × 1300 | 3000 × 600 | 대형 배너 · 백드롭 · 간판 · 유니폼 프린트 원본 |

## 사용 규칙 (요약)

### 언제 어떤 걸 쓰나
- **MAIN (H2)**: 문서 헤더/푸터, 웹 상단, 이메일 서명, 협업 자료, 파트너 락업, 인쇄 워터마크. **가장 많이 씀.**
- **STACK (S2)**: 인스타 정사각·세로, 배번, 유니폼 등판, 포스터 커버, 리포트 표지, 명함 뒷면.
- **SHORT (SF2)**: 220px 미만 좁은 공간 — 파비콘·앱 아이콘·워터마크·굿즈 라벨·티셔츠 소형 자수.

### 컬러 선택 원칙
- **Black**: 오프-화이트/화이트 배경. 기본값. 문서 90% 자리는 이것.
- **Navy**: 특별 강조 (연간 리포트 커버 · 프리미엄 컨셉 자료). 사용 비율 최대 12%.
- **White**: 다크 배경 반전. 검정 유니폼·검정 명함·다크 웹 섹션.

### 최소 크기 (아래로는 축소 금지)
- MAIN: **220px** (가로)
- STACK: **110px** (가로)
- SHORT: **40px** (가로) — 파비콘 최소치

STACK이 110px 이하로 들어가야 하는 자리는 자동으로 SHORT를 써주세요.

### Safe Area
로고 사방으로 **로고 "A"의 높이만큼** 여백. 다른 요소 침범 금지.

## 원본 (참고용)
- 벡터 마스터: `assets/AA_CLUB_logo.svg` (GitHub 원본, 리드로잉 금지)
- 워드마크 라스터: `assets/aac-wordmark-{dark,light}.png` (GitHub 원본, 지금도 문서 시스템에서 사용 중 — H2와 조판 동일)
