function Conditions({ items }) {
  return (
    <section style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      marginTop: 24,
      borderTop: "1px solid var(--ink)",
      borderBottom: "1px solid var(--line)",
    }} aria-label="필수 확인 사항">
      {items.map((c, i) => (
        <div key={i} style={{
          minHeight: 112,
          padding: `16px ${i === items.length - 1 ? 0 : 16}px 16px ${i === 0 ? 0 : 16}px`,
          borderLeft: i === 0 ? "0" : "1px solid var(--line)",
        }}>
          <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 500 }}>{c.h}</h2>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "var(--ink-2)" }}>{c.p}</p>
        </div>
      ))}
    </section>
  );
}
window.Conditions = Conditions;
