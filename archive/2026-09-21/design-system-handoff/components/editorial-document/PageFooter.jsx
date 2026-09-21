function PageFooter({ left, right, absolute = true }) {
  return (
    <footer style={{
      position: absolute ? "absolute" : "static",
      left: absolute ? 48 : undefined,
      right: absolute ? 48 : undefined,
      bottom: absolute ? 24 : undefined,
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 24,
      paddingTop: 12,
      borderTop: "1px solid var(--line)",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      lineHeight: 1.5,
      letterSpacing: "0.04em",
      color: "var(--ink-3)",
    }}>
      <div>{left}</div>
      <div>{right}</div>
    </footer>
  );
}
window.PageFooter = PageFooter;
