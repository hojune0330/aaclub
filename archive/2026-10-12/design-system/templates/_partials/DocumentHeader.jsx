// Combined header — MetaRail + PageHeader in one shot.
// depends on MetaRail, PageHeader (loaded from ui_kits/editorial-document/)
function DocumentHeader({ docType, program, audience, page, code = "AAC · v1.0" }) {
  const items = [
    { k: "Document", v: docType },
    { k: "Program",  v: program },
    { k: "Audience", v: audience },
    { k: "Page",     v: page },
  ];
  return (
    <>
      <MetaRail items={items} />
      <PageHeader code={code} />
    </>
  );
}
window.DocumentHeader = DocumentHeader;
