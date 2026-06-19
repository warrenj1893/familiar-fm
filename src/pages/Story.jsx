import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { POS as S, GeoStar, FacetBall, Ink, Grain } from '../components/poster-kit';
import { APhone } from '../components/app-kit';
import { FEST } from '../data/fest';

const SF = "'Bricolage Grotesque', sans-serif";
const SM = "'DM Mono', monospace";

function StoryWrapper({ bg, children }) {
  return (
    <div style={{ width: 360, height: 640, background: bg, position: 'relative', overflow: 'hidden', fontFamily: SF, margin: '0 auto', borderRadius: 24 }}>
      {children}
      <Grain opacity={0.2} />
    </div>
  );
}

function HandleTag({ dark }) {
  const fg = dark ? S.blue : S.paper;
  const bdr = dark ? S.blue : S.paper;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${bdr}`, padding: '7px 12px' }}>
      <GeoStar size={16} color={dark ? 'blue' : 'yellow'} points={4} />
      <span style={{ fontFamily: SM, fontSize: 11, letterSpacing: '0.04em', color: fg }}>@alexlistens · familiar.fm</span>
    </div>
  );
}

export default function Story() {
  const { type } = useParams();
  const navigate = useNavigate();

  if (type === 'review') {
    const top = [...FEST.artists].sort((a, b) => b.plays - a.plays).slice(0, 5);
    return (
      <APhone>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: 10, position: 'relative' }}>
          <span onClick={() => navigate(-1)} style={{ position: 'absolute', top: 16, left: 16, color: '#fff', fontSize: 24, cursor: 'pointer', zIndex: 10 }}>✕</span>
          <StoryWrapper bg={S.paper}>
            <div style={{ position: 'absolute', right: -70, top: -60 }}><FacetBall size={200} bars={3} /></div>
            <Ink as="div" color={S.yellow} style={{ left: -50, bottom: 60, width: 200, height: 200, borderRadius: '50%' }} />
            <div style={{ position: 'relative', padding: '30px 26px 0' }}>
              <div style={{ fontFamily: SM, fontSize: 11, letterSpacing: '0.2em', color: S.blue, mixBlendMode: 'multiply' }}>SUMMERFEST ’26 · MY RECAP</div>
              <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 60, lineHeight: 0.78, letterSpacing: '-0.04em', color: S.blue, textTransform: 'uppercase', marginTop: 12, mixBlendMode: 'multiply' }}>My top<br/>sets</div>
            </div>
            <div style={{ position: 'absolute', left: 26, right: 26, top: 250 }}>
              {top.map((a, i) => (
                <div key={a.id} style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '7px 0', borderBottom: `1.5px solid rgba(10,83,240,0.18)` }}>
                  <span style={{ fontFamily: SF, fontWeight: 800, fontSize: 22, color: i === 0 ? S.green : 'rgba(10,83,240,0.45)', width: 24, flex: 'none' }}>{i + 1}</span>
                  <span style={{ flex: 1, fontFamily: SF, fontWeight: 800, fontSize: 23, letterSpacing: '-0.02em', color: S.blue, mixBlendMode: 'multiply', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</span>
                </div>
              ))}
              <div style={{ fontFamily: SM, fontSize: 11, color: S.green, marginTop: 14 }}>★ BEST SET — {top[0].name.toUpperCase()}</div>
            </div>
            <div style={{ position: 'absolute', left: 26, bottom: 30 }}><HandleTag dark /></div>
          </StoryWrapper>
        </div>
      </APhone>
    );
  }

  // default lineup
  const plan = ['flipturn', 'Echo & The Bunnymen', 'Third Eye Blind', 'Don Toliver', 'David Lee Roth']
    .map((n) => FEST.artists.find((a) => a.name === n)).filter(Boolean);

  return (
    <APhone>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: 10, position: 'relative' }}>
        <span onClick={() => navigate(-1)} style={{ position: 'absolute', top: 16, left: 16, color: '#fff', fontSize: 24, cursor: 'pointer', zIndex: 10 }}>✕</span>
        <StoryWrapper bg={S.blue}>
          <Ink as="div" color={S.yellow} style={{ left: -70, top: -50, width: 230, height: 230, borderRadius: '50%' }} />
          <div style={{ position: 'absolute', right: -36, top: 150 }}><GeoStar size={150} color="yellow" points={4} rot={12} /></div>
          <div style={{ position: 'relative', padding: '30px 26px 0' }}>
            <div style={{ fontFamily: SM, fontSize: 11, letterSpacing: '0.2em', color: S.paper }}>WHERE YOU’LL FIND ME</div>
            <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 56, lineHeight: 0.78, letterSpacing: '-0.04em', color: S.paper, textTransform: 'uppercase', marginTop: 12 }}>Summer<br/>fest ’26</div>
            <div style={{ fontFamily: SM, fontSize: 12, letterSpacing: '0.14em', color: S.paper, marginTop: 12 }}>FRI · JUN 19 · MY LINEUP</div>
          </div>
          <div style={{ position: 'absolute', left: 26, right: 26, bottom: 96 }}>
            {plan.map((a, i) => (
              <div key={a.id} style={{ fontFamily: SF, fontWeight: 800, fontSize: 26, lineHeight: 1.04, letterSpacing: '-0.02em', color: i % 2 ? S.yellow : S.paper, textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
            ))}
          </div>
          <div style={{ position: 'absolute', left: 26, bottom: 30 }}><HandleTag /></div>
        </StoryWrapper>
      </div>
    </APhone>
  );
}
