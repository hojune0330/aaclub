# 공용 자산 · 이전 스냅샷 참조

동일한 파일은 다시 저장하지 않습니다. 아래의 논리 경로는 원본 ZIP에서의 위치이며 실제 파일은 연결된 기존 스냅샷에서 재사용합니다. 새 HTML의 이미지·스크립트 링크도 이 위치로 연결됩니다.

브랜드 토큰은 `colors_and_type.css` 어댑터에서 이전 CSS를 불러옵니다. 문서 토큰은 이번 스냅샷에 유지하고 폰트 경로를 실제 공용 폴더로 보정했습니다.

| 원본 ZIP 논리 경로 | 공용 파일 |
|---|---|
| `design-system/PHOTO_BRIEF.md` | [기존 파일](<../../2026-09-21/design-system-handoff/PHOTO_BRIEF.md>) |
| `design-system/aa-logo.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/brand/aa-logo.jsx>) |
| `design-system/assets/AA_CLUB_logo.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/AA_CLUB_logo.svg>) |
| `design-system/assets/aac-wordmark-dark.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/aac-wordmark-dark.png>) |
| `design-system/assets/aac-wordmark-light.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/aac-wordmark-light.png>) |
| `design-system/assets/icons/pillars/belonging.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/icons/pillars/belonging.png>) |
| `design-system/assets/icons/pillars/feedback.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/icons/pillars/feedback.png>) |
| `design-system/assets/icons/pillars/management.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/icons/pillars/management.png>) |
| `design-system/assets/icons/pillars/training.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/icons/pillars/training.png>) |
| `design-system/assets/logos/AA-CLUB_MAIN_black.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_MAIN_black.svg>) |
| `design-system/assets/logos/AA-CLUB_MAIN_black_3x.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_MAIN_black_3x.png>) |
| `design-system/assets/logos/AA-CLUB_MAIN_navy.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_MAIN_navy.svg>) |
| `design-system/assets/logos/AA-CLUB_MAIN_white.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_MAIN_white.svg>) |
| `design-system/assets/logos/AA-CLUB_SHORT_black.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_SHORT_black.svg>) |
| `design-system/assets/logos/AA-CLUB_SHORT_black_3x.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_SHORT_black_3x.png>) |
| `design-system/assets/logos/AA-CLUB_SHORT_navy.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_SHORT_navy.svg>) |
| `design-system/assets/logos/AA-CLUB_SHORT_white.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_SHORT_white.svg>) |
| `design-system/assets/logos/AA-CLUB_STACK_black.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_STACK_black.svg>) |
| `design-system/assets/logos/AA-CLUB_STACK_black_3x.png` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_STACK_black_3x.png>) |
| `design-system/assets/logos/AA-CLUB_STACK_navy.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_STACK_navy.svg>) |
| `design-system/assets/logos/AA-CLUB_STACK_white.svg` | [기존 파일](<../../2026-09-21/design-system-handoff/assets/logos/AA-CLUB_STACK_white.svg>) |
| `design-system/assets/samples/01_content_reward_page1.png` | [기존 파일](<../../2026-07-21/content-reward-guide/01_보상금액과_인정조건_문서형.png>) |
| `design-system/assets/samples/02_content_reward_page2.png` | [기존 파일](<../../2026-07-21/content-reward-guide/02_신청과_정산절차_문서형.png>) |
| `design-system/brand-tokens.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/brand/brand-tokens.jsx>) |
| `design-system/fonts/IBMPlexMono-Medium.woff2` | [기존 파일](<../../2026-09-21/design-system-handoff/fonts/IBMPlexMono-Medium.woff2>) |
| `design-system/fonts/IBMPlexMono-Regular.woff2` | [기존 파일](<../../2026-09-21/design-system-handoff/fonts/IBMPlexMono-Regular.woff2>) |
| `design-system/fonts/InstrumentSerif-Italic.woff2` | [기존 파일](<../../2026-09-21/design-system-handoff/fonts/InstrumentSerif-Italic.woff2>) |
| `design-system/fonts/InstrumentSerif-Regular.woff2` | [기존 파일](<../../2026-09-21/design-system-handoff/fonts/InstrumentSerif-Regular.woff2>) |
| `design-system/ui_kits/editorial-document/CarouselFrame.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/CarouselFrame.jsx>) |
| `design-system/ui_kits/editorial-document/EditorialHero.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/EditorialHero.jsx>) |
| `design-system/ui_kits/editorial-document/LeadRule.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/LeadRule.jsx>) |
| `design-system/ui_kits/editorial-document/MetaRail.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/MetaRail.jsx>) |
| `design-system/ui_kits/editorial-document/Page.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/Page.jsx>) |
| `design-system/ui_kits/editorial-document/PageFooter.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/PageFooter.jsx>) |
| `design-system/ui_kits/editorial-document/PageHeader.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/PageHeader.jsx>) |
| `design-system/ui_kits/editorial-document/RewardTable.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/RewardTable.jsx>) |
| `design-system/ui_kits/editorial-document/SectionHead.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/SectionHead.jsx>) |
| `design-system/ui_kits/editorial-document/StatBlock.jsx` | [기존 파일](<../../2026-09-21/design-system-handoff/components/editorial-document/StatBlock.jsx>) |

원본 Git blob 해시는 `asset-map.json`에 있습니다. 기준 커밋은 `c63379941f2f47df469c9fce9c71193947651375`입니다.

로고 SVG는 Fraunces 텍스트를 참조합니다. `AA_CLUB_logo.svg`는 래스터 이미지가 포함된 SVG 컨테이너입니다. 인쇄용 아웃라인 벡터로 취급하지 마세요.

본문 가독성을 위해 DataTable · QARow · Timeline · NotesRail · Conditions는 이번 스냅샷에서 15px 본문으로 갱신했습니다. 이전 원본은 그대로 유지합니다.
