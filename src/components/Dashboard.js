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
import axios from "axios";

class Dashboard extends Component {
  setup = () => {
    this.props.dispatch(handleInitialData());
  };

  handleCommand = (command) => {
    Promise.resolve(
      axios({
        method: 'post',
        url: `http://localhost:8080/workspace/command`,
        data: command,
        config: { headers: {'Content-Type': 'application/json' }}
      })
    ).then(() => {
      console.log('hey', command)
    })
  };

  async handleGo(ticks) {
    for (let i = 0; i < ticks; i++) {
      await Promise.resolve(axios.post(`http://localhost:8080/workspace/go`));
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
                <button type="button" className="btn btn-outline-primary" onClick={() => this.handleCommand('wave')}>
                  Wave
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.handleCommand('reset-shock')}>
                  Reset Shock
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.handleCommand('save-world-state')}>
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

export default connect()

(
  Dashboard
)
