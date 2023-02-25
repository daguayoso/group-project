import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FuelQuoteForm from './FuelQuoteForm';
import FuelQuoteHistory from './FuelQuoteHistory';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import './LoginPage.css';
import Profile from './Profile';
//import './Profile.css';
import './FQF.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  return (
    
      <div>
        <nav>
          <ul>
            <li
              onClick={() => handleNavClick('login')}>Login Page
            </li> 
            <li
              onClick={() => handleNavClick('profile')}>Profile
            </li>
            <li
              onClick={() => handleNavClick('home')}>Home
            </li>
            <li
              onClick={() => handleNavClick('fuel')}>Fuel Quote Form
            </li>

            <li
              onClick={() => handleNavClick('history')}>Fuel Quote History
            </li>
          </ul>
        </nav>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'fuel' && <FuelQuoteForm />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'history' && <FuelQuoteHistory/>}
      </div>
  );
}

export default App;
