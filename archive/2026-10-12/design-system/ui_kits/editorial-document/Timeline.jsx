function Timeline({ steps }) {
  return (
    <section style={{ marginTop: 24, borderTop: "1px solid var(--ink)" }} aria-label="신청 및 지급 단계">
      {steps.map((s, i) => (
        <div key={i} style={{
          display: "grid",
          gridTemplateColumns: "64px 188px 1fr",
          minHeight: 92,
          borderBottom: "1px solid var(--line)",
        }}>
          <div style={{
            padding: "16px 0",
            fontFamily: "var(--font-mono)",
            fontSize: 28,
            lineHeight: 1,
            color: "var(--ink-3)",
          }}>{String(i + 1).padStart(2, "0")}</div>
          <div style={{ padding: "16px 16px 16px 0" }}>
            <strong style={{ display: "block", fontSize: 17, fontWeight: 500 }}>{s.title}</strong>
            <time style={{
              display: "block",
              marginTop: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--ink-3)",
            }}>{s.time}</time>
          </div>
          <div style={{
            padding: "16px 0 16px 16px",
            borderLeft: "1px solid var(--line)",
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--ink-2)",
          }}>{s.body}</div>
        </div>
      ))}
    </section>
  );
}
window.Timeline = Timeline;
