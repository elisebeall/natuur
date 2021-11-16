import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backButton from '../assets/back.png';
import '../css/Error.css';

const SingleVideo = ({ video }) => {
  return (
    <>
      <Link to="/">
        <img className="backButton" src={backButton} alt="back button" />
      </Link>
      <iframe
        title={video.title}
        src={video.url}
        value={video.url}
      />
    </>
  );
}

export default SingleVideo;

SingleVideo.propTypes = {
  video: PropTypes.object
};
