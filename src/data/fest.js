const DAYS = [
  { id: 'jun16', dow: 'TUE', dnum: '16', mon: 'JUN', wknd: 1 },
  { id: 'jun18', dow: 'THU', dnum: '18', mon: 'JUN', wknd: 1 },
  { id: 'jun19', dow: 'FRI', dnum: '19', mon: 'JUN', wknd: 1 },
  { id: 'jun20', dow: 'SAT', dnum: '20', mon: 'JUN', wknd: 1 },
  { id: 'jun25', dow: 'THU', dnum: '25', mon: 'JUN', wknd: 2 },
  { id: 'jun26', dow: 'FRI', dnum: '26', mon: 'JUN', wknd: 2 },
  { id: 'jun27', dow: 'SAT', dnum: '27', mon: 'JUN', wknd: 2 },
  { id: 'jul02', dow: 'THU', dnum: '02', mon: 'JUL', wknd: 3 },
  { id: 'jul03', dow: 'FRI', dnum: '03', mon: 'JUL', wknd: 3 },
  { id: 'jul04', dow: 'SAT', dnum: '04', mon: 'JUL', wknd: 3 },
];

const STAGES = {
  AMP: 'American Family Amph',
  BMO: 'BMO Pavilion',
  GEN: 'Generac Power Stage',
  OAS: 'Miller Lite Oasis',
  USC: 'UScellular Stage',
  ROAD: 'Harley Roadhouse',
};

const RAW = [
  ['Garth Brooks', 'jun16', 'AMP', '8:00 PM', 20, 1.5, 'Country', 'new', 0, 1],
  ['Megan Moroney', 'jun18', 'AMP', '8:00 PM', 20, 1.5, 'Country', 'heard', 34, 1],
  ['Don Toliver', 'jun19', 'AMP', '9:00 PM', 21, 1.5, 'Hip-Hop', 'heard', 88, 1],
  ['Carín León', 'jun20', 'AMP', '8:30 PM', 20.5, 1.5, 'Regional Mexican', 'new', 0, 1],
  ['Ed Sheeran', 'jun25', 'AMP', '8:30 PM', 20.5, 1.75, 'Pop', 'know', 412, 1],
  ['Cody Johnson', 'jun26', 'AMP', '8:00 PM', 20, 1.5, 'Country', 'new', 2, 1],
  ['Post Malone', 'jun27', 'AMP', '9:00 PM', 21, 1.5, 'Hip-Hop / Pop', 'know', 537, 1],
  ['Muse', 'jul02', 'AMP', '9:00 PM', 21, 1.75, 'Rock', 'know', 690, 1],
  ['Alex Warren', 'jul03', 'AMP', '8:00 PM', 20, 1.5, 'Pop', 'heard', 51, 1],
  ['Jelly Roll', 'jul04', 'AMP', '8:30 PM', 20.5, 1.5, 'Country / Rock', 'heard', 73, 1],

  ['Passion Pit', 'jun18', 'BMO', '9:30 PM', 21.5, 1, 'Indie Pop', 'know', 322, 2],
  ['Third Eye Blind', 'jun19', 'BMO', '8:30 PM', 20.5, 1.25, 'Alt Rock', 'know', 268, 2],
  ['Father John Misty', 'jun20', 'BMO', '9:00 PM', 21, 1.25, 'Indie Folk', 'know', 401, 2],
  ['Tash Sultana', 'jun18', 'GEN', '9:00 PM', 21, 1, 'Indie', 'heard', 96, 2],
  ['flipturn', 'jun19', 'GEN', '8:00 PM', 20, 1, 'Indie Rock', 'know', 154, 2],
  ['Amyl and The Sniffers', 'jun20', 'GEN', '9:30 PM', 21.5, 1, 'Punk', 'heard', 61, 2],
  ['The Roots', 'jun25', 'BMO', '9:00 PM', 21, 1.25, 'Hip-Hop', 'know', 215, 2],
  ['Louis Tomlinson', 'jun26', 'BMO', '8:30 PM', 20.5, 1.25, 'Pop', 'new', 0, 2],
  ['Grouplove', 'jun27', 'GEN', '8:30 PM', 20.5, 1, 'Indie', 'know', 288, 2],
  ['KALEO', 'jun26', 'GEN', '9:00 PM', 21, 1, 'Rock', 'heard', 77, 2],
  ['The Revivalists', 'jun27', 'BMO', '8:00 PM', 20, 1.25, 'Rock', 'heard', 64, 2],
  ['Kim Gordon', 'jun25', 'OAS', '9:30 PM', 21.5, 1, 'Experimental', 'heard', 42, 2],
  ['Sudan Archives', 'jun26', 'OAS', '9:00 PM', 21, 1, 'Experimental R&B', 'know', 133, 2],
  ['The Mountain Goats', 'jun27', 'OAS', '8:30 PM', 20.5, 1, 'Indie Folk', 'know', 376, 2],
  ['Spoon', 'jul02', 'BMO', '8:30 PM', 20.5, 1.25, 'Indie Rock', 'know', 244, 2],
  ['All Time Low', 'jul02', 'GEN', '9:00 PM', 21, 1, 'Pop Punk', 'heard', 58, 2],
  ['Sean Paul', 'jul03', 'BMO', '9:00 PM', 21, 1.25, 'Dancehall', 'heard', 49, 2],
  ['Flo Rida', 'jul03', 'GEN', '8:30 PM', 20.5, 1, 'Hip-Hop', 'heard', 37, 2],
  ['Gin Blossoms', 'jul04', 'BMO', '7:30 PM', 19.5, 1, 'Alt Rock', 'heard', 45, 2],
  ['Living Colour', 'jul04', 'GEN', '8:00 PM', 20, 1, 'Rock', 'new', 1, 2],

  ['Holly Humberstone', 'jun18', 'OAS', '8:00 PM', 20, 1, 'Indie Pop', 'know', 119, 3],
  ['Echo & The Bunnymen', 'jun19', 'OAS', '8:30 PM', 20.5, 1, 'Post-Punk', 'heard', 55, 3],
  ['The Family Stone', 'jun20', 'ROAD', '8:00 PM', 20, 1, 'Funk', 'new', 3, 3],
  ['STYX', 'jun18', 'ROAD', '8:30 PM', 20.5, 1, 'Classic Rock', 'heard', 28, 3],
  ['David Lee Roth', 'jun19', 'ROAD', '9:00 PM', 21, 1, 'Rock', 'new', 0, 3],
  ['Wolfmother', 'jun25', 'GEN', '8:30 PM', 20.5, 1, 'Hard Rock', 'heard', 71, 3],
  ['Halestorm', 'jun26', 'ROAD', '9:00 PM', 21, 1, 'Hard Rock', 'new', 4, 3],
  ['10,000 Maniacs', 'jun27', 'ROAD', '7:30 PM', 19.5, 1, 'Alt Rock', 'new', 2, 3],
  ['The Beths', 'jul02', 'OAS', '8:00 PM', 20, 1, 'Indie Rock', 'know', 187, 3],
  ['Sunflower Bean', 'jul02', 'USC', '8:00 PM', 20, 1, 'Indie', 'know', 102, 3],
  ['Soul Asylum', 'jul04', 'ROAD', '8:00 PM', 20, 1, 'Alt Rock', 'heard', 33, 3],
  ['Spin Doctors', 'jul03', 'ROAD', '7:30 PM', 19.5, 1, 'Rock', 'new', 0, 3],
  ['KT Tunstall', 'jul03', 'OAS', '8:30 PM', 20.5, 1, 'Pop Rock', 'heard', 47, 3],
  ['Sister Hazel', 'jul04', 'OAS', '7:30 PM', 19.5, 1, 'Alt Rock', 'new', 1, 3],
  ['Three 6 Mafia', 'jul04', 'GEN', '9:30 PM', 21.5, 1, 'Hip-Hop', 'heard', 52, 3],
  ['Old 97’s', 'jun27', 'USC', '7:00 PM', 19, 1, 'Alt Country', 'heard', 29, 3],
];

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const artists = RAW.map((r, i) => ({
  id: slug(r[0]) + '-' + i,
  name: r[0], day: r[1], stage: r[2], stageName: STAGES[r[2]],
  time: r[3], start: r[4], len: r[5], genre: r[6],
  tier: r[7], plays: r[8], scale: r[9],
  headliner: r[9] === 1,
}));

const counts = { know: 0, heard: 0, new: 0 };
artists.forEach((a) => counts[a.tier]++);

const FRIENDS = [
  { id: 'sam', name: 'Sam Rivera',  handle: '@samr',   initial: 'SR', color: 'blue',   going: true,
    knows: ['Third Eye Blind', 'Muse', 'Spoon', 'flipturn', 'Father John Misty', 'Grouplove'] },
  { id: 'jo',  name: 'Jo Park',     handle: '@jopark', initial: 'JP', color: 'green',  going: true,
    knows: ['Holly Humberstone', 'Sudan Archives', 'The Beths', 'Echo & The Bunnymen', 'Third Eye Blind'] },
  { id: 'max', name: 'Max Cohen',   handle: '@maxc',   initial: 'MC', color: 'ink',    going: false,
    knows: ['Don Toliver', 'Post Malone', 'The Roots', 'Three 6 Mafia', 'flipturn'] },
  { id: 'lia', name: 'Lia Nguyen',  handle: '@lian',   initial: 'LN', color: 'yellow', going: true,
    knows: ['flipturn', 'Grouplove', 'The Mountain Goats', 'Echo & The Bunnymen', 'Third Eye Blind'] },
];

const GOING_WITH = {
  'Third Eye Blind': ['sam', 'jo', 'lia'],
  'flipturn': ['lia', 'max'],
  'Don Toliver': ['max'],
  'Echo & The Bunnymen': ['jo'],
};

const friendsWhoKnow = (n) => FRIENDS.filter((f) => f.knows.includes(n));
const goingWith = (n) => (GOING_WITH[n] || []).map((id) => FRIENDS.find((f) => f.id === id));

export const FEST = {
  name: 'SUMMERFEST',
  city: 'MILWAUKEE, WI',
  year: '2026',
  dates: 'JUN 16 – JUL 4',
  venue: 'Henry Maier Festival Park',
  theDay: 'jun19',
  dayLabel: 'FRI · JUN 19',
  days: DAYS,
  stages: STAGES,
  artists,
  counts,
  total: artists.length,
  friends: FRIENDS,
  goingWith,
  friendsWhoKnow,
  user: { name: 'alex', handle: '@alexlistens', initial: 'AL', minutes: 41280, color: 'blue' },
  tierMeta: {
    know: { label: 'Know them', short: 'KNOW', cls: 'know', note: 'heavy rotation' },
    heard: { label: 'Heard them', short: 'HEARD', cls: 'heard', note: 'in your library' },
    new: { label: 'New to you', short: 'NEW', cls: 'new', note: 'discover' },
  },
  tierOrder: ['know', 'heard', 'new'],
};
