// AA CLUB Logo Renderers — Fraunces 300, "Athlete" italic
// Renders each candidate live in the browser. `dark` flips color for dark preview panel.

const LogoRenderers = {
  // ============ Horizontal ============
  H1: ({ dark }) => (
    <div style={{ display: 'inline-block', textAlign: 'left' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 30, letterSpacing: '-0.02em', lineHeight: 1, color: 'inherit' }}>
        Athletics <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
      </div>
      <div style={{ marginTop: 10, display: 'inline-block', background: dark ? '#F5F3EE' : '#0A0A0A', color: dark ? '#0A0A0A' : '#F5F3EE', padding: '4px 10px', fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 10, letterSpacing: '0.18em' }}>
        FOR ATHLETE.
      </div>
    </div>
  ),

  H2: () => (
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 30, letterSpacing: '-0.02em', color: 'inherit' }}>
      Athletics <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
    </div>
  ),

  H3: ({ dark }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 26, letterSpacing: '-0.02em' }}>
        Athletics <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
      </div>
      <div style={{ background: dark ? '#F5F3EE' : '#0A0A0A', color: dark ? '#0A0A0A' : '#F5F3EE', padding: '4px 10px', fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 10, letterSpacing: '0.18em' }}>
        FOR ATHLETE.
      </div>
    </div>
  ),

  H4: () => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 26, letterSpacing: '-0.02em' }}>
        Athletics <span style={{ fontStyle: 'italic' }}>Athlete</span> Club
      </div>
      <div style={{ width: 1, height: 22, background: 'currentColor', opacity: 0.5 }} />
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 11, letterSpacing: '0.24em', fontWeight: 700 }}>AA CLUB</div>
    </div>
  ),

  // ============ Stacked ============
  S1: ({ dark }) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 34, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
        Athletics<br /><span style={{ fontStyle: 'italic' }}>Athlete</span> Club
      </div>
      <div style={{ marginTop: 14, display: 'inline-block', background: dark ? '#F5F3EE' : '#0A0A0A', color: dark ? '#0A0A0A' : '#F5F3EE', padding: '4px 10px', fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 10, letterSpacing: '0.18em' }}>
        FOR ATHLETE.
      </div>
    </div>
  ),

  S2: () => (
    <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 34, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
      Athletics<br /><span style={{ fontStyle: 'italic' }}>Athlete</span> Club
    </div>
  ),

  // ============ Short Form ============
  SF1: () => (
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 44, letterSpacing: '-0.02em' }}>
      A<span style={{ fontStyle: 'italic' }}>A</span> Club
    </div>
  ),

  SF2: () => (
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 36, letterSpacing: '-0.02em' }}>
      A<span style={{ fontStyle: 'italic' }}>A</span> Club
    </div>
  ),

  SF3: () => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 34, letterSpacing: '-0.02em' }}>
        A<span style={{ fontStyle: 'italic' }}>A</span> Club
      </div>
      <div style={{ width: 60, height: 1, background: 'currentColor', margin: '10px auto', opacity: 0.6 }} />
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 9, letterSpacing: '0.28em', fontWeight: 600 }}>
        SEOUL · EST. 2026
      </div>
    </div>
  ),

  SF4: () => (
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 30, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
      AA CLUB
    </div>
  ),
};

window.LogoRenderers = LogoRenderers;
