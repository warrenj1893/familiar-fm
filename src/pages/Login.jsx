import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as O, Grain, Ink, GeoStar } from '../components/poster-kit';
import { APhone, Btn } from '../components/app-kit';

export function Mark({ size = 26, color, dark }) {
  const OF = "'Bricolage Grotesque', sans-serif";
  return <span style={{ fontFamily: OF, fontWeight: 800, fontSize: size, letterSpacing: '-0.03em', color: color || O.blue }}>familiar<span style={{ color: dark ? O.yellow : O.blue, mixBlendMode: dark ? 'normal' : 'normal' }}>.fm</span></span>;
}

export default function Login() {
  const navigate = useNavigate();
  const OF = "'Bricolage Grotesque', sans-serif";

  return (
    <APhone statusInk={O.paper}>
      <div style={{ flex: 1, minHeight: 0, position: 'relative', overflow: 'hidden', background: O.blue, display: 'flex', flexDirection: 'column' }}>
        <Ink as="div" color={O.yellow} style={{ left: -90, top: -60, width: 320, height: 320, borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: -44, bottom: 168 }}><GeoStar size={150} color="yellow" points={4} rot={12} /></div>

        <div style={{ position: 'relative', zIndex: 2, padding: '60px 30px 0' }}>
          <Mark size={30} color={O.paper} dark />
        </div>
        <div style={{ flex: 1, position: 'relative', zIndex: 2, padding: '0 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 64, lineHeight: 0.8, letterSpacing: '-0.04em', color: O.paper, textTransform: 'uppercase', mixBlendMode: 'multiply' }}>Know<br/>the<br/>lineup</div>
          <div style={{ fontFamily: OF, fontWeight: 600, fontSize: 17, color: O.paper, marginTop: 20, lineHeight: 1.4, maxWidth: 280 }}>See every festival through your taste — and the people you’re going with.</div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px 30px', display: 'flex', flexDirection: 'column', gap: 11 }}>
          <Btn kind="yellow" style={{ width: '100%' }} onClick={() => navigate('/authorize')}>▶  Continue with Spotify</Btn>
          <Btn kind="ghost" dark style={{ width: '100%' }} onClick={() => navigate('/authorize')}>  Continue with Apple Music</Btn>
        </div>
        <Grain opacity={0.2} />
      </div>
    </APhone>
  );
}
