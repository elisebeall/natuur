import React, { useTimeout, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { endpoints } from '../endpoints';
import placeholder from '../assets/error.png';
import '../css/Video.css';

const Video = ({ video }) => {
  let defaultImg = placeholder;
  let defaultAltText = 'National Parks Service Logo, no images found';

  if (video.images.length) {
    defaultImg = video.images[0].url;
    defaultAltText = video.images[0].altText;
  }

  return (
    <Link to="`/${video.id}`" >
      <img src={defaultImg} alt={defaultAltText} />
    </Link>
  );
}

export default Video;

Video.propTypes = {
  video: PropTypes.object
};
