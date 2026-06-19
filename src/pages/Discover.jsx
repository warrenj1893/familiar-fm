import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Grain from '../components/Grain';
import Cover from '../components/Cover';
import { FESTIVALS, coverFor } from '../data/fest';

export default function Discover() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredFests = FESTIVALS.filter(f => 
    f.name.toLowerCase().includes(search.toLowerCase()) || 
    f.city.toLowerCase().includes(search.toLowerCase())
  );
  const droppedFests = filteredFests.filter(f => f.dropped);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)', padding: '20px 0' }}>
      <header style={{ padding: '16px 22px 0' }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            width: 30, height: 30, borderRadius: 999, border: '1.5px solid var(--navy)',
            background: 'var(--scrap)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: 14, fontWeight: 700, color: 'var(--navy)'
          }}
        >✕</button>
        <div style={{ marginTop: 8 }}><Logo size={20} /></div>
        <h1 className="hand" style={{ fontSize: 44, color: 'var(--navy)', marginTop: 12, lineHeight: 0.92 }}>
          Pick your <span style={{ color: 'var(--blue)' }}>fest.</span>
        </h1>
        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--slate)', marginTop: 8 }}>
          We'll show you who you already know.
        </div>
      </header>

      <div style={{ margin: '20px 22px 0' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, border: '1.5px solid var(--navy)',
          background: 'var(--scrap)', borderRadius: 999, padding: '11px 16px'
        }}>
          <div style={{ width: 16, height: 16, position: 'relative' }}>
            <div style={{ width: 12, height: 12, border: '2px solid var(--slate)', borderRadius: '50%' }}></div>
            <div style={{ width: 6, height: 2, background: 'var(--slate)', position: 'absolute', bottom: 1, right: -2, transform: 'rotate(45deg)' }}></div>
          </div>
          <input 
            type="text" 
            placeholder="Search festivals..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ fontSize: 14, color: 'var(--slate)', border: 'none', outline: 'none', background: 'transparent', flex: 1 }}
          />
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <div style={{ padding: '0 22px', marginBottom: 12 }}>
          <div className="label" style={{ color: 'var(--red)' }}>JUST DROPPED</div>
        </div>
        <div className="mrail" style={{ padding: '0 22px', gap: 14 }}>
          {droppedFests.map(fest => (
            <div key={fest.id} style={{ width: 248, flex: 'none', background: 'var(--scrap)', border: '1.5px solid var(--navy)', boxShadow: 'var(--shadow-cut)', overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                <Cover name={fest.name} height={132} />
                <div className="sticker" style={{ position: 'absolute', top: 10, left: 10, transform: 'rotate(-3deg)' }}>
                  ★ JUST DROPPED
                </div>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <div className="disp" style={{ fontSize: 17 }}>{fest.name}</div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--slate)', marginTop: 4 }}>{fest.city} · {fest.dates}</div>
                <div style={{ marginTop: 8 }}>
                  <span className="disp" style={{ fontSize: 22, color: 'var(--blue)' }}>{fest.stats.know}</span>
                  <span style={{ fontSize: 11, color: 'var(--slate)', marginLeft: 4 }}>acts you know</span>
                </div>
                <div className="fam-bar" style={{ height: 8, marginTop: 8 }}>
                  <div className="seg-know" style={{ flex: fest.stats.know }}></div>
                  <div className="seg-heard" style={{ flex: fest.stats.heard }}></div>
                  <div className="seg-new" style={{ flex: fest.stats.total - fest.stats.know - fest.stats.heard }}></div>
                </div>
                <button 
                  onClick={() => navigate('/lineup')}
                  className="pill pill-lime" 
                  style={{ marginTop: 12, width: '100%', fontSize: 12 }}
                >
                  See my match →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <div style={{ padding: '0 22px', marginBottom: 12 }}>
          <div className="label" style={{ color: 'var(--slate)' }}>ALL FESTIVALS</div>
        </div>
        <div style={{ padding: '0 22px' }}>
          {filteredFests.map(fest => {
            const pal = coverFor(fest.name);
            return (
              <div 
                key={fest.id} 
                onClick={() => navigate('/lineup')}
                style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--line-2)', cursor: 'pointer' }}
              >
                <div style={{
                  width: 50, height: 50, background: pal.bg, border: '1.5px solid var(--navy)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, color: pal.fg, fontWeight: 800
                }}>
                  {fest.name[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="disp" style={{ fontSize: 15.5 }}>{fest.name}</div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--slate)', marginTop: 2 }}>{fest.city} · {fest.dates}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="disp" style={{ fontSize: 19, color: 'var(--blue)' }}>{fest.stats.know}</div>
                  <div className="mono" style={{ fontSize: 8, color: 'var(--slate)' }}>YOU KNOW</div>
                </div>
                <div>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Grain opacity={0.18} />
    </div>
  );
}
