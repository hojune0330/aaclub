// AA CLUB Brand System — Color Board
// 팔레트 스와치 + 사용 비율 바

function Swatch({ hex, label, dark }) {
  return (
    <div style={{
      background: hex, color: dark ? '#F5F3EE' : '#0A0A0A',
      height: 120, padding: 12, boxSizing: 'border-box',
      border: dark ? 'none' : '1px solid var(--line)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.18em', fontWeight: 700 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em' }}>{hex}</div>
    </div>
  );
}

function ColorBoard() {
  return (
    <div className="sect">
      <div className="sect-head">
        <div className="sect-num">02 / 09</div>
        <div>
          <div className="sect-title">Color Palette</div>
          <div className="sect-kr">컬러 팔레트 · 사용 비율</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)' }}>55 / 25 / 12 / 8</div>
      </div>

      {/* Primary + Neutrals */}
      <div className="grid-4" style={{ marginBottom: 16 }}>
        <Swatch hex="#0A0A0A" label="BLACK · PRIMARY" dark />
        <Swatch hex="#0F1B3D" label="DEEP NAVY · ACCENT" dark />
        <Swatch hex="#F5F3EE" label="OFF WHITE · BG" />
        <Swatch hex="#FFFFFF" label="WHITE · SURFACE" />
      </div>
      <div className="grid-4" style={{ marginBottom: 24 }}>
        <Swatch hex="#EFECE4" label="PAPER" />
        <Swatch hex="#DAD6CC" label="LINE" />
        <Swatch hex="#6B6B6B" label="GRAY 500 · MUTED" dark />
        <Swatch hex="#3A3A3A" label="GRAY 700 · SUB TEXT" dark />
      </div>

      {/* Usage ratio bar */}
      <div>
        <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.24em', color: 'var(--fg3)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 10 }}>
          Usage Ratio · 사용 비율
        </div>
        <div style={{ display: 'flex', height: 44, border: '1px solid var(--line)' }}>
          <div style={{ flex: 55, background: '#F5F3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11 }}>55% OFF-WHITE</div>
          <div style={{ flex: 25, background: '#0A0A0A', color: '#F5F3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11 }}>25% BLACK</div>
          <div style={{ flex: 12, background: '#0F1B3D', color: '#F5F3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 10 }}>12% NAVY</div>
          <div style={{ flex: 8, background: '#6B6B6B', color: '#F5F3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 9 }}>8% GRAY</div>
        </div>
      </div>
    </div>
  );
}

window.ColorBoard = ColorBoard;
