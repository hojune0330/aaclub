function MetaRail({ items }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1.25fr 1.15fr 0.9fr 0.55fr",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
    }} aria-label="문서 정보">
      {items.map((it, i) => {
        const isLast = i === items.length - 1;
        return (
          <div key={i} style={{
            minWidth: 0,
            padding: `12px ${isLast ? 0 : 12}px 12px ${i === 0 ? 0 : 12}px`,
            borderRight: isLast ? "0" : "1px solid var(--line)",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            lineHeight: 1.45,
            letterSpacing: "0.08em",
            color: "var(--ink-3)",
            textTransform: "uppercase",
            textAlign: isLast ? "right" : "left",
          }}>
            {it.k}
            <strong style={{ display: "block", color: "var(--ink)", fontWeight: 500 }}>{it.v}</strong>
          </div>
        );
      })}
    </div>
  );
}
window.MetaRail = MetaRail;
