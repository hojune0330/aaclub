// basePath forwards to AACWordmark. Default matches templates/*.html callers.
// Pass basePath="../../" when embedded in ui_kits/editorial-document/index.html.
function PageHeader({ code = "AAC-CR · v1.0", basePath = "../" }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 60,
      borderBottom: "1px solid var(--line)",
    }}>
      <AACWordmark width={244} basePath={basePath} />
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.1em",
        color: "var(--ink-3)",
      }}>{code}</div>
    </div>
  );
}
window.PageHeader = PageHeader;
