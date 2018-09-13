import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux';
import '../styles/charts.css';
import Loading from './Loading';

class Charts extends Component {
  render() {
    if (this.props.params.clientHealthStatus_Plot) {
      const clientHealthData = {
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
      };

      const clientHealthOptions = {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Client Health Status'
        }
      };

      const clientStatusData = {
        datasets: [
          {
            label: 'Health',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(139, 130, 130, 0.4)',
            borderColor: 'rgba(139, 130, 130, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(139, 130, 130, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(139, 130, 130, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 2, 3, 4, 5, 6, 7]
          },
          {
            label: '5 Years',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(247, 22, 22,0.4)',
            borderColor: 'rgba(247, 22, 22,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(247, 22, 22,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(247, 22, 22,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [8, 9, 10, 11, 12, 13, 14]
          },
          {
            label: '3 Years +',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(72, 75, 248, 0.4)',
            borderColor: 'rgba(72, 75, 248, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(72, 75, 248, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(72, 75, 248, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [15, 16, 17, 18, 19, 20, 21]
          },
          {
            label: '6 Months',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(246, 145, 13, 0.4)',
            borderColor: 'rgba(246, 145, 13, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(246, 145, 13, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(246, 145, 13, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [22, 23, 24, 25, 26, 27, 28]
          }
        ]
      };

      const clientStatusOptions = {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Client Status Charts'
        }
      };

      const personalModeratorsData = {
        datasets: [
          {
            label: 'Health Status',
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
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'At-Fault Status',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(248, 72, 163,0.4)',
            borderColor: 'rgba(248, 72, 163,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(248, 72, 163,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(248, 72, 163,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 2, 3, 4, 5, 6, 7]
          }
        ]
      };

      const personalModeratorsOptions = {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Personal Moderators'
        }
      };

      const healthLimitsData = {
        datasets: [
          {
            label: 'Upper Limit',
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
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Lower Limit',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(248, 72, 163,0.4)',
            borderColor: 'rgba(248, 72, 163,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(248, 72, 163,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(248, 72, 163,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 2, 3, 4, 5, 6, 7]
          }
        ]
      };

      const healthLimitsOptions = {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Upper & Lower Limits of Client Health'
        }
      };

      const clientPathsData = {
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
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

      const clientPathsOptions = {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Client Paths'
        }
      };

      const costPerClientData = {
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
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

      const costPerClientOptions = {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Cost Per Client'
        }
      };

      return (
        <div className='text-center charts-container'>
          <h4 id='charts-container-header'>Charts</h4>
          <div className='row' id='charts-container-body'>
            <div className='col-6' id='client-health-status'>
              <Line data={clientHealthData} options={clientHealthOptions}/>
            </div>

            <div className='col-6' id='client-status'>
              <Line data={clientStatusData} options={clientStatusOptions}/>
            </div>

            <div className='col-6' id='personal-moderators'>
              <Line data={personalModeratorsData} options={personalModeratorsOptions}/>
            </div>

            <div className='col-6' id='client-health-limits'>
              <Line data={healthLimitsData} options={healthLimitsOptions}/>
            </div>

            <div className='col-6' id='client-paths'>
              <Line data={clientPathsData} options={clientPathsOptions}/>
            </div>

            <div className='col-6' id='cost-per-client'>
              <Line data={costPerClientData} options={costPerClientOptions}/>
            </div>
          </div>
        </div>
      )
    } else {
      return <Loading text='Loading'/>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    params: state.params
  }
};

export default connect(mapStateToProps)(Charts)