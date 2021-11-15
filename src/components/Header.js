import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//import Search from './components/Search';
import natuurLogo from '../assets/natuur-logo.png';
import natuurImage from '../assets/image-logo.png';
import natuurText from '../assets/natuur.png';
import '../css/Header.css';

const Header = () => {
  return (
    <>
      <img src={natuurImg} alt="natuur logo: gold circle with northeast pointing deep green arrow overlay" />
      <img src={natuurText} alt="natuur" />
    </>
  );
}

export default Header;
