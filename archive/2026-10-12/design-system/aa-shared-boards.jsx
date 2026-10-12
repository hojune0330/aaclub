// Shared artboards used across all 3 moods (color palette, type spec, icons, applications, voice)
// Every board is styled by the current `mood` token set — same DNA, different skin.

const AABoardBase = ({ mood, children, style }) => (
  <div style={{
    background: mood.bg,
    color: mood.ink,
    fontFamily: mood.fontEnSub,
    width: '100%',
    height: '100%',
    padding: 48,
    boxSizing: 'border-box',
    ...style,
  }}>
    {children}
  </div>
);

const AASectionHead = ({ mood, num, en, kr }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32,
    borderBottom: `1px solid ${mood.line}`, paddingBottom: 12 }}>
    <div style={{
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      color: mood.subInk, letterSpacing: '0.1em',
    }}>{num}</div>
    <div style={{ fontFamily: mood.fontEnSub, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: mood.ink }}>{en}</div>
    <div style={{ fontFamily: mood.fontKr, fontSize: 12, color: mood.subInk }}>{kr}</div>
  </div>
);

// ============ COLOR PALETTE ============
const AAColorBoard = ({ mood }) => {
  const swatches = [
    { name: 'PURE BLACK', ko: '퓨어 블랙', hex: '#0A0A0A', role: 'PRIMARY', bg: '#0A0A0A', fg: '#FFFFFF' },
    { name: 'DEEP NAVY', ko: '딥 네이비', hex: '#0F1B3D', role: 'SECONDARY', bg: '#0F1B3D', fg: '#FFFFFF' },
    { name: 'OFF WHITE', ko: '오프 화이트', hex: '#F5F3EE', role: 'BACKGROUND', bg: '#F5F3EE', fg: '#0A0A0A' },
    { name: 'PAPER', ko: '페이퍼', hex: '#EFECE4', role: 'SURFACE', bg: '#EFECE4', fg: '#0A0A0A' },
    { name: 'GRAY 500', ko: '미드 그레이', hex: '#6B6B6B', role: 'MUTED', bg: '#6B6B6B', fg: '#FFFFFF' },
    { name: 'GRAY 200', ko: '라인 그레이', hex: '#D6D3CB', role: 'DIVIDER', bg: '#D6D3CB', fg: '#0A0A0A' },
  ];
  return (
    <AABoardBase mood={mood}>
      <AASectionHead mood={mood} num="02" en="Color Palette" kr="컬러 팔레트" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {swatches.map((s) => (
          <div key={s.name}>
            <div style={{
              background: s.bg, color: s.fg, height: 200,
              padding: 16, boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              border: s.hex === '#F5F3EE' || s.hex === '#EFECE4' ? `1px solid ${mood.line}` : 'none',
            }}>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.1em', opacity: 0.7 }}>
                {s.role}
              </div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, letterSpacing: '0.06em' }}>
                {s.hex}
              </div>
            </div>
            <div style={{ marginTop: 10, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em' }}>{s.name}</div>
            <div style={{ fontSize: 11, color: mood.subInk, fontFamily: mood.fontKr }}>{s.ko}</div>
          </div>
        ))}
      </div>

      {/* Usage ratios */}
      <div style={{ marginTop: 40 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 12, textTransform: 'uppercase' }}>
          Recommended Usage Ratio · 권장 사용 비율
        </div>
        <div style={{ display: 'flex', height: 32, border: `1px solid ${mood.line}` }}>
          <div style={{ flex: 55, background: '#F5F3EE', display: 'flex', alignItems: 'center', paddingLeft: 12,
            fontSize: 10, letterSpacing: '0.1em' }}>WHITE 55%</div>
          <div style={{ flex: 25, background: '#0A0A0A', color: '#fff', display: 'flex', alignItems: 'center', paddingLeft: 12,
            fontSize: 10, letterSpacing: '0.1em' }}>BLACK 25%</div>
          <div style={{ flex: 12, background: '#0F1B3D', color: '#fff', display: 'flex', alignItems: 'center', paddingLeft: 8,
            fontSize: 10, letterSpacing: '0.1em' }}>NAVY 12%</div>
          <div style={{ flex: 8, background: '#D6D3CB', display: 'flex', alignItems: 'center', paddingLeft: 6,
            fontSize: 9, letterSpacing: '0.08em' }}>GRAY 8%</div>
        </div>
      </div>
    </AABoardBase>
  );
};

// ============ TYPOGRAPHY ============
const AATypeBoard = ({ mood, enFontOverride, krFontOverride }) => {
  const enF = enFontOverride || mood.fontEn;
  const krF = krFontOverride || mood.fontKr;
  return (
    <AABoardBase mood={mood}>
      <AASectionHead mood={mood} num="03" en="Typography" kr="타이포그래피" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40 }}>
        {/* EN column */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 16, textTransform: 'uppercase' }}>
            Primary · English
          </div>
          <div style={{ fontFamily: enF, fontWeight: 800, fontSize: 42, letterSpacing: '-0.02em', lineHeight: 1, textTransform: 'uppercase' }}>
            for Athlete.
          </div>
          <div style={{ fontFamily: enF, fontSize: 12, color: mood.subInk, marginTop: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {enF.split(',')[0].replace(/["']/g,'')}
          </div>
          <div style={{ borderTop: `1px solid ${mood.line}`, marginTop: 20, paddingTop: 16 }}>
            <div style={{ fontFamily: enF, fontSize: 11, fontWeight: 300 }}>Light — AA CLUB</div>
            <div style={{ fontFamily: enF, fontSize: 11, fontWeight: 400 }}>Regular — AA CLUB</div>
            <div style={{ fontFamily: enF, fontSize: 11, fontWeight: 600 }}>Medium — AA CLUB</div>
            <div style={{ fontFamily: enF, fontSize: 11, fontWeight: 800 }}>Bold — AA CLUB</div>
            <div style={{ marginTop: 10, fontFamily: enF, fontSize: 10, letterSpacing: '0.06em' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </div>
            <div style={{ fontFamily: enF, fontSize: 10, letterSpacing: '0.06em' }}>
              0123456789 &nbsp; &amp; ­— · /
            </div>
          </div>
        </div>

        {/* KR column */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 16, textTransform: 'uppercase' }}>
            Primary · Korean · 한글
          </div>
          <div style={{ fontFamily: krF, fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em', lineHeight: 1 }}>
            선수를 위해.
          </div>
          <div style={{ fontFamily: krF, fontSize: 12, color: mood.subInk, marginTop: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {krF.split(',')[0].replace(/["']/g,'')}
          </div>
          <div style={{ borderTop: `1px solid ${mood.line}`, marginTop: 20, paddingTop: 16 }}>
            <div style={{ fontFamily: krF, fontSize: 12, fontWeight: 300 }}>Light — 에이에이 클럽</div>
            <div style={{ fontFamily: krF, fontSize: 12, fontWeight: 400 }}>Regular — 에이에이 클럽</div>
            <div style={{ fontFamily: krF, fontSize: 12, fontWeight: 600 }}>Medium — 에이에이 클럽</div>
            <div style={{ fontFamily: krF, fontSize: 12, fontWeight: 800 }}>Bold — 에이에이 클럽</div>
            <div style={{ marginTop: 10, fontFamily: krF, fontSize: 11 }}>
              가나다라마바사아자차카타파하
            </div>
            <div style={{ fontFamily: krF, fontSize: 11 }}>
              애슬레틱스 애슬리트 클럽
            </div>
          </div>
        </div>
      </div>

      {/* Hierarchy scale */}
      <div style={{ borderTop: `1px solid ${mood.line}`, paddingTop: 24 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 20, textTransform: 'uppercase' }}>
          Type Scale · 타입 위계
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { label: 'Display', size: 56, weight: 800, kr: '디스플레이', sample: 'FOR ATHLETE.' },
            { label: 'H1', size: 32, weight: 700, kr: '타이틀', sample: 'Athletics Athlete Club' },
            { label: 'H2', size: 20, weight: 600, kr: '섹션 헤드', sample: 'What We Do — 우리가 하는 일' },
            { label: 'Body', size: 14, weight: 400, kr: '본문', sample: '선수가 이미 속한 팀과 코치를 존중하며, 더 나은 성장을 위한 피드백을 제공합니다.' },
            { label: 'Caption', size: 10, weight: 500, kr: '캡션', sample: 'AA CLUB · SEOUL · EST. 2026' },
          ].map((t) => (
            <div key={t.label} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 20, alignItems: 'baseline',
              borderBottom: `0.5px dashed ${mood.line}`, paddingBottom: 8 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em' }}>{t.label}</div>
                <div style={{ fontSize: 9, color: mood.subInk, fontFamily: krF }}>{t.kr} · {t.size}/{t.weight}</div>
              </div>
              <div style={{ fontFamily: enF, fontSize: t.size, fontWeight: t.weight,
                letterSpacing: t.size > 30 ? '-0.02em' : '0',
                textTransform: t.label === 'Display' || t.label === 'Caption' ? 'uppercase' : 'none',
                lineHeight: 1.15 }}>{t.sample}</div>
            </div>
          ))}
        </div>
      </div>
    </AABoardBase>
  );
};

// ============ TYPE COMPARISON (multiple candidates) ============
const AATypeCompareBoard = ({ mood }) => {
  const enCandidates = [
    { name: 'Neue Haas Grotesk', family: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", sans-serif', note: '가장 신뢰감 있는 스위스 그로테스크. 클래식.' },
    { name: 'Inter', family: '"Inter", sans-serif', note: '모던, 웹/디지털 친화적. 가독성 최고.' },
    { name: 'Archivo Narrow', family: '"Archivo Narrow", sans-serif', note: '컨덴스드 무드. 스포츠 클럽/유니폼 톤.' },
    { name: 'Manrope', family: '"Manrope", sans-serif', note: '얇게 쓰면 프리미엄. District Vision 계열.' },
    { name: 'Space Grotesk', family: '"Space Grotesk", sans-serif', note: '살짝 개성 있는 그로테스크. 젊은 클럽 무드.' },
  ];
  const krCandidates = [
    { name: 'Pretendard', family: '"Pretendard", sans-serif', note: '가장 무난. 웹/인쇄 모두 강함.' },
    { name: 'SUIT', family: '"SUIT", sans-serif', note: '기하학적, 절제된 무드. 프리미엄에 강함.' },
    { name: 'Noto Sans KR', family: '"Noto Sans KR", sans-serif', note: '가독성 넓은 범위. 정보 문서에 강함.' },
  ];
  return (
    <AABoardBase mood={mood}>
      <AASectionHead mood={mood} num="03·A" en="Type Candidates" kr="폰트 후보 비교" />

      <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 14, textTransform: 'uppercase' }}>
        English Candidates
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
        {enCandidates.map((f) => (
          <div key={f.name} style={{ borderBottom: `1px solid ${mood.line}`, paddingBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600 }}>{f.name.toUpperCase()}</div>
              <div style={{ fontSize: 10, color: mood.subInk, fontFamily: mood.fontKr }}>{f.note}</div>
            </div>
            <div style={{ fontFamily: f.family, fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1 }}>
              ATHLETICS ATHLETE CLUB
            </div>
            <div style={{ fontFamily: f.family, fontSize: 13, marginTop: 6, color: mood.subInk }}>
              for Athlete. — 선수를 위해.
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 14, textTransform: 'uppercase' }}>
        Korean Candidates · 한글 후보
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {krCandidates.map((f) => (
          <div key={f.name} style={{ borderBottom: `1px solid ${mood.line}`, paddingBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600 }}>{f.name.toUpperCase()}</div>
              <div style={{ fontSize: 10, color: mood.subInk, fontFamily: mood.fontKr }}>{f.note}</div>
            </div>
            <div style={{ fontFamily: f.family, fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
              애슬레틱스 애슬리트 클럽
            </div>
            <div style={{ fontFamily: f.family, fontSize: 13, marginTop: 6, color: mood.subInk }}>
              에이에이 클럽 — 선수의 성장 파트너
            </div>
          </div>
        ))}
      </div>
    </AABoardBase>
  );
};

// ============ 4 PILLARS ICONS ============
const AAPillarsBoard = ({ mood }) => {
  const pillars = [
    { key: 'feedback', en: 'FEEDBACK', kr: '피드백', desc: '선수가 지금 받고 있는 훈련을 더 잘 이해할 수 있도록. 기존 환경을 존중하는 보완적 피드백.' },
    { key: 'training', en: 'TRAINING', kr: '트레이닝', desc: '온·오프라인으로 함께 훈련할 수 있는 환경. 목표를 공유하고 함께 성장하는 구조.' },
    { key: 'belonging', en: 'BELONGING', kr: '소속', desc: '개인 종목이지만 혼자 성장하지 않는다. 의지할 수 있는 팀과 정체성.' },
    { key: 'management', en: 'MANAGEMENT', kr: '매니지먼트', desc: '기록·강점·이미지·시즌 흐름·커리어 방향을 함께 보는 성장 관리.' },
  ];
  return (
    <AABoardBase mood={mood}>
      <AASectionHead mood={mood} num="04" en="Four Pillars — Icon System" kr="4가지 기둥 · 아이콘 시스템" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {pillars.map((p, i) => (
          <div key={p.key} style={{
            border: `1px solid ${mood.line}`,
            padding: 24,
            background: mood.surface,
            display: 'flex', flexDirection: 'column', gap: 16,
            minHeight: 260,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: mood.subInk }}>
                0{i + 1}
              </div>
              <PillarIcon name={p.key} size={44} color={mood.ink} strokeWidth={1.25} />
            </div>
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 4 }}>{p.en}</div>
              <div style={{ fontFamily: mood.fontKr, fontSize: 12, color: mood.subInk, marginBottom: 12 }}>{p.kr}</div>
              <div style={{ fontFamily: mood.fontKr, fontSize: 11, lineHeight: 1.55, color: mood.subInk }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Icon construction */}
      <div style={{ marginTop: 40, borderTop: `1px solid ${mood.line}`, paddingTop: 24 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 16, textTransform: 'uppercase' }}>
          Icon Construction · 아이콘 구성 원칙
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, fontSize: 11, fontFamily: mood.fontKr, lineHeight: 1.6, color: mood.subInk }}>
          <div><b style={{ color: mood.ink }}>· 40 × 40 grid</b><br/>모든 아이콘은 40픽셀 그리드에서 그린다.</div>
          <div><b style={{ color: mood.ink }}>· 1.25px stroke</b><br/>얇은 단색 라인, 캐릭터/컬러 사용 금지.</div>
          <div><b style={{ color: mood.ink }}>· Symbolic only</b><br/>은유적 형태만. 러닝하는 사람 등 사실적 표현 금지.</div>
        </div>
      </div>
    </AABoardBase>
  );
};

// ============ GRID & LAYOUT ============
const AAGridBoard = ({ mood }) => (
  <AABoardBase mood={mood}>
    <AASectionHead mood={mood} num="05" en="Grid & Layout" kr="그리드 · 레이아웃 시스템" />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
      {/* 12-col grid demo */}
      <div>
        <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 12, textTransform: 'uppercase' }}>
          12 Column Grid · 12단 그리드
        </div>
        <div style={{ position: 'relative', height: 220, border: `1px solid ${mood.line}`, background: mood.surface, padding: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 6, height: '100%' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{ background: i === 5 || i === 6 ? mood.accent + '20' : mood.line + '80', opacity: 0.6 }}/>
            ))}
          </div>
          {/* header sample */}
          <div style={{ position: 'absolute', top: 40, left: 16, right: 16 }}>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>ATHLETICS</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: mood.subInk }}>ATHLETE CLUB</div>
            <div style={{ fontSize: 9, letterSpacing: '0.16em', color: mood.subInk, marginTop: 8 }}>SECTION · 01 · IDENTITY</div>
          </div>
        </div>
        <div style={{ fontSize: 10, color: mood.subInk, marginTop: 8, fontFamily: mood.fontKr }}>
          여백은 컨텐츠보다 넓게. 넓은 여백이 브랜드의 조용한 힘을 만듭니다.
        </div>
      </div>

      {/* Spacing scale */}
      <div>
        <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 12, textTransform: 'uppercase' }}>
          Spacing Scale · 여백 스케일
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { t: 'XS', v: 4 }, { t: 'S', v: 8 }, { t: 'M', v: 16 },
            { t: 'L', v: 24 }, { t: 'XL', v: 40 }, { t: '2XL', v: 64 },
          ].map(x => (
            <div key={x.t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, fontSize: 10, fontWeight: 600, letterSpacing: '0.1em' }}>{x.t}</div>
              <div style={{ background: mood.ink, height: 10, width: x.v * 2 }}/>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: mood.subInk }}>{x.v}px</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 12, textTransform: 'uppercase' }}>
          Logo Clear Space · 로고 안전 영역
        </div>
        <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, padding: 24, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 12, border: `1px dashed ${mood.line}` }}/>
          <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-0.02em', textAlign: 'center' }}>
            ATHLETICS ATHLETE CLUB
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.16em', color: mood.subInk, textAlign: 'center', marginTop: 4 }}>
            3xx clear space on all sides
          </div>
        </div>
      </div>
    </div>
  </AABoardBase>
);

// ============ APPLICATIONS ============
const AAApplicationsBoard = ({ mood, logoComponent }) => {
  const Logo = logoComponent;
  return (
    <AABoardBase mood={mood}>
      <AASectionHead mood={mood} num="06" en="Applications" kr="적용 예시" />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 20 }}>
        {/* Business card */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 10, textTransform: 'uppercase' }}>
            Business Card · 명함
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, aspectRatio: '85/54', padding: 16,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 8, letterSpacing: '0.2em', color: mood.subInk }}>ATHLETICS ATHLETE CLUB</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>장호준 Hojune Jang</div>
                <div style={{ fontSize: 9, color: mood.subInk, letterSpacing: '0.06em', marginTop: 2 }}>HEAD COACH · 헤드 코치</div>
              </div>
              <div style={{ fontSize: 8, color: mood.subInk, letterSpacing: '0.06em' }}>
                hojune@aaclub.kr · +82 10 XXXX XXXX
              </div>
            </div>
            <div style={{ background: mood.ink, color: mood.bg, aspectRatio: '85/54', padding: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em' }}>AA CLUB</div>
            </div>
          </div>
        </div>

        {/* SNS post */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 10, textTransform: 'uppercase' }}>
            SNS · 인스타그램
          </div>
          <div style={{ aspectRatio: '1/1', background: mood.ink, color: mood.bg, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.2em' }}>#02 · TRAINING</div>
            <div>
              <div style={{ fontFamily: mood.fontEn, fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 0.95, textTransform: 'uppercase' }}>
                Run with the athletes who take running seriously.
              </div>
              <div style={{ fontFamily: mood.fontKr, fontSize: 11, marginTop: 12, opacity: 0.7 }}>
                진지하게 달리는 선수와 함께 뜁니다.
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, letterSpacing: '0.16em' }}>
              <div>AA CLUB · SEOUL</div>
              <div>@aa.club</div>
            </div>
          </div>
        </div>

        {/* Uniform tag */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 10, textTransform: 'uppercase' }}>
            Uniform Number Bib · 배번
          </div>
          <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, aspectRatio: '1/1',
            padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, letterSpacing: '0.2em', color: mood.subInk }}>
              <span>AA CLUB</span>
              <span>2026</span>
            </div>
            <div style={{ textAlign: 'center', fontSize: 96, fontWeight: 900, letterSpacing: '-0.05em', color: mood.ink, lineHeight: 1 }}>
              017
            </div>
            <div style={{ fontSize: 9, letterSpacing: '0.16em', color: mood.subInk, textAlign: 'center' }}>
              FOR ATHLETE.
            </div>
          </div>
        </div>
      </div>

      {/* Training notebook */}
      <div style={{ marginTop: 32 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 10, textTransform: 'uppercase' }}>
          Training Note · 훈련 노트
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, padding: 24, minHeight: 240 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 12, borderBottom: `1px solid ${mood.line}` }}>
              <div style={{ fontSize: 10, letterSpacing: '0.16em' }}>SESSION LOG</div>
              <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk }}>2026 · 07 · 08</div>
            </div>
            <table style={{ width: '100%', marginTop: 12, fontSize: 11, fontFamily: '"IBM Plex Mono", monospace', color: mood.ink }}>
              <thead>
                <tr style={{ color: mood.subInk, fontSize: 9, letterSpacing: '0.1em', textAlign: 'left' }}>
                  <th style={{ paddingBottom: 8, fontWeight: 400 }}>SET</th>
                  <th style={{ paddingBottom: 8, fontWeight: 400 }}>DIST</th>
                  <th style={{ paddingBottom: 8, fontWeight: 400 }}>TIME</th>
                  <th style={{ paddingBottom: 8, fontWeight: 400 }}>NOTE</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>01</td><td>400m</td><td>1:04.2</td><td style={{ color: mood.subInk }}>—</td></tr>
                <tr><td>02</td><td>400m</td><td>1:03.8</td><td style={{ color: mood.subInk }}>strong</td></tr>
                <tr><td>03</td><td>400m</td><td>1:04.5</td><td style={{ color: mood.subInk }}>form ok</td></tr>
                <tr><td>04</td><td>400m</td><td>1:05.1</td><td style={{ color: mood.subInk }}>fatigue</td></tr>
                <tr><td>05</td><td>400m</td><td>1:03.9</td><td style={{ color: mood.subInk }}>final</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ background: mood.surface, border: `1px solid ${mood.line}`, padding: 24, minHeight: 240,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 12 }}>COACH FEEDBACK · 코치 피드백</div>
              <div style={{ fontFamily: mood.fontKr, fontSize: 13, lineHeight: 1.7, color: mood.ink }}>
                오늘 4번 랩에서 무릎이 살짝 안으로 들어왔음. 다음 세션은 힙 안정성 위주로. 리커버리 이틀 잡고 목요일 재테스트.
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, letterSpacing: '0.16em', color: mood.subInk,
              borderTop: `1px solid ${mood.line}`, paddingTop: 12 }}>
              <span>HEAD COACH · JANG HOJUNE</span>
              <span>SIGNED —</span>
            </div>
          </div>
        </div>
      </div>
    </AABoardBase>
  );
};

// ============ VOICE / COPY TONE ============
const AAVoiceBoard = ({ mood }) => {
  const dos = [
    '선수를 위해.',
    '기존 환경을 존중합니다.',
    '함께 달릴 수 있는 울타리를 만듭니다.',
    '기록만이 아니라, 방향을 봅니다.',
    '혼자 뛰는 선수가 함께 성장할 수 있도록.',
  ];
  const donts = [
    '우리는 최고의 팀입니다.',
    '압도적인 성장을 보장합니다.',
    '누구나 엘리트로 만듭니다.',
    '국내 최초, 유일무이한.',
    '불가능을 넘어서는 도전.',
  ];
  return (
    <AABoardBase mood={mood}>
      <AASectionHead mood={mood} num="07" en="Brand Voice" kr="브랜드 언어 · 카피 톤" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.subInk, marginBottom: 16, textTransform: 'uppercase' }}>
            Voice Attributes · 말투 속성
          </div>
          {[
            ['SHORT', '짧게', '설명보다 태도.'],
            ['HONEST', '솔직하게', '과장하지 않는다.'],
            ['ATHLETE-CENTERED', '선수 입장에서', '기준은 언제나 선수.'],
            ['TRUSTWORTHY', '신뢰감 있게', '함부로 약속하지 않는다.'],
            ['QUIET', '조용하게', '크게 소리치지 않는다.'],
          ].map(([en, kr, desc]) => (
            <div key={en} style={{ display: 'flex', gap: 20, borderBottom: `1px solid ${mood.line}`, padding: '14px 0' }}>
              <div style={{ width: 140 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em' }}>{en}</div>
                <div style={{ fontSize: 11, color: mood.subInk, fontFamily: mood.fontKr }}>{kr}</div>
              </div>
              <div style={{ fontSize: 12, fontFamily: mood.fontKr, color: mood.subInk, flex: 1, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.16em', color: '#0F1B3D', marginBottom: 12, textTransform: 'uppercase' }}>
            ✓ Do · 이렇게 씁니다
          </div>
          {dos.map(s => (
            <div key={s} style={{ fontFamily: mood.fontKr, fontSize: 15, fontWeight: 500, padding: '10px 0',
              borderBottom: `0.5px dashed ${mood.line}` }}>{s}</div>
          ))}
          <div style={{ fontSize: 10, letterSpacing: '0.16em', color: mood.muted, marginBottom: 12, marginTop: 32, textTransform: 'uppercase' }}>
            ✗ Don't · 피합니다
          </div>
          {donts.map(s => (
            <div key={s} style={{ fontFamily: mood.fontKr, fontSize: 15, padding: '10px 0',
              borderBottom: `0.5px dashed ${mood.line}`, color: mood.muted, textDecoration: 'line-through' }}>{s}</div>
          ))}
        </div>
      </div>
    </AABoardBase>
  );
};

Object.assign(window, {
  AABoardBase, AASectionHead,
  AAColorBoard, AATypeBoard, AATypeCompareBoard,
  AAPillarsBoard, AAGridBoard, AAApplicationsBoard, AAVoiceBoard,
});
