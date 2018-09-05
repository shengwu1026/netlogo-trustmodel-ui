import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import '../styles/parameters.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const {value, dragging, index, ...restProps} = props;
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
  handleSliderChange = (e) => {
    const value = e;
    this.setState(() => ({
      clientNumber: value
    }));
  };

  render() {
    console.log(this.props.params);
    return (
      <div className='params-container text-center'>
        <p>Parameters</p>
        <div className='sliders'>
          <Slider min={0} max={1000} defaultValue={20} step={5}
                  handle={handle}
                  onChange={this.handleSliderChange}
          />
          <p>Client Number: {this.props.params.clientNumber}</p>

          <Slider/>
          <p>Road Safety Effectiveness</p>

          <Slider/>
          <p>Injury Recovery</p>

          <Slider/>
          <p>Random Variation</p>

          <Slider/>
          <p>Recalculate Drift</p>

          <Slider/>
          <p>Drift Modifier</p>

          <Slider/>
          <p>Solicitors</p>

          <Slider/>
          <p>Shock Zone 1 Starts</p>

          <Slider/>
          <p>Shock Zone 1 Ends</p>

          <Slider/>
          <p>Shock Zone 2 Starts</p>

          <Slider/>
          <p>Shock Zone 2 Ends</p>

          <Slider/>
          <p>Relief Zone 1 Starts</p>

          <Slider/>
          <p>Relief Zone 1 Ends</p>

          <Slider/>
          <p>Relief Zone 2 Starts</p>

          <Slider/>
          <p>Relief Zone 2 Ends</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    params: state.params
  }
};

export default connect(mapStateToProps)(Parameters)