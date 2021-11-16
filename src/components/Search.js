import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import VideosContainer from './VideosContainer';
import { endpoints } from '../endpoints.js';
import useFetch from '../useFetch';
import '../css/Search.css';

const Search = () => {
  const [ searchState, setSearchState ] = useState('');
  const [ searchComplete, setSearchComplete ] = useState(false);

  const handleChange = (e) => {
    setSearchState(e.target.value);
  }

  const handleSubmit = (e) => {
    setSearchComplete(true);
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search for National Park name, location, landmarks....."
        value={searchState}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="submit"
        onClick={(e) => handleSubmit(e)}
      />
      {searchComplete && <VideosContainer searchTerm={searchState} />}
    </div>
  );
}

export default Search;
