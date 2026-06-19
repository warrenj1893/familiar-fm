import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Grain from '../components/Grain';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 28px',
      background: 'var(--paper)',
      position: 'relative'
    }}>
      <div className="fade-in" style={{ textAlign: 'center', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="stamp" style={{ width: 88, height: 88, transform: 'rotate(-6deg)', marginBottom: 24 }}>
          <span className="hand" style={{ fontSize: 38, color: 'var(--navy)' }}>fm</span>
        </div>
        
        <div style={{ marginBottom: 16 }}>
          <Logo size={34} />
        </div>

        <h1 className="hand" style={{ fontSize: 40, color: 'var(--navy)', lineHeight: 0.92 }}>
          Know the lineup <span style={{ color: 'var(--blue)' }}>before you go.</span>
        </h1>

        <p style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--navy-2)', marginTop: 14, lineHeight: 1.5 }}>
          Connect your streaming, see who you know, build your weekend.
        </p>
      </div>

      <div className="slide-up" style={{ width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
        <button
          onClick={() => navigate('/authorize')}
          style={{
            border: '1.5px solid var(--navy)',
            background: 'var(--teal)',
            borderRadius: 999,
            minHeight: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            fontWeight: 800,
            fontSize: 16,
            color: 'var(--navy)',
            boxShadow: 'var(--shadow-cut)',
            cursor: 'pointer'
          }}
        >
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }}></div>
          Continue with Spotify
        </button>

        <button
          onClick={() => navigate('/authorize')}
          style={{
            border: '1.5px solid var(--navy)',
            background: 'var(--navy)',
            borderRadius: 999,
            minHeight: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            fontWeight: 800,
            fontSize: 16,
            color: 'var(--on-blue)',
            cursor: 'pointer'
          }}
        >
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }}></div>
          Continue with Apple Music
        </button>
      </div>

      <div style={{ marginTop: 24, fontFamily: "'DM Mono', monospace", fontSize: 10.5, color: 'var(--slate)', textAlign: 'center' }}>
        We never post without your permission.
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 24, display: 'flex', gap: 16 }}>
        <a href="#" style={{ fontFamily: "'DM Mono', monospace", fontSize: 9.5, color: 'var(--blue)', textDecoration: 'underline' }}>Terms</a>
        <a href="#" style={{ fontFamily: "'DM Mono', monospace", fontSize: 9.5, color: 'var(--blue)', textDecoration: 'underline' }}>Privacy</a>
      </div>

      <Grain opacity={0.2} />
    </div>
  );
}
