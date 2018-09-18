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

class Sliders extends Component {
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
          <p>New Clients: {this.props.reports.newClients_Slider}</p>

          <Slider min={1} max={100} defaultValue={5} step={1}
                  handle={handle}
                  onChange={this.handleSliderChange}
          />
          <p>Road Safety Effectiveness: {this.props.reports.roadSafetyEffectiveness_Slider}</p>

          <Slider min={0} max={100} defaultValue={85} step={1}
                  handle={handle}
                  onChange={this.handleSliderChange}
          />
          <p>Injury Recovery: {this.props.reports.injuryRecovery_Slider}</p>

          <Slider min={0} max={0.2} defaultValue={0.171} step={0.001}
                  handle={handle}
                  onChange={this.handleSliderChange}
          />
          <p>Random Variation: {this.props.reports.randomVariation_Slider}</p>

          <Slider/>
          <p>Recalculate Drift: {this.props.reports.recalculateDrift_Slider}</p>

          <Slider/>
          <p>Drift Modifier: {this.props.reports.driftModifier_Slider}</p>

          <Slider/>
          <p>Solicitors: {this.props.reports.solicitors_Slider}</p>

          <Slider/>
          <p>Shock Zone 1 Starts: {this.props.reports.shockZone1Starts_Slider}</p>

          <Slider/>
          <p>Shock Zone 1 Ends: {this.props.reports.shockZone1Ends_Slider}</p>

          <Slider/>
          <p>Shock Zone 1 Increases: {this.props.reports.shockZone1Increase_Slider}</p>

          <Slider/>
          <p>Shock Zone 2 Starts: {this.props.reports.shockZone2Starts_Slider}</p>

          <Slider/>
          <p>Shock Zone 2 Ends: {this.props.reports.shockZone2Ends_Slider}</p>

          <Slider/>
          <p>Shock Zone 2 Increases: {this.props.reports.shockZone2Increase_Slider}</p>

          <Slider/>
          <p>Relief Zone 1 Starts: {this.props.reports.reliefZone1Starts_Slider}</p>

          <Slider/>
          <p>Relief Zone 1 Ends: {this.props.reports.reliefZone1Ends_Slider}</p>

          <Slider/>
          <p>Relief Zone 1 Decreases: {this.props.reports.reliefZone1Decrease_Slider}</p>

          <Slider/>
          <p>Relief Zone 2 Starts: {this.props.reports.reliefZone2Starts_Slider}</p>

          <Slider/>
          <p>Relief Zone 2 Ends: {this.props.reports.reliefZone2Ends_Slider}</p>

          <Slider/>
          <p>Relief Zone 2 Decreases: {this.props.reports.reliefZone2Decrease_Slider}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reports: state.reports
  }
};

export default connect(mapStateToProps)(Sliders)