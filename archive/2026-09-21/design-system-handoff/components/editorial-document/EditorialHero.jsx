function EditorialHero({ eyebrow, display, displayEm, h1 }) {
  return (
    <header style={{ padding: "28px 0 24px" }}>
      {eyebrow && (
        <p style={{
          margin: "0 0 12px",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "var(--accent)",
          textTransform: "uppercase",
        }}>{eyebrow}</p>
      )}
      <p style={{
        maxWidth: 640,
        margin: 0,
        fontFamily: "var(--font-serif)",
        fontSize: 48,
        fontWeight: 400,
        lineHeight: 0.98,
        letterSpacing: "-0.03em",
      }}>
        {display}
        {displayEm && <><br /><em style={{ color: "var(--accent)", fontWeight: 400 }}>{displayEm}</em></>}
      </p>
      {h1 && (
        <h1 style={{
          margin: "16px 0 0",
          fontFamily: "var(--font-sans)",
          fontSize: 30,
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: "-0.03em",
        }}>{h1}</h1>
      )}
    </header>
  );
}
window.EditorialHero = EditorialHero;
