import React, { useState } from 'react';
import { TopNav } from '../components/Nav';
import BottomNav from '../components/Nav';
import Grain from '../components/Grain';
import { ARTISTS, FEST } from '../data/fest';
import { useSchedule } from '../context/ScheduleContext';

const COVERS = [
  { id: '1', name: 'The Starter', desc: 'Your #1 acts.', bg: 'var(--blue)' },
  { id: '2', name: 'Deep Cuts', desc: 'The bottom of the poster.', bg: 'var(--red)' },
  { id: '3', name: 'Pre-Game', desc: 'For the car ride.', bg: 'var(--teal)' },
];

export default function Playlist() {
  const { isPicked } = useSchedule();
  const [activeCover, setActiveCover] = useState('1');

  const picked = ARTISTS.filter(a => isPicked(a.id));
  
  return (
    <div className="page" style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      <TopNav active="playlist" />
      
      <div style={{ padding: '24px 28px' }}>
        <h1 className="hand" style={{ fontSize: 42, color: 'var(--navy)', lineHeight: 0.9 }}>
          Your <span style={{ color: 'var(--teal-ink)' }}>Mix.</span>
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--navy-2)', marginTop: 8, maxWidth: 280, fontWeight: 500 }}>
          Export a playlist based on your schedule to listen before the fest.
        </p>
      </div>

      <div className="mrail" style={{ padding: '0 28px', margin: '10px -28px 30px' }}>
        {COVERS.map(c => {
          const on = activeCover === c.id;
          return (
            <div 
              key={c.id} 
              onClick={() => setActiveCover(c.id)}
              className="scrap"
              style={{
                width: 160, flexShrink: 0, padding: 14, 
                border: on ? '2px solid var(--blue)' : '1.5px solid var(--navy)',
                boxShadow: on ? 'var(--shadow-cut)' : 'none',
                cursor: 'pointer', transition: 'all 0.1s'
              }}
            >
              <div style={{ width: '100%', aspectRatio: '1/1', background: c.bg, border: '1.5px solid var(--navy)', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(17,26,84,0.3) 1.5px, transparent 2px)', backgroundSize: '7px 7px', pointerEvents: 'none' }}></div>
                <div className="hand" style={{ position: 'absolute', bottom: 8, left: 8, right: 8, fontSize: 20, color: 'var(--on-blue)', lineHeight: 0.9 }}>
                  {FEST.name} {FEST.year}
                </div>
              </div>
              <div style={{ marginTop: 12 }}>
                <div className="disp" style={{ fontSize: 16 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--slate)', marginTop: 4 }}>{c.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ padding: '0 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
          <div className="label" style={{ color: 'var(--navy)' }}>{picked.length * 3} TRACKS · 4H 12M</div>
          <button className="pill pill-lime" style={{ padding: '6px 14px', fontSize: 11 }}>Save to Spotify</button>
        </div>

        <div>
          {picked.slice(0, 8).map((a, i) => (
            <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--line-2)' }}>
              <div className="mono" style={{ fontSize: 12, color: 'var(--slate)', width: 20 }}>{i + 1}</div>
              <div style={{ width: 44, height: 44, background: 'var(--ink-2)', border: '1px solid var(--line)' }}></div>
              <div style={{ flex: 1 }}>
                <div className="disp" style={{ fontSize: 16 }}>{a.name}</div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--slate)', marginTop: 4 }}>Top track</div>
              </div>
              <div style={{ fontSize: 16, color: 'var(--slate)' }}>⋮</div>
            </div>
          ))}
        </div>
        
        {picked.length > 8 && (
          <div style={{ textAlign: 'center', padding: '24px 0', color: 'var(--slate)', fontSize: 13, fontWeight: 500 }}>
            + {picked.length * 3 - 8} more tracks
          </div>
        )}
      </div>

      <Grain opacity={0.12} />
      <BottomNav active="playlist" />
    </div>
  );
}
