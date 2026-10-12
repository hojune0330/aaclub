// Thin wrapper around PageFooter (defaults to absolute-positioned bottom).
// depends on PageFooter
function SourceFooter({ left, right }) {
  return <PageFooter left={left} right={right} absolute />;
}
window.SourceFooter = SourceFooter;
