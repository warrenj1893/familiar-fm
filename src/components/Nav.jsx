import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export function TopNav() {
  return (
    <header className="top-nav">
      <NavLink to="/discover" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo size={23} />
      </NavLink>
      <div style={{ width: '1.5px', height: '22px', background: 'var(--line)', margin: '0 20px' }}></div>
      
      <div className="nav-tabs">
        <NavLink to="/lineup" className={({isActive}) => isActive ? "nav-tab active" : "nav-tab"}>Lineup</NavLink>
        <NavLink to="/schedule" className={({isActive}) => isActive ? "nav-tab active" : "nav-tab"}>Schedule</NavLink>
        <NavLink to="/playlist" className={({isActive}) => isActive ? "nav-tab active" : "nav-tab"}>Mix</NavLink>
        <NavLink to="/recap" className={({isActive}) => isActive ? "nav-tab active" : "nav-tab"}>Recap</NavLink>
      </div>

      <div style={{ marginLeft: 'auto' }}>
        <div style={{
          border: '1.5px solid var(--navy)',
          background: 'var(--scrap)',
          borderRadius: 999,
          padding: '5px 5px 5px 13px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, lineHeight: 1 }}>@alexlistens</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: 999, background: 'var(--blue)' }}></div>
              Spotify synced
            </div>
          </div>
          <div style={{
            width: '34px',
            height: '34px',
            background: 'var(--blue)',
            border: '1.5px solid var(--navy)',
            borderRadius: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: '17px',
            fontWeight: 800,
            color: 'var(--on-blue)'
          }}>A</div>
        </div>
      </div>
    </header>
  );
}

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/lineup" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
          <div style={{ width: '16px', height: '2px', background: 'currentColor' }}></div>
          <div style={{ width: '12px', height: '2px', background: 'currentColor' }}></div>
          <div style={{ width: '9px', height: '2px', background: 'currentColor' }}></div>
        </div>
        <span className="nav-label">Lineup</span>
      </NavLink>

      <NavLink to="/schedule" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5px' }}>
          <div style={{ width: '6.5px', height: '6.5px', background: 'currentColor' }}></div>
          <div style={{ width: '6.5px', height: '6.5px', background: 'currentColor' }}></div>
          <div style={{ width: '6.5px', height: '6.5px', background: 'currentColor' }}></div>
          <div style={{ width: '6.5px', height: '6.5px', background: 'currentColor' }}></div>
        </div>
        <span className="nav-label">Schedule</span>
      </NavLink>

      <NavLink to="/playlist" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <div style={{ width: '16px', height: '16px', border: '2px solid currentColor', borderRadius: '50%' }}></div>
        <span className="nav-label">Mix</span>
      </NavLink>

      <NavLink to="/recap" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <div style={{ width: '13px', height: '13px', border: '2px solid currentColor', transform: 'rotate(45deg)' }}></div>
        <span className="nav-label">Recap</span>
      </NavLink>
    </nav>
  );
}
