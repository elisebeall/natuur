import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Video from '../components/Video';
import Error from './Error';
import Loading from './Loading';
import useFetch from '../useFetch';
import { endpoints } from '../endpoints.js';
import '../css/VideosContainer.css';

const VideosContainer = ({ searchTerm }) => {
  console.log(`${endpoints.base}${endpoints.search}${searchTerm}${endpoints.limit}${endpoints.apiKey}`);

  const { dataState, isLoadingState, errorState } = useFetch(`${endpoints.base}${endpoints.search}${searchTerm}${endpoints.limit}${endpoints.apiKey}`);

  console.log('videoscontainer videos', dataState)

  const getActiveVideos = () => {
    const activeVideos = dataState.data.filter(webcam => webcam.status === 'Active').map(webcam => {
        return <Video video={webcam} />
      })
    return activeVideos;
  }

  const getStreamingVideos = () => {
    const streamingVideos = dataState.data.filter(webcam => webcam.isStreaming).map(webcam => {
        return <Video video={webcam} />
      })
    return streamingVideos;
  }

  return (
    <>
      {isLoadingState && <Loading />}
      {errorState && <Error error={errorState} />}
      {getStreamingVideos()}
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
