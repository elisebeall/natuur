import React, { getState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './components/Video.css';

const Search = ({ searchState, setSearchState }) => {
  const handleChange = (e) => {
    setSearchState(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Where would you like to be right now?"
      value={searchState}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default Video;
