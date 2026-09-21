// Q&A row — number + Question KR + Answer KR
function QARow({ n, q, a, last }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "56px 1fr",
      gap: 24,
      padding: "20px 0",
      borderBottom: last ? "none" : "1px solid var(--line)",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 22,
        color: "var(--accent)",
        lineHeight: 1,
        paddingTop: 2,
      }}>{String(n).padStart(2, "0")}</div>
      <div>
        <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: 17,
          fontWeight: 500,
          lineHeight: 1.4,
          color: "var(--ink)",
          letterSpacing: "-0.02em",
        }}>{q}</div>
        <p style={{
          margin: "10px 0 0",
          fontSize: 14,
          lineHeight: 1.65,
          color: "var(--ink-2)",
        }}>{a}</p>
      </div>
    </div>
  );
}
window.QARow = QARow;
