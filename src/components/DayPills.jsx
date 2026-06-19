import React from 'react';
import { DAYS } from '../data/fest';
import Sparkle from './Sparkle';

export default function DayPills({ days = DAYS, active, onSelect, showAll = true }) {
  return (
    <div className="mrail" style={{ padding: '0 24px', margin: '0 -24px' }}>
      {showAll && (
        <div 
          className={`day ${active === 'all' ? 'on' : ''}`}
          onClick={() => onSelect('all')}
        >
          <span className="dow">ALL</span>
          <span className="dnum" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 20 }}>
            <Sparkle size={18} color={active === 'all' ? 'var(--white)' : 'var(--ink)'} />
          </span>
        </div>
      )}
      
      {days.map(day => (
        <div 
          key={day.id}
          className={`day ${active === day.id ? 'on' : ''}`}
          onClick={() => onSelect(day.id)}
        >
          <span className="dow">{day.dow}</span>
          <span className="dnum">{day.dnum}</span>
        </div>
      ))}
    </div>
  );
}
