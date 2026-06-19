import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TopNav } from '../components/Nav';
import BottomNav from '../components/Nav';
import Cover from '../components/Cover';
import DayPills from '../components/DayPills';
import Grain from '../components/Grain';
import AddBtn from '../components/AddBtn';
import { TierDot, TierBadge } from '../components/TierDot';
import { FEST, DAYS, ARTISTS, computeRecap } from '../data/fest';

const TIER_COLORS = { know: 'var(--blue)', heard: 'var(--teal-ink)', new: 'var(--red)' };

export default function Lineup() {
  const [activeDay, setActiveDay] = useState('all');
  const [viewMode, setViewMode] = useState('poster');
  const [activeTiers] = useState(new Set(['know', 'heard', 'new']));

  const filtered = useMemo(() => {
    let list = ARTISTS;
    if (activeDay !== 'all') list = list.filter(a => a.day === activeDay);
    list = list.filter(a => activeTiers.has(a.tier));
    return list;
  }, [activeDay, activeTiers]);

  const R = useMemo(() => computeRecap(ARTISTS), []);

  return (
    <div className="page" style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      <TopNav active="lineup" />

      {/* Hero */}
      <div style={{ padding: '22px 28px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div className="label" style={{ color: 'var(--red)' }}>{FEST.name} · {FEST.city} · {FEST.year}</div>
          <h1 className="hand" style={{ fontSize: 46, color: 'var(--navy)', lineHeight: 0.92, marginTop: 8 }}>
            Browse the<br/><span style={{ color: 'var(--blue)' }}>lineup.</span>
          </h1>
        </div>
        <div className="sticker" style={{ transform: 'rotate(-4deg)', padding: '12px 16px', textAlign: 'center' }}>
          <span className="hand" style={{ fontSize: 42, color: 'var(--navy)', display: 'block' }}>{R.known}</span>
          <span className="mono" style={{ fontSize: 9.5, letterSpacing: '0.12em' }}>ACTS YOU KNOW</span>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 16, padding: '0 28px', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600 }}>
          <div style={{ width: 11, height: 11, background: 'var(--blue)' }}></div> {R.counts.know} Know
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600 }}>
          <div style={{ width: 11, height: 11, background: 'var(--teal)' }}></div> {R.counts.heard} Heard
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600 }}>
          <div style={{ width: 11, height: 11, background: 'var(--red)' }}></div> {R.counts.new} New
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar" style={{ padding: '0 28px', marginBottom: 14 }}>
        <DayPills days={DAYS} active={activeDay} onSelect={setActiveDay} />
        <div style={{ flex: 1 }}></div>
        <div className="layout-toggle">
          <button className={viewMode === 'poster' ? 'on' : ''} onClick={() => setViewMode('poster')}>POSTER</button>
          <button className={viewMode === 'cards' ? 'on' : ''} onClick={() => setViewMode('cards')}>CARDS</button>
          <button className={viewMode === 'list' ? 'on' : ''} onClick={() => setViewMode('list')}>LIST</button>
        </div>
      </div>

      <hr className="hr" style={{ margin: '0 28px' }} />

      {/* POSTER VIEW */}
      {viewMode === 'poster' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, flex: 1 }}>
          {[2, 3].map(wknd => {
            const wkndDays = DAYS.filter(d => d.wknd === wknd).map(d => d.id);
            const wkndArtists = filtered.filter(a => wkndDays.includes(a.day)).sort((a,b) => a.scale - b.scale);
            const headliners = wkndArtists.filter(a => a.scale === 1);
            const majors = wkndArtists.filter(a => a.scale === 2);
            const mids = wkndArtists.filter(a => a.scale >= 3);
            
            return (
              <div key={wknd} style={{ padding: '20px 24px 26px', borderRight: wknd === 2 ? '1px solid var(--line)' : 'none' }}>
                <div className="disp" style={{ fontSize: 26, color: 'var(--chalk-dim)' }}>WKND 0{wknd-1}</div>
                <div className="mono" style={{ fontSize: 11, marginBottom: 16 }}>{wknd===2 ? 'JUN 26-28' : 'JUL 02-04'}</div>
                
                <div style={{ marginBottom: 16 }}>
                  {headliners.map(a => (
                    <div key={a.id}>
                      <Link to={`/artist/${a.id}`} className="disp" style={{ fontSize: 40, lineHeight: 0.82, color: TIER_COLORS[a.tier] }}>{a.name}</Link>
                    </div>
                  ))}
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
                  {majors.map((a, i) => (
                    <React.Fragment key={a.id}>
                      <Link to={`/artist/${a.id}`} className="disp" style={{ fontSize: 23, lineHeight: 0.92, color: TIER_COLORS[a.tier] }}>{a.name}</Link>
                      {i < majors.length - 1 && <span style={{ color: 'var(--chalk-dim)', margin: '0 9px' }}>·</span>}
                    </React.Fragment>
                  ))}
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  {mids.map((a, i) => (
                    <React.Fragment key={a.id}>
                      <Link to={`/artist/${a.id}`} className="disp" style={{ fontSize: 15.5, letterSpacing: '0.03em', lineHeight: 0.95, color: TIER_COLORS[a.tier] }}>{a.name}</Link>
                      {i < mids.length - 1 && <span style={{ color: 'var(--chalk-dim)', margin: '0 7px' }}>·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* CARDS VIEW */}
      {viewMode === 'cards' && (
        <>
          <div className="scrap" style={{ background: 'var(--blue)', color: 'var(--on-blue)', padding: '24px 28px', margin: '18px 28px', position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(#0E1C9E 1.5px, transparent 2px)', backgroundSize: '9px 9px', opacity: 0.16, pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '60%' }}>
              <span className="hand" style={{ fontSize: 74 }}>{R.pct}%</span>
              <div className="disp" style={{ fontSize: 22 }}>of this lineup is already yours</div>
              <div className="mono" style={{ fontSize: 11, marginTop: 4 }}>{R.known} of {R.total} acts in your library</div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'right' }}>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginBottom: 8 }}>
                <span className="hand" style={{ fontSize: 38, color: 'var(--on-blue)' }}>{R.counts.know}</span>
                <span className="hand" style={{ fontSize: 38, color: 'var(--teal)' }}>{R.counts.heard}</span>
                <span className="hand" style={{ fontSize: 38, color: '#FFB4A8' }}>{R.counts.new}</span>
              </div>
              <div className="label">TOP GENRE</div>
              <div className="disp" style={{ fontSize: 24 }}>{R.topGenres[0]?.g}</div>
            </div>
          </div>
          
          <div style={{ padding: '18px 28px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, gridAutoRows: 'min-content' }}>
            {filtered.map(a => (
              <div key={a.id} className="scrap" style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to={`/artist/${a.id}`} style={{ display: 'block' }}>
                  <Cover name={a.name} height={126} corner={<TierBadge tier={a.tier} />} />
                </Link>
                <div style={{ padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="mono" style={{ fontSize: 10.5, color: 'var(--slate)', marginBottom: 8 }}>{DAYS.find(d=>d.id===a.day)?.label} · {a.time}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <TierDot tier={a.tier} size={12} />
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{a.plays} plays</span>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <span className="tag">{a.genre}</span>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <AddBtn artistId={a.id} size="full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (() => {
        const sorted = [...filtered].sort((a,b) => {
          const tVals = { know: 3, heard: 2, new: 1 };
          if(tVals[a.tier] !== tVals[b.tier]) return tVals[b.tier] - tVals[a.tier];
          return b.plays - a.plays;
        });
        const hero = sorted[0];
        
        return (
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <aside style={{ width: 312, borderRight: '1px solid var(--line)', background: 'var(--ink-2)', padding: '26px 24px', position: 'sticky', top: 62, minHeight: 'calc(100vh - 62px)' }}>
              <div className="label" style={{ color: 'var(--red)' }}>Your match</div>
              <div className="disp" style={{ fontSize: 64, marginTop: 4 }}>
                <span style={{ color: 'var(--blue)' }}>{R.known}</span>
                <span style={{ color: 'var(--chalk-dim)', fontSize: 34 }}> / {R.total}</span>
              </div>
              <div className="fam-bar" style={{ marginTop: 12 }}>
                <div className="seg-know" style={{ flex: R.counts.know }}></div>
                <div className="seg-heard" style={{ flex: R.counts.heard }}></div>
                <div className="seg-new" style={{ flex: R.counts.new }}></div>
              </div>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TierDot tier="know" /> <span style={{ fontWeight: 700, width: 30 }}>{R.counts.know}</span> <span className="label" style={{ margin: 0 }}>Know</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TierDot tier="heard" /> <span style={{ fontWeight: 700, width: 30 }}>{R.counts.heard}</span> <span className="label" style={{ margin: 0 }}>Heard</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TierDot tier="new" /> <span style={{ fontWeight: 700, width: 30 }}>{R.counts.new}</span> <span className="label" style={{ margin: 0 }}>New</span></div>
              </div>
              <Link to="/schedule" className="pill pill-lime" style={{ marginTop: 40, width: '100%' }}>Build my schedule →</Link>
            </aside>
            
            <main style={{ flex: 1, padding: '18px 28px' }}>
              <h2 className="hand" style={{ fontSize: 28, marginBottom: 20 }}>Ranked by how well you know them</h2>
              
              {hero && (
                <div style={{ background: 'var(--blue)', border: '1.5px solid var(--navy)', boxShadow: 'var(--shadow-cut)', padding: 22, marginBottom: 18, color: 'var(--on-blue)' }}>
                  <div className="label" style={{ color: 'var(--on-blue)' }}>★ YOUR #1 MATCH · {DAYS.find(d=>d.id===hero.day)?.label?.toUpperCase()}</div>
                  <Link to={`/artist/${hero.id}`} className="hand" style={{ fontSize: 70, display: 'block', marginTop: 8 }}>{hero.name}</Link>
                  <div style={{ display: 'flex', gap: 16, fontSize: 13, fontWeight: 700, marginTop: 12, marginBottom: 16 }}>
                    <div>{hero.plays} plays</div>
                    <div>{hero.genre}</div>
                    <div>{hero.stageName} · {hero.time}</div>
                  </div>
                  <AddBtn artistId={hero.id} />
                </div>
              )}
              
              <div>
                {sorted.slice(1).map((a, idx) => (
                  <div key={a.id} style={{ display: 'grid', gridTemplateColumns: '34px 1fr 96px 150px 130px 120px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid var(--line-2)' }}>
                    <div className="disp" style={{ fontSize: 24, color: 'var(--chalk-dim)' }}>{(idx + 2).toString().padStart(2, '0')}</div>
                    <div>
                      <Link to={`/artist/${a.id}`} className="disp" style={{ fontSize: 25, color: 'var(--navy)', display: 'block' }}>{a.name}</Link>
                      <div className="mono" style={{ fontSize: 10.5, color: 'var(--slate)', marginTop: 2 }}>{a.genre} · {a.stageName}</div>
                    </div>
                    <div><TierBadge tier={a.tier} /></div>
                    <div style={{ height: 5, background: 'var(--ink-3)', borderRadius: 2, marginRight: 20 }}>
                      <div style={{ height: '100%', width: `${Math.max(2, (a.plays/1420)*100)}%`, background: TIER_COLORS[a.tier] }}></div>
                    </div>
                    <div className="mono" style={{ fontSize: 11.5 }}>{DAYS.find(d=>d.id===a.day)?.dow} · {a.time}</div>
                    <div><AddBtn artistId={a.id} /></div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        );
      })()}

      <Grain />
      <BottomNav active="lineup" />
    </div>
  );
}
