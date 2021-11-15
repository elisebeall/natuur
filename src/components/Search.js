import React, { useState, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import endpoints from '../endpoints.js';
import useFetch from '../useFetch';
import '../css/Search.css';

const Search = () => {
  const [ searchState, setSearchState ] = useState('');

  const searchWebcams = (string) => {
    console.log(`${endpoints.base}${endpoints.search}"${string}"${endpoints.limit}${endpoints.apiKey}`);
    const {
      dataState: searchedVideos,
      isLoadingState: searchedLoading,
      errorState: searchedError
    } = useFetch(`${endpoints.base}${endpoints.search}"${string}"${endpoints.limit}${endpoints.apiKey}`);

    return searchedWebcams;
  }

  const handleChange = (e) => {
    setSearchState(e.target.value);
    searchWebcams(e.target.value);
  }

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Where would you like to be right now?"
          value={searchState}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="submit"
          value="submit"
          onClick={searchWebcams}
        />
      </div>
      {isLoadingState && <Loading />}
      {errorState && <Error />}
      <Switch>
        {searchedWebcams.length ?
          <Route exact path={`/?search=${searchState}`}>
            <VideosContainer webcams={videos} />
          </Route> :
          <Route exact path="/">
            <VideosContainer webcams={videos} />
          </Route>
        }
      </Switch>
    </>
  );
}

export default Search;
