import React, { Component } from 'react';
import '../styles/status.css';

class Status extends Component {
  render() {
    return (
      <div className='text-center' id='status'>
        <p>Status</p>
        <div id='recovery-risk-modifiers'>
          <label>Clients > 5 Years</label>
          <p id='data'>
            <span>10</span>
          </p>

          <label>Injury Severity</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>At Fault Status</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>Health Status</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>Previous Injury</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label htmlFor="injurySeverity">Employment</label>
          <p id="injurySeverity">
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>Vulnerable Status</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>Gender</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>Age</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>Claim Duration</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>Injury Classification</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>

          <label>Education</label>
          <p>
            <span>
              <button type="button" className="btn btn-light">- 1</button>
            </span>
            <span>hey</span>
            <span>
              <button type="button" className="btn btn-light">+ 1</button>
            </span>
          </p>
        </div>

        <div id="statistics">
          <label>Embeddedness</label>
          <p id='data'>
            <span>hey</span>
          </p>

          <label>Drift</label>
          <p id='data'>
            <span>hey</span>
          </p>

          <label>Wait List Effect</label>
          <p id='data'>
            <span>hey</span>
          </p>

          <label>Drift - Wait List Effect</label>
          <p id='data'>
            <span>hey</span>
          </p>

          <label>Current Drift</label>
          <p id='data'>
            <span>hey</span>
          </p>

          <label>Time</label>
          <p id='data'>
            <span>Recalculate Drift</span>
          </p>
        </div>
      </div>

    )
  }
}

export default Status