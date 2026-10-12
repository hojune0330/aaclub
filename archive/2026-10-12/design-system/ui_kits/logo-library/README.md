# UI Kit — Logo Library

10개 로고 후보(H1–H4 · S1–S2 · SF1–SF4)의 셀렉션 시트.
각 카드는 Light/Dark 프리뷰 + 다운로드 버튼(SVG/PNG × Black/Navy/White) 6개를 노출.

## Components
- `LogoBuilder.jsx` — `LogoRenderers` 객체. 후보별 라이브 렌더.
- `LogoCard.jsx` — 개별 후보 카드 (id · 프리뷰 · 노트 · 다운로드 버튼)

## 인터랙션
- 다운로드 버튼: 이 킷에서는 클릭 시 짧게 `✓ DOWNLOADED`로 플래시만 (fake).
  실제 SVG/PNG 빌더는 원본 프로토타입 `aa-logo-selection.jsx`에 있음 — 프로덕션 재구현 시 그 로직 이관.
- Hover 100ms 트랜지션 — 배경 반전(흰→검), 텍스트 반전.

## 스타일 소스
`../../colors_and_type.css`
