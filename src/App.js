import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import FinalHtmlContext from './contexts/FinalHtmlContext'; // Ensure correct path
import Homepage from "./pages/Homepage.js"
import './App.css';

const App = () => {
  const [finalHtml, setFinalHtml] = useState('');

  return (
    <Router>
      <FinalHtmlContext.Provider value={{ finalHtml, setFinalHtml }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} /> {/* Add the Homepage route */}
          {/* Add other Routes as needed */}
        </Routes>
        {/* Place other components outside the Routes if needed */}
      </FinalHtmlContext.Provider>
    </Router>
  );
};

export default App;
