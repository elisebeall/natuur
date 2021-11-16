import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import DefaultVideos from './components/DefaultVideos';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <main className="app">
      <Header className="header" />
      <Search className="search" />
      <DefaultVideos className="defaultVids" />
      <Footer className="footer" />
    </main>
  );
}

export default App;
