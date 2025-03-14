import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import PrivateRoute from './Components/PrivateRoute';
import HomePage from './Pages/LandingPages/HomePage';
import AboutPage from './Pages/LandingPages/AboutPage';
import SignInPage from './Pages/LandingPages/SignInPage';
import DashboardPage from './Pages/AccountPages/DashboardPage';
import BusinessPage from './Pages/AccountPages/BusinessPage';
import InvoicePage from './Pages/AccountPages/InvoicePage';
import InvoiceBookManager from './Pages/AccountPages/InvoiceBookManager';
import ExternalInvoicePage from './Pages/AccountPages/ExternalInvoicePage';
import ProfilePage from './Pages/AccountPages/ProfilePage';

function App() {
  return (
      <div>
          <Router>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/About" element={<AboutPage />} />
                <Route exact path="/SignIn" element={<SignInPage />} />

                <Route 
                    exact path="/Account/Dashboard"
                    element={
                    <PrivateRoute>
                        <DashboardPage />
                    </PrivateRoute>
                    }
                />
                <Route 
                    exact path="/Account/Business/:id"
                    element={
                    <PrivateRoute>
                        <BusinessPage />
                    </PrivateRoute>
                    }
                />
                <Route 
                    exact path="/Account/Invoice/:id/:invoiceid"
                    element={
                    <PrivateRoute>
                        <InvoicePage />
                    </PrivateRoute>
                    }
                />
                <Route 
                    exact path="/Account/InvoiceBook/:id"
                    element={
                    <PrivateRoute>
                        <InvoiceBookManager />
                    </PrivateRoute>
                    }
                />
                <Route 
                    exact path="/Account/Profile"
                    element={
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                    }
                />

                <Route exact path='Account/InvoiceExternal/:id/:invoiceid/:auth' element={<ExternalInvoicePage />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App
