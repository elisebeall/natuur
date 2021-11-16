import React, { useTimeout, useState, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { endpoints } from '../endpoints';
import placeholder from '../assets/error.png';
//import defaultScreenshot from './assets/Lake-McDonald.png';
//<img src={defaultScreenshot} alt="Lake-McDonald"/>
import '../css/Video.css';

const Video = ({ video }) => {
  console.log('video', video)

  let defaultImg = video.images[0];

  console.log('defaultImg', defaultImg)

  return (
    <>
      <iframe
        title={video.title}
        src={video.url}
        value={video.url}
      />
    </>
  );
}

export default Video;
