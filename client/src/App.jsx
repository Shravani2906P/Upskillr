import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SwapDashboard from './pages/SwapDashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { useAuth } from './context/AuthProvider';

function App() {
  const { user } = useAuth(); // ✅ add this line

  return (
    <Router>
      <header className="navbar">
        <Link to="/" className="logo">SkillSwap</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/swaps">Swaps</Link>
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/register">Register</Link>}
          {user && (
            <img
              src={`http://localhost:5000/uploads/${user.profilePic}`}
              alt="avatar"
              className="avatar"
            />
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swaps" element={<SwapDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


