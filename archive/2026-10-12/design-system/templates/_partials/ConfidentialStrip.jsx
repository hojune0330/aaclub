// Top strip for confidential documents.
// Place BEFORE MetaRail inside a <Page>.
function ConfidentialStrip({ label = "Confidential · 대외비", tone = "ink" }) {
  const isInk = tone === "ink";
  return (
    <div style={{
      marginBottom: 12,
      padding: "6px 12px",
      background: isInk ? "var(--ink)" : "var(--accent)",
      color: "var(--paper)",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      textAlign: "center",
    }}>{label}</div>
  );
}
window.ConfidentialStrip = ConfidentialStrip;
