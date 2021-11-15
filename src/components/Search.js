import React, { getState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './components/Video.css';

const Search = () => {

  const getAllWebcams = () => {
    const [ data: webcams, isLoading, error ] = useFetch(`${enpoints.base}${endpoints.webcams}?${apiKey}`);

    //Total of 192 webcams, but shows default 50 at a time.  Set with 'limit' variable.
    return webcams.data.map(webcam => webcam.status === 'Active');
  }

  return (
    <input type='text' value={searchTerm} onChange={() => setSearchState()}
  );
}

export default Video;
