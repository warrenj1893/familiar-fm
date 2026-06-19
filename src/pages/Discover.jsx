import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as O, Ink, GeoStar } from '../components/poster-kit';
import { APhone, Avatar, AvatarStack, HubTab, ScreenHead } from '../components/app-kit';
import { FEST } from '../data/fest';

export default function Discover() {
  const navigate = useNavigate();
  const OF = "'Bricolage Grotesque', sans-serif";
  const OM = "'DM Mono', monospace";
  const fests = [
    { n: 'Summerfest', loc: 'Milwaukee, WI', date: 'JUN 16 – JUL 4', match: 88, going: ['sam', 'jo', 'lia'], active: true },
    { n: 'Pitchfork', loc: 'Chicago, IL', date: 'JUL 18 – 20', match: 73, going: ['jo'] },
    { n: 'Riot Fest', loc: 'Chicago, IL', date: 'SEP 19 – 21', match: 64, going: [] },
  ];
  const dropped = [
    { n: 'Lollapalooza', sub: '92% of your top artists', match: 92 },
    { n: 'Outside Lands', sub: '67% match', match: 67 },
  ];
  const av = (ids) => ids.map((id) => FEST.friends.find((f) => f.id === id));
  return (
    <APhone>
      <ScreenHead kicker="FESTIVALS" title="Where to?" right={<Avatar f={FEST.user} size={30} />} />
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '0 22px' }}>
        <div style={{ background: O.blue, padding: '12px 14px 14px', position: 'relative', overflow: 'hidden', marginBottom: 18 }}>
          <Ink as="div" color={O.yellow} style={{ right: -30, top: -30, width: 110, height: 110, borderRadius: '50%' }} />
          <div style={{ fontFamily: OM, fontSize: 10, letterSpacing: '0.18em', color: O.paper, position: 'relative' }}>★ JUST DROPPED</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 10, position: 'relative' }}>
            {dropped.map((d) => (
              <div key={d.n} style={{ flex: 1, background: O.paper, padding: '10px 12px' }}>
                <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 16, lineHeight: 0.95, color: O.blue }}>{d.n}</div>
                <div style={{ fontFamily: OM, fontSize: 9, color: O.green, marginTop: 5 }}>{d.sub}</div>
              </div>
            ))}
          </div>
        </div>
        {fests.map((ft) => (
          <div key={ft.n} onClick={() => navigate('/lineup')} style={{ borderBottom: `1.5px solid rgba(10,83,240,0.16)`, padding: '14px 0', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: OF, fontWeight: 800, fontSize: 24, color: O.blue, lineHeight: 0.95, mixBlendMode: 'multiply' }}>{ft.n}</span>
                  {ft.active && <span style={{ fontFamily: OM, fontSize: 8.5, letterSpacing: '0.08em', color: O.paper, background: O.green, padding: '2px 6px' }}>GOING</span>}
                </div>
                <div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.7)', marginTop: 5 }}>{ft.loc} · {ft.date}</div>
                {ft.going.length > 0 && <div style={{ marginTop: 9 }}><AvatarStack people={av(ft.going)} size={24} /></div>}
              </div>
              <div style={{ textAlign: 'right', flex: 'none' }}>
                <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 30, lineHeight: 0.8, color: O.green }}>{ft.match}<span style={{ fontSize: 14 }}>%</span></div>
                <div style={{ fontFamily: OM, fontSize: 8.5, color: 'rgba(10,83,240,0.6)', marginTop: 3 }}>MATCH</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <HubTab active="plan" badge="3" navigate={navigate} />
    </APhone>
  );
}
