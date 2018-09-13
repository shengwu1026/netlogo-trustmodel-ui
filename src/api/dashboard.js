import axios from 'axios';

function getParams(endPoint) {
  // return new Promise((res, rej) => {
  //   setTimeout(() => res({...params}), 1000)
  // })
  return axios.post(`http://localhost:8080/workspace/${endPoint}`)
    .then(function (response) {
      console.log('api', endPoint, response.data);
      return response.data;
    })
}

function getTurtles() {
  return axios.get(`http://localhost:8080/workspace/turtles`)
    .then(function (response) {
      console.log('api', response.data);
      return response.data;
    })
}

export function getData(endPoint) {
  return Promise.all([
    getParams(endPoint),
    getTurtles()
  ]).then(([params, turtles]) => ({params, turtles}))
}