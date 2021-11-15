import React, { Fragment } from 'react';
import errorImage from '../assets/error.png';
import '../css/Error.css';

const Error = (error) => {
  return (
    <>
      <img src={errorImage} alt="Error Image: " />
      <h3>Very sorry, we've encountered a problem.</h3>
      <h4>`${error.statusCode}`: `${error.statusText}`</h4>
    </>
  );
}

export default Error;
