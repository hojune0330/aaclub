// AA CLUB — Logo Selection Page
// 로고 최종 확정을 위한 전용 페이지. 각 후보를 크게 배치하고 SVG 다운로드 제공.
// 각 후보는 순수 SVG로 그려져서 다운로드 즉시 일러스트레이터/피그마에서 편집 가능.

// ============ SVG BUILDERS ============
// 세리프 이탤릭 "Athlete"가 필요해서 실제 폰트를 참조. 다운로드용 SVG는 폰트 임베드
// 없이 자체 완결되어야 하므로, 다운로드 시 텍스트로 남기되 font-family를 명시
// (사용자가 일러스트레이터에서 폰트 없다면 outlining 필요).
// 그래서 두 버전을 제공: (1) 폰트 참조 SVG — 편집 가능,
// (2) 사용법 안내.

const LOGO_FONT_STACK = '"Fraunces", "Times New Roman", serif';
const LOGO_TAG_FONT = '"Archivo Narrow", "Helvetica Neue", sans-serif';

// Horizontal one-line — 가로 한 줄
const buildHorizontalSVG = ({ w = 900, h = 200, color = '#0A0A0A', bg = 'none', withTag = true } = {}) => {
  // Layout centers vertically
  const mid = h / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <text x="${w/2}" y="${mid + (withTag ? -10 : 8)}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="88" letter-spacing="-3">
    <tspan>Athletics </tspan><tspan font-style="italic">Athlete</tspan><tspan> Club</tspan>
  </text>
  ${withTag ? `
  <g transform="translate(${w/2}, ${mid + 46})">
    <rect x="-56" y="-11" width="112" height="22" fill="${color}"/>
    <text x="0" y="4" text-anchor="middle" fill="${bg === 'none' ? '#F5F3EE' : bg}"
      font-family='${LOGO_TAG_FONT}' font-weight="700" font-size="11" letter-spacing="2.4">FOR ATHLETE.</text>
  </g>` : ''}
</svg>`;
};

// Horizontal one-line, condensed (no italic)
const buildHorizontalTightSVG = ({ w = 900, h = 140, color = '#0A0A0A', bg = 'none' } = {}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <text x="${w/2}" y="${h/2 + 20}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="72" letter-spacing="-2.5">
    <tspan>Athletics </tspan><tspan font-style="italic">Athlete</tspan><tspan> Club</tspan>
  </text>
</svg>`;
};

// Two-line stacked
const buildStackedSVG = ({ w = 640, h = 320, color = '#0A0A0A', bg = 'none', withTag = true } = {}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <text x="${w/2}" y="${h/2 - 40}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="104" letter-spacing="-3.5">Athletics</text>
  <text x="${w/2}" y="${h/2 + 50}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="104" letter-spacing="-3.5">
    <tspan font-style="italic">Athlete</tspan> Club
  </text>
  ${withTag ? `
  <g transform="translate(${w/2}, ${h/2 + 120})">
    <rect x="-56" y="-11" width="112" height="22" fill="${color}"/>
    <text x="0" y="4" text-anchor="middle" fill="${bg === 'none' ? '#F5F3EE' : bg}"
      font-family='${LOGO_TAG_FONT}' font-weight="700" font-size="11" letter-spacing="2.4">FOR ATHLETE.</text>
  </g>` : ''}
</svg>`;
};

// Ultra-compact horizontal — with divider bar and AA short (left-anchored)
const buildCompactHorizontalSVG = ({ w = 1000, h = 120, color = '#0A0A0A', bg = 'none' } = {}) => {
  // Center the whole lockup manually with fixed measurements
  const wordWidth = 580;  // approx visual width of "Athletics Athlete Club" at 54px
  const gap = 24;
  const dividerX = wordWidth + gap;
  const aaClubX = dividerX + gap;
  const totalW = aaClubX + 180;
  const startX = (w - totalW) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <g transform="translate(${startX}, ${h/2})">
    <text x="0" y="18" fill="${color}"
      font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="54" letter-spacing="-2">
      <tspan>Athletics </tspan><tspan font-style="italic">Athlete</tspan><tspan> Club</tspan>
    </text>
    <line x1="${dividerX}" y1="-24" x2="${dividerX}" y2="24" stroke="${color}" stroke-width="1.5"/>
    <text x="${aaClubX}" y="12" fill="${color}"
      font-family='${LOGO_TAG_FONT}' font-weight="700" font-size="22" letter-spacing="4">AA CLUB</text>
  </g>
</svg>`;
};

// ============ SHORT FORM: AA CLUB (신뢰감 있는 축약형 — 본 버전과 같은 시각 언어) ============
// 본 워드마크 "Athletics Athlete Club" 이 세리프 300 weight, 자간 -0.02em, 이탤릭
// Athlete 하나만 강조 — 이 규칙을 그대로 축약형에도 적용. 명품 브랜드 느낌 배제,
// 클럽·기관·신분증 같은 조용한 신뢰감.

// SF1: AA CLUB — 대문자 세리프 (본 워드마크의 캡션/에이브로우와 같은 조판감)
// Fraunces 300, small caps 느낌으로 자간 살짝 넓게. 정말 조용함.
const buildShortAACLUBSVG = ({ w = 500, h = 180, color = '#0A0A0A', bg = 'none' } = {}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <text x="${w/2}" y="${h/2 + 24}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="400" font-size="72" letter-spacing="4">
    AA CLUB
  </text>
</svg>`;
};

// SF2: AA Club — 본 워드마크와 정확히 같은 조판 (title case, 300 weight, 이탤릭 없음)
// "Athletics Athlete Club" 를 그대로 줄인 느낌. 가장 신뢰감 있는 축약형.
const buildShortAAClubSVG = ({ w = 500, h = 180, color = '#0A0A0A', bg = 'none' } = {}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <text x="${w/2}" y="${h/2 + 26}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="88" letter-spacing="-2">
    AA Club
  </text>
</svg>`;
};

// SF3: AA Club with SEOUL locator — 클럽/기관 아이덴티티. 신분증·명함 등에.
// 로케이터가 붙어서 로고가 아니라 "이 사람이 어디 소속인지" 를 명시하는 신원 표기 느낌.
const buildShortAAClubSeoulSVG = ({ w = 500, h = 220, color = '#0A0A0A', bg = 'none' } = {}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <text x="${w/2}" y="${h/2 + 4}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="80" letter-spacing="-2">
    AA Club
  </text>
  <line x1="${w/2 - 40}" y1="${h/2 + 34}" x2="${w/2 + 40}" y2="${h/2 + 34}" stroke="${color}" stroke-width="0.75"/>
  <text x="${w/2}" y="${h/2 + 60}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="400" font-size="14" letter-spacing="4">
    SEOUL · EST. 2026
  </text>
</svg>`;
};

// SF4: horizontal AA Club — 헤더/사인용
const buildShortAAClubHorizontalSVG = ({ w = 600, h = 120, color = '#0A0A0A', bg = 'none' } = {}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <text x="${w/2}" y="${h/2 + 20}" text-anchor="middle" fill="${color}"
    font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="64" letter-spacing="-1.5">
    AA Club
  </text>
</svg>`;
};

// Wide horizontal — logo + tag on same line (left-anchored)
const buildInlineTagSVG = ({ w = 1200, h = 130, color = '#0A0A0A', bg = 'none' } = {}) => {
  const wordWidth = 680;  // approx visual width at 64px
  const gap = 32;
  const tagX = wordWidth + gap;
  const totalW = tagX + 140;
  const startX = (w - totalW) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  ${bg !== 'none' ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <g transform="translate(${startX}, ${h/2})">
    <text x="0" y="20" fill="${color}"
      font-family='${LOGO_FONT_STACK}' font-weight="300" font-size="64" letter-spacing="-2.5">
      <tspan>Athletics </tspan><tspan font-style="italic">Athlete</tspan><tspan> Club</tspan>
    </text>
    <rect x="${tagX}" y="-16" width="140" height="32" fill="${color}"/>
    <text x="${tagX + 70}" y="6" text-anchor="middle" fill="${bg === 'none' ? '#F5F3EE' : bg}"
      font-family='${LOGO_TAG_FONT}' font-weight="700" font-size="14" letter-spacing="3.2">FOR ATHLETE.</text>
  </g>
</svg>`;
};

// ============ DOWNLOAD HELPERS ============
// Detect mobile — especially iOS Safari where <a download> is not supported
const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isIOS = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);

// Show an overlay with the image, so mobile users can long-press to save.
// Also provides an X to close and instructions in Korean.
const showMobileImageOverlay = (dataUrl, filename, format) => {
  // Remove existing overlay if any
  const existing = document.getElementById('__mobile_dl_overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = '__mobile_dl_overlay';
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 999999;
    background: rgba(10,10,10,0.94);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 20px; box-sizing: border-box;
    font-family: "Pretendard", -apple-system, sans-serif;
    animation: __fadeIn 0.2s ease;
  `;

  // Header instructions
  const header = document.createElement('div');
  header.style.cssText = `
    color: #F5F3EE; text-align: center; max-width: 480px; margin-bottom: 20px;
  `;
  const instr = isIOS()
    ? '이미지를 <b>길게 눌러 → "이미지 저장"</b>을 선택하세요.'
    : '이미지를 <b>길게 눌러 → "이미지 다운로드" 또는 "이미지 저장"</b>을 선택하세요.';
  header.innerHTML = `
    <div style="font-family:'Archivo Narrow',sans-serif;font-size:11px;letter-spacing:0.24em;font-weight:700;opacity:0.6;margin-bottom:8px;">
      MOBILE DOWNLOAD · ${format.toUpperCase()}
    </div>
    <div style="font-size:15px;line-height:1.55;">${instr}</div>
    <div style="font-size:12px;opacity:0.55;margin-top:6px;font-family:'IBM Plex Mono',monospace;">${filename}</div>
  `;
  overlay.appendChild(header);

  // Image (or SVG rendered as image)
  const imgWrap = document.createElement('div');
  imgWrap.style.cssText = `
    background: #FFFFFF; padding: 20px; max-width: 90vw; max-height: 60vh;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  `;
  const img = document.createElement('img');
  img.src = dataUrl;
  img.alt = filename;
  img.style.cssText = 'max-width: 100%; max-height: 55vh; height: auto; display: block; -webkit-touch-callout: default;';
  imgWrap.appendChild(img);
  overlay.appendChild(imgWrap);

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '닫기 · CLOSE';
  closeBtn.style.cssText = `
    margin-top: 24px; padding: 12px 32px;
    background: transparent; color: #F5F3EE;
    border: 1px solid #F5F3EE;
    font-family: "Archivo Narrow", sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 0.2em; cursor: pointer;
  `;
  closeBtn.onclick = () => overlay.remove();
  overlay.appendChild(closeBtn);

  // Tap outside image to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  document.body.appendChild(overlay);
};

const downloadSVG = (svgText, filename) => {
  const blob = new Blob([svgText], { type: 'image/svg+xml' });
  if (isMobile()) {
    // Mobile: SVG can't be long-pressed reliably. Convert to data URL and open
    // in a new tab so user can save/screenshot.
    const reader = new FileReader();
    reader.onload = () => {
      // For SVG on mobile, best UX is to show the SVG rendered as image.
      // We'll do that by converting SVG → PNG at reasonable size for preview.
      // But since SVG itself might work on some Androids, try new-tab first.
      const dataUrl = reader.result;
      // Try to open in a new window — if popup blocked, fall back to overlay
      const w = window.open(dataUrl, '_blank');
      if (!w) {
        // Popup blocked — render SVG as inline in an overlay
        showMobileImageOverlay(dataUrl, filename, 'svg');
      }
    };
    reader.readAsDataURL(blob);
    return;
  }
  // Desktop: standard <a download>
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Convert SVG string to PNG at given target width (px)
// Uses canvas rasterization — polyfills the svg-to-image conversion.
// bg='transparent' produces PNG-24 with alpha; bg=hex fills the background.
const svgToPNG = (svgText, filename, targetWidth = 3000, bg = 'transparent') => {
  // Parse viewBox to compute output height
  const vbMatch = svgText.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  if (!vbMatch) {
    console.error('SVG missing viewBox');
    return;
  }
  const vbW = parseFloat(vbMatch[1]);
  const vbH = parseFloat(vbMatch[2]);
  const targetHeight = Math.round(targetWidth * (vbH / vbW));

  const img = new Image();
  const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);

  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');
    if (bg !== 'transparent') {
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, targetWidth, targetHeight);
    }
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
    URL.revokeObjectURL(url);

    if (isMobile()) {
      // Mobile: canvas.toDataURL and show in overlay for long-press save
      const dataUrl = canvas.toDataURL('image/png');
      showMobileImageOverlay(dataUrl, filename, 'png');
      return;
    }

    // Desktop: blob → <a download>
    canvas.toBlob((blob) => {
      const dlUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = dlUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(dlUrl);
    }, 'image/png');
  };

  img.onerror = () => {
    URL.revokeObjectURL(url);
    alert('PNG 변환 실패. 브라우저 콘솔을 확인해주세요.');
  };

  img.src = url;
};

// ============ CANDIDATE CARD ============
const LogoCandidate = ({ id, no, label, ko, note, svgBuilder, aspectHint, tone = 'light', usage }) => {
  const bg = tone === 'dark' ? '#0A0A0A' : '#FFFFFF';
  const fg = tone === 'dark' ? '#F5F3EE' : '#0A0A0A';

  // Preview SVG (with matching bg for the display) — responsive width
  // Replace the fixed width/height attributes with responsive ones so the SVG
  // scales to the parent card, and the viewBox handles clipping correctly.
  const makeResponsive = (raw) => raw.replace(
    /(<svg[^>]*?)width="\d+"\s+height="\d+"/,
    '$1preserveAspectRatio="xMidYMid meet" style="width:100%;height:auto;max-height:200px;display:block;"'
  );
  const previewSvg = makeResponsive(svgBuilder({ color: fg, bg: 'none' }));
  const inverseSvg = makeResponsive(svgBuilder({ color: tone === 'dark' ? '#0A0A0A' : '#F5F3EE', bg: 'none' }));

  // Download variants — SVG (vector) and PNG (3000px raster)
  const colorMap = {
    black: '#0A0A0A',
    navy:  '#0F1B3D',
    white: '#F5F3EE',
  };

  const doDownload = (variant, format) => {
    const color = colorMap[variant];
    const svg = svgBuilder({ color, bg: 'none' });
    if (format === 'svg') {
      downloadSVG(svg, `AA-CLUB_${id}_${variant}.svg`);
    } else if (format === 'png') {
      // PNG: transparent BG for black/navy (works on any surface),
      // black BG for white (otherwise the white logo is invisible)
      const pngBg = variant === 'white' ? '#0A0A0A' : 'transparent';
      svgToPNG(svg, `AA-CLUB_${id}_${variant}.png`, 3000, pngBg);
    }
  };

  return (
    <div style={{
      background: '#F5F3EE',
      border: '1px solid #DAD6CC',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        paddingBottom: 12, borderBottom: '2px solid #0A0A0A' }}>
        <div>
          <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.24em' }}>
            CANDIDATE {no} — {label.toUpperCase()}
          </div>
          <div style={{ fontFamily: '"Pretendard", sans-serif', fontSize: 12, color: '#6B6B6B', marginTop: 4 }}>
            {ko}
          </div>
        </div>
        <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#6B6B6B', letterSpacing: '0.14em' }}>
          {id.toUpperCase()}
        </div>
      </div>

      {/* Preview - large */}
      <div style={{
        background: bg,
        border: tone === 'dark' ? 'none' : '1px solid #DAD6CC',
        padding: '48px 24px',
        minHeight: 260,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
        dangerouslySetInnerHTML={{ __html: previewSvg }}
      />

      {/* Second preview — inverse */}
      <div style={{
        background: tone === 'dark' ? '#FFFFFF' : '#0A0A0A',
        padding: '32px 24px',
        minHeight: 180,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
        dangerouslySetInnerHTML={{ __html: inverseSvg }}
      />

      {/* Meta + Downloads */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: '#6B6B6B', marginBottom: 6 }}>
            NOTE · 특징
          </div>
          <div style={{ fontFamily: '"Pretendard", sans-serif', fontSize: 12, lineHeight: 1.6, color: '#3A3A3A' }}>
            {note}
          </div>
          <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: '#6B6B6B', marginTop: 14, marginBottom: 6 }}>
            USE FOR · 사용 상황
          </div>
          <div style={{ fontFamily: '"Pretendard", sans-serif', fontSize: 12, lineHeight: 1.6, color: '#3A3A3A' }}>
            {usage}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: '#6B6B6B', marginBottom: 8 }}>
            DOWNLOAD · 다운로드
          </div>

          {[
            { key: 'black', label: 'Black · 블랙', dot: '#0A0A0A' },
            { key: 'navy',  label: 'Navy · 네이비', dot: '#0F1B3D' },
            { key: 'white', label: 'White · 반전용', dot: '#FFFFFF', border: true },
          ].map(v => (
            <div key={v.key} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 4 }}>
              <button
                onClick={() => doDownload(v.key, 'svg')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '9px 10px',
                  border: '1px solid #0A0A0A', background: '#FFFFFF',
                  fontFamily: '"Archivo Narrow", sans-serif', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.14em', cursor: 'pointer',
                  textAlign: 'left', color: '#0A0A0A',
                  transition: 'background 0.1s, color 0.1s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#F5F3EE'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0A0A0A'; }}
              >
                <span style={{
                  width: 12, height: 12, background: v.dot,
                  border: v.border ? '1px solid currentColor' : 'none',
                  flexShrink: 0,
                }}/>
                <span style={{ flex: 1 }}>{v.label.split(' · ')[1] || v.label} SVG</span>
                <span style={{ fontSize: 11 }}>↓</span>
              </button>
              <button
                onClick={() => doDownload(v.key, 'png')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '9px 10px',
                  border: '1px solid #0A0A0A', background: '#0A0A0A',
                  fontFamily: '"Archivo Narrow", sans-serif', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.14em', cursor: 'pointer',
                  textAlign: 'left', color: '#F5F3EE',
                  transition: 'background 0.1s, color 0.1s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F5F3EE'; e.currentTarget.style.color = '#0A0A0A'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#F5F3EE'; }}
              >
                <span style={{ flex: 1 }}>{v.label.split(' · ')[1] || v.label} PNG</span>
                <span style={{ fontSize: 11 }}>↓</span>
              </button>
            </div>
          ))}

          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 9, color: '#6B6B6B', marginTop: 10, lineHeight: 1.5 }}>
            {aspectHint}<br/>
            PNG · 3000px 고해상도<br/>
            <span style={{ fontFamily: '"Pretendard", sans-serif' }}>흰색 PNG는 검은 배경 포함, 나머지는 투명 배경</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ MAIN PAGE ============
const LogoSelectionPage = () => {
  const candidates = [
    {
      id: 'H1', no: '01',
      label: 'Horizontal — One Line + FOR ATHLETE Tag',
      ko: '가로형 · 한 줄 + FOR ATHLETE 태그',
      note: '가로 폭이 넓을 때 사용하는 메인 워드마크. 세리프 워드마크 아래에 클럽 20% 요소인 블랙 태그가 붙어 하이브리드 정체성을 가장 잘 보여줍니다.',
      usage: '웹사이트 헤더, 브랜드 인트로, 명함 앞면, 유니폼 큰 프린트, 배경 판넬.',
      aspectHint: 'Ratio 900 × 200 · 4.5:1',
      svgBuilder: buildHorizontalSVG,
      tone: 'light',
    },
    {
      id: 'H2', no: '02',
      label: 'Horizontal — Clean One Line (no tag)',
      ko: '가로형 · 태그 없는 심플 한 줄',
      note: '태그 없이 워드마크만. 가장 조용하고 정돈된 버전. 다른 요소와 함께 사용할 때 방해되지 않는 버전.',
      usage: '문서 헤더/푸터, 이메일 서명, 협업 자료, 파트너 락업, 인쇄 워터마크.',
      aspectHint: 'Ratio 900 × 140 · 6.4:1',
      svgBuilder: buildHorizontalTightSVG,
      tone: 'light',
    },
    {
      id: 'H3', no: '03',
      label: 'Horizontal — Inline Tag Lockup',
      ko: '가로형 · 인라인 태그 락업',
      note: '워드마크와 FOR ATHLETE 태그가 한 줄에 나란히. 아주 넓은 가로 공간(웹 배너, 리본, 유니폼 등쪽)에 최적화.',
      usage: '웹 상단 풀-폭 배너, 이벤트 백드롭, 유니폼 등판, 광고 카피 리본.',
      aspectHint: 'Ratio 1200 × 130 · 9.2:1',
      svgBuilder: buildInlineTagSVG,
      tone: 'light',
    },
    {
      id: 'H4', no: '04',
      label: 'Horizontal — Compact with AA Divider',
      ko: '가로형 · AA CLUB 구분선 락업',
      note: '풀 네임 + 세로 구분선 + AA CLUB 약어. 가로가 좁지만 한 줄로 가야 할 때. AA를 뒤에 배치해서 브랜드명 인지도를 함께 쌓음.',
      usage: 'SNS 프로필 배너, 앱 스플래시, 좁은 배너, 프레젠테이션 하단.',
      aspectHint: 'Ratio 900 × 120 · 7.5:1',
      svgBuilder: buildCompactHorizontalSVG,
      tone: 'light',
    },
    {
      id: 'S1', no: '05',
      label: 'Stacked — Two Lines + Tag (Original)',
      ko: '세로 스택형 · 두 줄 + 태그 [현재 시안]',
      note: '지금 시안의 메인 워드마크. 세로/정사각형 공간에서 가장 강한 존재감. 태그로 클럽 정체성 마감.',
      usage: '포스터, SNS 정사각 게시물, 배번, 표지, 명함 뒷면, 리포트 커버.',
      aspectHint: 'Ratio 640 × 320 · 2:1',
      svgBuilder: buildStackedSVG,
      tone: 'light',
    },
    {
      id: 'S2', no: '06',
      label: 'Stacked — Two Lines (no tag)',
      ko: '세로 스택형 · 태그 없는 두 줄',
      note: 'S1에서 태그를 제거한 조용한 버전. 문서/자료용.',
      usage: '내부 훈련 자료 표지, 조용한 마크가 필요한 자리.',
      aspectHint: 'Ratio 640 × 260 · 2.5:1',
      svgBuilder: (opts = {}) => buildStackedSVG({ ...opts, h: 260, withTag: false }),
      tone: 'light',
    },
  ];

  // Short form (축약형) candidates — 본 워드마크와 같은 조판, 신뢰감 중심
  const shortForms = [
    {
      id: 'SF1', no: '07',
      label: 'Short — AA Club (Same as Primary) ★',
      ko: '축약형 · AA Club (본 워드마크와 동일 조판)',
      note: '본 워드마크 "Athletics Athlete Club" 를 그대로 줄인 형태. 같은 세리프 300 weight, 같은 자간. 이탤릭·태그·강조 없음. 가장 조용하고, 본 로고와 나란히 놓아도 완전히 같은 시각 언어. 신뢰감 최우선.',
      usage: '어디에나. 명함 뒷면, SNS 아바타, 이메일 서명, 워터마크, 훈련 자료 헤더, 아바타.',
      aspectHint: 'Ratio 500 × 180 · 2.8:1',
      svgBuilder: buildShortAAClubSVG,
      tone: 'light',
    },
    {
      id: 'SF2', no: '08',
      label: 'Short — AA Club Horizontal',
      ko: '축약형 · AA Club · 가로',
      note: 'SF1과 같지만 가로형. 헤더·네비게이션·사인처럼 세로 공간이 좁을 때.',
      usage: '웹사이트 헤더, 문서 상단, 이메일 서명, 좁은 사인.',
      aspectHint: 'Ratio 600 × 120 · 5:1',
      svgBuilder: buildShortAAClubHorizontalSVG,
      tone: 'light',
    },
    {
      id: 'SF3', no: '09',
      label: 'Short — AA Club · Seoul Est. 2026',
      ko: '축약형 · AA Club · 서울/설립년도',
      note: '축약형에 로케이터를 얹은 클럽 인장. 신분 표기 · 클럽/기관 인증 느낌. 이탤릭·굵기 강조 없이 조용한 라인 하나만.',
      usage: '유니폼 소형 자수, 신분증, 시즌 리포트 커버, 클럽 사인, 굿즈 라벨.',
      aspectHint: 'Ratio 500 × 220 · 2.3:1',
      svgBuilder: buildShortAAClubSeoulSVG,
      tone: 'light',
    },
    {
      id: 'SF4', no: '10',
      label: 'Short — AA CLUB (All Caps)',
      ko: '축약형 · AA CLUB · 대문자',
      note: '전부 대문자, 자간을 살짝 벌린 클래식 조판. 본 워드마크의 캡션·에이브로우와 같은 톤. 아주 작게 써도 명확하게 읽힘.',
      usage: '작은 크기 사용(파비콘, 앱 아이콘, 자수 라벨), 인장·스탬프 느낌 필요한 자리.',
      aspectHint: 'Ratio 500 × 180 · 2.8:1',
      svgBuilder: buildShortAACLUBSVG,
      tone: 'light',
    },
  ];

  const horizontals = candidates.filter(c => c.id.startsWith('H'));
  const stacked = candidates.filter(c => c.id.startsWith('S'));

  return (
    <div style={{
      background: '#EFECE4',
      minHeight: '100vh',
      fontFamily: '"Pretendard", "Neue Haas Grotesk Display Pro", sans-serif',
      color: '#0A0A0A',
    }}>
      {/* HEADER */}
      <header style={{
        background: '#F5F3EE',
        borderBottom: '2px solid #0A0A0A',
        padding: '32px 48px 24px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32 }}>
          <div style={{ maxWidth: 900 }}>
            <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 11, letterSpacing: '0.28em', fontWeight: 700, color: '#6B6B6B', marginBottom: 12, textTransform: 'uppercase' }}>
              AA CLUB · Logo Selection Sheet
            </div>
            <h1 style={{
              margin: 0, fontFamily: '"Fraunces", serif', fontWeight: 300,
              fontSize: 56, letterSpacing: '-0.02em', lineHeight: 1,
            }}>
              Choose the <span style={{ fontStyle: 'italic' }}>Primary</span> Logo.
            </h1>
            <div style={{ fontFamily: '"Pretendard", sans-serif', fontSize: 14, color: '#3A3A3A', marginTop: 16, lineHeight: 1.6 }}>
              최종 확정을 위한 워드마크 후보 시트. 각 후보 아래의 <b>DOWNLOAD 버튼</b>으로<br/>
              블랙 / 네이비 / 화이트 SVG 파일을 즉시 다운로드할 수 있습니다.<br/>
              <span style={{ color: '#6B6B6B' }}>SVG는 일러스트레이터에서 바로 열립니다. (파일 → 열기 → 그대로 편집 가능)</span>
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#6B6B6B', letterSpacing: '0.14em', lineHeight: 1.8 }}>
              MOOD 04 · HYBRID<br/>
              EDITORIAL 80% + CLUB 20%<br/>
              SS 2026 · SEOUL
            </div>
            <div style={{ marginTop: 16, background: '#0A0A0A', color: '#F5F3EE',
              padding: '6px 12px', display: 'inline-block',
              fontFamily: '"Archivo Narrow", sans-serif', fontSize: 12, letterSpacing: '0.18em', fontWeight: 700 }}>
              FOR ATHLETE.
            </div>
          </div>
        </div>

        {/* Key notes */}
        <div style={{
          marginTop: 32, paddingTop: 16, borderTop: '1px solid #DAD6CC',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
        }}>
          {[
            ['01', 'Fraunces Serif', '헤드라인 폰트: Fraunces 300 · italic Athlete'],
            ['02', 'Archivo Narrow Tag', '태그 폰트: Archivo Narrow 700, 자간 0.18em'],
            ['03', 'Pure Black · Deep Navy', '메인 컬러: 블랙 / 서브: 딥 네이비 #0F1B3D'],
            ['04', 'SVG · PNG Files', '다운로드: SVG (편집용) · PNG 3000px (즉시 사용)'],
          ].map(([n, t, d]) => (
            <div key={n}>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#6B6B6B', marginBottom: 4 }}>{n}</div>
              <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t}</div>
              <div style={{ fontFamily: '"Pretendard", sans-serif', fontSize: 11, color: '#6B6B6B', marginTop: 3 }}>{d}</div>
            </div>
          ))}
        </div>
      </header>

      {/* SECTION 01 — HORIZONTAL */}
      <section style={{ padding: '48px 48px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 28, borderBottom: '2px solid #0A0A0A', paddingBottom: 12 }}>
          <div>
            <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 12, letterSpacing: '0.24em', fontWeight: 700 }}>
              SECTION 01 — HORIZONTAL LOGOS
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 300, letterSpacing: '-0.02em', marginTop: 6 }}>
              가로형 · <span style={{ fontStyle: 'italic' }}>One Line</span> Variants
            </div>
          </div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#6B6B6B', letterSpacing: '0.14em' }}>
            04 CANDIDATES · H1 – H4 &nbsp;|&nbsp; 10 TOTAL
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {horizontals.map(c => <LogoCandidate key={c.id} {...c} />)}
        </div>
      </section>

      {/* SECTION 02 — STACKED */}
      <section style={{ padding: '32px 48px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 28, borderBottom: '2px solid #0A0A0A', paddingBottom: 12 }}>
          <div>
            <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 12, letterSpacing: '0.24em', fontWeight: 700 }}>
              SECTION 02 — STACKED LOGOS
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 300, letterSpacing: '-0.02em', marginTop: 6 }}>
              세로 스택형 · <span style={{ fontStyle: 'italic' }}>Two Line</span> Variants
            </div>
          </div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#6B6B6B', letterSpacing: '0.14em' }}>
            02 CANDIDATES · S1 – S2
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {stacked.map(c => <LogoCandidate key={c.id} {...c} />)}
        </div>
      </section>

      {/* SECTION 03 — SHORT FORM (AA CLUB 축약형) */}
      <section style={{ padding: '32px 48px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 28, borderBottom: '2px solid #0A0A0A', paddingBottom: 12 }}>
          <div>
            <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 12, letterSpacing: '0.24em', fontWeight: 700 }}>
              SECTION 03 — SHORT FORM LOGOS
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 300, letterSpacing: '-0.02em', marginTop: 6 }}>
              축약형 · <span style={{ fontStyle: 'italic' }}>AA Club</span> Variants
            </div>
            <div style={{ fontFamily: '"Pretendard", sans-serif', fontSize: 12, color: '#6B6B6B', marginTop: 8, maxWidth: 640, lineHeight: 1.55 }}>
              풀 네임(Athletics Athlete Club)이 들어가지 않는 자리용 축약형. <b>본 워드마크와 같은 조판</b>을 유지 — 세리프 300 weight, 같은 자간, 강조·이탤릭·태그 없음. 신뢰감 있는 조용한 표기.
            </div>
          </div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#6B6B6B', letterSpacing: '0.14em' }}>
            04 CANDIDATES · SF1 – SF4
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {shortForms.map(c => <LogoCandidate key={c.id} {...c} />)}
        </div>
      </section>

      {/* NOTES FOOTER */}
      <footer style={{ background: '#0A0A0A', color: '#F5F3EE', padding: '40px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40 }}>
          <div>
            <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 11, letterSpacing: '0.24em', fontWeight: 700, opacity: 0.6, marginBottom: 12 }}>
              PRODUCTION NOTES · 프로덕션 노트
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, marginBottom: 20 }}>
              "SVG는 편집용 벡터, PNG는 즉시 사용용 3000px 고해상도.<br/>필요에 따라 선택해서 다운받으세요."
            </div>
            <div style={{ fontFamily: '"Pretendard", sans-serif', fontSize: 12, lineHeight: 1.75, opacity: 0.75 }}>
              · <b>SVG</b>: 벡터 편집용. 일러스트레이터·피그마 등에서 열림. 인쇄·크기 무한 확대 가능.<br/>
              · <b>PNG</b>: 3000px 고해상도 래스터. SNS, PPT, 문서, 웹에 바로 붙이기. 폰트 렌더링 완료 상태.<br/>
              · <b>흰색 PNG</b>: 검은 배경 포함 (투명 배경이면 보이지 않으므로). 나머지 컬러는 투명 배경.<br/>
              · <b>일러스트레이터에서 SVG 열기</b>: 파일 → 열기 → SVG 선택. 폰트가 없다면 텍스트 선택 → 오브젝트 → 확장 → 확인 (아웃라이닝).<br/>
              · <b>폰트</b>: Fraunces + Archivo Narrow (모두 Google Fonts, 무료).<br/>
              · <b>컬러 규정</b>: Pure Black <span style={{ fontFamily: '"IBM Plex Mono", monospace' }}>#0A0A0A</span> · Deep Navy <span style={{ fontFamily: '"IBM Plex Mono", monospace' }}>#0F1B3D</span> · White <span style={{ fontFamily: '"IBM Plex Mono", monospace' }}>#F5F3EE</span>.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: '"Archivo Narrow", sans-serif', fontSize: 11, letterSpacing: '0.24em', fontWeight: 700, opacity: 0.6, marginBottom: 12 }}>
              MINIMUM SIZE · 최소 사용 크기
            </div>
            <div style={{ fontFamily: '"Pretendard", sans-serif', fontSize: 12, lineHeight: 1.8, opacity: 0.75 }}>
              가로형: 폭 <b>80mm / 220px</b> 이상<br/>
              세로 스택형: 폭 <b>40mm / 110px</b> 이상<br/>
              그보다 작을 때는 AA 심볼만 사용
            </div>
            <div style={{ marginTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16 }}>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.14em', opacity: 0.6, lineHeight: 1.8 }}>
                AA CLUB · SEOUL · 2026<br/>
                LOGO SHEET V1 · 07 · 08
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Object.assign(window, { LogoSelectionPage });
