function RewardTable({ rows }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }} aria-label="콘텐츠 유형별 참여보상 금액">
      <thead>
        <tr>
          {["콘텐츠 유형", "인정 기준", "건별 보상"].map((h, i) => (
            <th key={i} style={{
              width: i === 0 ? "34%" : i === 1 ? "41%" : "25%",
              padding: `12px 8px${i === 0 ? " 12px 0" : ""}${i === 2 ? " 12px 8px 12px 8px" : ""}`,
              paddingLeft: i === 0 ? 0 : 8,
              paddingRight: i === 2 ? 0 : 8,
              background: "var(--surface-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "var(--ink-3)",
              textAlign: i === 2 ? "right" : "left",
              textTransform: "uppercase",
              borderBottom: "1px solid var(--line)",
            }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td style={{ padding: "10px 8px 10px 0", fontSize: 13, lineHeight: 1.45, borderBottom: "1px solid var(--line)" }}>{r.type}</td>
            <td style={{ padding: "10px 8px", fontSize: 13, lineHeight: 1.45, color: "var(--ink-2)", borderBottom: "1px solid var(--line)" }}>{r.rule}</td>
            <td style={{ padding: "10px 0 10px 8px", fontSize: 13, lineHeight: 1.45, textAlign: "right", borderBottom: "1px solid var(--line)" }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.1,
                color: "var(--accent)",
                fontVariantNumeric: "tabular-nums",
              }}>{r.amount}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
window.RewardTable = RewardTable;
