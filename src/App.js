import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import Homepage from "./pages/Homepage.js";
import './App.css';

const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} />
          {/* Add other Routes as needed */}
        </Routes>
        {/* Place other components outside the Routes if needed */}
    </Router>
  );
};

export default App;
