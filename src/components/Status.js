import React, {Component} from 'react';
import Loading from "./Loading";
import {connect} from 'react-redux';
import {formatNumber} from "../utils/helpers";
import '../styles/status.css';

class Status extends Component {
  render() {
    if (this.props.params.meanRecoveryStatus_Label) {
      return (
        <div className='text-center status-container'>
          <div id='status-container-header'>
            <h4>Status</h4>
          </div>
          <div id='status-container-body'>
            <label>Clients > 5 Years</label>
            <p id='data'>
              <span>{this.props.params.clientsGreater5Yrs_Label}</span>
            </p>

            <label>Mean Recovery Status</label>
            <p id='data'>
              <span>{formatNumber(this.props.params.meanRecoveryStatus_Label, 2)}</span>
            </p>

            <label>Total Clients</label>
            <p id='data'>
              <span>{this.props.params.totalClients_Label}</span>
            </p>

            <label>Exit</label>
            <p id='data'>
              <span>{this.props.params.exit_Label}</span>
            </p>

            <label>Good Exit After 6 Months</label>
            <p id='data'>
              <span>{this.props.params.goodExit6Months_Label}</span>
            </p>

            <label>Bad Exit After 6 Months</label>
            <p id='data'>
              <span>{this.props.params.bottom6Mo_Label}</span>
            </p>

            <label>Good Exit After 18 Months</label>
            <p id='data'>
              <span>{this.props.params.goodExit18Months_Label}</span>
            </p>

            <label>Bad Exit After 18 Months</label>
            <p id='data'>
              <span>{this.props.params.bottom18Mo_Label}</span>
            </p>

            <label>Good Exit After 24 Months</label>
            <p id='data'>
              <span>{this.props.params.goodExit24Months_Label}</span>
            </p>

            <label>Bad Exit After 24 Months</label>
            <p id='data'>
              <span>{this.props.params.bottom24Mo_Label}</span>
            </p>

            <label>Good Exit After 36 Months</label>
            <p id='data'>
              <span>{this.props.params.goodExit36Months_Label}</span>
            </p>

            <label>Bad Exit After 36 Months</label>
            <p id='data'>
              <span>{this.props.params.bottom36Mo_Label}</span>
            </p>

            <label>Neutral Exit 36 Plus Months</label>
            <p id='data'>
              <span>{this.props.params.neutralExit36PlusMonths_Label}</span>
            </p>

            {/*<label>Bad Exit 36 Plus Months</label>*/}
            {/*<p id='data'>*/}
            {/*<span>{this.props.params.bottom36+Mo_Label}</span>*/}
            {/*</p>*/}

            {/*<label>Good Exit Ratio (%)</label>*/}
            {/*<p id='data'>*/}
            {/*<span>{this.props.params.goodExit6Months_Label}</span>*/}
            {/*</p>*/}

            {/*<label>Bad Exit Ratio (%)</label>*/}
            {/*<p id='data'>*/}
            {/*<span>{this.props.params.goodExit6Months_Label}</span>*/}
            {/*</p>*/}

            <label>Embeddedness</label>
            <p id='data'>
              <span>{formatNumber(this.props.params.embeddedness_Label, 2)}</span>
            </p>

            <label>Drift</label>
            <p id='data'>
              <span>{formatNumber(this.props.params.drift_Label, 2)}</span>
            </p>

            <label>Wait List Effect</label>
            <p id='data'>
              <span>{formatNumber(this.props.params.waitListEffect_Label, 2)}</span>
            </p>

            <label>Drift - Wait List Effect</label>
            <p id='data'>
              <span>{formatNumber(this.props.params.driftWaitListEffect_Label, 2)}</span>
            </p>

            <label>Current Drift</label>
            <p id='data'>
              <span>{formatNumber(this.props.params.currentDrift_Label, 2)}</span>
            </p>

            <label>Time</label>
            <p id='data'>
              <span>{this.props.params.time_Label}</span>
            </p>

            <label>Recalculate Drift</label>
            <p id='data'>
              <span>{this.props.params.recalculateDrift_Label}</span>
            </p>

            {/*<label>Common Law Capture</label>*/}
            {/*<p id='data'>*/}
            {/*<span>{this.props.params.goodExit6Months_Label}</span>*/}
            {/*</p>*/}

            {/*<label>Common Law Ratio</label>*/}
            {/*<p id='data'>*/}
            {/*<span>{this.props.params.goodExit6Months_Label}</span>*/}
            {/*</p>*/}

            <label>Costs</label>
            <p id='data'>
              <span>{this.props.params.costs_Label}</span>
            </p>
          </div>
        </div>)
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

export default connect(mapStateToProps)(Status)