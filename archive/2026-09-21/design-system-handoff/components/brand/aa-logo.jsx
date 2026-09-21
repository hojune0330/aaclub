// AA CLUB Logo variants — 3 무드 × 3 변형 워드마크

// Reusable AA monogram (square with two A's, no serifs)
const AAMonogram = ({ size = 60, color = '#0A0A0A', bg = 'transparent', variant = 'solid', strokeW = 2 }) => {
  const s = size;
  if (variant === 'outline') {
    return (
      <svg width={s} height={s} viewBox="0 0 100 100" style={{ display: 'block' }}>
        <rect x={strokeW/2} y={strokeW/2} width={100 - strokeW} height={100 - strokeW}
          fill={bg} stroke={color} strokeWidth={strokeW} />
        <text x="50" y="66" textAnchor="middle" fontSize="52" fontWeight="800"
          fontFamily='"Neue Haas Grotesk Display Pro","Helvetica Neue","Inter",sans-serif'
          fill={color} letterSpacing="-2">AA</text>
      </svg>
    );
  }
  if (variant === 'divided') {
    return (
      <svg width={s} height={s} viewBox="0 0 100 100" style={{ display: 'block' }}>
        <rect width="100" height="100" fill={color} />
        <line x1="50" y1="12" x2="50" y2="88" stroke={bg} strokeWidth="1.5" />
        <text x="27" y="66" textAnchor="middle" fontSize="46" fontWeight="700"
          fontFamily='"Neue Haas Grotesk Display Pro","Helvetica Neue","Inter",sans-serif'
          fill={bg}>A</text>
        <text x="73" y="66" textAnchor="middle" fontSize="46" fontWeight="700"
          fontFamily='"Neue Haas Grotesk Display Pro","Helvetica Neue","Inter",sans-serif'
          fill={bg}>A</text>
      </svg>
    );
  }
  // solid (default)
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <rect width="100" height="100" fill={color} />
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="800"
        fontFamily='"Neue Haas Grotesk Display Pro","Helvetica Neue","Inter",sans-serif'
        fill={bg} letterSpacing="-2">AA</text>
    </svg>
  );
};

// Wordmark for a given mood
const AAWordmark = ({ mood, size = 22, color, block = false, weight, tracking, caseT }) => {
  const c = color || mood.ink;
  return (
    <div style={{
      fontFamily: mood.fontEn,
      fontWeight: weight ?? mood.logoWeight,
      letterSpacing: tracking ?? mood.logoTracking,
      textTransform: caseT ?? mood.caseTransform,
      fontSize: size,
      color: c,
      lineHeight: 1,
      display: block ? 'block' : 'inline-block',
    }}>
      ATHLETICS ATHLETE CLUB
    </div>
  );
};

// Compact "AA CLUB" wordmark
const AAShortMark = ({ mood, size = 22, color, weight, tracking, caseT }) => {
  const c = color || mood.ink;
  return (
    <div style={{
      fontFamily: mood.fontEn,
      fontWeight: weight ?? mood.logoWeight,
      letterSpacing: tracking ?? mood.logoTracking,
      textTransform: caseT ?? mood.caseTransform,
      fontSize: size,
      color: c,
      lineHeight: 1,
    }}>
      AA CLUB
    </div>
  );
};

// Editorial: serif big wordmark + small sans subtitle
const LogoEditorial = ({ mood, dark }) => {
  const c = dark ? mood.bg : mood.ink;
  return (
    <div style={{ display: 'inline-block', textAlign: 'left' }}>
      <div style={{
        fontFamily: '"Fraunces", "Times New Roman", serif',
        fontWeight: 300,
        fontSize: 44,
        letterSpacing: '-0.02em',
        color: c,
        lineHeight: 0.95,
      }}>
        Athletics<br/>Athlete Club
      </div>
      <div style={{
        marginTop: 10,
        paddingTop: 8,
        borderTop: `0.5px solid ${c}`,
        fontFamily: mood.fontEnSub,
        fontSize: 10,
        letterSpacing: '0.24em',
        color: c,
        textTransform: 'uppercase',
      }}>
        AA CLUB · EST. 2026 · SEOUL
      </div>
    </div>
  );
};

// Club: bold condensed wordmark, tight
const LogoClub = ({ mood, dark }) => {
  const c = dark ? mood.bg : mood.ink;
  return (
    <div style={{ display: 'inline-block', textAlign: 'left' }}>
      <div style={{
        fontFamily: '"Archivo Narrow", "Neue Haas Grotesk Display Pro", "Inter", sans-serif',
        fontWeight: 800,
        fontSize: 44,
        letterSpacing: '-0.03em',
        color: c,
        lineHeight: 0.9,
        textTransform: 'uppercase',
      }}>
        ATHLETICS<br/>ATHLETE CLUB
      </div>
      <div style={{
        marginTop: 8,
        fontFamily: mood.fontEnSub,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.14em',
        color: c,
        textTransform: 'uppercase',
      }}>
        — FOR ATHLETE.
      </div>
    </div>
  );
};

// Premium: ultra-thin wide-tracked
const LogoPremium = ({ mood, dark }) => {
  const c = dark ? mood.ink : mood.bg;
  return (
    <div style={{ display: 'inline-block', textAlign: 'left' }}>
      <div style={{
        fontFamily: '"Manrope", "Univers", "Inter", sans-serif',
        fontWeight: 200,
        fontSize: 22,
        letterSpacing: '0.42em',
        color: c,
        lineHeight: 1,
        textTransform: 'uppercase',
      }}>
        A · A · C L U B
      </div>
      <div style={{
        marginTop: 14,
        fontFamily: '"Manrope","Univers",sans-serif',
        fontSize: 9,
        fontWeight: 300,
        letterSpacing: '0.34em',
        color: c,
        opacity: 0.7,
        textTransform: 'uppercase',
      }}>
        ATHLETICS &nbsp; ATHLETE &nbsp; CLUB
      </div>
    </div>
  );
};

Object.assign(window, { AAMonogram, AAWordmark, AAShortMark, LogoEditorial, LogoClub, LogoPremium });
