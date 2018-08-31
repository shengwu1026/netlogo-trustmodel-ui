import React, {Component} from "react";
import {connect} from 'react-redux';
import Loading from './Loading';
import '../styles/mainChart.css';

class MainChart extends Component {
  componentDidUpdate() {
    if(this.props.reliefZone1) {
      var ctx = document.getElementById("mainChart").getContext("2d");
      ctx.fillStyle = "#00FF00";
      ctx.fillRect(
        this.props.reliefZone1.startPosition,
        0,
        this.props.reliefZone1.endPosition-this.props.reliefZone1.startPosition,
        400
      )

      ctx.fillStyle = "#00FF00";
      ctx.fillRect(
        this.props.reliefZone2.startPosition,
        0,
        this.props.reliefZone2.endPosition-this.props.reliefZone2.startPosition,
        400
      )

      ctx.fillStyle = "#FF0000";
      ctx.fillRect(
        this.props.shockZone1.startPosition,
        0,
        this.props.shockZone1.endPosition-this.props.shockZone1.startPosition,
        400
      )

      ctx.fillStyle = "#FF0000";
      ctx.fillRect(
        this.props.shockZone2.startPosition,
        0,
        this.props.shockZone2.endPosition-this.props.shockZone2.startPosition,
        400
      )
    }
  }

  render() {
    return (
      <div>
        {!this.props.reliefZone1
          ? <Loading text='Loading'/>
          : <canvas id="mainChart" width="1200" height="400"></canvas>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shockZone1: state.zones.shockZone1,
    shockZone2: state.zones.shockZone2,
    reliefZone1: state.zones.reliefZone1,
    reliefZone2: state.zones.reliefZone2
  }
};

export default connect(mapStateToProps)(MainChart);