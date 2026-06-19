import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cover from '../components/Cover';
import Grain from '../components/Grain';
import AddBtn from '../components/AddBtn';
import { TierBadge } from '../components/TierDot';
import { ARTISTS, DAYS } from '../data/fest';

export default function Artist() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const artist = ARTISTS.find(a => a.id === id);

  if (!artist) {
    return <div style={{ padding: 40, fontFamily: 'DM Mono' }}>Artist not found.</div>;
  }

  const dayObj = DAYS.find(d => d.id === artist.day);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ position: 'relative' }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute', top: 16, left: 16, zIndex: 10,
            width: 34, height: 34, borderRadius: 999, border: '1.5px solid var(--navy)',
            background: 'var(--scrap)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: 16, fontWeight: 700, color: 'var(--navy)',
            boxShadow: 'var(--shadow-cut)'
          }}
        >←</button>

        <Cover name={artist.name} height={320} style={{ borderBottomWidth: '2px' }}>
          <div style={{ position: 'absolute', bottom: 16, right: 16, background: 'var(--scrap)', padding: '6px 12px', border: '1.5px solid var(--navy)', borderRadius: 4, transform: 'rotate(-2deg)' }}>
            <TierBadge tier={artist.tier} />
          </div>
        </Cover>
      </div>

      <div style={{ padding: '24px 28px' }}>
        <h1 className="hand" style={{ fontSize: 48, color: 'var(--navy)', lineHeight: 0.9 }}>
          {artist.name}
        </h1>
        <div style={{ marginTop: 12 }}>
          <span className="tag" style={{ fontSize: 12 }}>{artist.genre}</span>
        </div>

        <div style={{ background: 'var(--scrap)', border: '1.5px solid var(--navy)', padding: 18, marginTop: 24 }}>
          <div className="label" style={{ color: 'var(--slate)', marginBottom: 12 }}>SET TIME</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div className="disp" style={{ fontSize: 22, color: 'var(--navy)' }}>{dayObj?.dow}</div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--navy-2)', marginTop: 4 }}>{dayObj?.label}</div>
            </div>
            <div>
              <div className="disp" style={{ fontSize: 22, color: 'var(--blue)' }}>{artist.time}</div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--navy-2)', marginTop: 4 }}>{artist.stageName}</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <AddBtn artistId={artist.id} size="full" />
        </div>

        <hr className="hr" style={{ margin: '32px 0' }} />

        <div>
          <div className="label" style={{ color: 'var(--slate)', marginBottom: 16 }}>YOUR HISTORY</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div className="hand" style={{ fontSize: 32, color: 'var(--navy)' }}>{artist.plays}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--slate)', marginTop: 4 }}>TOTAL PLAYS</div>
            </div>
            <div>
              <div className="hand" style={{ fontSize: 32, color: 'var(--navy)' }}>{Math.ceil(artist.plays / 15)}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--slate)', marginTop: 4 }}>SAVED SONGS</div>
            </div>
          </div>
        </div>
      </div>

      <Grain opacity={0.15} />
    </div>
  );
}
