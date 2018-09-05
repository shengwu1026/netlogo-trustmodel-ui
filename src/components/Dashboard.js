import React, { Component } from 'react';
import '../styles/dashboard.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import MainChart from './MainChart';
import Parameters from './Parameters';
import RiskModifiers from './RiskModifiers';
import Charts from './Charts';
import Status from './Status';

class Dashboard extends Component {
  render () {
    return (
      <div className='dashboard-container container-fluid'>
        <div className='dashboard-header text-center'>
        </div>
        <div className='dashboard-body row'>
          <div className='col-2' id='params'>
            <Parameters/>
          </div>

          <div className='col-8' id='charts'>
            <div className='row buttons text-center' id='main-buttons'>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Set Up
                </button>
              </div>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Go
                </button>
              </div>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Go Once
                </button>
              </div>
            </div>

            <div id='main-chart'>
              <MainChart/>
            </div>

            <div className='row buttons text-center' id='helper-buttons'>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Wave
                </button>
              </div>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Reset Shock
                </button>
              </div>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Save World State
                </button>
              </div>
            </div>

            <div id='status'>
              <Status/>
            </div>

            <div id='charts'>
              <Charts/>
            </div>
          </div>

          <div className='col-2' id='risk-modifiers'>
            <RiskModifiers/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
