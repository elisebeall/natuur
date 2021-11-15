import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Video from '../components/Video';
import useFetch from '../useFetch';
import { endpoints, apiKey } from '../useEndpoints';
import '../css/VideosContainer.css';

const VideosContainer = (webcams) => {
  // const [videosContainerState, setVideosContainerState] = useState(null);
  // const { data: webcams, isLoading, error } = useFetch(`${endpoints.base}${endpoints.webcams}${endpoints.search}?${apiKey}`);
  //
  // console.log(`${endpoints.base}${endpoints.endpoint}${endpoints.search}?${apiKey}`);

  const getAllVideos = () => {
    console.log(webcams)
    const allVideos = webcams.data
      .filter(webcam => webcam.status === 'Active')
      .map(webcam => {
        return <Video video={webcam} />
      })
    return allVideos;
  }

  //Total of 192 webcams, but shows default 50 at a time.  Set with 'limit' variable.
  return (
    <>
      {getAllVideos()}
    </>
  );
}

export default VideosContainer;
