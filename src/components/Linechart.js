import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

class Linechart extends Component {
  render() {
    return (
      <Line
        data={{
          datasets: [ {
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            lineTension: 0,
            fill: false,
            borderDash: [ 8, 4 ]
          }]
        }}
        options={{
          scales: {
            xAxes: [{
              type: 'realtime'
            }]
          },
          plugins: {
            streaming: {
              refresh: 1000,
              frameRate: 60,
              onRefresh: function ( chart ) {
                chart.data.datasets.forEach( function ( dataset ) {
                  dataset.data.push( {
                    x: Date.now(),
                    y: Math.random()
                  } );
                } );
              },
              // delay: 2000
            }
          }
        }}
      />
    );
  }
}

export default Linechart;