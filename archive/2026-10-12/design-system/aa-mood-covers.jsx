// 3 mood cover boards — each shows the primary logo variants + brand definition

// ============ EDITORIAL COVER ============
const AAEditorialCover = ({ mood }) => (
  <div style={{
    background: mood.bg, color: mood.ink, width: '100%', height: '100%',
    padding: 56, boxSizing: 'border-box', fontFamily: mood.fontEnSub,
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Top meta */}
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.24em', color: mood.subInk }}>
      <span>MOOD 01 — EDITORIAL</span>
      <span>AA CLUB · BRAND SYSTEM · 2026</span>
    </div>

    {/* Center: serif wordmark */}
    <div style={{ textAlign: 'left' }}>
      <div style={{
        fontFamily: '"Fraunces", "Times New Roman", serif', fontWeight: 300,
        fontSize: 108, letterSpacing: '-0.03em', lineHeight: 0.9,
      }}>
        Athletics<br/>
        <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Athlete</span> Club
      </div>
      <div style={{ marginTop: 32, display: 'flex', gap: 24, alignItems: 'baseline' }}>
        <div style={{ width: 40, height: 1, background: mood.ink }}/>
        <div style={{ fontSize: 12, letterSpacing: '0.22em', fontWeight: 500 }}>FOR ATHLETE.</div>
        <div style={{ fontSize: 11, fontFamily: mood.fontKr, color: mood.subInk }}>선수를 위해.</div>
      </div>
    </div>

    {/* Bottom: description */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60, alignItems: 'end' }}>
      <div>
        <div style={{ fontSize: 10, letterSpacing: '0.2em', color: mood.subInk, marginBottom: 10 }}>DEFINITION · 정의</div>
        <div style={{ fontFamily: mood.fontKr, fontSize: 13, lineHeight: 1.7 }}>
          AA CLUB은 육상 선수를 위한<br/>피드백, 트레이닝, 소속, 매니지먼트<br/>전문 클럽입니다.
        </div>
      </div>
      <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.35, color: mood.ink }}>
        "선수가 이미 속한 환경을 존중하며,<br/>더 좋은 훈련 방향과 피드백을 제공하고,<br/>함께 달릴 수 있는 울타리를 만듭니다."
      </div>
    </div>
  </div>
);

// ============ CLUB COVER ============
const AAClubCover = ({ mood }) => (
  <div style={{
    background: mood.bg, color: mood.ink, width: '100%', height: '100%',
    padding: 56, boxSizing: 'border-box', fontFamily: mood.fontEnSub,
    display: 'flex', flexDirection: 'column', position: 'relative',
  }}>
    {/* Top bar */}
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      paddingBottom: 12, borderBottom: `2px solid ${mood.ink}`,
    }}>
      <div style={{ fontSize: 10, letterSpacing: '0.24em', fontWeight: 700 }}>MOOD 02 — SPORTS CLUB</div>
      <div style={{ fontSize: 10, letterSpacing: '0.24em', color: mood.subInk }}>EST. 2026 · SEOUL</div>
    </div>

    {/* Massive condensed wordmark */}
    <div style={{ margin: 'auto 0', textAlign: 'left' }}>
      <div style={{
        fontFamily: '"Archivo Narrow", "Neue Haas Grotesk Display Pro", sans-serif',
        fontWeight: 800, fontSize: 130, letterSpacing: '-0.04em',
        lineHeight: 0.85, textTransform: 'uppercase',
      }}>
        ATHLETICS<br/>ATHLETE<br/>CLUB
      </div>
      <div style={{
        marginTop: 24, display: 'flex', gap: 20, alignItems: 'center',
      }}>
        <div style={{
          background: mood.ink, color: mood.bg, padding: '6px 14px',
          fontSize: 14, fontWeight: 700, letterSpacing: '0.14em',
        }}>FOR ATHLETE.</div>
        <div style={{ fontFamily: mood.fontKr, fontSize: 14, color: mood.subInk }}>선수를 위해.</div>
      </div>
    </div>

    {/* Bottom bar */}
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      paddingTop: 16, borderTop: `1px solid ${mood.line}`,
    }}>
      <div style={{ fontFamily: mood.fontKr, fontSize: 13, lineHeight: 1.55, maxWidth: 320, color: mood.subInk }}>
        육상 선수를 위한 피드백, 트레이닝, 소속, 매니지먼트 전문 클럽. 러닝 크루가 아닌, 협회도 아닌, 그 사이의 전문 육상 클럽.
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: mood.subInk }}>NO. 001 / SS26</div>
        <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: mood.subInk }}>SYSTEM · CLUB</div>
      </div>
    </div>
  </div>
);

// ============ PREMIUM COVER (dark) ============
const AAPremiumCover = ({ mood }) => (
  <div style={{
    background: mood.bg, color: mood.ink, width: '100%', height: '100%',
    padding: 64, boxSizing: 'border-box', fontFamily: mood.fontEnSub,
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    position: 'relative',
  }}>
    {/* subtle grid overlay */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `linear-gradient(${mood.line} 1px, transparent 1px), linear-gradient(90deg, ${mood.line} 1px, transparent 1px)`,
      backgroundSize: '80px 80px', opacity: 0.4, pointerEvents: 'none',
    }}/>

    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.32em', color: mood.subInk, position: 'relative' }}>
      <span>M O O D &nbsp; 0 3</span>
      <span>P R E M I U M</span>
    </div>

    {/* Ultra-thin wide wordmark */}
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <div style={{
        fontFamily: '"Manrope", "Univers", sans-serif',
        fontWeight: 200, fontSize: 42, letterSpacing: '0.42em',
        lineHeight: 1.2,
      }}>
        A · A &nbsp; C L U B
      </div>
      <div style={{
        marginTop: 32, fontFamily: '"Manrope", sans-serif',
        fontSize: 11, fontWeight: 300, letterSpacing: '0.4em', color: mood.subInk,
      }}>
        A T H L E T I C S &nbsp;&nbsp; A T H L E T E &nbsp;&nbsp; C L U B
      </div>
      <div style={{ marginTop: 60, display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center' }}>
        <div style={{ width: 60, height: 1, background: mood.subInk }}/>
        <div style={{ fontSize: 11, letterSpacing: '0.44em', color: mood.ink }}>F O R &nbsp; A T H L E T E .</div>
        <div style={{ width: 60, height: 1, background: mood.subInk }}/>
      </div>
      <div style={{ marginTop: 12, fontSize: 10, letterSpacing: '0.24em', color: mood.subInk, fontFamily: mood.fontKr }}>
        선수를 위해.
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative' }}>
      <div style={{ fontFamily: mood.fontKr, fontSize: 12, lineHeight: 1.7, maxWidth: 340, color: mood.subInk }}>
        육상 선수를 위한 피드백, 트레이닝,<br/>소속, 매니지먼트 클럽.<br/>조용히, 오래 신뢰할 수 있는 브랜드.
      </div>
      <div style={{ textAlign: 'right', fontSize: 10, letterSpacing: '0.28em', color: mood.subInk }}>
        <div>SEOUL · 2026</div>
        <div style={{ marginTop: 6 }}>SYSTEM — 003</div>
      </div>
    </div>
  </div>
);

// ============ LOGO VARIANTS BOARD (3 wordmark variations per mood) ============
const AALogoVariantsBoard = ({ mood, moodKey }) => {
  // Different variant sets per mood
  const variants = {
    editorial: [
      { label: 'V1 · Serif Stacked · 세리프 스택형',
        render: () => (
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontSize: 44, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
            Athletics<br/>Athlete Club
          </div>
        ) },
      { label: 'V2 · Inline with Bar · 인라인 + 구분선',
        render: () => (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 400, fontSize: 26, letterSpacing: '-0.01em' }}>Athletics Athlete Club</div>
            <div style={{ width: 1, height: 20, background: mood.ink }}/>
            <div style={{ fontSize: 10, letterSpacing: '0.24em', fontWeight: 600 }}>AA CLUB</div>
          </div>
        ) },
      { label: 'V3 · Italic Accent · 이탤릭 강조',
        render: () => (
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 40, letterSpacing: '-0.02em', lineHeight: 1 }}>
            <span style={{ fontWeight: 300 }}>Athletics </span>
            <span style={{ fontWeight: 300, fontStyle: 'italic' }}>Athlete </span>
            <span style={{ fontWeight: 500 }}>Club</span>
          </div>
        ) },
    ],
    club: [
      { label: 'V1 · Condensed Stack · 컨덴스드 스택',
        render: () => (
          <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontWeight: 800, fontSize: 44, letterSpacing: '-0.03em', lineHeight: 0.9, textTransform: 'uppercase' }}>
            ATHLETICS<br/>ATHLETE CLUB
          </div>
        ) },
      { label: 'V2 · Boxed Lockup · 박스형 락업',
        render: () => (
          <div style={{ display: 'inline-block' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ background: mood.ink, color: mood.bg, padding: '4px 10px', fontFamily: '"Archivo Narrow", sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '0.08em' }}>AA</div>
              <div style={{ padding: '4px 12px', border: `2px solid ${mood.ink}`, borderLeft: 'none', fontFamily: '"Archivo Narrow", sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '0.08em' }}>CLUB</div>
            </div>
            <div style={{ fontSize: 9, letterSpacing: '0.24em', marginTop: 6, fontWeight: 600 }}>ATHLETICS ATHLETE CLUB</div>
          </div>
        ) },
      { label: 'V3 · Horizontal · 가로 정렬',
        render: () => (
          <div style={{ fontFamily: '"Neue Haas Grotesk Display Pro", "Inter", sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            ATHLETICS ATHLETE CLUB
            <div style={{ fontSize: 10, letterSpacing: '0.28em', fontWeight: 600, marginTop: 6, color: mood.subInk }}>— FOR ATHLETE.</div>
          </div>
        ) },
    ],
    premium: [
      { label: 'V1 · Wide-Tracked Mono · 넓은 자간 모노',
        render: () => (
          <div style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 200, fontSize: 22, letterSpacing: '0.42em', textTransform: 'uppercase', lineHeight: 1.3 }}>
            A · A &nbsp; C L U B
            <div style={{ fontSize: 9, letterSpacing: '0.34em', fontWeight: 300, marginTop: 12, opacity: 0.7 }}>ATHLETICS &nbsp; ATHLETE &nbsp; CLUB</div>
          </div>
        ) },
      { label: 'V2 · Vertical Column · 수직 컬럼',
        render: () => (
          <div style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 200, fontSize: 11, letterSpacing: '0.5em', writingMode: 'vertical-rl', height: 200 }}>
            ATHLETICS · ATHLETE · CLUB
          </div>
        ) },
      { label: 'V3 · Circular Seal · 원형 씰',
        render: () => (
          <div style={{ position: 'relative', width: 140, height: 140 }}>
            <svg viewBox="0 0 140 140" width="140" height="140">
              <defs>
                <path id="cir" d="M 70,70 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0" fill="none"/>
              </defs>
              <circle cx="70" cy="70" r="60" fill="none" stroke={mood.ink} strokeWidth="0.5"/>
              <circle cx="70" cy="70" r="50" fill="none" stroke={mood.ink} strokeWidth="0.5"/>
              <text fill={mood.ink} fontFamily='"Manrope", sans-serif' fontSize="7" letterSpacing="4" fontWeight="300">
                <textPath href="#cir" startOffset="0">ATHLETICS · ATHLETE · CLUB · SEOUL · 2026 ·</textPath>
              </text>
              <text x="70" y="72" textAnchor="middle" fill={mood.ink} fontFamily='"Manrope", sans-serif' fontSize="14" fontWeight="200" letterSpacing="4">AA</text>
              <text x="70" y="86" textAnchor="middle" fill={mood.ink} fontFamily='"Manrope", sans-serif' fontSize="6" fontWeight="300" letterSpacing="3">CLUB</text>
            </svg>
          </div>
        ) },
    ],
  };

  const v = variants[moodKey];
  return (
    <AABoardBase mood={mood}>
      <AASectionHead mood={mood} num="01" en="Wordmark Variants" kr="워드마크 변형" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {v.map((it, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{
              background: mood.surface, border: `1px solid ${mood.line}`,
              minHeight: 240, padding: 24,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {it.render()}
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.14em', fontFamily: mood.fontKr, color: mood.subInk }}>{it.label}</div>
          </div>
        ))}
      </div>

      {/* Monogram lockups */}
      <div style={{ marginTop: 32, borderTop: `1px solid ${mood.line}`, paddingTop: 24 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 16, textTransform: 'uppercase' }}>
          AA Monogram · AA 심볼 락업
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { size: 90, note: 'Solid · 솔리드', variant: 'solid' },
            { size: 90, note: 'Outline · 아웃라인', variant: 'outline' },
            { size: 90, note: 'Divided · 분할', variant: 'divided' },
            { size: 90, note: 'Reversed · 반전', variant: 'solid', reversed: true },
          ].map((m, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ background: m.reversed ? mood.ink : mood.surface, border: `1px solid ${mood.line}`,
                padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AAMonogram size={m.size}
                  variant={m.variant}
                  color={m.reversed ? mood.bg : mood.ink}
                  bg={m.reversed ? mood.ink : mood.bg}/>
              </div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', color: mood.subInk, fontFamily: mood.fontKr }}>{m.note}</div>
            </div>
          ))}
        </div>
      </div>
    </AABoardBase>
  );
};

Object.assign(window, {
  AAEditorialCover, AAClubCover, AAPremiumCover, AALogoVariantsBoard,
});
