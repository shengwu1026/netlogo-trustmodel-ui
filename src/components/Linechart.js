import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

class Linechart extends Component {
  render() {
    return (
      <Line data={{
          datasets: [{
            label: this.props.label,
            borderColor: this.props.borderColor,
            lineTension: this.props.lineTension,
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
              onRefresh: function(chart) {
                chart.data.datasets.forEach(function(dataset) {
                  dataset.data.push({
                    x: Date.now(),
                    y: Math.random()
                  });
                });
              },
              delay: 2000
            }
          }
        }}
      />
    );
  }
}

export default Linechart;