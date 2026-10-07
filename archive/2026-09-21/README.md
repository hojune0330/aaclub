# 2026-09-21 스냅샷

## 이번 스냅샷

개발자 인계용 **AAC 디자인 시스템 핸드오프 패키지**를 추가합니다. 원본 압축본(`design_handoff_athletics_athlete_club.zip`)을 그대로 풀어 보관하며, 저장소 전체에서 내용이 동일한 자산이 일부 포함되어 있어도 패키지의 자체 완결성을 위해 재구성하지 않았습니다.

## 새로 추가한 자료

### 1. 디자인 시스템 핸드오프 (design-system-handoff)

- 위치: `design-system-handoff/`
- 원본: `design_handoff_athletics_athlete_club.zip`
- SHA-256: `10AB380F5E92F6ACBCFB8DEAA8A6BE170062944C388660FB747274D84D03E4FA`
- 구성: 총 56개 파일 (압축 해제본과 바이트 단위 동일 확인)

두 개의 레이어로 구성된 브랜드·문서 디자인 시스템입니다.

- **① Brand Identity Layer** — 로고, 태그, 명함, SNS, 웨어러블, 매거진 컨셉 (Mood 04, Editorial × Sports Club 80/20)
- **② Editorial Document Sub-system** — 계약 안내, 정책 요약, 보상 가이드, A4·PDF 문서 (paper + Deep Teal)

세부 구성:

- `README.md` — 핸드오프 개요, 화면·상태·토큰·자산·Non-Negotiables·카피 톤
- `SKILL.md` — 스킬 매니페스트 (`aaclub-design`)
- `PHOTO_BRIEF.md` — 사진 톤 가이드 및 촬영 요청 리스트 (실제 사진은 미포함, 사용자 채움)
- `tokens/colors_and_type.css`, `tokens/doc-tokens.css` — 두 레이어의 디자인 토큰
- `assets/logos/` — 확정 로고 3종(MAIN·STACK·SHORT) × 3색(SVG + 3x PNG)
- `assets/AA_CLUB_logo.svg`, `assets/aac-wordmark-{dark,light}.png` — 워드마크 원본
- `assets/icons/pillars/` — 4 Pillars(Feedback·Training·Belonging·Management) 인그레이빙 아이콘 4장
- `fonts/` — Instrument Serif · IBM Plex Mono woff2 (Latin subset)
- `components/brand/` — 로고·아이콘·토큰 JSX 3종
- `components/editorial-document/` — A4 문서 컴포넌트 JSX 15종
- `reference_html/` — 브랜드 캔버스·컴포넌트 킷·문서 템플릿 6종 (HTML 레퍼런스)

### 2. 제안서 (proposals) — 2026-10-02 추가

- 위치: `proposals/`
- `육상_선수_9인_인스타그램_광고_게시물_제안_20260921.pdf` — 육상 선수 9인 인스타그램 광고 게시물 제안 (25p)
- 원본 파일명: `AAClub_육상선수_9인_인스타그램_광고_게시물_제안_20260921.pdf`
- SHA-256: `d90e95b4e949e9b80de132360a9ad036460dbab5ad7d8694e9dcf03b776b43cb`
- 2026-09-17 제안서(24p)의 개정본입니다. 선수별 사진 페이지를 보강하고(이서빈 2p로 확장, "추가 사진 자리" 자리표시를 실제 사진으로 교체) 쪽번호를 다시 매겼습니다. 원고료와 본문 문구는 같습니다.
- **현행본**입니다. 2026-09-17·09-12본은 이전 버전으로 둡니다([`CURRENT.md`](../../CURRENT.md)).

## 원칙 관련 메모

- 패키지는 **개발자 인계용 자체 완결 번들**이므로, 내부 자산이 저장소의 다른 스냅샷과 내용이 겹치더라도 재구성하지 않고 원형 그대로 보관했습니다.
  - 겹치는 자산: `assets/AA_CLUB_logo.svg`(2026-05-20), `assets/aac-wordmark-{dark,light}.png`(2026-07-21)
- 이번 스냅샷에서는 기존 자료의 정리·삭제를 수행하지 않았습니다.
- 파일명은 NFC(완성형)로 정규화하여 보관합니다.

## 검토 메모

- 저장소는 계약·브랜드 자료를 포함하므로 비공개로 유지합니다.
- `reference_html/`·`components/`는 디자인 레퍼런스이며, 프로덕션 코드로 그대로 이식하지 않고 대상 코드베이스 패턴에 맞춰 재구현합니다.
- 실제 훈련·트랙·선수 사진은 포함되어 있지 않으며, `PHOTO_BRIEF.md` 기준으로 별도 촬영·셀렉트가 필요합니다.
