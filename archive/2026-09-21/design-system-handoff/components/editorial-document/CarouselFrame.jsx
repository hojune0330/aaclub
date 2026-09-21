// Instagram 4:5 carousel frame — 1080 × 1350
// Renders at half scale by default (540 × 675) for print-preview,
// pass `full` for 1:1 render.
function CarouselFrame({ children, index, total, full = false, style = {} }) {
  const W = full ? 1080 : 540;
  const H = full ? 1350 : 675;
  const P = full ? 72 : 36;
  return (
    <section style={{
      position: "relative",
      width: W,
      height: H,
      margin: "0 auto 24px",
      padding: P,
      overflow: "hidden",
      background: "var(--paper)",
      boxSizing: "border-box",
      ...style,
    }}>
      {children}
      {(index != null && total != null) && (
        <div style={{
          position: "absolute",
          right: P,
          bottom: P / 2,
          fontFamily: "var(--font-mono)",
          fontSize: full ? 14 : 10,
          letterSpacing: "0.1em",
          color: "var(--ink-3)",
          fontVariantNumeric: "tabular-nums",
        }}>
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      )}
    </section>
  );
}
window.CarouselFrame = CarouselFrame;
