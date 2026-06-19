import React, { useState } from 'react';
import { TopNav } from '../components/Nav';
import BottomNav from '../components/Nav';
import DayPills from '../components/DayPills';
import Grain from '../components/Grain';
import { TierDot } from '../components/TierDot';
import { FEST, DAYS, ARTISTS, STAGES } from '../data/fest';
import { useSchedule } from '../context/ScheduleContext';

const START = 18.5; // 6:30 PM
const END = 23;     // 11:00 PM
const PPH = 124;    // pixels per hour
const TOTAL_H = (END - START) * PPH;

const TIER_COLORS = { know: 'var(--blue)', heard: 'var(--teal)', new: 'var(--red)' };

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('jun27');
  const { isPicked, togglePick } = useSchedule();

  const dayObj = DAYS.find(d => d.id === activeDay) || DAYS[1];
  const wkndDays = DAYS.filter(d => d.wknd === dayObj.wknd);

  const dayArtists = ARTISTS.filter(a => a.day === activeDay);
  const pickedArtists = dayArtists.filter(a => isPicked(a.id)).sort((a,b) => a.start - b.start);
  
  const clashes = new Set();
  for (let i = 0; i < pickedArtists.length; i++) {
    for (let j = i + 1; j < pickedArtists.length; j++) {
      if (
        pickedArtists[i].start < pickedArtists[j].start + pickedArtists[j].len &&
        pickedArtists[j].start < pickedArtists[i].start + pickedArtists[i].len
      ) {
        clashes.add(pickedArtists[i].id);
        clashes.add(pickedArtists[j].id);
      }
    }
  }

  const hours = [];
  for (let h = Math.ceil(START); h <= Math.floor(END); h++) hours.push(h);

  return (
    <div className="page" style={{ display: 'flex', minHeight: '100vh', background: 'var(--paper)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopNav active="schedule" />
        
        <div style={{ padding: '22px 28px 14px' }}>
          <div className="label" style={{ color: 'var(--red)' }}>MY SCHEDULE · {FEST.name.toUpperCase()} {FEST.year}</div>
          <h1 className="hand" style={{ fontSize: 46, color: 'var(--navy)', marginTop: 8 }}>
            {dayObj.label}
          </h1>
        </div>

        <div style={{ padding: '0 28px 18px' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {wkndDays.map(d => (
              <div key={d.id} className={`day ${activeDay === d.id ? 'on' : ''}`} onClick={() => setActiveDay(d.id)}>
                <span className="dow">{d.dow}</span>
                <span className="dnum">{d.dnum}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '0 28px', display: 'grid', gridTemplateColumns: '52px repeat(6, 1fr)', borderBottom: '1.5px solid var(--navy)' }}>
          <div></div>
          {STAGES.map(s => (
            <div key={s.id} className="disp" style={{ fontSize: 15, padding: '8px 6px', textAlign: 'center', borderLeft: '1px solid var(--line-2)' }}>
              {s.short || s.name}
            </div>
          ))}
        </div>

        <div style={{ position: 'relative', height: TOTAL_H, margin: '0 28px', display: 'grid', gridTemplateColumns: '52px repeat(6, 1fr)' }}>
          {hours.map(h => (
            <React.Fragment key={h}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: (h - START) * PPH, height: 1, background: 'var(--line-2)' }}></div>
              <div className="mono" style={{ position: 'absolute', left: 0, top: (h - START) * PPH - 6, fontSize: 10.5, color: 'var(--slate)', background: 'var(--paper)', paddingRight: 4 }}>
                {h > 12 ? h - 12 : h} PM
              </div>
            </React.Fragment>
          ))}

          {/* Render columns just for borders */}
          <div style={{ borderRight: '1px solid var(--line-2)' }}></div>
          {STAGES.map((s, idx) => (
            <div key={`col-${s.id}`} style={{ position: 'relative', borderRight: idx < 5 ? '1px solid var(--line-2)' : 'none' }}>
              {dayArtists.filter(a => a.stage === s.id).map(a => {
                const picked = isPicked(a.id);
                const clash = clashes.has(a.id);
                
                return (
                  <div 
                    key={a.id}
                    onClick={() => togglePick(a.id)}
                    style={{
                      position: 'absolute',
                      top: (a.start - START) * PPH,
                      height: a.len * PPH - 4,
                      left: 4, right: 4,
                      background: picked ? (clash ? 'var(--scrap)' : TIER_COLORS[a.tier]) : 'transparent',
                      border: picked ? (clash ? '2px solid var(--red)' : '1.5px solid var(--navy)') : '1.5px dashed var(--line)',
                      color: picked ? (clash ? 'var(--navy)' : 'var(--on-blue)') : 'var(--slate)',
                      boxShadow: (picked && !clash) ? 'var(--shadow-cut)' : 'none',
                      padding: '8px 10px',
                      cursor: 'pointer',
                      display: 'flex', flexDirection: 'column',
                      overflow: 'hidden'
                    }}
                  >
                    {picked && clash && (
                      <div className="mono" style={{ position: 'absolute', top: -1, right: -1, fontSize: 8.5, fontWeight: 800, background: 'var(--red)', color: 'var(--on-blue)', padding: '2px 6px', zIndex: 1 }}>
                        ⚠ CLASH
                      </div>
                    )}
                    <div className="disp" style={{ fontSize: a.scale === 1 ? 20 : 16, lineHeight: 0.95, marginBottom: 'auto', position: 'relative', zIndex: 0 }}>
                      {a.name}
                    </div>
                    {!picked && (
                      <div style={{ color: 'var(--blue)', fontSize: 12, fontWeight: 700, marginTop: 4 }}>+ add</div>
                    )}
                    {picked && (
                      <div className="mono" style={{ fontSize: 9.5, opacity: 0.8 }}>{a.time}</div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <aside style={{ width: 296, borderLeft: '1px solid var(--line)', background: 'var(--ink-2)', padding: '24px 22px', position: 'sticky', top: 0, alignSelf: 'flex-start', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="label" style={{ color: 'var(--red)' }}>Your day</div>
        <div className="disp" style={{ fontSize: 40, color: 'var(--blue)', marginTop: 4 }}>{pickedArtists.length} sets</div>

        {clashes.size > 0 && (
          <div style={{ border: '1.5px solid var(--red)', background: 'var(--scrap)', padding: 14, marginTop: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--red)' }}>⚠ {clashes.size / 2} CLASH</div>
            <div style={{ fontSize: 12, color: 'var(--navy-2)', marginTop: 6, lineHeight: 1.4 }}>
              You have overlapping sets. You'll need to run between stages or pick one.
            </div>
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          {pickedArtists.map(a => (
            <div key={a.id} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--line-2)' }}>
              <div className="mono" style={{ fontSize: 11, width: 46, color: 'var(--slate)' }}>{a.time.split(' ')[0]}</div>
              <div style={{ marginTop: 2 }}><TierDot tier={a.tier} /></div>
              <div style={{ flex: 1 }}>
                <div className="disp" style={{ fontSize: 18, color: clashes.has(a.id) ? 'var(--red)' : 'var(--navy)' }}>{a.name}</div>
                <div className="mono" style={{ fontSize: 9.5, color: 'var(--slate)', marginTop: 2 }}>{a.stageName}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="pill pill-lime" style={{ width: '100%', marginTop: 'auto' }}>Export day → Spotify</button>
      </aside>

      <Grain />
      <BottomNav active="schedule" />
    </div>
  );
}
