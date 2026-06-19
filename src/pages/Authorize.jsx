import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grain from '../components/Grain';

export default function Authorize() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--paper)' }}>
      <header style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', gap: 14 }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            width: 30, height: 30, borderRadius: 999, border: '1.5px solid var(--navy)',
            background: 'var(--scrap)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: 14, fontWeight: 700, color: 'var(--navy)'
          }}
        >✕</button>
        <div style={{ width: 28, height: 28, background: '#1DB954', borderRadius: 999, border: '1.5px solid var(--navy)' }}></div>
        <div style={{ fontSize: 17, fontWeight: 700 }}>Spotify</div>
      </header>

      <main style={{ flex: 1, padding: '24px 24px 120px' }}>
        <div className="label" style={{ color: 'var(--red)', marginBottom: 8 }}>AUTHORIZE ACCESS</div>
        <h1 className="hand" style={{ fontSize: 28, color: 'var(--navy)', marginBottom: 24 }}>
          Allow familiar.fm to connect
        </h1>

        <div style={{
          display: 'flex', gap: 12, alignItems: 'center', padding: 14,
          border: '1.5px solid var(--line)', borderRadius: 12, background: 'var(--scrap)', marginBottom: 28
        }}>
          <div style={{
            width: 34, height: 34, background: 'var(--teal)', border: '1.5px solid var(--navy)',
            borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, fontWeight: 800, color: 'var(--navy)'
          }}>A</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>@alexlistens</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--slate)' }}>alex@email.com</div>
          </div>
          <a href="#" style={{ fontSize: 12, color: 'var(--blue)' }}>Not you?</a>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div className="disp" style={{ fontSize: 15, marginBottom: 10 }}>VIEW YOUR ACCOUNT</div>
          <div style={{ display: 'flex', gap: 10, padding: '8px 0' }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2.5"><path d="M1 4L3.5 6.5L9 1"/></svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy-2)', lineHeight: 1.4 }}>Your name, username, and profile photo</div>
          </div>
          <div style={{ display: 'flex', gap: 10, padding: '8px 0' }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2.5"><path d="M1 4L3.5 6.5L9 1"/></svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy-2)', lineHeight: 1.4 }}>Email address for account recovery</div>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div className="disp" style={{ fontSize: 15, marginBottom: 10 }}>VIEW YOUR ACTIVITY</div>
          <div style={{ display: 'flex', gap: 10, padding: '8px 0' }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2.5"><path d="M1 4L3.5 6.5L9 1"/></svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy-2)', lineHeight: 1.4 }}>Listening history and play counts</div>
          </div>
          <div style={{ display: 'flex', gap: 10, padding: '8px 0' }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2.5"><path d="M1 4L3.5 6.5L9 1"/></svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy-2)', lineHeight: 1.4 }}>Saved songs, albums, and playlists</div>
          </div>
          <div style={{ display: 'flex', gap: 10, padding: '8px 0' }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2.5"><path d="M1 4L3.5 6.5L9 1"/></svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy-2)', lineHeight: 1.4 }}>Artists and genres you follow</div>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div className="disp" style={{ fontSize: 15, marginBottom: 10 }}>TAKE ACTIONS</div>
          <div style={{ display: 'flex', gap: 10, padding: '8px 0' }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2.5"><path d="M1 4L3.5 6.5L9 1"/></svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy-2)', lineHeight: 1.4 }}>Create and edit playlists on your behalf</div>
          </div>
        </div>

        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--slate)', lineHeight: 1.6, marginTop: 8 }}>
          By agreeing, you allow familiar.fm to access the data listed above. You can revoke access anytime in your Spotify settings. See our privacy policy.
        </div>
      </main>

      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, borderTop: '1.5px solid var(--navy)',
        background: 'var(--scrap)', padding: '16px 24px', display: 'flex', gap: 12
      }}>
        <button onClick={() => navigate(-1)} className="pill pill-ghost" style={{ flex: 1, minHeight: 50 }}>Cancel</button>
        <button onClick={() => navigate('/discover')} className="pill pill-lime" style={{ flex: 1.4, minHeight: 50 }}>Agree</button>
      </div>

      <Grain opacity={0.18} />
    </div>
  );
}
