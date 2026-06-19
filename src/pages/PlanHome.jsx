import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as O, FacetBall } from '../components/poster-kit';
import { APhone, Avatar, AvatarStack, HubTab } from '../components/app-kit';
import { FEST } from '../data/fest';
import { Mark } from './Login';

export default function PlanHome() {
  const navigate = useNavigate();
  const OF = "'Bricolage Grotesque', sans-serif";
  const OM = "'DM Mono', monospace";
  
  const F = FEST;
  const going = F.friends.filter((f) => f.going);
  const pillars = [
    ['KNOW', 'Lineup', '41 acts you know', O.blue, '/lineup'],
    ['RECOMMEND', 'For You', '11 you’d love', O.green, '/foryou'],
    ['BUILD', 'Schedule', 'Fri · 5 sets, 1 clash', O.blue, '/schedule'],
    ['RELIVE', 'Recap', 'Share your weekend', O.green, '/recap'],
  ];

  return (
    <APhone>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {/* header band */}
        <div style={{ flex: 'none', position: 'relative', overflow: 'hidden', background: O.blue, padding: '14px 22px 22px' }}>
          <div style={{ position: 'absolute', right: -56, top: -56 }}><FacetBall size={150} bars={3} /></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
            <Mark size={22} color={O.paper} dark />
            <Avatar f={F.user} size={30} ring={O.paper} />
          </div>
          <div style={{ fontFamily: OM, fontSize: 11, letterSpacing: '0.2em', color: O.paper, marginTop: 20, position: 'relative' }}>YOU’RE GOING TO</div>
          <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 50, lineHeight: 0.82, letterSpacing: '-0.04em', color: O.paper, textTransform: 'uppercase', marginTop: 8, position: 'relative', maxWidth: 230 }}>Summer<br/>fest ’26</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16, position: 'relative' }}>
            <span style={{ fontFamily: OM, fontSize: 12, color: O.paper, letterSpacing: '0.1em' }}>{F.dayLabel}</span>
            <AvatarStack people={going} size={26} ring={O.paper} />
            <span style={{ fontFamily: OM, fontSize: 11, color: O.paper }}>going</span>
          </div>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {/* pillar grid */}
          <div style={{ padding: '16px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {pillars.map(([k, t, sub, c, route]) => (
              <div key={t} onClick={() => navigate(route)} style={{ border: `2px solid ${O.blue}`, padding: '14px 14px 16px', position: 'relative', minHeight: 116, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: O.paper, cursor: 'pointer' }}>
                <div style={{ fontFamily: OM, fontSize: 9.5, letterSpacing: '0.14em', color: c, mixBlendMode: c === O.blue ? 'multiply' : 'normal' }}>{k}</div>
                <div>
                  <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 26, lineHeight: 0.9, letterSpacing: '-0.02em', color: O.blue, mixBlendMode: 'multiply' }}>{t}</div>
                  <div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.7)', marginTop: 6 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
          {/* pre-fest mix strip */}
          <div onClick={() => navigate('/playlist')} style={{ margin: '0 22px 22px', background: O.paper, border: `2px solid ${O.blue}`, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ position: 'absolute', right: -28, top: -28 }}><FacetBall size={84} bars={3} /></div>
            <div style={{ flex: 1, position: 'relative' }}>
              <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 19, color: O.blue, mixBlendMode: 'multiply' }}>Pre-Fest Mix</div>
              <div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.7)', marginTop: 3 }}>Know before you go · 32 tracks</div>
            </div>
            <span style={{ width: 40, height: 40, flex: 'none', background: O.blue, color: O.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: OF, fontWeight: 800, fontSize: 16, position: 'relative', mixBlendMode: 'multiply' }}>▶</span>
          </div>
        </div>
      </div>
      <HubTab active="plan" badge="3" navigate={navigate} />
    </APhone>
  );
}
