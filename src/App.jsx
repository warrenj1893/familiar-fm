import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Authorize from './pages/Authorize.jsx';
import Discover from './pages/Discover.jsx';
import Lineup from './pages/Lineup.jsx';
import Schedule from './pages/Schedule.jsx';
import Playlist from './pages/Playlist.jsx';
import Recap from './pages/Recap.jsx';
import Artist from './pages/Artist.jsx';
import ForYou from './pages/ForYou.jsx';
import Feed from './pages/Feed.jsx';
import Profile from './pages/Profile.jsx';
import Notifs from './pages/Notifs.jsx';
import LogSet from './pages/LogSet.jsx';
import Story from './pages/Story.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/authorize" element={<Authorize />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifs" element={<Notifs />} />
        <Route path="/log-set" element={<LogSet />} />
        <Route path="/story/:type" element={<Story />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
