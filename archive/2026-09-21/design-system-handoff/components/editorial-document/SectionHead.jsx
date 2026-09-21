function SectionHead({ h2, right }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginTop: 24,
      paddingBottom: 12,
      borderBottom: "1px solid var(--ink)",
    }}>
      <h2 style={{
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: "-0.02em",
      }}>{h2}</h2>
      {right && (
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--ink-3)",
          letterSpacing: "0.08em",
        }}>{right}</span>
      )}
    </div>
  );
}
window.SectionHead = SectionHead;
