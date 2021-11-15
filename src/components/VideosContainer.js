import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Video from './components/Video';
import useFetch from
import { endpoints, apiKey } from './endpoints';
import './css/VideosContainer.css';

const VideosContainer = (searchState) => {
  // const [videosContainerState, setVideosContainerState] = useState(null);
  const { data: webcams, isLoading, error } = useFetch(`${enpoints.base}${endpoints.webcams}${endpoints.search}?${apiKey}`);

  const getAllVideos = () => {
    return webcams.data
      .filter(webcam => webcam.status === 'Active')
      .map(webcam => {
        return <Video video={webcam} />
      })
  }

  //Total of 192 webcams, but shows default 50 at a time.  Set with 'limit' variable.
  return (
    <>
      {getAllVideos()}
    </>
  );
}

export default VideosContainer;
