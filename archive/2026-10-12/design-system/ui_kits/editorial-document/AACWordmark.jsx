// AAC wordmark — dark on paper (default) / light on ink
//
// The component lives in ui_kits/editorial-document/ but is loaded from HTMLs
// at different depths (ui_kits/*/index.html vs templates/*.html). Since <img
// src> resolves relative to the HTML document (not the JSX), pass `basePath`
// to control the prefix:
//   - templates/*.html               → basePath="../"      (default)
//   - ui_kits/editorial-document/... → basePath="../../"
function AACWordmark({ width = 220, variant = "dark", basePath = "../", style = {} }) {
  const file = variant === "light" ? "AA-CLUB_MAIN_white_1x.png" : "AA-CLUB_MAIN_black_1x.png";
  return (
    <img
      src={basePath + "assets/logos/" + file}
      alt="Athletics Athlete Club"
      style={{ display: "block", ...style, width: Math.max(width, 220), height: "auto" }}
    />
  );
}
window.AACWordmark = AACWordmark;
