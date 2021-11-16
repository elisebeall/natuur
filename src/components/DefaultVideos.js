import React, { useState, useEffect, setTimeout } from 'react';
//import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Video from '../components/Video';
import Error from './Error';
import Loading from './Loading';
import useFetch from '../useFetch';
import { endpoints } from '../endpoints.js';
import '../css/DefaultVideos.css';

const DefaultVideos = () => {
  const string = "Colorado";
  const { dataState: defaultVids, isLoadingState, errorState } = useFetch(`${endpoints.base}${endpoints.search}${string}${endpoints.apiKey}`);

  console.log(`${endpoints.base}${endpoints.search}${string}${endpoints.apiKey}`);

  return (
    <div className="defaultVids">
      {isLoadingState && <Loading />}
      {errorState && <Error error={errorState} />}
      {defaultVids.data.map(video => <Video videos={video} />)}
    </div>
  );
}

/*

<Switch>
  {videos.length ?
    <Route exact path={`/?search=${searchTerm}`}>
      <DefaultVideos webcams={videos} />
    </Route> :
    <Route exact path="/">
      <Error error="Sorry, there are no results matching your search." />
    </Route>
  }
</Switch>

*/

export default DefaultVideos;

DefaultVideos.propTypes = {
  searchTerm: PropTypes.string
};
