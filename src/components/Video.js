import React, { useTimeout, useState, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { endpoints } from '../endpoints';
import placeholder from '../assets/error.png';
//import defaultScreenshot from './assets/Lake-McDonald.png';
//<img src={defaultScreenshot} alt="Lake-McDonald"/>
import '../css/Video.css';

const Video = ({ video }) => {
  let defaultImg = placeholder;

  if (video.images.length) {
    defaultImg = video.images[0];
  }

  return (
    <Link to="`/${video.id}`" >
      <img src={defaultImg} alt={video.title}/>
    </Link>
  );
}

export default Video;

Video.propTypes = {
  video: PropTypes.object
};
