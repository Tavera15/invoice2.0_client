import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
      <div>
          <Router>
              <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/About" element={<AboutPage />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App
