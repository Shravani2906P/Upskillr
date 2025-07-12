import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SwapDashboard from './pages/SwapDashboard';

function App() {
  return (
    <Router>
      <nav>
  <Link to="/">Home</Link>
  <Link to="/profile">Create Profile</Link>
  <Link to="/swaps">Swap Dashboard</Link>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swaps" element={<SwapDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

