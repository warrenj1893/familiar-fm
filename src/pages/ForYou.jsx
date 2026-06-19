import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ARTISTS } from '../data/fest';

export default function ForYou() {
  const navigate = useNavigate();

  const newArtists = ARTISTS.filter(a => a.tier === 'new');
  const knowArtists = ARTISTS.filter(a => a.tier === 'know');
  
  const topNew = [...newArtists].sort((a,b) => a.name.localeCompare(b.name))[0] || newArtists[0];
  const anchor = [...knowArtists].sort((a,b) => b.plays - a.plays)[0] || knowArtists[0];
  
  const recs = newArtists.slice(1, 4);
  const wildcard = newArtists[4] || newArtists[0];

  return (
    <div style={{ height: '100vh', overflowY: 'auto', scrollSnapType: 'y proximity', background: 'var(--navy)', color: 'var(--on-blue)' }}>
      
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
        <button 
          onClick={() => navigate('/lineup')}
          style={{ width: 30, height: 30, borderRadius: 999, border: '1.5px solid rgba(242,236,221,0.3)', background: 'transparent', color: 'var(--on-blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >✕</button>
        <div className="label" style={{ color: 'var(--on-blue)', opacity: 0.7 }}>For You</div>
        <button style={{ width: 30, height: 30, borderRadius: 999, border: '1.5px solid rgba(242,236,221,0.3)', background: 'transparent', color: 'var(--on-blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>↗</button>
      </div>

      {/* Beat 0 */}
      <div style={{ minHeight: '100vh', scrollSnapAlign: 'start', background: 'var(--blue)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 28px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(#0E1C9E 1.5px, transparent 2px)', backgroundSize: '9px 9px', opacity: 0.28, pointerEvents: 'none' }}></div>
        <h1 className="hand" style={{ fontSize: 62, color: 'var(--on-blue)', position: 'relative', zIndex: 1 }}>Made for you.</h1>
        <div className="label" style={{ fontSize: 11, color: 'var(--on-blue)', opacity: 0.6, marginTop: 20, position: 'relative', zIndex: 1 }}>SCROLL TO MEET THEM ↓</div>
      </div>

      {/* Beat 1 */}
      <div style={{ minHeight: '100vh', scrollSnapAlign: 'start', background: 'var(--paper)', color: 'var(--navy)', padding: '80px 28px 40px' }}>
        <div className="label" style={{ color: 'var(--red)', marginBottom: 6 }}>YOUR #1 DISCOVERY</div>
        <div className="mono" style={{ fontSize: 11, color: 'var(--slate)', marginBottom: 20 }}>BECAUSE YOU CAN'T STOP PLAYING {anchor?.name.toUpperCase()}</div>
        
        <h2 className="hand" style={{ fontSize: 56, color: 'var(--red)', lineHeight: 0.88 }}>{topNew?.name}</h2>
        <div className="tag" style={{ marginTop: 14 }}>{topNew?.genre}</div>
        
        <div style={{ marginTop: 24 }}>
          <div className="mono" style={{ fontSize: 9.5 }}>Taste match</div>
          <div className="hand" style={{ fontSize: 22, color: 'var(--red)' }}>78%</div>
          <div style={{ height: 10, border: '1.5px solid var(--navy)', marginTop: 6, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '78%', background: 'var(--red)' }}></div>
          </div>
        </div>
        
        <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
          <button style={{ width: 44, height: 44, borderRadius: 999, border: '1.5px solid var(--navy)', background: 'var(--scrap)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>▶</button>
          <button className="pill pill-lime" onClick={() => navigate('/lineup')}>+ Add to lineup</button>
        </div>
      </div>

      {/* Beat 2 */}
      <div style={{ minHeight: '100vh', scrollSnapAlign: 'start', background: 'var(--teal)', color: 'var(--navy)', padding: '80px 28px 40px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(#0A7468 1.5px, transparent 2px)', backgroundSize: '9px 9px', opacity: 0.2, pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="hand" style={{ fontSize: 38, marginBottom: 6 }}>Because you love...</h2>
          <div className="mono" style={{ fontSize: 11, marginBottom: 24, opacity: 0.7 }}>AND THEY'RE PLAYING THIS WEEKEND</div>
          
          {recs.map(rec => (
            <div key={rec.id} style={{ background: 'var(--scrap)', border: '1.5px solid var(--navy)', boxShadow: 'var(--shadow-cut)', padding: 18, marginBottom: 14 }}>
              <div className="disp" style={{ fontSize: 26, color: 'var(--teal-ink)' }}>{rec.name}</div>
              <div style={{ fontSize: 13, marginTop: 6, color: 'var(--navy-2)' }}>Similar to {anchor?.name} and {knowArtists[1]?.name}</div>
              <div className="hand" style={{ fontSize: 18, color: 'var(--teal)', marginTop: 8 }}>85% match</div>
            </div>
          ))}
        </div>
      </div>

      {/* Beat 3 */}
      <div style={{ minHeight: '100vh', scrollSnapAlign: 'start', background: 'var(--paper)', color: 'var(--navy)', padding: '80px 28px 40px' }}>
        <h2 className="hand" style={{ fontSize: 42 }}>You live in Indie.</h2>
        <div className="mono" style={{ fontSize: 11, color: 'var(--slate)', marginTop: 8, marginBottom: 24 }}>43% of your minutes</div>
        
        <div>
          {newArtists.slice(4, 8).map((a, idx) => (
            <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--line-2)' }}>
              <div className="mono" style={{ fontSize: 12, color: 'var(--slate)' }}>0{idx+1}</div>
              <div style={{ flex: 1 }}>
                <div className="disp" style={{ fontSize: 20 }}>{a.name}</div>
                <div className="tag" style={{ marginTop: 4 }}>{a.genre}</div>
              </div>
              <button style={{ width: 40, height: 40, borderRadius: 999, border: '1.5px solid var(--navy)', background: 'var(--scrap)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
            </div>
          ))}
        </div>
      </div>

      {/* Beat 4 */}
      <div style={{ minHeight: '100vh', scrollSnapAlign: 'start', background: 'var(--butter)', color: 'var(--navy)', padding: '80px 28px 40px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(#C9981E 1.5px, transparent 2px)', backgroundSize: '9px 9px', opacity: 0.2, pointerEvents: 'none' }}></div>
        <div className="sticker" style={{ position: 'absolute', top: 80, right: 20, transform: 'rotate(-5deg)', background: 'var(--red)', color: 'var(--on-blue)' }}>One wildcard</div>
        
        <div style={{ position: 'relative', zIndex: 1, marginTop: 60 }}>
          <h2 className="hand" style={{ fontSize: 52 }}>{wildcard?.name}</h2>
          <div className="tag" style={{ marginTop: 12, background: 'var(--paper)' }}>{wildcard?.genre}</div>
          <p style={{ marginTop: 16, fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>A shot in the dark, but we think you might vibe.</p>
        </div>
      </div>

      {/* Beat 5 */}
      <div style={{ minHeight: '100vh', scrollSnapAlign: 'start', background: 'var(--navy)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 28px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(#2C3576 1.5px, transparent 2px)', backgroundSize: '9px 9px', opacity: 0.2, pointerEvents: 'none' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="hand" style={{ fontSize: 50, color: 'var(--on-blue)' }}>
            {newArtists.length} new acts. <span style={{ color: 'var(--butter)' }}>One tap.</span>
          </h2>
          
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <button className="pill pill-coral" style={{ width: '100%', minHeight: 52 }} onClick={() => navigate('/lineup')}>Add all to my lineup →</button>
            <button className="pill pill-ghost" style={{ width: '100%', borderColor: 'rgba(242,236,221,0.3)', color: 'var(--on-blue)' }}>Save as a Discover Mix</button>
          </div>
        </div>
      </div>

    </div>
  );
}
