import React, { useState, useEffect } from 'react';
//import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Video from '../components/Video';
import Error from './Error';
import Loading from './Loading';
import useFetch from '../useFetch';
import { endpoints } from '../endpoints.js';
import '../css/VideosContainer.css';

const VideosContainer = ({ searchTerm }) => {
  const string = `${encodeURIComponent(searchTerm.trim())}`;

  console.log(`${endpoints.base}${endpoints.search}${string}${endpoints.apiKey}`);

  const { dataState: webcams, isLoadingState, errorState } = useFetch(`${endpoints.base}${endpoints.search}${string}${endpoints.apiKey}`);

  console.log('videoscontainer', webcams, isLoadingState, errorState)

  const getActiveVideos = () => {
    const activeVideos = webcams.data.filter(webcam => webcam.status === 'Active').map(webcam => {
        return <Video video={webcam} />
      })
    return activeVideos;
  }

  // const getStreamingVideos = () => {
  //   const streamingVideos = webcams.data.filter(webcam => webcam.isStreaming).map(webcam => {
  //       return <Video video={webcam} />
  //     })
  //   return streamingVideos;
  // }

  return (
    <>
      {isLoadingState && <Loading />}
      {errorState && <Error error={errorState} />}
      {getActiveVideos()}
    </>
  );
}

/*

<Switch>
  {videos.length ?
    <Route exact path={`/?search=${searchTerm}`}>
      <VideosContainer webcams={videos} />
    </Route> :
    <Route exact path="/">
      <Error error="Sorry, there are no results matching your search." />
    </Route>
  }
</Switch>

*/

export default VideosContainer;

VideosContainer.propTypes = {
  searchTerm: PropTypes.string
};
