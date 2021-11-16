import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useFetch from './useFetch';
import Header from './components/Header';
import Search from './components/Search';
// import Error from './components/Error';
// import Loading from './components/Loading';
// import VideosContainer from './components/VideosContainer';
import Footer from './components/Footer';
import natuurLogo from './assets/natuur-logo.png';
import './App.css';

const App = () => {
  return (
    <main className="app">
      <Header className="header" />
      <Search className="search" />
      <Footer className="footer" />
    </main>
  );
}

export default App;
