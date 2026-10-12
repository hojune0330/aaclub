// AA CLUB — Editorial × Sports Club Hybrid Mood (80/20)
// Base: Editorial (Fraunces serif, off-white, wide space, magazine feel)
// Accent: Sports Club 20% — condensed sans in eyebrows/tags, boxed lockups,
// thicker rules, number bibs, mono captions.

const HYBRID_MOOD = {
  id: 'hybrid',
  name: 'Editorial × Club',
  ko: '에디토리얼 × 클럽',
  tagline: '매거진의 정돈 위에 얹은 클럽의 무게',
  bg: '#F5F3EE',
  surface: '#FFFFFF',
  ink: '#0A0A0A',
  subInk: '#3A3A3A',
  muted: '#6B6B6B',
  line: '#DAD6CC',
  strongLine: '#0A0A0A',       // club-borrowed: 두꺼운 블랙 바
  accent: '#0F1B3D',
  // 기본 텍스트/헤드라인 = 세리프 (에디토리얼)
  fontDisplay: '"Fraunces", "Times New Roman", serif',
  // eyebrow/tag/mono = 컨덴스드 산세리프 (클럽 20%)
  fontEyebrow: '"Archivo Narrow", "Neue Haas Grotesk Display Pro", sans-serif',
  // 본문/UI = 산세리프
  fontEn: '"Neue Haas Grotesk Display Pro", "Inter", sans-serif',
  fontEnSub: '"Neue Haas Grotesk Display Pro", "Inter", sans-serif',
  fontKr: '"Pretendard", sans-serif',
  fontMono: '"IBM Plex Mono", monospace',
  vibe: '80% Editorial + 20% Sports Club. 세리프 헤드라인 위에 컨덴스드 태그와 배번 언어.',
};

// ============ HYBRID COVER ============
const AAHybridCover = ({ mood = HYBRID_MOOD }) => (
  <div style={{
    background: mood.bg, color: mood.ink, width: '100%', height: '100%',
    padding: 56, boxSizing: 'border-box', fontFamily: mood.fontEn,
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Top: club-borrowed thick rule + eyebrow */}
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingBottom: 10, borderBottom: `2px solid ${mood.ink}` }}>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 11, letterSpacing: '0.24em', fontWeight: 700, textTransform: 'uppercase' }}>
          Mood 04 — Editorial × Club
        </div>
        <div style={{ fontFamily: mood.fontMono, fontSize: 10, letterSpacing: '0.16em', color: mood.muted }}>
          NO. 004 / SS26 · SEOUL
        </div>
      </div>
    </div>

    {/* Center: Editorial serif wordmark */}
    <div style={{ textAlign: 'left' }}>
      <div style={{
        fontFamily: mood.fontDisplay, fontWeight: 300,
        fontSize: 112, letterSpacing: '-0.03em', lineHeight: 0.9,
      }}>
        Athletics<br/>
        <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Athlete</span> Club
      </div>

      {/* Club-borrowed 20%: boxed FOR ATHLETE tag */}
      <div style={{ marginTop: 36, display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{
          background: mood.ink, color: mood.bg, padding: '6px 14px',
          fontFamily: mood.fontEyebrow, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em',
        }}>
          FOR ATHLETE.
        </div>
        <div style={{ fontFamily: mood.fontKr, fontSize: 13, color: mood.subInk }}>선수를 위해.</div>
      </div>
    </div>

    {/* Bottom: editorial definition + club data tag */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 100px', gap: 40, alignItems: 'end',
      borderTop: `1px solid ${mood.line}`, paddingTop: 20 }}>
      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', color: mood.muted, marginBottom: 8, textTransform: 'uppercase' }}>
          Definition · 정의
        </div>
        <div style={{ fontFamily: mood.fontKr, fontSize: 13, lineHeight: 1.7 }}>
          AA CLUB은 육상 선수를 위한<br/>피드백, 트레이닝, 소속,<br/>매니지먼트 클럽입니다.
        </div>
      </div>
      <div style={{ fontFamily: mood.fontDisplay, fontStyle: 'italic', fontWeight: 300, fontSize: 20, lineHeight: 1.4, color: mood.ink }}>
        "선수가 이미 속한 환경을 존중하며,<br/>더 좋은 훈련 방향과 피드백을 제공하고,<br/>함께 달릴 수 있는 울타리를 만듭니다."
      </div>
      <div style={{ textAlign: 'right', fontFamily: mood.fontMono, fontSize: 10, letterSpacing: '0.14em', color: mood.muted, lineHeight: 1.6 }}>
        LAT 37.55<br/>LON 126.97<br/>EST. 2026
      </div>
    </div>
  </div>
);

// ============ HYBRID WORDMARK VARIANTS ============
const AAHybridWordmarks = ({ mood = HYBRID_MOOD }) => {
  const variants = [
    { label: 'V1 · Serif Stacked (Primary) · 세리프 스택 [메인]', primary: true,
      render: () => (
        <div style={{ fontFamily: mood.fontDisplay, fontWeight: 300, fontSize: 48, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
          Athletics<br/>
          <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
        </div>
      ) },
    { label: 'V2 · Serif + Club Tag · 세리프 + 클럽 태그',
      render: () => (
        <div>
          <div style={{ fontFamily: mood.fontDisplay, fontWeight: 300, fontSize: 32, letterSpacing: '-0.02em', lineHeight: 1 }}>
            Athletics <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
          </div>
          <div style={{ marginTop: 12, display: 'flex' }}>
            <div style={{ background: mood.ink, color: mood.bg, padding: '4px 10px',
              fontFamily: mood.fontEyebrow, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em' }}>
              AA CLUB
            </div>
            <div style={{ padding: '4px 10px', border: `1.5px solid ${mood.ink}`, borderLeft: 'none',
              fontFamily: mood.fontEyebrow, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em' }}>
              SEOUL
            </div>
          </div>
        </div>
      ) },
    { label: 'V3 · Compact Horizontal · 가로 컴팩트',
      render: () => (
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <div style={{ fontFamily: mood.fontDisplay, fontWeight: 400, fontSize: 26, letterSpacing: '-0.01em' }}>
              Athletics <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
            </div>
            <div style={{ width: 1, height: 22, background: mood.ink }}/>
            <div style={{ fontFamily: mood.fontEyebrow, fontSize: 11, letterSpacing: '0.24em', fontWeight: 700 }}>AA</div>
          </div>
          <div style={{ marginTop: 6, fontFamily: mood.fontEyebrow, fontSize: 9, letterSpacing: '0.28em', color: mood.muted, fontWeight: 600 }}>
            — FOR ATHLETE.
          </div>
        </div>
      ) },
  ];

  return (
    <AABoardBase mood={mood}>
      <AASectionHead mood={mood} num="01" en="Wordmark System" kr="워드마크 시스템" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {variants.map((it, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{
              background: mood.surface,
              border: it.primary ? `2px solid ${mood.ink}` : `1px solid ${mood.line}`,
              minHeight: 260, padding: 28,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              {it.primary && (
                <div style={{
                  position: 'absolute', top: -1, left: -1,
                  background: mood.ink, color: mood.bg,
                  fontFamily: mood.fontEyebrow, fontSize: 9, letterSpacing: '0.2em', fontWeight: 700,
                  padding: '4px 10px',
                }}>PRIMARY</div>
              )}
              {it.render()}
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.14em', fontFamily: mood.fontKr, color: mood.subInk }}>{it.label}</div>
          </div>
        ))}
      </div>

      {/* AA monogram lockups */}
      <div style={{ marginTop: 32, borderTop: `1px solid ${mood.line}`, paddingTop: 24 }}>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', color: mood.muted, marginBottom: 16, textTransform: 'uppercase', fontWeight: 700 }}>
          AA Monogram · AA 심볼
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { note: 'Solid · 솔리드', variant: 'solid' },
            { note: 'Outline · 아웃라인', variant: 'outline' },
            { note: 'Divided · 분할', variant: 'divided' },
            { note: 'Reversed · 반전', variant: 'solid', reversed: true },
          ].map((m, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ background: m.reversed ? mood.ink : mood.surface, border: `1px solid ${mood.line}`,
                padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AAMonogram size={90} variant={m.variant}
                  color={m.reversed ? mood.bg : mood.ink}
                  bg={m.reversed ? mood.ink : mood.bg}/>
              </div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', color: mood.muted, fontFamily: mood.fontKr }}>{m.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Clear space */}
      <div style={{ marginTop: 28, borderTop: `1px solid ${mood.line}`, paddingTop: 20 }}>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', color: mood.muted, marginBottom: 12, textTransform: 'uppercase', fontWeight: 700 }}>
          Clear Space · 안전 영역
        </div>
        <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, padding: 40, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 16, border: `1px dashed ${mood.line}` }}/>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{ fontFamily: mood.fontDisplay, fontWeight: 300, fontSize: 32, letterSpacing: '-0.02em', lineHeight: 1 }}>
              Athletics <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
            </div>
            <div style={{ fontFamily: mood.fontEyebrow, fontSize: 9, letterSpacing: '0.24em', color: mood.muted, marginTop: 6, fontWeight: 600 }}>
              MIN CLEAR SPACE — HEIGHT OF "A"
            </div>
          </div>
        </div>
      </div>
    </AABoardBase>
  );
};

// ============ HYBRID TYPOGRAPHY ============
const AAHybridTypeBoard = ({ mood = HYBRID_MOOD }) => (
  <AABoardBase mood={mood}>
    <AASectionHead mood={mood} num="03" en="Typography" kr="타이포그래피 시스템" />

    {/* 3-column: Display serif / Eyebrow condensed / Body sans */}
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', color: mood.muted, marginBottom: 14, textTransform: 'uppercase', fontWeight: 700 }}>
          Display · 헤드라인
        </div>
        <div style={{ fontFamily: mood.fontDisplay, fontWeight: 300, fontSize: 52, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
          Athletics<br/><span style={{ fontStyle: 'italic' }}>Athlete</span> Club
        </div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.14em', color: mood.muted, marginTop: 12, fontWeight: 600 }}>
          FRAUNCES — SERIF, 300/400 ITALIC
        </div>
        <div style={{ borderTop: `1px solid ${mood.line}`, marginTop: 16, paddingTop: 12, fontFamily: mood.fontDisplay }}>
          <div style={{ fontSize: 16, fontWeight: 300 }}>The quick brown fox jumps 0123</div>
          <div style={{ fontSize: 16, fontWeight: 400, fontStyle: 'italic' }}>The quick brown fox jumps 0123</div>
          <div style={{ fontSize: 16, fontWeight: 500 }}>The quick brown fox jumps 0123</div>
        </div>
      </div>

      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', color: mood.muted, marginBottom: 14, textTransform: 'uppercase', fontWeight: 700 }}>
          Eyebrow / Tag · 클럽 태그
        </div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 26, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1 }}>
          FOR<br/>ATHLETE.
        </div>
        <div style={{ marginTop: 14, display: 'inline-block' }}>
          <div style={{ background: mood.ink, color: mood.bg, padding: '5px 12px',
            fontFamily: mood.fontEyebrow, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em' }}>
            AA CLUB — SEOUL
          </div>
        </div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.14em', color: mood.muted, marginTop: 16, fontWeight: 600 }}>
          ARCHIVO NARROW — 600/700/800
        </div>
        <div style={{ borderTop: `1px solid ${mood.line}`, marginTop: 12, paddingTop: 12, fontFamily: mood.fontEyebrow, textTransform: 'uppercase' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}>SESSION 01 · SPEED</div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}>FEEDBACK REPORT</div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}>ATHLETE — HOJUNE JANG</div>
        </div>
      </div>

      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', color: mood.muted, marginBottom: 14, textTransform: 'uppercase', fontWeight: 700 }}>
          Body · 본문 (KR/EN)
        </div>
        <div style={{ fontFamily: mood.fontKr, fontSize: 15, fontWeight: 500, lineHeight: 1.6, marginBottom: 8 }}>
          선수의 성장 과정을 함께 봅니다.
        </div>
        <div style={{ fontFamily: mood.fontEn, fontSize: 14, lineHeight: 1.55, color: mood.subInk }}>
          We stand next to the athlete, not in front. Respecting the environment they already belong to.
        </div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.14em', color: mood.muted, marginTop: 14, fontWeight: 600 }}>
          PRETENDARD · NEUE HAAS GROTESK
        </div>
        <div style={{ borderTop: `1px solid ${mood.line}`, marginTop: 12, paddingTop: 12, fontFamily: mood.fontKr }}>
          <div style={{ fontSize: 13, fontWeight: 300 }}>Light — 애슬레틱스 애슬리트 클럽</div>
          <div style={{ fontSize: 13, fontWeight: 400 }}>Regular — 애슬레틱스 애슬리트 클럽</div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>Medium — 애슬레틱스 애슬리트 클럽</div>
          <div style={{ fontSize: 13, fontWeight: 800 }}>Bold — 애슬레틱스 애슬리트 클럽</div>
        </div>
      </div>
    </div>

    {/* Hierarchy scale */}
    <div style={{ borderTop: `2px solid ${mood.ink}`, paddingTop: 24 }}>
      <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', color: mood.muted, marginBottom: 20, textTransform: 'uppercase', fontWeight: 700 }}>
        Type Scale · 위계
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { role: 'H1 · Display', font: mood.fontDisplay, size: 56, weight: 300, italic: false, sample: 'for Athlete.', kr: '헤드라인 — 세리프' },
          { role: 'H2 · Title', font: mood.fontDisplay, size: 32, weight: 400, italic: true, sample: 'What We Do', kr: '섹션 타이틀 — 세리프 이탤릭' },
          { role: 'Eyebrow', font: mood.fontEyebrow, size: 12, weight: 700, italic: false, sample: 'SESSION 01 — FEEDBACK REPORT', kr: '섹션 태그 — 컨덴스드', tracking: '0.18em', upper: true },
          { role: 'Body', font: mood.fontEn, size: 14, weight: 400, italic: false, sample: '선수의 성장 과정을 함께 봅니다. 기록보다 방향을 봅니다.', kr: '본문 — 산세리프' },
          { role: 'Caption / Data', font: mood.fontMono, size: 11, weight: 400, italic: false, sample: '01 · 400m · 1:03.8 · STRONG', kr: '데이터 · 모노스페이스', tracking: '0.06em' },
        ].map((t) => (
          <div key={t.role} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 20, alignItems: 'baseline',
            borderBottom: `0.5px dashed ${mood.line}`, paddingBottom: 8 }}>
            <div>
              <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{t.role}</div>
              <div style={{ fontFamily: mood.fontKr, fontSize: 10, color: mood.muted }}>{t.kr}</div>
            </div>
            <div style={{
              fontFamily: t.font, fontSize: t.size, fontWeight: t.weight,
              fontStyle: t.italic ? 'italic' : 'normal',
              letterSpacing: t.tracking || (t.size > 30 ? '-0.02em' : '0'),
              textTransform: t.upper ? 'uppercase' : 'none',
              lineHeight: 1.15,
            }}>{t.sample}</div>
          </div>
        ))}
      </div>
    </div>
  </AABoardBase>
);

// ============ HYBRID APPLICATIONS (Editorial base + Club-inflected pieces) ============
const AAHybridApplications = ({ mood = HYBRID_MOOD }) => (
  <AABoardBase mood={mood}>
    <AASectionHead mood={mood} num="06" en="Applications" kr="적용 예시" />

    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.9fr', gap: 20 }}>
      {/* Editorial-style poster */}
      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.2em', color: mood.muted, marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>
          Season Poster · 시즌 포스터
        </div>
        <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, aspectRatio: '3/4', padding: 24,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8, borderBottom: `2px solid ${mood.ink}` }}>
            <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.2em', fontWeight: 700 }}>AA CLUB · SS 2026</div>
            <div style={{ fontFamily: mood.fontMono, fontSize: 10, color: mood.muted }}>N° 001</div>
          </div>
          <div>
            <div style={{ fontFamily: mood.fontDisplay, fontWeight: 300, fontSize: 44, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
              Run with<br/><span style={{ fontStyle: 'italic' }}>the athletes</span><br/>who take running<br/>seriously.
            </div>
            <div style={{ fontFamily: mood.fontKr, fontSize: 11, color: mood.subInk, marginTop: 14, lineHeight: 1.55 }}>
              진지하게 달리는 선수와 함께 뜁니다.
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ background: mood.ink, color: mood.bg, padding: '4px 10px',
              fontFamily: mood.fontEyebrow, fontSize: 10, fontWeight: 700, letterSpacing: '0.18em' }}>
              FOR ATHLETE.
            </div>
            <div style={{ fontFamily: mood.fontMono, fontSize: 9, color: mood.muted, textAlign: 'right' }}>
              SEOUL<br/>37.55 / 126.97
            </div>
          </div>
        </div>
      </div>

      {/* Business card set */}
      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.2em', color: mood.muted, marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>
          Business Card · 명함
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, aspectRatio: '85/54', padding: 16,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: mood.fontDisplay, fontWeight: 300, fontSize: 16, letterSpacing: '-0.01em' }}>
              Athletics <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
            </div>
            <div>
              <div style={{ fontFamily: mood.fontDisplay, fontSize: 16, fontWeight: 400 }}>장호준 · Hojune Jang</div>
              <div style={{ fontFamily: mood.fontEyebrow, fontSize: 9, letterSpacing: '0.2em', fontWeight: 700, color: mood.muted, marginTop: 2 }}>
                HEAD COACH — 헤드 코치
              </div>
            </div>
            <div style={{ fontFamily: mood.fontMono, fontSize: 8, color: mood.muted, letterSpacing: '0.06em' }}>
              hojune@aaclub.kr · +82 10 XXXX XXXX
            </div>
          </div>
          <div style={{ background: mood.ink, color: mood.bg, aspectRatio: '85/54', padding: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ fontFamily: mood.fontDisplay, fontWeight: 300, fontSize: 26, letterSpacing: '-0.02em' }}>
              A<span style={{ fontStyle: 'italic' }}>A</span> Club
            </div>
            <div style={{ position: 'absolute', bottom: 10, left: 16, right: 16,
              display: 'flex', justifyContent: 'space-between',
              fontFamily: mood.fontEyebrow, fontSize: 8, letterSpacing: '0.2em', fontWeight: 700, opacity: 0.7 }}>
              <span>FOR ATHLETE.</span><span>SEOUL — 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Number bib (club-borrowed) */}
      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.2em', color: mood.muted, marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>
          Race Bib · 배번
        </div>
        <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, aspectRatio: '1/1',
          padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingBottom: 6, borderBottom: `2px solid ${mood.ink}` }}>
            <span style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', fontWeight: 700 }}>AA CLUB</span>
            <span style={{ fontFamily: mood.fontMono, fontSize: 9, color: mood.muted }}>2026</span>
          </div>
          <div style={{ textAlign: 'center', fontFamily: mood.fontEyebrow, fontSize: 118, fontWeight: 900,
            letterSpacing: '-0.04em', color: mood.ink, lineHeight: 1 }}>
            017
          </div>
          <div style={{ fontFamily: mood.fontEyebrow, fontSize: 9, letterSpacing: '0.24em', color: mood.muted, textAlign: 'center', fontWeight: 700 }}>
            FOR ATHLETE.
          </div>
        </div>
      </div>
    </div>

    {/* SNS + Training note */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 20, marginTop: 24 }}>
      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.2em', color: mood.muted, marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>
          Instagram · SNS
        </div>
        <div style={{ aspectRatio: '1/1', background: mood.bg, border: `1px solid ${mood.line}`,
          padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingBottom: 8, borderBottom: `2px solid ${mood.ink}` }}>
            <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.24em', fontWeight: 700 }}>
              N° 02 — TRAINING
            </div>
            <div style={{ fontFamily: mood.fontMono, fontSize: 9, color: mood.muted }}>07·08·2026</div>
          </div>
          <div>
            <div style={{ fontFamily: mood.fontDisplay, fontWeight: 300, fontSize: 36, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
              혼자 뛰던 선수가<br/><span style={{ fontStyle: 'italic' }}>함께</span> 성장할 수<br/>있도록.
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ background: mood.ink, color: mood.bg, padding: '4px 10px',
              fontFamily: mood.fontEyebrow, fontSize: 10, fontWeight: 700, letterSpacing: '0.18em' }}>
              @AA.CLUB
            </div>
            <div style={{ fontFamily: mood.fontEyebrow, fontSize: 9, letterSpacing: '0.2em', color: mood.muted, fontWeight: 700 }}>
              FOR ATHLETE.
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.2em', color: mood.muted, marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>
          Training Note · 훈련 노트 / 피드백 리포트
        </div>
        <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, padding: 24, height: 'calc(100% - 24px)',
          display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingBottom: 10, borderBottom: `2px solid ${mood.ink}` }}>
            <div>
              <div style={{ fontFamily: mood.fontEyebrow, fontSize: 11, letterSpacing: '0.24em', fontWeight: 800 }}>
                SESSION LOG — 004
              </div>
              <div style={{ fontFamily: mood.fontKr, fontSize: 10, color: mood.muted, marginTop: 2 }}>
                400m 반복 · 강도 92% · 목표 페이스 63초
              </div>
            </div>
            <div style={{ fontFamily: mood.fontMono, fontSize: 10, color: mood.muted, textAlign: 'right' }}>
              2026 · 07 · 08<br/>18:30 · TRACK 1
            </div>
          </div>
          <table style={{ width: '100%', marginTop: 14, fontSize: 11, fontFamily: mood.fontMono, color: mood.ink, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ color: mood.muted, fontSize: 9, letterSpacing: '0.12em', textAlign: 'left' }}>
                <th style={{ paddingBottom: 8, fontWeight: 400 }}>SET</th>
                <th style={{ paddingBottom: 8, fontWeight: 400 }}>DIST</th>
                <th style={{ paddingBottom: 8, fontWeight: 400 }}>TIME</th>
                <th style={{ paddingBottom: 8, fontWeight: 400 }}>PACE</th>
                <th style={{ paddingBottom: 8, fontWeight: 400 }}>NOTE</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['01', '400m', '1:04.2', '2:40', '—'],
                ['02', '400m', '1:03.8', '2:39', 'strong'],
                ['03', '400m', '1:04.5', '2:41', 'form ok'],
                ['04', '400m', '1:05.1', '2:42', 'knee in'],
                ['05', '400m', '1:03.9', '2:39', 'final'],
              ].map(r => (
                <tr key={r[0]} style={{ borderTop: `0.5px solid ${mood.line}` }}>
                  {r.map((c, i) => <td key={i} style={{ padding: '6px 0', color: i === 4 ? mood.muted : mood.ink }}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: `1px solid ${mood.line}` }}>
            <div style={{ fontFamily: mood.fontEyebrow, fontSize: 10, letterSpacing: '0.2em', color: mood.muted, marginBottom: 6, fontWeight: 700 }}>
              COACH FEEDBACK · 코치 피드백
            </div>
            <div style={{ fontFamily: mood.fontDisplay, fontStyle: 'italic', fontWeight: 300, fontSize: 15, lineHeight: 1.55 }}>
              "4번 랩에서 무릎이 살짝 안으로 들어왔음. 다음 세션은 힙 안정성 위주로 잡고, 목요일 재테스트."
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10,
              fontFamily: mood.fontEyebrow, fontSize: 9, letterSpacing: '0.2em', color: mood.muted, fontWeight: 700 }}>
              <span>HEAD COACH — JANG HOJUNE</span>
              <span>SIGNED —</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AABoardBase>
);

Object.assign(window, {
  HYBRID_MOOD,
  AAHybridCover, AAHybridWordmarks, AAHybridTypeBoard, AAHybridApplications,
});
