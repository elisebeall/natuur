import React, { Fragment } from 'react';
import loadingImage from './assets/loading.png';
import './css/Loading.css';

const Loading = () => {
  return (
    <>
      <img src={loadingImage} alt="Loading Image: ">
      <h3>Please stand by...</h3>
    </>
  );
}

export default Loading;
