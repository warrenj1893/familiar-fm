import React from 'react';
import { DAYS } from '../data/fest';

export default function DayPills({ days = DAYS, active, onSelect, showAll = true }) {
  return (
    <div className="mrail" style={{ padding: '0 28px', margin: '0 -28px' }}>
      {showAll && (
        <div 
          className={`day ${active === 'all' ? 'on' : ''}`}
          onClick={() => onSelect('all')}
        >
          <span className="dow">ALL</span>
          <span className="dnum">✦</span>
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
