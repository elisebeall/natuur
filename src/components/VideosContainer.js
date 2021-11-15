import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Video from '../components/Video';
import useFetch from '../useFetch';
import endpoints from '../endpoints.js';
import '../css/VideosContainer.css';

const VideosContainer = ({ webcams }) => {
  // const [videosContainerState, setVideosContainerState] = useState(null);
  // const { data: webcams, isLoading, error } = useFetch(`${endpoints.base}${endpoints.webcams}${endpoints.search}?${apiKey}`);
  //
  // console.log(`${endpoints.base}${endpoints.endpoint}${endpoints.search}?${apiKey}`);

  console.log('videoscontainer webcams', webcams)

  const getActiveVideos = () => {
    const activeVideos = webcams.data.filter(webcam => webcam.status === 'Active').map(webcam => {
        return <Video video={webcam} />
      })
    return activeVideos;
  }

  const getStreamingVideos = () => {
    const streamingVideos = webcams.data.filter(webcam => webcam.isStreaming).map(webcam => {
        return <Video video={webcam} />
      })
    return streamingVideos;
  }

  //Total of 192 webcams, but shows default 50 at a time.  Set with 'limit' variable.
  return (
    <>
      {getActiveVideos()}
    </>
  );
}

export default VideosContainer;
