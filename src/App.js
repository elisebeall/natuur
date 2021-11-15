import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import useFetch from './useFetch';
import Header from './components/Header';
import VideosContainer from './components/VideosContainer';
import Footer from './components/Footer';
import endpoints from './endpoints.js';
import './App.css';

const apiKey = 'WWBfRf37fletVxvN9jVhqlrhofEwnhtHPbhuAhxP';

const App = () => {
  const { dataState: videos, isLoadingState, errorState } = useFetch(endpoint.videos);
  const { searchState, setSeachState } = useState('');

  useEffect(() => {
    
  }, [searchState]);

  return (
    <>
      <Header />
      <Search searchTerm={searchState} setSearchState={setSearchState} />
      <Switch>
        <VideosContainer webcams={videos} />
        <Loading loading={isLoadingState} />
        <Error error={errorState} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
