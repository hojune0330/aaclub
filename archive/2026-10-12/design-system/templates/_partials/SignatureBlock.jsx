// Signature line + name + date + stamp slot.
// Used at bottom of contracts, agreements, formal reports.
function SignatureBlock({ signee, date, showStamp = true }) {
  return (
    <section style={{
      marginTop: 32,
      paddingTop: 20,
      borderTop: "1px solid var(--ink)",
      display: "grid",
      gridTemplateColumns: "1fr 180px 100px",
      gap: 32,
      alignItems: "end",
    }}>
      {/* Signee */}
      <div>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.1em",
          color: "var(--ink-3)",
          textTransform: "uppercase",
          marginBottom: 8,
        }}>Signed by</div>
        <div style={{
          borderBottom: "1px solid var(--ink)",
          paddingBottom: 6,
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          fontWeight: 500,
        }}>{signee}</div>
      </div>
      {/* Date */}
      <div>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.1em",
          color: "var(--ink-3)",
          textTransform: "uppercase",
          marginBottom: 8,
        }}>Date</div>
        <div style={{
          borderBottom: "1px solid var(--ink)",
          paddingBottom: 6,
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          fontVariantNumeric: "tabular-nums",
        }}>{date}</div>
      </div>
      {/* Stamp slot */}
      {showStamp && (
        <div>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.1em",
            color: "var(--ink-3)",
            textTransform: "uppercase",
            marginBottom: 8,
          }}>Stamp</div>
          <div style={{
            width: 88,
            height: 88,
            border: "1px dashed var(--line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            color: "var(--ink-3)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>도장</div>
        </div>
      )}
    </section>
  );
}
window.SignatureBlock = SignatureBlock;
