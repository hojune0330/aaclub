// Generic flat editorial table — variable columns
// columns: [{ key, header, width, align }]
// rows: array of objects keyed by column.key
function DataTable({ columns, rows, ariaLabel }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }} aria-label={ariaLabel}>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={c.key} style={{
              width: c.width,
              padding: "12px 8px",
              paddingLeft: i === 0 ? 0 : 8,
              paddingRight: i === columns.length - 1 ? 0 : 8,
              background: "var(--surface-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "var(--ink-3)",
              textAlign: c.align || "left",
              textTransform: "uppercase",
              borderBottom: "1px solid var(--line)",
            }}>{c.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>
            {columns.map((c, ci) => {
              const isMono = c.mono || c.align === "right";
              return (
                <td key={c.key} style={{
                  padding: "10px 8px",
                  paddingLeft: ci === 0 ? 0 : 8,
                  paddingRight: ci === columns.length - 1 ? 0 : 8,
                  fontSize: 13,
                  lineHeight: 1.45,
                  textAlign: c.align || "left",
                  color: c.muted ? "var(--ink-2)" : "var(--ink)",
                  borderBottom: "1px solid var(--line)",
                  fontFamily: isMono ? "var(--font-mono)" : "var(--font-sans)",
                  fontVariantNumeric: isMono ? "tabular-nums" : "normal",
                }}>{r[c.key]}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
window.DataTable = DataTable;
