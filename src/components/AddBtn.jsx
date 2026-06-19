import React from 'react';
import { useSchedule } from '../context/ScheduleContext';

export default function AddBtn({ artistId, size = 'normal' }) {
  const { isPicked, togglePick } = useSchedule();
  const added = isPicked(artistId);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    togglePick(artistId);
  };

  if (size === 'circle') {
    return (
      <button
        onClick={handleClick}
        style={{
          width: 38,
          height: 38,
          borderRadius: 999,
          border: '1.5px solid var(--navy)',
          background: added ? 'var(--blue)' : 'var(--scrap)',
          color: added ? 'var(--on-blue)' : 'var(--navy)',
          boxShadow: added ? 'var(--shadow-cut)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          cursor: 'pointer',
          flexShrink: 0
        }}
      >
        {added ? '✓' : '+'}
      </button>
    );
  }

  if (size === 'full') {
    return (
      <button
        onClick={handleClick}
        className={added ? 'pill pill-lime' : 'pill pill-coral'}
        style={{ width: '100%' }}
      >
        {added ? '✓ In your lineup' : 'Add to my lineup'}
      </button>
    );
  }

  // normal
  return (
    <button
      onClick={handleClick}
      className={added ? 'pill pill-lime' : 'pill pill-ghost'}
    >
      {added ? '✓ Added' : '+ Add'}
    </button>
  );
}
