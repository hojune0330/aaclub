// AA CLUB Brand System — Applications (Poster, Business Card, Race Bib, SNS, Training Note)

function SeasonPoster() {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg3)', marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>Season Poster · 시즌 포스터</div>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', aspectRatio: '3/4', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8, borderBottom: '2px solid var(--aa-black)' }}>
          <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.2em', fontWeight: 700 }}>AA CLUB · SS 2026</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)' }}>N° 001</div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 42, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
            Run with<br /><span style={{ fontStyle: 'italic' }}>the athletes</span><br />who take running<br />seriously.
          </div>
          <div style={{ fontFamily: 'var(--font-body-kr)', fontSize: 11, color: 'var(--fg2)', marginTop: 14, lineHeight: 1.55 }}>
            진지하게 달리는 선수와 함께 뜁니다.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="tag-for-athlete" style={{ fontSize: 10, padding: '4px 10px' }}>FOR ATHLETE.</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg3)', textAlign: 'right' }}>SEOUL<br />37.55 / 126.97</div>
        </div>
      </div>
    </div>
  );
}

function BusinessCard() {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg3)', marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>Business Card · 명함 샘플</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', aspectRatio: '85/54', padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <img src="../../assets/logos/AA-CLUB_SHORT_black_1x.png" alt="AA Club" style={{display:'block',width:140,height:'auto'}} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400 }}>장호준 · Hojune Jang</div>
            <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 9, letterSpacing: '0.2em', fontWeight: 700, color: 'var(--fg3)', marginTop: 2 }}>
              HEAD COACH — 헤드 코치
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--fg3)', letterSpacing: '0.06em' }}>
            hojune@aaclub.kr · +82 10 XXXX XXXX
          </div>
        </div>
        <div style={{ background: 'var(--aa-black)', color: 'var(--aa-off-white)', aspectRatio: '85/54', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <img src="../../assets/logos/AA-CLUB_SHORT_white_1x.png" alt="AA Club" style={{display:'block',width:140,height:'auto'}} />
          <div style={{ position: 'absolute', bottom: 10, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-eyebrow)', fontSize: 8, letterSpacing: '0.2em', fontWeight: 700, opacity: 0.7 }}>
            <span>FOR ATHLETE.</span><span>SEOUL — 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RaceBib() {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg3)', marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>Race Bib · 배번</div>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', aspectRatio: '1/1', padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 6, borderBottom: '2px solid var(--aa-black)' }}>
          <span style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.24em', fontWeight: 700 }}>AA CLUB</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg3)' }}>2026</span>
        </div>
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-eyebrow)', fontSize: 130, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>
          017
        </div>
        <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 9, letterSpacing: '0.24em', color: 'var(--fg3)', textAlign: 'center', fontWeight: 700 }}>
          FOR ATHLETE.
        </div>
      </div>
    </div>
  );
}

function InstagramSquare() {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg3)', marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>Instagram · SNS</div>
      <div style={{ aspectRatio: '1/1', background: 'var(--bg)', border: '1px solid var(--line)', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '2px solid var(--aa-black)' }}>
          <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.24em', fontWeight: 700 }}>N° 02 — TRAINING</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg3)' }}>07·08·2026</div>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 36, letterSpacing: '-0.02em', lineHeight: 0.95 }}>
          혼자 뛰던 선수가<br /><span style={{ fontStyle: 'italic' }}>함께</span> 성장할 수<br />있도록.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="tag-for-athlete" style={{ fontSize: 10, padding: '4px 10px' }}>@AA.CLUB</div>
          <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--fg3)', fontWeight: 700 }}>FOR ATHLETE.</div>
        </div>
      </div>
    </div>
  );
}

function TrainingNote() {
  const rows = [
    ['01', '400m', '1:04.2', '2:40', '—'],
    ['02', '400m', '1:03.8', '2:39', 'strong'],
    ['03', '400m', '1:04.5', '2:41', 'form ok'],
    ['04', '400m', '1:05.1', '2:42', 'knee in'],
    ['05', '400m', '1:03.9', '2:39', 'final'],
  ];
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg3)', marginBottom: 10, textTransform: 'uppercase', fontWeight: 700 }}>Training Note · 훈련 노트 / 피드백 리포트</div>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: 24, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, borderBottom: '2px solid var(--aa-black)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 11, letterSpacing: '0.24em', fontWeight: 800 }}>SESSION LOG — 004</div>
            <div style={{ fontFamily: 'var(--font-body-kr)', fontSize: 11, color: 'var(--fg3)', marginTop: 2 }}>400m 반복 · 강도 92% · 목표 페이스 63초</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)', textAlign: 'right' }}>
            2026 · 07 · 08<br />18:30 · TRACK 1
          </div>
        </div>
        <table style={{ width: '100%', marginTop: 14, fontSize: 11, fontFamily: 'var(--font-mono)', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ color: 'var(--fg3)', fontSize: 9, letterSpacing: '0.12em', textAlign: 'left' }}>
              <th style={{ paddingBottom: 8, fontWeight: 400 }}>SET</th>
              <th style={{ paddingBottom: 8, fontWeight: 400 }}>DIST</th>
              <th style={{ paddingBottom: 8, fontWeight: 400 }}>TIME</th>
              <th style={{ paddingBottom: 8, fontWeight: 400 }}>PACE</th>
              <th style={{ paddingBottom: 8, fontWeight: 400 }}>NOTE</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r[0]} style={{ borderTop: '0.5px solid var(--line)' }}>
                {r.map((c, i) => <td key={i} style={{ padding: '6px 0', color: i === 4 ? 'var(--fg3)' : 'var(--fg1)' }}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg3)', marginBottom: 6, fontWeight: 700 }}>COACH FEEDBACK · 코치 피드백</div>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 15, lineHeight: 1.55 }}>
            "4번 랩에서 무릎이 살짝 안으로 들어왔음. 다음 세션은 힙 안정성 위주로 잡고, 목요일 재테스트."
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontFamily: 'var(--font-eyebrow)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--fg3)', fontWeight: 700 }}>
            <span>HEAD COACH — JANG HOJUNE</span>
            <span>SIGNED —</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicationsBoard() {
  return (
    <div className="sect">
      <div className="sect-head">
        <div className="sect-num">05 / 09</div>
        <div>
          <div className="sect-title">Applications</div>
          <div className="sect-kr">적용 예시 — 포스터 · 명함 · 배번 · SNS · 훈련 노트</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg3)' }}>05 SURFACES</div>
      </div>

      <div className="grid-app">
        <SeasonPoster />
        <BusinessCard />
        <RaceBib />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 20, marginTop: 24 }}>
        <InstagramSquare />
        <TrainingNote />
      </div>
    </div>
  );
}

window.ApplicationsBoard = ApplicationsBoard;
