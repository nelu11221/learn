import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import Cabinet from './pages/Cabinet';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('learnify_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleRegister = (userData) => {
    localStorage.setItem('learnify_user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('learnify_user');
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursuri" element={<Courses />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/suport" element={<Support />} />
            <Route path="/cabinet" element={<Cabinet user={user} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
