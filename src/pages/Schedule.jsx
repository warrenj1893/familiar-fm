import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as P, GeoStar } from '../components/poster-kit';
import { APhone, Avatar, AvatarStack, HubTab, ScreenHead, TIER } from '../components/app-kit';
import { FEST } from '../data/fest';

export default function Schedule() {
  const navigate = useNavigate();
  const PF = "'Bricolage Grotesque', sans-serif";
  const PM = "'DM Mono', monospace";
  const day = ['flipturn', 'Echo & The Bunnymen', 'Third Eye Blind', 'Don Toliver', 'David Lee Roth'];
  const sets = day.map((n) => FEST.artists.find((a) => a.name === n)).filter(Boolean).sort((a, b) => a.start - b.start);
  const clash = (i) => i < sets.length - 1 && sets[i + 1].start < sets[i].start + sets[i].len;

  return (
    <APhone>
      <ScreenHead onBack={() => navigate(-1)} kicker={'MY SCHEDULE · ' + FEST.dayLabel} title="Friday" right={<Avatar f={FEST.user} size={30} />} />
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '0 22px' }}>
        {sets.map((a, i) => {
          const going = FEST.goingWith(a.name);
          const isClash = clash(i);
          return (
            <div key={a.id} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: `1.5px solid rgba(10,83,240,0.14)` }}>
              <div style={{ width: 58, flex: 'none' }}>
                <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 17, color: P.blue, lineHeight: 0.95, mixBlendMode: 'multiply' }}>{a.time.replace(' PM', '').replace(' ', '')}</div>
                <div style={{ fontFamily: PM, fontSize: 8.5, color: 'rgba(10,83,240,0.6)', marginTop: 3 }}>PM</div>
              </div>
              <div style={{ flex: 1, minWidth: 0, borderLeft: `3px solid ${TIER[a.tier].ink}`, paddingLeft: 12 }}>
                <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 19, color: TIER[a.tier].ink, lineHeight: 0.95, letterSpacing: '-0.02em', mixBlendMode: a.tier === 'know' ? 'multiply' : 'normal', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
                <div style={{ fontFamily: PM, fontSize: 9.5, color: 'rgba(10,83,240,0.7)', marginTop: 4 }}>{a.stageName}</div>
                {isClash && <div style={{ display: 'inline-block', fontFamily: PM, fontSize: 8.5, letterSpacing: '0.06em', color: P.paper, background: P.blue, padding: '2px 7px', marginTop: 7, mixBlendMode: 'multiply' }}>⚠ CLASHES WITH NEXT</div>}
                {going.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 9 }}>
                    <AvatarStack people={going} size={22} max={4} />
                    <span style={{ fontFamily: PM, fontSize: 9.5, color: P.green }}>going with {going.map((g) => g.name.split(' ')[0]).join(', ')}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 14, padding: '12px 14px', border: `2px dashed ${P.blue}` }}>
          <GeoStar size={30} color="blue" points={4} />
          <div style={{ flex: 1 }}><div style={{ fontFamily: PF, fontWeight: 800, fontSize: 14, color: P.blue, mixBlendMode: 'multiply' }}>Drop a meetup pin</div><div style={{ fontFamily: PM, fontSize: 9, color: 'rgba(10,83,240,0.65)', marginTop: 2 }}>Pick a spot for the crew between sets</div></div>
          <span style={{ fontFamily: PM, fontSize: 18, color: P.blue }}>+</span>
        </div>
      </div>
      <HubTab active="plan" badge="3" navigate={navigate} />
    </APhone>
  );
}
