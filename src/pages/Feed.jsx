import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as S, GeoStar, Ink } from '../components/poster-kit';
import { APhone, Avatar, AvatarStack, HubTab, ScreenHead } from '../components/app-kit';
import { FEST } from '../data/fest';

const SF = "'Bricolage Grotesque', sans-serif";
const SM = "'DM Mono', monospace";
const fn = (f) => f.name.split(' ')[0];

function FeedPost({ f, festival, day, artist, withWho, caption, photoInk, likes, dark }) {
  const [liked, setLiked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showComment, setShowComment] = useState(false);
  return (
    <div style={{ borderBottom: `2px solid ${S.blue}`, paddingBottom: 16, marginBottom: 16 }}>
      {showMenu && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'rgba(0,0,0,0.5)' }}>
          <div style={{ background: S.paper, padding: '24px 22px 34px', borderTopLeftRadius: 24, borderTopRightRadius: 24, border: `2px solid ${S.blue}` }}>
            <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 18, marginBottom: 20, color: S.blue }}>Actions</div>
            <div onClick={() => setShowMenu(false)} style={{ padding: '14px 0', borderBottom: `1.5px solid rgba(10,83,240,0.1)`, cursor: 'pointer', fontFamily: SF, color: S.blue }}>Report Post</div>
            <div onClick={() => setShowMenu(false)} style={{ padding: '14px 0', borderBottom: `1.5px solid rgba(10,83,240,0.1)`, cursor: 'pointer', fontFamily: SF, color: S.blue }}>Mute {fn(f)}</div>
            <button onClick={() => setShowMenu(false)} className="pill pill-ghost" style={{ width: '100%', marginTop: 24 }}>Cancel</button>
          </div>
        </div>
      )}
      {showComment && (
        <div style={{ position: 'fixed', inset: 0, height: '100dvh', zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'rgba(0,0,0,0.5)' }}>
          <div style={{ background: S.paper, padding: '24px 22px 34px', borderTopLeftRadius: 24, borderTopRightRadius: 24, border: `2px solid ${S.blue}`, height: '65dvh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 18, color: S.blue }}>Comments</div>
              <span onClick={() => setShowComment(false)} style={{ fontSize: 24, cursor: 'pointer', color: S.blue }}>✕</span>
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
               <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                 <Avatar f={{ name: 'Jane', color: 'green', initial: 'J' }} size={28} />
                 <div style={{ fontFamily: SF, color: S.blue }}><div style={{ fontWeight: 800, fontSize: 13 }}>Jane</div><div style={{ fontSize: 13 }}>So jealous!!</div></div>
               </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <input type="text" placeholder="Add a comment..." style={{ flex: 1, padding: '0 14px', borderRadius: 999, border: `2px solid ${S.blue}`, background: 'transparent', fontFamily: SF, color: S.blue, outline: 'none' }} />
              <button onClick={() => setShowComment(false)} className="pill pill-lime" style={{ height: 42 }}>Post</button>
            </div>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <Avatar f={f} size={34} />
        <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: SF, fontWeight: 800, fontSize: 14, color: S.blue }}>{f.name}</div><div style={{ fontFamily: SM, fontSize: 9, color: 'rgba(10,83,240,0.6)' }}>{festival} · {day}</div></div>
        <span onClick={() => setShowMenu(true)} style={{ fontFamily: SM, fontSize: 16, color: S.blue, cursor: 'pointer', padding: '0 8px' }}>···</span>
      </div>
      <div style={{ height: 180, background: photoInk, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 14 }}>
        <Ink as="div" color={S.yellow} style={{ right: -30, top: -30, width: 130, height: 130, borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: 12, top: 40 }}><GeoStar size={70} color="yellow" points={4} /></div>
        <div style={{ position: 'relative', fontFamily: SF, fontWeight: 800, fontSize: 30, lineHeight: 0.85, color: S.paper, textTransform: 'uppercase', mixBlendMode: 'multiply', maxWidth: 220 }}>{artist}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 11 }}>
        <span onClick={() => setLiked(!liked)} style={{ fontFamily: SF, fontWeight: 800, fontSize: 13, color: liked ? S.red : S.blue, cursor: 'pointer' }}>{liked ? '♥' : '♡'} {likes + (liked ? 1 : 0)}</span>
        <span onClick={() => setShowComment(true)} style={{ fontFamily: SF, fontWeight: 800, fontSize: 13, color: S.blue, cursor: 'pointer' }}>💬 reply</span>
        {withWho && <span style={{ fontFamily: SM, fontSize: 9.5, color: S.green, marginLeft: 'auto' }}>with {withWho}</span>}
      </div>
      {caption && <div style={{ fontFamily: SF, fontWeight: 500, fontSize: 13.5, color: S.blue, marginTop: 8, lineHeight: 1.35 }}><b style={{ fontWeight: 800 }}>{fn(f)}</b> {caption}</div>}
    </div>
  );
}

export default function Feed() {
  const navigate = useNavigate();
  const fr = (id) => FEST.friends.find((f) => f.id === id);
  const [tab, setTab] = useState('friends');
  
  return (
    <APhone>
      <div style={{ flex: 'none', padding: '12px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: SF, fontWeight: 800, fontSize: 22, letterSpacing: '-0.03em', color: S.blue }}>familiar.fm</span>
          <Avatar f={FEST.user} size={30} />
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 14, borderBottom: `2px solid rgba(10,83,240,0.2)` }}>
          {[['friends', 'Friends'], ['explore', 'Explore']].map(([id, l]) => (
            <div key={id} onClick={() => setTab(id)} style={{ paddingBottom: 10, cursor: 'pointer', borderBottom: tab === id ? `3px solid ${S.blue}` : '3px solid transparent', marginBottom: -2 }}>
              <span style={{ fontFamily: SF, fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', color: tab === id ? S.blue : 'rgba(10,83,240,0.4)', mixBlendMode: 'multiply' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '16px 22px 0', overflowY: 'auto' }}>
        {tab === 'friends' ? (
          <React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 0 14px', marginBottom: 14, borderBottom: `2px solid ${S.blue}` }}>
              <AvatarStack people={[fr('sam'), fr('lia')]} size={30} />
              <div style={{ fontFamily: SF, fontWeight: 600, fontSize: 13.5, color: S.blue, lineHeight: 1.3 }}><b style={{ fontWeight: 800 }}>Sam & Lia</b> are going to <b style={{ fontWeight: 800 }}>Summerfest</b></div>
            </div>
            <FeedPost f={fr('jo')} festival="Summerfest" day="FRI JUN 19" artist="Holly Humberstone" withWho="you, Lia" caption="best set of the night, no contest 🌙" photoInk={S.blue} likes={12} />
            <FeedPost f={fr('sam')} festival="Summerfest" day="FRI JUN 19" artist="Third Eye Blind" withWho="Jo, Lia" caption="semi-charmed kinda night" photoInk={S.green} likes={9} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
              {['All', 'Summerfest', 'Muse', 'Indie'].map((c, i) => (
                <button key={c} className={i === 0 ? "pill pill-lime" : "pill pill-ghost"} style={{ height: 32, fontSize: 12, padding: '0 12px' }}>{c}</button>
              ))}
            </div>
            <FeedPost f={{ name: 'Dani Cruz', initial: 'DC', color: 'green' }} festival="Summerfest" day="FRI JUN 19" artist="flipturn" caption="first time seeing them — instant favorite" photoInk={S.blue} likes={48} />
            <FeedPost f={{ name: 'Theo M.', initial: 'TM', color: 'ink' }} festival="Pitchfork" day="LAST WK" artist="Sudan Archives" caption="violin into a DJ set, unreal" photoInk={S.green} likes={31} />
          </React.Fragment>
        )}
      </div>
      <HubTab active="feed" badge="2" navigate={navigate} />
    </APhone>
  );
}
