import React, { Fragment } from 'react';
import loadingImage from '../assets/loading.gif';
import '../css/Loading.css';

const Loading = () => {
  return (
    <>
      <img src={loadingImage} alt="loading" />
      <h3>Please stand by...</h3>
    </>
  );
}

export default Loading;
