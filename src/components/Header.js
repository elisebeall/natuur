import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import Search from './components/Search';
import natuurLogo from './assets/natuur-logo.png';
import './components/Header.css';

const Header = () => {
  return (
    <Link exact path="/">
      <img src={natuurLogo} alt="natuur logo: gold circle with northeast pointing deep green arrow overlay" />
    </Link>
  );
}

export default Header;
