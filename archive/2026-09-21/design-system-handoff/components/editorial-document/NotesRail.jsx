function NotesRail({ notes }) {
  return (
    <section style={{
      display: "grid",
      gridTemplateColumns: `repeat(${notes.length}, 1fr)`,
      marginTop: 16,
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
    }} aria-label="한도 및 중복 기준">
      {notes.map((n, i) => {
        const isLast = i === notes.length - 1;
        return (
          <div key={i} style={{
            padding: `12px ${isLast ? 0 : 12}px 12px ${i === 0 ? 0 : 12}px`,
            borderRight: isLast ? "0" : "1px solid var(--line)",
          }}>
            <span style={{
              display: "block",
              marginBottom: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              color: "var(--ink-3)",
            }}>{n.label}</span>
            <strong style={{ display: "block", fontSize: 14, fontWeight: 500, lineHeight: 1.35 }}>{n.value}</strong>
            <p style={{ margin: "4px 0 0", fontSize: 11, lineHeight: 1.5, color: "var(--ink-2)" }}>{n.desc}</p>
          </div>
        );
      })}
    </section>
  );
}
window.NotesRail = NotesRail;
