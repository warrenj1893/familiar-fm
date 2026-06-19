import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as P, GeoStar, Ink, Grain } from '../components/poster-kit';
import { APhone, AvatarStack, Btn } from '../components/app-kit';
import { FEST } from '../data/fest';

export default function ForYou() {
  const navigate = useNavigate();
  const PF = "'Bricolage Grotesque', sans-serif";
  const PM = "'DM Mono', monospace";
  const also = FEST.friendsWhoKnow('Amyl and The Sniffers');

  return (
    <APhone statusInk={P.paper}>
      <div style={{ flex: 1, minHeight: 0, position: 'relative', overflow: 'hidden', background: P.blue, display: 'flex', flexDirection: 'column' }}>
        <Ink as="div" color={P.yellow} style={{ left: -80, top: 70, width: 340, height: 340, borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: -40, bottom: 130 }}><GeoStar size={200} color="yellow" points={4} rot={10} /></div>
        <div style={{ flex: 'none', display: 'flex', justifyContent: 'space-between', padding: '8px 22px', position: 'relative', zIndex: 2 }}>
          <span onClick={() => navigate(-1)} style={{ fontFamily: PM, fontSize: 18, color: P.paper, cursor: 'pointer' }}>✕</span>
          <span style={{ fontFamily: PM, fontSize: 11, letterSpacing: '0.22em', color: P.paper }}>FOR YOU</span>
          <span style={{ width: 18 }} />
        </div>
        <div style={{ flex: 1, position: 'relative', zIndex: 2, padding: '0 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: PM, fontSize: 11, letterSpacing: '0.14em', color: P.paper }}>BECAUSE YOU CAN’T STOP PLAYING MUSE</div>
          <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 70, lineHeight: 0.8, letterSpacing: '-0.04em', color: P.paper, marginTop: 14, textTransform: 'uppercase', mixBlendMode: 'multiply' }}>Amyl &<br/>The<br/>Sniffers</div>
          <div style={{ fontFamily: PF, fontWeight: 600, fontSize: 15, color: P.paper, marginTop: 16, lineHeight: 1.4, maxWidth: 280 }}>Nothing in your library hits like Muse live — this is that catharsis in a 300-cap room.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
            <AvatarStack people={also} size={22} ring={P.blue} />
            <span style={{ fontFamily: PM, fontSize: 10.5, color: P.paper }}>Lia knows them too</span>
          </div>
          <div style={{ marginTop: 22, maxWidth: 300 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: PM, fontSize: 10, letterSpacing: '0.1em', color: P.paper, whiteSpace: 'nowrap' }}>TASTE MATCH</span>
              <span style={{ fontFamily: PF, fontWeight: 800, fontSize: 42, color: P.paper, lineHeight: 0.8 }}>94%</span>
            </div>
            <div style={{ height: 12, border: `2px solid ${P.paper}`, marginTop: 7 }}><div style={{ height: '100%', width: '94%', background: P.yellow }}></div></div>
          </div>
        </div>
        <div style={{ flex: 'none', padding: '0 24px 22px', position: 'relative', zIndex: 2, display: 'flex', gap: 10 }}>
          <Btn kind="ghost" dark style={{ width: 54, padding: 0 }}>▶</Btn>
          <Btn kind="yellow" style={{ flex: 1 }}>+ Add to lineup</Btn>
        </div>
        <Grain opacity={0.2} />
      </div>
    </APhone>
  );
}
