import {_getZones, _getPoints, _getParams, _updateParams} from "../utils/_DATA";
import {isObject} from "../utils/helpers";
import axios from 'axios';

function getParams() {
  // return new Promise((res, rej) => {
  //   setTimeout(() => res({...params}), 1000)
  // })
  return axios.post('http://localhost:8080/workspace/setup')
    .then(function (response) {
      console.log('api', response.data);
      return response.data;
    })
}

export function getInitialData() {
  return Promise.resolve(
    getParams()
  ).then((params) => (params))
}