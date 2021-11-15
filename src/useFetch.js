import React, { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  const [dataState, setDataState] = useState(null);
  const [isLoadingState, setIsLoadingState] = useState(true);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Sorry, please try again! ${response.statusCode}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setDataState(data);
        setIsLoadingState(false);
        setErrorState(null);
      })
      .catch(error => {
        setIsLoadingState(false);
        setErrorState(error.message);
      })
  }, [endpoint]);

  return { dataState, isLoadingState, errorState };
}

export default useFetch;
