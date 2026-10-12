# Document Partials — 문서 헤더·푸터·스탬프 라이브러리

새 문서 템플릿을 만들 때 여기 조각들을 조합해 시작하세요. 각 파일은 `templates/*.html` 안에서 script 태그로 로드합니다:

```html
<script type="text/babel" src="_partials/DocumentHeader.jsx"></script>
```

## 파일

| 파일 | 무엇 | 언제 씀 |
|---|---|---|
| `DocumentHeader.jsx` | Meta Rail + Page Header 조합 | 모든 A4 문서 상단 |
| `EditorialOpener.jsx` | Eyebrow + Serif Display + H1 조합 | 문서 1p 오프너 |
| `SourceFooter.jsx` | 출처 + 우선순위 안내 푸터 | A4 하단 (absolute) |
| `SignatureBlock.jsx` | 서명 · 날짜 · 도장 자리 | 계약·합의서·리포트 하단 |
| `WatermarkDraft.jsx` | 대각선 "DRAFT" 워터마크 | 초안 배포 시 |
| `ConfidentialStrip.jsx` | 상단 "CONFIDENTIAL" 스트립 | 대외비 문서 |

## 사용 예시

```jsx
<Page>
  <DocumentHeader
    docType="Sponsorship Proposal"
    program="AA CLUB · SS26"
    audience="Prospective Partner"
    page="01 / 08"
    code="AAC-SP · v1.0"
  />
  <EditorialOpener
    eyebrow="Season 2026 · Track & Field"
    display="Run with"
    displayEm="the athletes."
    h1="후원 제안서"
  />
  {/* ... 본문 ... */}
  <SignatureBlock signee="장호준 · Head Coach" date="2026 · 09 · 22" />
  <SourceFooter
    left={<><strong>Source</strong> · AAC Sponsorship Deck 2026</>}
    right="contact@athleticsathleteclub.kr"
  />
</Page>
```
