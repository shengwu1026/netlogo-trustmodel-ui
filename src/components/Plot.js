import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux';
import '../styles/charts.css';
import Loading from './Loading';

export default class Plot extends Component {
  render() {
    console.log('plot',this.props.plot);
    return (
      <div className='col-6'>
        <Line
          data={{
            datasets: [
              {
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [0]
              }
            ]
          }}
          options={{
            legend: {
              display: false
            },
            title: {
              display: true,
              text: this.props.plot.name
            }
          }}
        />
      </div>
    )
  }
}