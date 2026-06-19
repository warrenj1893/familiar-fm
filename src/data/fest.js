export const FEST = {
  name: 'Summerfest',
  city: 'Milwaukee',
  year: 2026,
  user: {
    handle: '@alexlistens',
    minutes: 41280,
  }
};

export const DAYS = [
  { id: 'jun26', dow: 'THU', dnum: '26', mon: 'JUN', label: 'June 26', wknd: 2 },
  { id: 'jun27', dow: 'FRI', dnum: '27', mon: 'JUN', label: 'June 27', wknd: 2 },
  { id: 'jun28', dow: 'SAT', dnum: '28', mon: 'JUN', label: 'June 28', wknd: 2 },
  { id: 'jul2', dow: 'THU', dnum: '02', mon: 'JUL', label: 'July 2', wknd: 3 },
  { id: 'jul3', dow: 'FRI', dnum: '03', mon: 'JUL', label: 'July 3', wknd: 3 },
  { id: 'jul4', dow: 'SAT', dnum: '04', mon: 'JUL', label: 'July 4', wknd: 3 },
];

export const STAGES = [
  { id: 'amp', name: 'American Family Insurance Amphitheater', short: 'Amphitheater' },
  { id: 'uline', name: 'Uline Warehouse', short: 'Uline' },
  { id: 'bmo', name: 'BMO Pavilion', short: 'BMO' },
  { id: 'miller', name: 'Miller Lite Oasis', short: 'Oasis' },
  { id: 'harley', name: 'Harley-Davidson Roadhouse', short: 'Roadhouse' },
  { id: 'bmi', name: 'BMI Stage', short: 'BMI' },
];

export const COVER_PALETTES = [
  { bg: '#1E34DD', fg: '#F2ECDD', dots: '#0E1C9E' },  // Cobalt
  { bg: '#EE4326', fg: '#F2ECDD', dots: '#B92C13' },  // Tomato
  { bg: '#10B0A0', fg: '#111A54', dots: '#0A7468' },   // Teal
  { bg: '#F2C23E', fg: '#111A54', dots: '#C9981E' },   // Butter
  { bg: '#A77BFF', fg: '#1A1140', dots: '#7B4FE0' },   // Lilac
  { bg: '#F7F3EA', fg: '#111A54', dots: '#DED5C2' },   // Cream
  { bg: '#111A54', fg: '#F2ECDD', dots: '#2C3576' },   // Navy
];

export function coverFor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  return COVER_PALETTES[Math.abs(h) % COVER_PALETTES.length];
}

export const FRIENDS = [
  { name: 'Lia Chen', handle: '@lialistens', color: '#FF4FA3', knows: ['a1','a2','a5','b1','b3'], going: true },
  { name: 'Marcus Bell', handle: '@marcusb', color: '#10B0A0', knows: ['a1','a3','a4','b2','b5','b7'], going: true },
  { name: 'Jordan Hayes', handle: '@jordanh', color: '#7A5CFF', knows: ['a2','a6','b1','b4','b6'], going: false },
  { name: 'Sam Okafor', handle: '@samokafor', color: '#1E34DD', knows: ['a1','a2','a3','a7','b2','b3'], going: true },
];

export const ARTISTS = [
  // KNOW (15)
  { id: 'a1', name: 'Muse', tier: 'know', genre: 'Alternative', day: 'jun27', stage: 'amp', start: 20.5, len: 2, time: '8:30 PM', stageName: 'Amphitheater', plays: 1420, image: null, scale: 1 },
  { id: 'a2', name: 'Hozier', tier: 'know', genre: 'Indie Folk', day: 'jul4', stage: 'amp', start: 21, len: 1.5, time: '9:00 PM', stageName: 'Amphitheater', plays: 890, image: null, scale: 1 },
  { id: 'a3', name: 'Post Malone', tier: 'know', genre: 'Hip Hop', day: 'jun26', stage: 'amp', start: 21, len: 1.5, time: '9:00 PM', stageName: 'Amphitheater', plays: 756, image: null, scale: 1 },
  { id: 'a4', name: 'Young the Giant', tier: 'know', genre: 'Alt Rock', day: 'jun27', stage: 'bmo', start: 19.5, len: 1.5, time: '7:30 PM', stageName: 'BMO Pavilion', plays: 530, image: null, scale: 2 },
  { id: 'a5', name: 'WALK THE MOON', tier: 'know', genre: 'Pop Rock', day: 'jun28', stage: 'uline', start: 21.5, len: 1.5, time: '9:30 PM', stageName: 'Uline Warehouse', plays: 412, image: null, scale: 2 },
  { id: 'a6', name: 'Father John Misty', tier: 'know', genre: 'Indie Folk', day: 'jul3', stage: 'bmo', start: 20, len: 1.5, time: '8:00 PM', stageName: 'BMO Pavilion', plays: 390, image: null, scale: 1 },
  { id: 'a7', name: 'Franz Ferdinand', tier: 'know', genre: 'Indie Rock', day: 'jun28', stage: 'miller', start: 22, len: 1.5, time: '10:00 PM', stageName: 'Miller Lite Oasis', plays: 345, image: null, scale: 2 },
  { id: 'a8', name: 'The Killers', tier: 'know', genre: 'Alternative', day: 'jul4', stage: 'miller', start: 22.5, len: 1.5, time: '10:30 PM', stageName: 'Miller Lite Oasis', plays: 290, image: null, scale: 2 },
  { id: 'a9', name: 'MGMT', tier: 'know', genre: 'Indie Pop', day: 'jun26', stage: 'bmo', start: 21.5, len: 1.5, time: '9:30 PM', stageName: 'BMO Pavilion', plays: 275, image: null, scale: 3 },
  { id: 'a10', name: 'Cold War Kids', tier: 'know', genre: 'Indie Rock', day: 'jun27', stage: 'harley', start: 18.5, len: 1.5, time: '6:30 PM', stageName: 'Harley-Davidson', plays: 210, image: null, scale: 3 },
  { id: 'a11', name: 'Local Natives', tier: 'know', genre: 'Indie Rock', day: 'jul2', stage: 'uline', start: 20, len: 1.5, time: '8:00 PM', stageName: 'Uline Warehouse', plays: 185, image: null, scale: 3 },
  { id: 'a12', name: 'Vampire Weekend', tier: 'know', genre: 'Indie Pop', day: 'jul2', stage: 'amp', start: 19.5, len: 1.5, time: '7:30 PM', stageName: 'Amphitheater', plays: 170, image: null, scale: 3 },
  { id: 'a13', name: 'Two Door Cinema Club', tier: 'know', genre: 'Indie Pop', day: 'jun28', stage: 'harley', start: 20, len: 1.5, time: '8:00 PM', stageName: 'Harley-Davidson', plays: 145, image: null, scale: 3 },
  { id: 'a14', name: 'The Kooks', tier: 'know', genre: 'Indie Rock', day: 'jul3', stage: 'uline', start: 18.5, len: 1.5, time: '6:30 PM', stageName: 'Uline Warehouse', plays: 120, image: null, scale: 3 },
  { id: 'a15', name: 'Foster the People', tier: 'know', genre: 'Indie Pop', day: 'jun26', stage: 'miller', start: 20, len: 1.5, time: '8:00 PM', stageName: 'Miller Lite Oasis', plays: 95, image: null, scale: 3 },

  // HEARD (20)
  { id: 'b1', name: 'Florence + The Machine', tier: 'heard', genre: 'Indie Pop', day: 'jul3', stage: 'amp', start: 20.5, len: 1.5, time: '8:30 PM', stageName: 'Amphitheater', plays: 45, image: null, scale: 2 },
  { id: 'b2', name: 'Arctic Monkeys', tier: 'heard', genre: 'Alternative', day: 'jun26', stage: 'harley', start: 22, len: 1.5, time: '10:00 PM', stageName: 'Harley-Davidson', plays: 38, image: null, scale: 2 },
  { id: 'b3', name: 'The Mountain Goats', tier: 'heard', genre: 'Indie Folk', day: 'jun27', stage: 'uline', start: 19.5, len: 1.5, time: '7:30 PM', stageName: 'Uline Warehouse', plays: 32, image: null, scale: 2 },
  { id: 'b4', name: 'Kaleo', tier: 'heard', genre: 'Blues Rock', day: 'jul4', stage: 'bmo', start: 19, len: 1.5, time: '7:00 PM', stageName: 'BMO Pavilion', plays: 29, image: null, scale: 2 },
  { id: 'b5', name: 'Grouplove', tier: 'heard', genre: 'Alternative', day: 'jun27', stage: 'miller', start: 21.5, len: 1.5, time: '9:30 PM', stageName: 'Miller Lite Oasis', plays: 24, image: null, scale: 1 },
  { id: 'b6', name: 'The Lumineers', tier: 'heard', genre: 'Folk Rock', day: 'jul2', stage: 'bmo', start: 22, len: 1.5, time: '10:00 PM', stageName: 'BMO Pavilion', plays: 21, image: null, scale: 2 },
  { id: 'b7', name: 'Lord Huron', tier: 'heard', genre: 'Indie Folk', day: 'jul3', stage: 'miller', start: 19.5, len: 1.5, time: '7:30 PM', stageName: 'Miller Lite Oasis', plays: 18, image: null, scale: 2 },
  { id: 'b8', name: 'Mt. Joy', tier: 'heard', genre: 'Indie Rock', day: 'jun28', stage: 'bmo', start: 18.5, len: 1.5, time: '6:30 PM', stageName: 'BMO Pavilion', plays: 15, image: null, scale: 2 },
  { id: 'b9', name: 'Noah Kahan', tier: 'heard', genre: 'Folk Pop', day: 'jul4', stage: 'uline', start: 20.5, len: 1.5, time: '8:30 PM', stageName: 'Uline Warehouse', plays: 12, image: null, scale: 3 },
  { id: 'b10', name: 'Caamp', tier: 'heard', genre: 'Indie Folk', day: 'jun26', stage: 'uline', start: 19, len: 1.5, time: '7:00 PM', stageName: 'Uline Warehouse', plays: 10, image: null, scale: 3 },
  { id: 'b11', name: 'The Head and the Heart', tier: 'heard', genre: 'Indie Folk', day: 'jul2', stage: 'miller', start: 20.5, len: 1.5, time: '8:30 PM', stageName: 'Miller Lite Oasis', plays: 9, image: null, scale: 3 },
  { id: 'b12', name: 'Maggie Rogers', tier: 'heard', genre: 'Indie Pop', day: 'jul3', stage: 'harley', start: 21.5, len: 1.5, time: '9:30 PM', stageName: 'Harley-Davidson', plays: 8, image: null, scale: 3 },
  { id: 'b13', name: 'Of Monsters and Men', tier: 'heard', genre: 'Indie Folk', day: 'jun28', stage: 'amp', start: 19.5, len: 1.5, time: '7:30 PM', stageName: 'Amphitheater', plays: 7, image: null, scale: 3 },
  { id: 'b14', name: 'Glass Animals', tier: 'heard', genre: 'Indie Pop', day: 'jul4', stage: 'harley', start: 18.5, len: 1.5, time: '6:30 PM', stageName: 'Harley-Davidson', plays: 6, image: null, scale: 3 },
  { id: 'b15', name: 'Alt-J', tier: 'heard', genre: 'Alternative', day: 'jun27', stage: 'amp', start: 18.5, len: 1.5, time: '6:30 PM', stageName: 'Amphitheater', plays: 5, image: null, scale: 3 },
  { id: 'b16', name: 'Cage the Elephant', tier: 'heard', genre: 'Alternative', day: 'jul2', stage: 'harley', start: 22.5, len: 1.5, time: '10:30 PM', stageName: 'Harley-Davidson', plays: 4, image: null, scale: 3 },
  { id: 'b17', name: 'The Black Keys', tier: 'heard', genre: 'Blues Rock', day: 'jun26', stage: 'miller', start: 18.5, len: 1.5, time: '6:30 PM', stageName: 'Miller Lite Oasis', plays: 3, image: null, scale: 3 },
  { id: 'b18', name: 'Greta Van Fleet', tier: 'heard', genre: 'Hard Rock', day: 'jul3', stage: 'amp', start: 18.5, len: 1.5, time: '6:30 PM', stageName: 'Amphitheater', plays: 3, image: null, scale: 3 },
  { id: 'b19', name: 'Tame Impala', tier: 'heard', genre: 'Psychedelic Pop', day: 'jun28', stage: 'bmo', start: 21.5, len: 1.5, time: '9:30 PM', stageName: 'BMO Pavilion', plays: 2, image: null, scale: 3 },
  { id: 'b20', name: 'The Strokes', tier: 'heard', genre: 'Alternative', day: 'jul4', stage: 'bmo', start: 21.5, len: 1.5, time: '9:30 PM', stageName: 'BMO Pavilion', plays: 1, image: null, scale: 3 },

  // NEW (11)
  { id: 'c1', name: 'Weyes Blood', tier: 'new', genre: 'Indie Folk', day: 'jun26', stage: 'bmi', start: 20, len: 1, time: '8:00 PM', stageName: 'BMI Stage', plays: 0, image: null, scale: 3 },
  { id: 'c2', name: 'Japanese Breakfast', tier: 'new', genre: 'Indie Pop', day: 'jun27', stage: 'bmi', start: 19, len: 1, time: '7:00 PM', stageName: 'BMI Stage', plays: 0, image: null, scale: 3 },
  { id: 'c3', name: 'Alvvays', tier: 'new', genre: 'Indie Pop', day: 'jul3', stage: 'bmi', start: 21, len: 1, time: '9:00 PM', stageName: 'BMI Stage', plays: 0, image: null, scale: 3 },
  { id: 'c4', name: 'Big Thief', tier: 'new', genre: 'Indie Folk', day: 'jun28', stage: 'bmi', start: 18.5, len: 1, time: '6:30 PM', stageName: 'BMI Stage', plays: 0, image: null, scale: 3 },
  { id: 'c5', name: 'Mitski', tier: 'new', genre: 'Indie Rock', day: 'jul2', stage: 'bmi', start: 20.5, len: 1, time: '8:30 PM', stageName: 'BMI Stage', plays: 0, image: null, scale: 3 },
  { id: 'c6', name: 'Snail Mail', tier: 'new', genre: 'Indie Rock', day: 'jul4', stage: 'bmi', start: 19.5, len: 1, time: '7:30 PM', stageName: 'BMI Stage', plays: 0, image: null, scale: 3 },
  { id: 'c7', name: 'Soccer Mommy', tier: 'new', genre: 'Indie Rock', day: 'jun27', stage: 'harley', start: 21, len: 1.5, time: '9:00 PM', stageName: 'Harley-Davidson', plays: 0, image: null, scale: 3 },
  { id: 'c8', name: 'Phoebe Bridgers', tier: 'new', genre: 'Indie Folk', day: 'jun26', stage: 'amp', start: 19, len: 1, time: '7:00 PM', stageName: 'Amphitheater', plays: 0, image: null, scale: 4 },
  { id: 'c9', name: 'Boygenius', tier: 'new', genre: 'Indie Rock', day: 'jul3', stage: 'bmo', start: 22.5, len: 1.5, time: '10:30 PM', stageName: 'BMO Pavilion', plays: 0, image: null, scale: 4 },
  { id: 'c10', name: 'Julien Baker', tier: 'new', genre: 'Indie Folk', day: 'jun28', stage: 'uline', start: 19.5, len: 1, time: '7:30 PM', stageName: 'Uline Warehouse', plays: 0, image: null, scale: 4 },
  { id: 'c11', name: 'Lucy Dacus', tier: 'new', genre: 'Indie Rock', day: 'jul2', stage: 'miller', start: 18.5, len: 1, time: '6:30 PM', stageName: 'Miller Lite Oasis', plays: 0, image: null, scale: 4 },
];

export const TIER_LABEL = {
  know: 'Heavy Rotation',
  heard: 'In Your Library',
  new: 'Discover'
};

export const TIER_COLOR_BG = {
  know: 'var(--blue)',
  heard: 'var(--teal)',
  new: 'var(--red)'
};

export const TIER_COLOR_FG = {
  know: 'var(--on-blue)',
  heard: 'var(--navy)',
  new: 'var(--on-blue)'
};

export const TIER_COLOR_TEXT = {
  know: 'var(--blue)',
  heard: 'var(--teal-ink)',
  new: 'var(--red)'
};

export function computeRecap(artists) {
  const know = artists.filter(a => a.tier === 'know').sort((a,b) => b.plays - a.plays);
  const heard = artists.filter(a => a.tier === 'heard').sort((a,b) => b.plays - a.plays);
  const newCount = artists.filter(a => a.tier === 'new').length;
  
  const known = know.length + heard.length;
  const total = artists.length;
  const pct = Math.round((known / total) * 100);
  
  const topArtist = know[0];
  const dontMiss = [...know.slice(0, 4), ...heard.slice(0, 2)].sort((a,b) => b.plays - a.plays);

  let minutes = 0;
  const genres = {};
  const daysCount = {};

  [...know, ...heard].forEach(a => {
    minutes += a.plays * 3.6; // approx song len
    if(!genres[a.genre]) genres[a.genre] = 0;
    genres[a.genre] += a.plays;
    
    if(!daysCount[a.day]) daysCount[a.day] = 0;
    daysCount[a.day]++;
  });

  const hours = Math.round(minutes / 60);
  const topGenres = Object.entries(genres)
    .sort((a,b) => b[1] - a[1])
    .slice(0, 4)
    .map(g => ({ g: g[0], p: g[1], pct: Math.round((g[1] / know[0].plays) * 100) }));

  const bestDayId = Object.entries(daysCount).sort((a,b) => b[1] - a[1])[0]?.[0];
  const bestDay = DAYS.find(d => d.id === bestDayId) || DAYS[0];

  const topG = topGenres[0]?.g || '';
  let persona = 'The Omnivore';
  let personaBlurb = 'You listen to everything.';
  if (topG.includes('Indie') || topG.includes('Folk')) {
    persona = 'The Indie Lifer';
    personaBlurb = 'You know every B-side.';
  } else if (topG.includes('Hip Hop') || topG.includes('R&B')) {
    persona = 'The Beat Chaser';
    personaBlurb = 'You ride the rhythm.';
  } else if (topG.includes('Rock') || topG.includes('Punk') || topG.includes('Metal')) {
    persona = 'The Lifer';
    personaBlurb = 'Guitars are your religion.';
  } else if (topG.includes('Country')) {
    persona = 'The Boot-Stomper';
    personaBlurb = 'You appreciate a good story.';
  }

  return {
    known,
    total,
    pct,
    topArtist,
    dontMiss,
    minutes,
    hours,
    topGenres,
    bestDay,
    persona,
    personaBlurb,
    counts: { know: know.length, heard: heard.length, new: newCount },
    topArtistStat: { plays: topArtist?.plays || 0, hours: Math.round((topArtist?.plays || 0) * 3.6 / 60), playlists: Math.ceil((topArtist?.plays || 0) / 78) }
  };
}

export const FESTIVALS = [
  { id: 'f1', name: 'Lollapalooza', city: 'Chicago, IL', dates: 'Aug 1-4', dropped: true, synced: false, stats: { know: 42, heard: 18, total: 170 }, vibe: 'Massive' },
  { id: 'f2', name: 'Pitchfork', city: 'Chicago, IL', dates: 'Jul 19-21', dropped: true, synced: false, stats: { know: 21, heard: 12, total: 45 }, vibe: 'Curated' },
  { id: 'f3', name: 'Summerfest', city: 'Milwaukee, WI', dates: 'Jun 16-Jul 4', dropped: false, synced: true, stats: { know: 15, heard: 20, total: 46 }, vibe: 'Lakefront' },
  { id: 'f4', name: 'Riot Fest', city: 'Chicago, IL', dates: 'Sep 20-22', dropped: false, synced: false, stats: { know: 38, heard: 14, total: 90 }, vibe: 'Punk' },
  { id: 'f5', name: 'Outside Lands', city: 'San Francisco, CA', dates: 'Aug 9-11', dropped: false, synced: false, stats: { know: 28, heard: 22, total: 95 }, vibe: 'Park' },
  { id: 'f6', name: 'Austin City Limits', city: 'Austin, TX', dates: 'Oct 4-13', dropped: false, synced: false, stats: { know: 31, heard: 25, total: 120 }, vibe: 'Eclectic' },
  { id: 'f7', name: 'Coachella', city: 'Indio, CA', dates: 'Apr 11-20', dropped: false, synced: false, stats: { know: 45, heard: 30, total: 160 }, vibe: 'Desert' },
  { id: 'f8', name: 'Bonnaroo', city: 'Manchester, TN', dates: 'Jun 12-15', dropped: false, synced: false, stats: { know: 34, heard: 20, total: 110 }, vibe: 'Camping' },
];
