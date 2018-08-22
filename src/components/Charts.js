import React, { Component } from 'react';
import '../styles/charts.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

class Charts extends Component {
  componentDidMount() {
    const SliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = SliderWithTooltip(Slider.Range);
    const Handle = Slider.Handle;
  }
  
  render() {
    const handle = (props) => {
      
      const { value, dragging, index, ...restProps } = this.props;
  
      console.log(value);
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={30}
          visible={dragging}
          placement="top"
          key={index}>
          <Handle value={value} {...restProps}
          />
        </Tooltip>
      );
    };
    
    return (
      <div className='charts-container'>
        <div className='charts-header text-center'>
          <p>This is Charts.</p>
        </div>
        <div className='container-fluid charts-body row'>
          <div className='col-2' id='params'>
            <p>Parameters</p>
            <Slider min={0} max={1000} step={5} defaultValue={20} handle={this.handle} />
            <p>Client Number</p>
          </div>
          <div className='col-8' id='charts'>
            <div className='row buttons text-center'>
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
          </div>
          <div className='col-2' id='status'>
            <p>Status</p>
            <div className="form-group">
              <label htmlFor="injurySeverity">Injury Severity</label>
              <input type="text" className="form-control" id="injurySeverity" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Charts