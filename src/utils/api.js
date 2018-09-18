import axios from 'axios';

function getReports() {
  return axios.get(`http://localhost:8080/workspace/reports`)
    .then(function (response) {
      console.log('reports', response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error.response)
    });
}

function getView() {
  return axios.get(`http://localhost:8080/workspace/view`)
    .then(function (response) {
      console.log('view', response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error.response)
    });
}

function getPlots() {
  return axios.get(`http://localhost:8080/workspace/plots`)
    .then(function (response) {
      console.log('plots', response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error.response)
    });
}

export function getData() {
  return Promise.resolve(
    axios.post(`http://localhost:8080/trust-model/setup`)
  ).then(() => {
      return Promise.all([
        getReports(),
        getView(),
        getPlots()
      ]).then(([reports, view, plots]) => ({reports, view, plots}));
    })
    .catch(error => {
      console.log(error.response)
    });
}