// Alias for EditorialHero with the shape we typically want in openers.
// depends on EditorialHero
function EditorialOpener({ eyebrow, display, displayEm, h1 }) {
  return <EditorialHero eyebrow={eyebrow} display={display} displayEm={displayEm} h1={h1} />;
}
window.EditorialOpener = EditorialOpener;
