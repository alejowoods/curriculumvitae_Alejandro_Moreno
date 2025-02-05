import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';  
import ResumeGerman from './components/ResumeGerman.jsx';
import ResumeEnglish from './components/ResumeEnglish.jsx';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/german" element={<ResumeGerman />}></Route>
          <Route path="/english" element={<ResumeEnglish />}></Route>
        </Routes>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>	
            </li>
            <li>
              <Link to="/german">Lebenslauf (DE)</Link>
            </li>
            <li>
              <Link to="/english">Resume (EN)</Link>
            </li>
          </ul>
        </nav>
        <Footer />

    </>
  );
}

export default App;