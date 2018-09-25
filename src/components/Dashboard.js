import React, {Component} from 'react';
import '../styles/dashboard.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import {connect} from 'react-redux';
import View from './View';
import Sliders from './Sliders';
import RiskModifiers from './RiskModifiers';
import Plots from './Plots';
import Status from './Status';
import {handleData, handleInitialData} from "../actions/index";
import {handleCommand, getGo} from "../utils/api";

class Dashboard extends Component {
  setup = () => {
    this.props.dispatch(handleInitialData());
  };

  async handleGo(ticks) {
    for (let i = 0; i < ticks; i++) {
      await getGo();
      this.props.dispatch(handleData())
    }
  }

  render() {
    return (
      <div className='dashboard-container container-fluid'>
        <div className='dashboard-header text-center'>
        </div>
        <div className='dashboard-body row'>
          <div className='col-2' id='params'>
            <Sliders/>
            <RiskModifiers/>
          </div>

          <div className='col-8'>
            <div className='row buttons text-center' id='main-buttons'>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={this.setup}>
                  Set Up
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.handleGo(10)}>
                  Go
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.handleGo(1)}>
                  Go Once
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => handleCommand('wave')}>
                  Wave
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => handleCommand('reset-shock')}>
                  Reset Shock
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => handleCommand('save-world-state')}>
                  Save World State
                </button>
              </div>
            </div>

            <div id='main-chart'>
              <View/>
            </div>

            <div id='charts'>
              <Plots/>
            </div>
          </div>

          <div className='col-2' id='status'>
            <Status/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Dashboard)
