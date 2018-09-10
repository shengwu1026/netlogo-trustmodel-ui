import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/riskModifiers.css';
import {formatNumber} from "../utils/helpers";
import Loading from "./Loading";

class RiskModifiers extends Component {
  render() {
    if (this.props.params.injuryClassification_Label) {
      return (
        <div className='risk-modifiers-container text-center'>
          <h4 id='risk-modifiers-container-header'>Recovery Risk Modifiers</h4>
          <div id='risk-modifiers-container-body'>
            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.injurySeverity_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Injury Severity</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.atFaultStatus_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>At Fault Status</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.healthStatus_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Health Status</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.previousInjury_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Previous Injury</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.employmentStatus_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Employment</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.vulnerableStatus_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Vulnerable Status</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.gender_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Gender</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.age_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Age</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.claimDuration_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Claim Duration</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.injuryClassification_Label, 3)}</span>
              <span><button type="button" className="btn btn-light">+ 1</button></span>
            </p>
            <label>Injury Classification</label>

            <p>
              <span><button type="button" className="btn btn-light">- 1</button></span>
              <span>{formatNumber(this.props.params.education_Label, 3)}</span>
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
    params: state.params
  }
};

export default connect(mapStateToProps)(RiskModifiers)