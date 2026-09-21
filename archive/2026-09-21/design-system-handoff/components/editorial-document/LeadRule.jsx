function LeadRule({ label, children, style = {} }) {
  return (
    <section aria-label={typeof label === "string" ? label : undefined} style={{
      display: "grid",
      gridTemplateColumns: "148px 1fr",
      gap: 24,
      padding: "16px 0",
      borderTop: "2px solid var(--accent)",
      borderBottom: "1px solid var(--line)",
      ...style,
    }}>
      <strong style={{
        fontSize: 17,
        fontWeight: 600,
        color: "var(--accent)",
        lineHeight: 1.3,
      }}>{label}</strong>
      <p style={{
        margin: 0,
        fontSize: 15,
        lineHeight: 1.65,
        color: "var(--ink-2)",
      }}>{children}</p>
    </section>
  );
}
window.LeadRule = LeadRule;
