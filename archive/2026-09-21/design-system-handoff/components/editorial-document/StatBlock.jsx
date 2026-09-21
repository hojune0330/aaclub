// Stat block — big mono figure + KR label
function StatBlock({ figure, label, sublabel }) {
  return (
    <div style={{ padding: "16px 0" }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 36,
        fontWeight: 500,
        lineHeight: 1.05,
        color: "var(--accent)",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.01em",
      }}>{figure}</div>
      <div style={{
        marginTop: 8,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 500,
        color: "var(--ink)",
      }}>{label}</div>
      {sublabel && (
        <div style={{
          marginTop: 2,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
        }}>{sublabel}</div>
      )}
    </div>
  );
}
window.StatBlock = StatBlock;
