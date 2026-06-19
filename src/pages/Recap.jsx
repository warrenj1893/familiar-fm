import React, { useMemo } from 'react';
import { TopNav } from '../components/Nav';
import BottomNav from '../components/Nav';
import Grain from '../components/Grain';
import Cover from '../components/Cover';
import { ARTISTS, FEST, FRIENDS, computeRecap } from '../data/fest';

export default function Recap() {
  const R = useMemo(() => computeRecap(ARTISTS), []);

  return (
    <div className="page" style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      <TopNav active="recap" />

      <div style={{ padding: '24px 28px' }}>
        <h1 className="hand" style={{ fontSize: 46, color: 'var(--navy)', lineHeight: 0.9 }}>
          Your <span style={{ color: 'var(--red)' }}>Recap.</span>
        </h1>
        <p style={{ fontSize: 14, color: 'var(--navy-2)', marginTop: 8, fontWeight: 500 }}>
          Here's how {FEST.name} stacks up against your library.
        </p>
      </div>

      {/* Stats Board */}
      <div style={{ padding: '0 28px' }}>
        <div style={{ background: 'var(--scrap)', border: '1.5px solid var(--navy)', boxShadow: 'var(--shadow-hard)', padding: 24 }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 24 }}>
            <div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--slate)', marginBottom: 8 }}>PERSONA</div>
              <div className="hand" style={{ fontSize: 32, color: 'var(--blue)', lineHeight: 1 }}>{R.persona}</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--navy)', marginTop: 6, lineHeight: 1.4 }}>{R.personaBlurb}</div>
            </div>
            <div style={{ background: 'var(--line)' }}></div>
            <div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--slate)', marginBottom: 8 }}>#1 MATCH</div>
              <div className="disp" style={{ fontSize: 24, color: 'var(--red)', lineHeight: 0.95 }}>{R.topArtist?.name}</div>
              <div className="mono" style={{ fontSize: 10.5, marginTop: 8 }}>{R.topArtistStat.hours} hours</div>
            </div>
          </div>

          <hr className="hr" style={{ margin: '24px 0' }} />

          <div>
            <div className="mono" style={{ fontSize: 10.5, color: 'var(--slate)', marginBottom: 16 }}>GENRES</div>
            {R.topGenres.map((g, idx) => (
              <div key={g.g} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                  <span>0{idx+1} {g.g}</span>
                  <span style={{ color: 'var(--slate)' }}>{g.pct}%</span>
                </div>
                <div style={{ height: 6, border: '1px solid var(--line)', background: 'var(--ink-2)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: `${g.pct}%`, background: idx===0 ? 'var(--blue)' : 'var(--slate)' }}></div>
                </div>
              </div>
            ))}
          </div>

        </div>

        <button className="pill pill-lime" style={{ width: '100%', marginTop: 24 }}>Share your stats</button>
      </div>

      {/* Friends */}
      <div style={{ padding: '32px 28px', marginTop: 12 }}>
        <div className="label" style={{ color: 'var(--navy)', marginBottom: 16 }}>FRIENDS GOING</div>
        
        <div className="mrail" style={{ margin: '0 -28px', padding: '0 28px', gap: 14 }}>
          {FRIENDS.map(f => (
            <div key={f.handle} style={{ width: 140, flexShrink: 0, border: '1.5px solid var(--navy)', background: 'var(--scrap)', padding: '16px 14px', textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: f.color, border: '1.5px solid var(--navy)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="hand" style={{ fontSize: 24, color: '#fff' }}>{f.name[0]}</span>
              </div>
              <div className="disp" style={{ fontSize: 15 }}>{f.name}</div>
              <div className="mono" style={{ fontSize: 9.5, color: 'var(--slate)', marginTop: 4 }}>{f.handle}</div>
              <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, color: 'var(--blue)' }}>
                {f.knows.length} matches
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Poster */}
      <div style={{ padding: '0 28px 40px' }}>
        <div className="label" style={{ color: 'var(--navy)', marginBottom: 16 }}>YOUR POSTER</div>
        <div style={{ border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: 'var(--paper)', position: 'relative' }}>
          <Cover name="Alex" height={320} style={{ borderBottom: 'none' }}>
            <div style={{ position: 'absolute', inset: 20, border: '1.5px solid var(--on-blue)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 20 }}>
              <div className="disp" style={{ fontSize: 44, color: 'var(--on-blue)', lineHeight: 0.9 }}>{FEST.name}</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-blue)', opacity: 0.8, marginTop: 8, letterSpacing: '0.1em' }}>ALEX'S LINEUP</div>
              <div style={{ flex: 1 }}></div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                {R.dontMiss.slice(0, 10).map((a, i) => (
                  <span key={a.id} className="disp" style={{ fontSize: a.scale === 1 ? 22 : 16, color: 'var(--on-blue)', opacity: a.scale === 1 ? 1 : 0.85 }}>
                    {a.name}
                  </span>
                ))}
              </div>
            </div>
          </Cover>
        </div>
      </div>

      <Grain />
      <BottomNav active="recap" />
    </div>
  );
}
