// AA CLUB Brand Tokens
// 3가지 무드 시안의 공통 토큰과 무드별 변수 정의

const AA_TOKENS = {
  // Common
  black: '#0A0A0A',
  ink: '#141414',
  white: '#FFFFFF',
  offWhite: '#F5F3EE',
  paper: '#EFECE4',
  navy: '#0F1B3D',
  navyDeep: '#0A1230',
  gray900: '#1C1C1C',
  gray700: '#3A3A3A',
  gray500: '#6B6B6B',
  gray300: '#B8B5AC',
  gray200: '#D6D3CB',
  gray100: '#E8E5DC',
  gray50: '#F2EFE7',
  line: '#DAD6CC',
  accent: '#C4B27A', // 아주 드물게 쓰는 웜 골드 액센트 (프리미엄 패션 무드 전용)
};

// 3 mood configs
const AA_MOODS = {
  editorial: {
    id: 'editorial',
    name: 'Editorial',
    ko: '에디토리얼',
    tagline: '매거진처럼 정돈된 클럽 문서',
    bg: AA_TOKENS.offWhite,
    surface: AA_TOKENS.white,
    ink: AA_TOKENS.black,
    subInk: AA_TOKENS.gray700,
    muted: AA_TOKENS.gray500,
    line: AA_TOKENS.line,
    accent: AA_TOKENS.navy,
    fontEn: '"Times New Roman", "Times", "PP Editorial New", serif',
    fontEnSub: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Inter", sans-serif',
    fontKr: '"Pretendard", "Apple SD Gothic Neo", sans-serif',
    logoWeight: 400,
    logoTracking: '0.02em',
    caseTransform: 'none',
    vibe: '큰 세리프 헤드라인 + 산세리프 본문. COS 룩북/에르메스 매거진 톤.',
  },
  club: {
    id: 'club',
    name: 'Sports Club',
    ko: '스포츠 클럽',
    tagline: '강하고 단단한 육상 클럽 아이덴티티',
    bg: AA_TOKENS.paper,
    surface: AA_TOKENS.white,
    ink: AA_TOKENS.black,
    subInk: AA_TOKENS.gray700,
    muted: AA_TOKENS.gray500,
    line: AA_TOKENS.gray900,
    accent: AA_TOKENS.navy,
    fontEn: '"Neue Haas Grotesk Display Pro", "Neue Haas Grotesk", "Helvetica Neue", "Inter", sans-serif',
    fontEnSub: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Inter", sans-serif',
    fontKr: '"Pretendard", "Apple SD Gothic Neo", sans-serif',
    logoWeight: 800,
    logoTracking: '-0.02em',
    caseTransform: 'uppercase',
    vibe: '컨덴스드 산세리프 워드마크. Tracksmith와 국가대표 유니폼 사이.',
  },
  premium: {
    id: 'premium',
    name: 'Premium Fashion',
    ko: '프리미엄 패션',
    tagline: '조용한 럭셔리, District Vision 계열',
    bg: AA_TOKENS.ink,
    surface: '#1A1A1A',
    ink: AA_TOKENS.offWhite,
    subInk: AA_TOKENS.gray300,
    muted: AA_TOKENS.gray500,
    line: 'rgba(255,255,255,0.14)',
    accent: AA_TOKENS.accent,
    fontEn: '"Univers", "Neue Haas Unica", "Inter", sans-serif',
    fontEnSub: '"Univers", "Neue Haas Unica", "Inter", sans-serif',
    fontKr: '"SUIT", "Pretendard", sans-serif',
    logoWeight: 300,
    logoTracking: '0.28em',
    caseTransform: 'uppercase',
    vibe: '얇은 자간 넓은 워드마크, 다크 서페이스. 명상적인 러닝 브랜드.',
  },
};

// Global font import (Google Fonts + Pretendard + SUIT)
if (typeof document !== 'undefined' && !document.getElementById('aa-fonts')) {
  const link = document.createElement('link');
  link.id = 'aa-fonts';
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css';
  document.head.appendChild(link);

  const suit = document.createElement('link');
  suit.rel = 'stylesheet';
  suit.href = 'https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css';
  document.head.appendChild(suit);

  const g = document.createElement('link');
  g.rel = 'stylesheet';
  g.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Manrope:wght@200..800&family=Archivo+Narrow:wght@400..700&family=Bebas+Neue&family=DM+Serif+Display&family=Fraunces:opsz,wght@9..144,300..900&family=Space+Grotesk:wght@300..700&family=IBM+Plex+Mono:wght@300..700&family=Noto+Sans+KR:wght@300..900&display=swap';
  document.head.appendChild(g);
}

// Small helper for consistent lines/boxes
const AA_BORDER = (mood) => `1px solid ${mood.line}`;

Object.assign(window, { AA_TOKENS, AA_MOODS, AA_BORDER });
