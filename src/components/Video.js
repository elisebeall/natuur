import React, { useTimeout, useState, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import endpoints from './endpoints';
//import defaultScreenshot from './assets/Lake-McDonald.png';
//<img src={defaultScreenshot} alt="Lake-McDonald"/>
import './components/Video.css';

const Video = (video) => {
  const [currentVideoState, setCurrentVideoState] = useState(null);

  useTimeout(() => {
    setCurrentVideoState(video);
  }, 60000);

  return (
    <>
      <iframe
        src={currentVideoState.url}
        value={currentVideoState.url}
        height="100%"
        width="100%"
      />
    </>
  );
}

export default Video;
