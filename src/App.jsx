import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from './Pages/LandingPages/HomePage';
import AboutPage from './Pages/LandingPages/AboutPage';
import SignInPage from './Pages/LandingPages/SignInPage';
import DashboardPage from './Pages/AccountPages/DashboardPage';
import BusinessPage from './Pages/AccountPages/BusinessPage';

function App() {
  return (
      <div>
          <Router>
              <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/About" element={<AboutPage />} />
                  <Route exact path="/SignIn" element={<SignInPage />} />

                  <Route exact path="/Account/Dashboard" element={<DashboardPage />} />
                  <Route exact path="/Account/Business" element={<BusinessPage />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App
