// Diagonal "DRAFT" watermark for pre-release documents.
// Place this AT THE END of a <Page>, absolutely positioned within it.
function WatermarkDraft({ label = "DRAFT" }) {
  return (
    <div aria-hidden style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
    }}>
      <div style={{
        transform: "rotate(-24deg)",
        fontFamily: "var(--font-mono)",
        fontSize: 200,
        fontWeight: 500,
        letterSpacing: "0.1em",
        color: "rgba(14, 20, 18, 0.08)",
        textTransform: "uppercase",
        userSelect: "none",
      }}>{label}</div>
    </div>
  );
}
window.WatermarkDraft = WatermarkDraft;
