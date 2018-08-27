import React from "react";
import { connect } from 'react-redux';
import Chart from 'chart.js';
import {Scatter} from 'react-chartjs-2';
import Loading from './Loading';

class MainChart extends React.Component {
  render() {
    console.log(this.props);
    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      return {
        labels: ['Scatter'],
          datasets: [
            {
              label: 'My First dataset',
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [
                { x: this.props.reliefZone1.startPosition, y: 75 },
                { x: this.props.reliefZone1.endPosition, y: 49 },
                { x: this.props.reliefZone2.startPosition, y: 90 },
                { x: this.props.reliefZone2.endPosition, y: 29 }
              ]
            }
          ]
      }
    };
    
    return (
      <div>
        {!this.props.reliefZone1
          ? <Loading text='Loading'/>
          : <Scatter data={data} />
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