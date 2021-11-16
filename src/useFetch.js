import React, { useState, useEffect, setTimeout } from 'react';

const useFetch = (endpoint) => {
  const [dataState, setDataState] = useState([]);
  const [isLoadingState, setIsLoadingState] = useState(true);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(endpoint)
        .then(response => {
          console.log('fetch response', response)
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
    }, 3000)
  }, [endpoint]);

  return { dataState, isLoadingState, errorState };
}

export default useFetch;
