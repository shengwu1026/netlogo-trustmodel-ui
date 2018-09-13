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
    // e.preventDefault();
    const value = e;
    // console.log(value);
    this.setState(() => ({
      newClients: value
    }));
  };

  render() {
    return (
      <div className='params-container text-center'>
        <h4 id='params-header'>Parameters</h4>
        <div className='sliders' id='params-body'>
          <Slider min={0} max={1000} defaultValue={20} step={5}
                  handle={handle}
                  onChange={this.handleSliderChange}
          />
          <p>New Clients: {this.props.newClients}</p>

          <Slider min={1} max={100} defaultValue={5} step={1}
                  handle={handle}
                  onChange={this.handleSliderChange}
          />
          <p>Road Safety Effectiveness: {this.props.roadSafetyEffectiveness}</p>

          <Slider min={0} max={100} defaultValue={85} step={1}
                  handle={handle}
                  onChange={this.handleSliderChange}
          />
          <p>Injury Recovery: {this.props.injuryRecovery}</p>

          <Slider min={0} max={0.2} defaultValue={0.171} step={0.001}
                  handle={handle}
                  onChange={this.handleSliderChange}
          />
          <p>Random Variation: {this.props.randomVariation}</p>

          <Slider/>
          <p>Recalculate Drift: {this.props.recalculateDrift}</p>

          <Slider/>
          <p>Drift Modifier: {this.props.driftModifier}</p>

          <Slider/>
          <p>Solicitors: {this.props.solicitors}</p>

          <Slider/>
          <p>Shock Zone 1 Starts: {this.props.shockZone1Starts}</p>

          <Slider/>
          <p>Shock Zone 1 Ends: {this.props.shockZone1Ends}</p>

          <Slider/>
          <p>Shock Zone 1 Increases: {this.props.shockZone1Increase}</p>

          <Slider/>
          <p>Shock Zone 2 Starts: {this.props.shockZone2Starts}</p>

          <Slider/>
          <p>Shock Zone 2 Ends: {this.props.shockZone2Ends}</p>

          <Slider/>
          <p>Shock Zone 2 Increases: {this.props.shockZone2Increase}</p>

          <Slider/>
          <p>Relief Zone 1 Starts: {this.props.reliefZone1Starts}</p>

          <Slider/>
          <p>Relief Zone 1 Ends: {this.props.reliefZone1Ends}</p>

          <Slider/>
          <p>Relief Zone 1 Decreases: {this.props.reliefZone1Decrease}</p>

          <Slider/>
          <p>Relief Zone 2 Starts: {this.props.reliefZone2Starts}</p>

          <Slider/>
          <p>Relief Zone 2 Ends: {this.props.reliefZone2Ends}</p>

          <Slider/>
          <p>Relief Zone 2 Decreases: {this.props.reliefZone2Decrease}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newClients: state.params.newClients_Slider,
    roadSafetyEffectiveness: state.params.roadSafetyEffectiveness_Slider,
    injuryRecovery: state.params.injuryRecovery_Slider,
    randomVariation: state.params.randomVariation_Slider,
    recalculateDrift: state.params.recalculateDrift_Slider,
    driftModifier: state.params.driftModifier_Slider,
    solicitors: state.params.solicitors_Slider,
    shockZone1Starts: state.params.shockZone1Starts_Slider,
    shockZone2Starts: state.params.shockZone2Starts_Slider,
    shockZone1Ends: state.params.shockZone1Ends_Slider,
    shockZone2Ends: state.params.shockZone2Ends_Slider,
    reliefZone1Starts: state.params.reliefZone1Starts_Slider,
    reliefZone2Starts: state.params.reliefZone2Starts_Slider,
    reliefZone1Ends: state.params.reliefZone1Ends_Slider,
    reliefZone2Ends: state.params.reliefZone2Ends_Slider,
    shockZone1Increase: state.params.shockZone1Increase_Slider,
    shockZone2Increase: state.params.shockZone2Increase_Slider,
    reliefZone1Decrease: state.params.reliefZone1Decrease_Slider,
    reliefZone2Decrease: state.params.reliefZone2Decrease_Slider
  }
};

export default connect(mapStateToProps)(Parameters)