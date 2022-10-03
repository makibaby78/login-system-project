import React from 'react'
import './app.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import Profile from './Screens/Profile/Profile';
import ErrorPage from './Screens/ErrorPage/ErrorPage';

function App() {

  return (
    <div className="app-wrapper">
      <Router>
        <Routes>             
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
