// AAC wordmark — dark on paper (default) / light on ink
//
// The component lives in ui_kits/editorial-document/ but is loaded from HTMLs
// at different depths (ui_kits/*/index.html vs templates/*.html). Since <img
// src> resolves relative to the HTML document (not the JSX), pass `basePath`
// to control the prefix:
//   - templates/*.html               → basePath="../"      (default)
//   - ui_kits/editorial-document/... → basePath="../../"
function AACWordmark({ width = 220, variant = "dark", basePath = "../", style = {} }) {
  const file = variant === "light" ? "aac-wordmark-light.png" : "aac-wordmark-dark.png";
  return (
    <img
      src={basePath + "assets/" + file}
      alt="Athletics Athlete Club"
      style={{ display: "block", width, height: "auto", ...style }}
    />
  );
}
window.AACWordmark = AACWordmark;
