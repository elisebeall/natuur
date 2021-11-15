import React, { useEffect } from 'react';


export const apiKey = 'WWBfRf37fletVxvN9jVhqlrhofEwnhtHPbhuAhxP';
export let limit = 20;
export let defaultWebcamId = '81B4690A-1DD8-B71B-0B2D069E1CB02E6A';
//export let randomWebcam = '';
//Would be nice to be able to show a random webcam without fetching the entire dataset

export const endpoints = {
  base: 'https://developer.nps.gov/api/v1/',
  endpoint: 'webcams', // could make value dynamic, so the user could view other endpoints
  default: `${endpoints.base}${endpoints.endpoint}/?id="${defaultWebcamId}"`,
  search: `${endpoints.base}${endpoints.endpoint}/?p=`
}

const useEndpoints = (searchState) => {
  useEffect(() => {
    fetch(enpoints.search)
  })

  return { searchEndpoint };
};

export default useEndpoints;
