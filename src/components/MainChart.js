import React from "react";
import {connect} from 'react-redux';
import {Bar} from 'react-chartjs-2'
import Loading from './Loading';

class MainChart extends React.Component {
  render() {
    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      return {
        labels: ['1', '2', '3', '4'],
        datasets: [
          {
            label: 'Path Tracking',
            data: [
              {x: this.props.reliefZone1.startPosition, y: 100},
              {x: this.props.reliefZone2.startPosition, y: 100},
              {x: this.props.shockZone1.startPosition, y: 100},
              {x: this.props.shockZone2.startPosition, y: 100}
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ]
          },
          {
            data: [
              {x: this.props.reliefZone1.startPosition, y: -100},
              {x: this.props.reliefZone2.startPosition, y: -100},
              {x: this.props.shockZone1.startPosition, y: -100},
              {x: this.props.shockZone2.startPosition, y: -100}
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ]
          }
        ]
      }
    };

    const options = {
      responsive: true,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Path Tracking'
      },
      scales: {
        xAxes: [{
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'Years'
          },
        }],
        yAxes: [{
          display: true,
          ticks: {
            min: -100,
            max: 100
          }
        }]
      }
    };

    return (
      <div>
        {!this.props.reliefZone1
          ? <Loading text='Loading'/>
          : <Bar data={data} options={options}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shockZone1: state.zones.shockZone1,
    shockZone2: state.zones.shockZone2,
    reliefZone1: state.zones.reliefZone1,
    reliefZone2: state.zones.reliefZone2
  }
};

export default connect(mapStateToProps)(MainChart);