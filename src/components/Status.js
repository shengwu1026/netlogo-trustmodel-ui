import React, {Component} from 'react';
import Loading from "./Loading";
import {connect} from 'react-redux';
import {formatNumber} from "../utils/helpers";
import '../styles/status.css';

class Status extends Component {
  render() {
    if (this.props.reports.meanRecoveryStatus_Label) {
      return (
        <div className='text-center status-container'>
          <div id='status-container-header'>
            <h4>Status</h4>
          </div>
          <div id='status-container-body'>
            <label>Clients > 5 Years</label>
            <p id='data'>
              <span>{this.props.reports.clientsGreater5Yrs_Label}</span>
            </p>

            <label>Mean Recovery Status</label>
            <p id='data'>
              <span>{formatNumber(this.props.reports.meanRecoveryStatus_Label, 2)}</span>
            </p>

            <label>Total Clients</label>
            <p id='data'>
              <span>{this.props.reports.totalClients_Label}</span>
            </p>

            <label>Exit</label>
            <p id='data'>
              <span>{this.props.reports.exit_Label}</span>
            </p>

            <label>Good Exit After 6 Months</label>
            <p id='data'>
              <span>{this.props.reports.goodExit6Months_Label}</span>
            </p>

            <label>Bad Exit After 6 Months</label>
            <p id='data'>
              <span>{this.props.reports.bottom6Mo_Label}</span>
            </p>

            <label>Good Exit After 18 Months</label>
            <p id='data'>
              <span>{this.props.reports.goodExit18Months_Label}</span>
            </p>

            <label>Bad Exit After 18 Months</label>
            <p id='data'>
              <span>{this.props.reports.bottom18Mo_Label}</span>
            </p>

            <label>Good Exit After 24 Months</label>
            <p id='data'>
              <span>{this.props.reports.goodExit24Months_Label}</span>
            </p>

            <label>Bad Exit After 24 Months</label>
            <p id='data'>
              <span>{this.props.reports.bottom24Mo_Label}</span>
            </p>

            <label>Good Exit After 36 Months</label>
            <p id='data'>
              <span>{this.props.reports.goodExit36Months_Label}</span>
            </p>

            <label>Bad Exit After 36 Months</label>
            <p id='data'>
              <span>{this.props.reports.bottom36Mo_Label}</span>
            </p>

            <label>Neutral Exit 36 Plus Months</label>
            <p id='data'>
              <span>{this.props.reports.neutralExit36PlusMonths_Label}</span>
            </p>

            <label>Bad Exit 36 Plus Months</label>
            <p id='data'>
            <span>{this.props.reports.bottom36PlusMo_Label}</span>
            </p>

            <label>Good Exit Ratio (%)</label>
            <p id='data'>
              <span>{this.props.reports.percentGoodExit_Label}</span>
            </p>

            <label>Bad Exit Ratio (%)</label>
            <p id='data'>
              <span>{this.props.reports.percentBadExit_Label}</span>
            </p>

            <label>Embeddedness</label>
            <p id='data'>
              <span>{formatNumber(this.props.reports.embeddedness_Label, 2)}</span>
            </p>

            <label>Drift</label>
            <p id='data'>
              <span>{formatNumber(this.props.reports.drift_Label, 2)}</span>
            </p>

            <label>Wait List Effect</label>
            <p id='data'>
              <span>{formatNumber(this.props.reports.waitListEffect_Label, 2)}</span>
            </p>

            <label>Drift - Wait List Effect</label>
            <p id='data'>
              <span>{formatNumber(this.props.reports.driftWaitListEffect_Label, 2)}</span>
            </p>

            <label>Current Drift</label>
            <p id='data'>
              <span>{formatNumber(this.props.reports.currentDrift_Label, 2)}</span>
            </p>

            <label>Time</label>
            <p id='data'>
              <span>{this.props.reports.time_Label}</span>
            </p>

            <label>Recalculate Drift</label>
            <p id='data'>
              <span>{this.props.reports.recalculateDrift_Label ? 'True' : 'False'}</span>
            </p>

            <label>Common Law Capture</label>
            <p id='data'>
              <span>{this.props.reports.commonLawNum_Label}</span>
            </p>

            <label>Common Law Ratio</label>
            <p id='data'>
              <span>{this.props.reports.commonLawPercent_Label}</span>
            </p>

            <label>Costs</label>
            <p id='data'>
              <span>{formatNumber(this.props.reports.costs_Label, 2)}</span>
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
    reports: state.reports
  }
};

export default connect(mapStateToProps)(Status)