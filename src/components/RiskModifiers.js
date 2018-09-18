import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/riskModifiers.css';
import {formatNumber} from "../utils/helpers";
import Loading from "./Loading";

class RiskModifiers extends Component {
  render() {
    if (this.props.reports.injuryClassification_Label) {
      return (
        <div className='risk-modifiers-container text-center'>
          <h4 id='risk-modifiers-container-header'>Recovery Risk Modifiers</h4>
          <div id='risk-modifiers-container-body'>
            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.injurySeverity_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Injury Severity</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.atFaultStatus_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>At Fault Status</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.healthStatus_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Health Status</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.previousInjury_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Previous Injury</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.employmentStatus_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Employment</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.vulnerableStatus_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Vulnerable Status</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.gender_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Gender</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.age_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Age</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.claimDuration_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Claim Duration</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.injuryClassification_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Injury Classification</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.reports.education_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Education</label>
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
    reports: state.reports
  }
};

export default connect(mapStateToProps)(RiskModifiers)