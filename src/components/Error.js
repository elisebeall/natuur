import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backButton from '../assets/back.png';
import errorImage from '../assets/error.png';
import '../css/Error.css';

const Error = ({ error }) => {
  return (
    <>
      <Link to="/">
        <img className="backButton" src={backButton} alt="back button" />
      </Link>
      <img className="errorImage" src={errorImage} alt="Error Image: National Parks Service Sign" />
      <h3>Very sorry, we've encountered a problem. Please try again.</h3>
      <h4>{`${error.statusCode}`}: {`${error.statusText}`}</h4>
    </>
  );
}

export default Error;

Error.propTypes = {
  error: PropTypes.object
};
