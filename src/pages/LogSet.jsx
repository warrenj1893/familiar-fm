import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { POS as S, GeoStar } from '../components/poster-kit';
import { APhone, AvatarStack, Btn, ScreenHead } from '../components/app-kit';
import { FEST } from '../data/fest';

const SF = "'Bricolage Grotesque', sans-serif";
const SM = "'DM Mono', monospace";

export default function LogSet() {
  const navigate = useNavigate();
  const [artist, setArtist] = useState(FEST.artists[2].name);
  const [caption, setCaption] = useState('');
  const [visibility, setVisibility] = useState('Public');
  
  const handlePublish = async () => {
    if (!auth.currentUser) return;
    try {
      await addDoc(collection(db, 'feed'), {
        uid: auth.currentUser.uid,
        userName: auth.currentUser.displayName,
        artist,
        caption,
        visibility,
        festival: "Summerfest '26",
        date: FEST.dayLabel,
        venue: "BMO Pavilion",
        createdAt: serverTimestamp()
      });
      navigate('/feed');
    } catch (e) {
      console.error('Error publishing:', e);
      alert('Failed to publish');
    }
  };

  return (
    <APhone>
      <ScreenHead onBack={() => navigate(-1)} kicker="LOG A SET" title={
        <select value={artist} onChange={e => setArtist(e.target.value)} style={{ fontFamily: SF, fontWeight: 800, fontSize: 34, lineHeight: 0.9, color: S.blue, background: 'transparent', border: 'none', outline: 'none', appearance: 'none', textTransform: 'uppercase', mixBlendMode: 'multiply', width: '100%', cursor: 'pointer', padding: 0 }}>
          {FEST.artists.map(a => <option key={a.id} value={a.name}>{a.name}</option>)}
        </select>
      } right={<span onClick={() => navigate('/profile')} style={{ fontFamily: SM, fontSize: 12, color: S.blue, textDecoration: 'underline', cursor: 'pointer' }}>Skip</span>} />
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '0 22px' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
          {['Summerfest ’26', FEST.dayLabel, 'BMO Pavilion'].map((c) => (
            <span key={c} style={{ fontFamily: SM, fontSize: 10, color: S.blue, border: `2px solid ${S.blue}`, padding: '4px 9px' }}>{c}</span>
          ))}
        </div>
        <div onClick={() => alert('Opening camera roll...')} style={{ height: 168, border: `2.5px dashed ${S.blue}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
          <GeoStar size={48} color="blue" points={4} />
          <span style={{ fontFamily: SF, fontWeight: 800, fontSize: 15, color: S.blue, mixBlendMode: 'multiply' }}>Add a photo</span>
          <span style={{ fontFamily: SM, fontSize: 9.5, color: 'rgba(10,83,240,0.6)' }}>from your camera roll</span>
        </div>
        <div style={{ marginTop: 16 }}>
          <div style={{ fontFamily: SM, fontSize: 10, letterSpacing: '0.14em', color: S.blue, marginBottom: 9 }}>WHO YOU WERE WITH</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <AvatarStack people={FEST.goingWith('Third Eye Blind')} size={30} />
            <span style={{ fontFamily: SM, fontSize: 10, color: S.green }}>auto-tagged from your plan</span>
          </div>
        </div>
        <textarea value={caption} onChange={e => setCaption(e.target.value)} placeholder="Add a caption or quick review…" style={{ marginTop: 16, border: `2px solid ${S.blue}`, padding: '12px 14px', minHeight: 70, width: '100%', background: 'transparent', outline: 'none', fontFamily: SF, fontWeight: 500, fontSize: 14, color: S.blue, resize: 'none' }}></textarea>
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          {['Public', 'Friends', 'Private'].map((v) => (
            <span key={v} onClick={() => setVisibility(v)} style={{ flex: 1, textAlign: 'center', fontFamily: SM, fontSize: 11, color: visibility === v ? S.paper : S.blue, background: visibility === v ? S.blue : 'transparent', border: `2px solid ${S.blue}`, padding: '8px 0', mixBlendMode: visibility === v ? 'multiply' : 'normal', cursor: 'pointer' }}>{v}</span>
          ))}
        </div>
      </div>
      <div style={{ flex: 'none', padding: '12px 22px 22px' }}>
        <Btn kind="yellow" style={{ width: '100%' }} onClick={handlePublish}>Publish to feed →</Btn>
      </div>
    </APhone>
  );
}
