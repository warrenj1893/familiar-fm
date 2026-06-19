import { createContext, useContext, useState, useEffect } from 'react';

const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
  // Initialize with some default picks, or load from localStorage
  const [picked, setPicked] = useState(() => {
    const saved = localStorage.getItem('fm_schedule');
    if (saved) return new Set(JSON.parse(saved));
    return new Set(['a1', 'a4', 'b1', 'b2', 'b3', 'b4']); // default mock data
  });

  useEffect(() => {
    localStorage.setItem('fm_schedule', JSON.stringify([...picked]));
  }, [picked]);

  const togglePick = (id) => {
    setPicked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const isPicked = (id) => picked.has(id);

  return (
    <ScheduleContext.Provider value={{ picked, togglePick, isPicked }}>
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  return useContext(ScheduleContext);
}
