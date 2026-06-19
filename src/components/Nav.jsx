import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export function TopNav() {
  return (
    <header className="top-nav">
      <NavLink to="/discover" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo size={20} />
      </NavLink>
      <div style={{ width: '1px', height: '22px', background: 'var(--line)', margin: '0 20px' }}></div>
      
      <div className="nav-tabs">
        <NavLink to="/lineup" className={({isActive}) => isActive ? "nav-tab active" : "nav-tab"}>Lineup</NavLink>
        <NavLink to="/schedule" className={({isActive}) => isActive ? "nav-tab active" : "nav-tab"}>Schedule</NavLink>
        <NavLink to="/playlist" className={({isActive}) => isActive ? "nav-tab active" : "nav-tab"}>Mix</NavLink>
        <NavLink to="/recap" className={({isActive}) => isActive ? "nav-tab active" : "nav-tab"}>Recap</NavLink>
      </div>

      <div style={{ marginLeft: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <NavLink to="/notifs" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: '1px solid var(--line)', borderRadius: 999, background: 'var(--white)', color: 'var(--ink)', textDecoration: 'none' }}>
            <span style={{ fontSize: 18, lineHeight: 1 }}>◷</span>
            <span style={{ position: 'absolute', top: -2, right: -2, width: 10, height: 10, background: 'var(--pink)', borderRadius: 999, border: '1.5px solid var(--white)' }}></span>
          </NavLink>
          
          <NavLink to="/profile" style={{
            width: '34px',
            height: '34px',
            background: 'var(--blue)',
            borderRadius: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '15px',
            fontWeight: 800,
            color: 'var(--white)',
            textDecoration: 'none'
          }}>A</NavLink>
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

      <NavLink to="/feed" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: 16 }}>
          <div style={{ width: '4px', height: '8px', background: 'currentColor' }}></div>
          <div style={{ width: '4px', height: '16px', background: 'currentColor' }}></div>
          <div style={{ width: '4px', height: '12px', background: 'currentColor' }}></div>
        </div>
        <span className="nav-label">Feed</span>
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
