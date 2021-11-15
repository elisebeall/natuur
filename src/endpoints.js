export const apiKey = 'WWBfRf37fletVxvN9jVhqlrhofEwnhtHPbhuAhxP';
export let limit = 20;
export let defaultWebcamId = '81B4690A-1DD8-B71B-0B2D069E1CB02E6A';

export default endpoints = {
  base: 'https://developer.nps.gov/api/v1/',
  endpoint: 'webcams', // could change this key to 'endpoint' & make the value dynamic
  default: `${endpoints.base}${endpoints.endpoint}/?id="${defaultWebcamId}"`;
};

//export default getEndpointKeys;
