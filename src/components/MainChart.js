import React, {Component} from "react";
import {connect} from 'react-redux';
import Loading from './Loading';
import '../styles/mainChart.css';

class MainChart extends Component {
  componentDidUpdate() {
    if(this.props.reliefZone1) {
      var ctx = document.getElementById("mainChart").getContext("2d");
        // zones
      ctx.fillStyle = "#00FF00";
      ctx.fillRect(
        this.props.reliefZone1.startPosition,
        0,
        this.props.reliefZone1.endPosition-this.props.reliefZone1.startPosition,
        400
      );

      ctx.fillStyle = "#00FF00";
      ctx.fillRect(
        this.props.reliefZone2.startPosition,
        0,
        this.props.reliefZone2.endPosition-this.props.reliefZone2.startPosition,
        400
      );

      ctx.fillStyle = "#FF0000";
      ctx.fillRect(
        this.props.shockZone1.startPosition,
        0,
        this.props.shockZone1.endPosition-this.props.shockZone1.startPosition,
        400
      );

      ctx.fillStyle = "#FF0000";
      ctx.fillRect(
        this.props.shockZone2.startPosition,
        0,
        this.props.shockZone2.endPosition-this.props.shockZone2.startPosition,
        400
      );

      // points
      const points = this.props.points;
      Object.keys(points).forEach(key => {
        if(points[key].y > 350) {
          ctx.fillStyle = "#00FF00";
        } else if(points[key].y < 50) {
          ctx.fillStyle = "#FF0000";
        } else {
          ctx.fillStyle = "#0924ed";
        }
        ctx.fillRect(points[key].x, points[key].y, 3, 3)
      });

      //origin line
      ctx.moveTo(0, 200);
      ctx.lineTo(1200, 200);
      ctx.stroke();
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
    reliefZone2: state.zones.reliefZone2,
    points: state.points
  }
};

export default connect(mapStateToProps)(MainChart);
