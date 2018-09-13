import React, {Component} from "react";
import {connect} from 'react-redux';
import Loading from './Loading';
import '../styles/mainChart.css';
import {convertCordinate} from '../utils/helpers'

class MainChart extends Component {
  componentDidUpdate() {
    if (this.props.reliefZone2Ends) {
      const canvas = document.getElementById("mainChart");
      canvas.width = window.innerWidth;
      canvas.height = canvas.width / 3.0;
      //TODO: change pixel number
      const aspectRatio = window.innerWidth / 600.0;

      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        // zones
        ctx.fillStyle = "#5e97f2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // x, y, w, h
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(
          this.props.reliefZone1Starts * aspectRatio,
          0,
          this.props.reliefZone1Ends * aspectRatio - this.props.reliefZone1Starts * aspectRatio,
          canvas.height
        );
        ctx.stroke();

        ctx.fillStyle = "#00FF00";
        ctx.fillRect(
          this.props.reliefZone2Starts * aspectRatio,
          0,
          this.props.reliefZone2Ends * aspectRatio - this.props.reliefZone2Starts * aspectRatio,
          canvas.height
        );
        ctx.stroke();

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(
          this.props.shockZone1Starts * aspectRatio,
          0,
          this.props.shockZone1Ends * aspectRatio - this.props.shockZone1Starts * aspectRatio,
          canvas.height
        );
        ctx.stroke();

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(
          this.props.shockZone2Starts * aspectRatio,
          0,
          this.props.shockZone2Ends * aspectRatio - this.props.shockZone2Starts * aspectRatio,
          canvas.height
        );
        ctx.stroke();

        // turtles
        const turtles = this.props.turtles;
        Object.keys(turtles).forEach(key => {
          ctx.fillStyle = turtles[key].COLOR;
          const x = convertCordinate(turtles[key].XCOR, 300) * aspectRatio;
          const y =  convertCordinate(turtles[key].YCOR, 100) * aspectRatio;
          ctx.fillRect(x, y, 3, 3);
          ctx.stroke();
        });

        //axis
        ctx.strokeStyle = "#dee0e5";
        ctx.moveTo(0, canvas.height / 2.0);
        ctx.lineTo(canvas.width, canvas.height / 2.0);
        ctx.stroke();

        let i;
        for (i=0; i<6; i++) {
          ctx.moveTo(canvas.width / 6.0 * (i+1), 0);
          ctx.lineTo(canvas.width / 6.0 * (i+1), canvas.height);
          ctx.stroke();
        }
      }
    }
  }

  render() {
    return (
      <div>
        {!this.props.shockZone1Starts
          ? <Loading text='Loading'/>
          : <div>
            <canvas id="mainChart"></canvas>
            <div className='row text-center' id='main-chart-labels'>
              <div className='col-2'>1 Years</div>
              <div className='col-2'>2 Years</div>
              <div className='col-2'>3 Years</div>
              <div className='col-2'>4 Years</div>
              <div className='col-2'>5 Years</div>
              <div className='col-2'>6 Years</div>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //TODO: pixel conversion
    shockZone1Starts: state.params.shockZone1Starts_Slider + 300,
    shockZone2Starts: state.params.shockZone2Starts_Slider + 300,
    shockZone1Ends: state.params.shockZone1Ends_Slider + 300,
    shockZone2Ends: state.params.shockZone2Ends_Slider + 300,
    reliefZone1Starts: state.params.reliefZone1Starts_Slider + 300,
    reliefZone2Starts: state.params.reliefZone2Starts_Slider + 300,
    reliefZone1Ends: state.params.reliefZone1Ends_Slider + 300,
    reliefZone2Ends: state.params.reliefZone2Ends_Slider + 300,
    turtles: state.turtles
  }
};

export default connect(mapStateToProps)(MainChart);