// AA CLUB Icons — 4 Pillars (Feedback / Training / Belonging / Management)
// Editorial engraving style — generated raster emblems (assets/icons/pillars/*.png)
// Line + hatching, single-color (black ink), aged magazine plate feel.
//
// The PNGs are pure black-on-white. To render on dark surfaces, pass `invert`.
// For accent colored variants, use CSS filters at the call site.

const PILLAR_SRC = {
  feedback:   '../../2026-09-21/design-system-handoff/assets/icons/pillars/feedback.png',
  training:   '../../2026-09-21/design-system-handoff/assets/icons/pillars/training.png',
  belonging:  '../../2026-09-21/design-system-handoff/assets/icons/pillars/belonging.png',
  management: '../../2026-09-21/design-system-handoff/assets/icons/pillars/management.png',
};

// Optional path override — components rendered from ui_kits/<kit>/ live two dirs deep,
// so pass basePath="../../" to reach assets/. Defaults to root ("").
const PillarIcon = ({ name, size = 80, invert = false, basePath = '', alt }) => {
  const src = PILLAR_SRC[name];
  if (!src) return null;
  const style = {
    display: 'block',
    width: size,
    height: size,
    objectFit: 'contain',
    // Multiply blends the white background into the surface color, so the
    // engraving reads on --aa-off-white without a visible white box.
    mixBlendMode: 'multiply',
    // For dark (inverted) surfaces, flip to screen + invert.
    ...(invert ? {
      mixBlendMode: 'screen',
      filter: 'invert(1)',
    } : {}),
  };
  return (
    <img
      src={basePath + src}
      alt={alt || `${name} icon`}
      width={size}
      height={size}
      style={style}
    />
  );
};

// Utility icons (small, custom SVG — stayed vector for scale-freedom)
const UIIcon = ({ name, size = 16, color = '#0A0A0A', strokeWidth = 1.25 }) => {
  const s = size;
  const props = {
    width: s, height: s, viewBox: '0 0 24 24',
    fill: 'none', stroke: color, strokeWidth,
    strokeLinecap: 'round', strokeLinejoin: 'round',
    style: { display: 'block' },
  };
  switch (name) {
    case 'arrow':
      return <svg {...props}><path d="M5 12 L19 12 M13 6 L19 12 L13 18"/></svg>;
    case 'plus':
      return <svg {...props}><path d="M12 5 L12 19 M5 12 L19 12"/></svg>;
    case 'dot':
      return <svg {...props}><circle cx="12" cy="12" r="3" fill={color} stroke="none"/></svg>;
    default:
      return null;
  }
};

Object.assign(window, { PillarIcon, UIIcon, PILLAR_SRC });
