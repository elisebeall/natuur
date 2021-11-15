import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useFetch from './useFetch';
import Header from './components/Header';
import VideosContainer from './components/VideosContainer';
import Footer from './components/Footer';
import { endpoints } from './endpoints.js';
import './App.css';

const App = () => {
  const { dataState: videos, isLoadingState, errorState } = useFetch(endpoint.default);
  const [ searchState, setSearchState ] = useState('');

  const searchWebcams = (searchState) => {
    const { dataState: searchedVideos, isLoadingState, errorState } = useFetch(`${endpoint.search}"${searchState}"`);
  }

  useEffect(() => {
    searchWebcams(searchState);
  }, [searchState]);

  return (
    <>
      <Header />
      <Search searchTerm={searchState} setSearchState={setSearchState} />
      {isLoadingState && <Loading />}
      <Switch>
        {error && <Error/>}
        {searchedVideos.length ?
          <Route exact path="/?search=`${searchState}`" component={VideosContainer videos={searchedVideos}} /> :
          <Route exact path="/" component={VideosContainer videos={videos}} /> ;
        }
      </Switch>
      <Footer />
    </>
  );
}

export default App;
