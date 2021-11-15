import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useFetch from './useFetch';
import Header from './components/Header';
import Search from './components/Search';
import Error from './components/Error';
import Loading from './components/Loading';
import VideosContainer from './components/VideosContainer';
import Footer from './components/Footer';
import { endpoints, apiKey } from './useEndpoints.js';
import './App.css';

const App = () => {
  const { dataState: videos, isLoadingState, errorState } = useFetch(`${endpoints.base}${endpoints.default}${endpoints.apiKey}`);
  const [ searchState, setSearchState ] = useState('');

  const searchWebcams = (searchState) => {
  }

  const { dataState: searchedVideos, isLoadingState: searchedLoading, errorState: searchedError } = useFetch(`${endpoints.search}"${searchState}"`);

  useEffect(() => {
    searchWebcams(searchState);
  }, [searchState]);

  return (
    <main>
      <Header />
      <Search searchTerm={searchState} setSearchState={setSearchState} />
      <Switch>
        {isLoadingState && <Loading />}
        {errorState && <Error />}
        {searchState.length ?
          <Route path={`/?search=${searchState}`}>
            <VideosContainer videos={searchedVideos} />
          </Route> :
          <Route exact path="/">
            <VideosContainer videos={videos} />
          </Route>
        }
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
