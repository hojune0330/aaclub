function Page({ children, style = {} }) {
  return (
    <section style={{
      position: "relative",
      width: 794,
      height: 1123,
      margin: "0 auto 32px",
      padding: 48,
      overflow: "hidden",
      background: "var(--paper)",
      boxSizing: "border-box",
      ...style,
    }}>
      {children}
    </section>
  );
}
window.Page = Page;
