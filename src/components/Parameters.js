import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip( Slider.Range );
const Handle = Slider.Handle;

const handle = ( props ) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class Parameters extends Component {
  state = {
    sliderValue: 20
  };
  
  handleSliderChange = ( e ) => {
    const value = e;
    this.setState( () => ( {
      sliderValue: value
    } ) );
  };
  
  render () {
    return (
      <div>
        <p>Parameters</p>
        <Slider min={0} max={1000} defaultValue={20} step={5}
                handle={handle}
                onChange={this.handleSliderChange}
        />
        <p>Client Number: {this.state.sliderValue}</p>
      </div>
    )
  }
}

export default Parameters