import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage';

function App() {
  return (
      <div>
          <Router>
              <Routes>
                  <Route exact path="/" element={<HomePage />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App
