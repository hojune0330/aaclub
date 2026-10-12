// AA CLUB Logo Library — Individual candidate card

function DlButton({ label, sub }) {
  return (
    <button className="btn-dl" onClick={(e) => {
      // Fake download: just flash the button
      const orig = e.currentTarget.innerHTML;
      e.currentTarget.innerHTML = '<span style="font-size:10px">✓ DOWNLOADED</span>';
      setTimeout(() => { e.currentTarget.innerHTML = orig; }, 900);
    }}>
      {label}
      {sub && <small>{sub}</small>}
    </button>
  );
}

function LogoCard({ id, name, note, use, primary, render }) {
  return (
    <div className="card" style={primary ? { border: '2px solid var(--aa-black)' } : {}}>
      <div className="card-head">
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span className="card-id">{id}</span>
          <span className="card-title">{name}</span>
        </div>
        {primary && (
          <span style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 9, letterSpacing: '0.2em', fontWeight: 700, color: 'var(--aa-black)' }}>
            ★ RECOMMENDED
          </span>
        )}
      </div>

      <div className="previews">
        <div className="prev prev-light">{render({ dark: false })}</div>
        <div className="prev prev-dark">{render({ dark: true })}</div>
      </div>

      <div className="card-body">
        <div className="row"><span className="lbl">NOTE</span><span>{note}</span></div>
        <div className="row"><span className="lbl">USE FOR</span><span>{use}</span></div>
      </div>

      <div className="btns-header">Download · SVG</div>
      <div className="btns">
        <DlButton label="BLACK" />
        <DlButton label="NAVY" />
        <DlButton label="WHITE" />
      </div>
      <div className="btns-header">Download · PNG · 3000px</div>
      <div className="btns" style={{ paddingBottom: 20 }}>
        <DlButton label="BLACK" />
        <DlButton label="NAVY" />
        <DlButton label="WHITE" />
      </div>
    </div>
  );
}

window.LogoCard = LogoCard;
