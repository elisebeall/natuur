import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import useFetch from './useFetch';
import Header from './components/Header';
import VideosContainer from './components/VideosContainer';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <VideosContainer />
      <Footer />
    </>
  );
}

export default App;
