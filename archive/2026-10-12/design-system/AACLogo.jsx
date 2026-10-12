// Confirmed 2026-09-21 selection: MAIN H2 / STACK S2 / SHORT SF2.
// basePath resolves from the host HTML to this design-system directory.
function AACLogo({ slot = "MAIN", color = "black", width = 220, basePath = "", style = {} }) {
  const slots = { MAIN: 220, STACK: 110, SHORT: 40 };
  const requested = slots[slot] ? slot : "MAIN";
  const selected = width < slots[requested] ? "SHORT" : requested;
  const actualWidth = Math.max(width, slots[selected]);
  const approvedColor = ["black", "navy", "white"].includes(color) ? color : "black";
  return <img src={`${basePath}assets/logos/AA-CLUB_${selected}_${approvedColor}_1x.png`}
    alt="Athletics Athlete Club" width={actualWidth}
    style={{ display: "block", ...style, width: actualWidth, height: "auto" }} />;
}
window.AACLogo = AACLogo;
