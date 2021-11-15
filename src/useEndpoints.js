//import React, { useEffect } from 'react';
//export let limit = 20;
export let defaultWebcamId = '81B4690A-1DD8-B71B-0B2D069E1CB02E6A';
//export let randomWebcam = '';
//Would be nice to be able to show a random webcam without fetching the entire dataset

export const endpoints = {
  base: 'https://developer.nps.gov/api/v1/webcams',
  default: `?id=${defaultWebcamId}`,
  search: '?p=',
  apiKey: '&api_key=WWBfRf37fletVxvN9jVhqlrhofEwnhtHPbhuAhxP'
}

// const useEndpoints = (searchState) => {
//   useEffect(() => {
//     fetch(endpoints.search)
//   })
//
//   return { searchEndpoint };
// };

//export default useEndpoints;
