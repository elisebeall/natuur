import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useFetch from './useFetch';
import Header from './components/Header';
import Search from './components/Search';
import Error from './components/Error';
import Loading from './components/Loading';
import VideosContainer from './components/VideosContainer';
import Footer from './components/Footer';
import natuurLogo from './assets/natuur-logo.png';
import endpoints from './endpoints.js';
import './App.css';

const App = () => {
  // const { dataState: videos, isLoadingState, errorState } = useFetch(`${endpoints.base}${endpoints.limit}${endpoints.apiKey}`);
  // console.log('app videos', videos);

  return (
    <main>
      <Header />
      <Search />
      <Footer />
    </main>
  );
}

export default App;
