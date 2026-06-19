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
          width: 40,
          height: 40,
          borderRadius: 999,
          border: added ? 'none' : '1px solid var(--line)',
          background: added ? 'var(--blue)' : 'var(--white)',
          color: added ? 'var(--white)' : 'var(--ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          cursor: 'pointer',
          flexShrink: 0,
          transition: 'all 0.15s ease'
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
        className={added ? 'pill pill-lime' : 'pill pill-ghost'}
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
      style={{ padding: '8px 16px', fontSize: 13 }}
    >
      {added ? '✓ Added' : '+ Add'}
    </button>
  );
}
