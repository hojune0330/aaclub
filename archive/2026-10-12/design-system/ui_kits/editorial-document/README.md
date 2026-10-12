# AAC Editorial Document — UI Kit

AAC의 공식 선수 안내 문서(공지·정책 요약·계약 가이드·1페이지 브리프·인포그래픽·PDF·문서형 이미지)를 재현하는 UI 킷입니다.

## 원본 소스
- `archive/2026-07-21/design-system/source/content-reward-guide.html` — 원본 A4 참여보상 안내
- `archive/2026-07-21/content-reward-guide/*.png` — 렌더된 결과물

## 파일
- `index.html` — 인터랙티브 클릭스루 (Page 01 / 02 토글)
- `AACWordmark.jsx` — 워드마크
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/MetaRail.jsx` — 상단 4-필드 문서 정보
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/PageHeader.jsx` — 워드마크 + 문서 코드
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/EditorialHero.jsx` — eyebrow + 세리프 디스플레이 + H1
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/LeadRule.jsx` — 2px 액센트 톱 원칙 문장
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/SectionHead.jsx` — H2 + eyebrow 캡션
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/RewardTable.jsx` — 3열 보상 표
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/NotesRail.jsx` — 한도 3열 노트
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/Timeline.jsx` — 4단계 절차
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/Conditions.jsx` — 2열 조건 블록
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/PageFooter.jsx` — 출처 + 우선순위 안내
- `../../../../2026-09-21/design-system-handoff/components/editorial-document/Page.jsx` — A4 페이지 컨테이너

## 캔버스
- A4 portrait 794×1123 CSS px, 2× PNG 익스포트 기준
- 외곽 마진 48px, 컨텐츠 폭 698px, 12칸 그리드 18px 거터

## 원칙
- 재현이지 재발명이 아닙니다. 원본 그리드·간격·컬러 토큰을 그대로 사용합니다.
- 그림자·둥근 카드·이모지·그라디언트·CTA 언어는 사용하지 않습니다.
