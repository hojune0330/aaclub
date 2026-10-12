// AA CLUB Brand System — 4 Pillars + Typography board

function Pillar({ name, kr, src }) {
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--line)',
      padding: '32px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
    }}>
      <img
        src={src}
        alt={name}
        width={104}
        height={104}
        style={{ display: 'block', width: 104, height: 104, objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 12, letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-body-kr)', fontSize: 12, color: 'var(--fg2)', marginTop: 4 }}>{kr}</div>
      </div>
    </div>
  );
}

function PillarsBoard() {
  const pillars = [
    { name: 'Feedback',   kr: '피드백',     src: '../../../../2026-09-21/design-system-handoff/assets/icons/pillars/feedback.png' },
    { name: 'Training',   kr: '트레이닝',   src: '../../../../2026-09-21/design-system-handoff/assets/icons/pillars/training.png' },
    { name: 'Belonging',  kr: '소속',       src: '../../../../2026-09-21/design-system-handoff/assets/icons/pillars/belonging.png' },
    { name: 'Management', kr: '매니지먼트', src: '../../../../2026-09-21/design-system-handoff/assets/icons/pillars/management.png' },
  ];

  return (
    <div className="sect">
      <div className="sect-head">
        <div className="sect-num">03 / 09</div>
        <div>
          <div className="sect-title">Four Pillars</div>
          <div className="sect-kr">4가지 기둥 — 브랜드의 축</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)' }}>EDITORIAL ENGRAVING · 1024PX PNG</div>
      </div>

      <div className="grid-4">
        {pillars.map(p => <Pillar key={p.name} {...p} />)}
      </div>

      {/* Typography preview under pillars */}
      <div className="sect-head" style={{ marginTop: 64 }}>
        <div className="sect-num">04 / 09</div>
        <div>
          <div className="sect-title">Typography</div>
          <div className="sect-kr">디스플레이 · 아이브로 · 본문 · 데이터</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)' }}>FRAUNCES · ARCHIVO · PRETENDARD</div>
      </div>
      <div className="grid-3">
        <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: 24 }}>
          <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.24em', color: 'var(--fg3)', fontWeight: 700, marginBottom: 14 }}>DISPLAY</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 44, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
            for<br /><em style={{ fontStyle: 'italic' }}>Athlete.</em>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)', marginTop: 14 }}>Fraunces 300 / 400 italic</div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: 24 }}>
          <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.24em', color: 'var(--fg3)', fontWeight: 700, marginBottom: 14 }}>EYEBROW / TAG</div>
          <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 26, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1 }}>
            FOR<br />ATHLETE.
          </div>
          <div className="tag-for-athlete" style={{ marginTop: 14 }}>SESSION 01 · SPEED</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)', marginTop: 14 }}>Archivo Narrow 700</div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: 24 }}>
          <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.24em', color: 'var(--fg3)', fontWeight: 700, marginBottom: 14 }}>BODY · KR/EN</div>
          <div style={{ fontFamily: 'var(--font-body-kr)', fontSize: 15, fontWeight: 500, lineHeight: 1.6 }}>선수의 성장 과정을 함께 봅니다.</div>
          <div style={{ fontFamily: 'var(--font-body-en)', fontSize: 14, lineHeight: 1.55, color: 'var(--fg2)', marginTop: 6 }}>We stand next to the athlete, not in front.</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)', marginTop: 14 }}>Pretendard · Neue Haas Grotesk</div>
        </div>
      </div>
    </div>
  );
}

window.PillarsBoard = PillarsBoard;
