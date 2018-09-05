import React, {Component} from "react";
import {connect} from 'react-redux';
import Loading from './Loading';
import '../styles/mainChart.css';

class MainChart extends Component {
  componentDidUpdate() {
    if (this.props.reliefZone1) {
      const canvas = document.getElementById("mainChart");
      canvas.width = window.innerWidth;
      canvas.height = canvas.width / 3.0;
      //TODO: change pixel number
      const aspectRatio = window.innerWidth / 1200.0;
      console.log(canvas.height, canvas.width, aspectRatio);

      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // zones
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(
          this.props.reliefZone1.startPosition * aspectRatio,
          0,
          this.props.reliefZone1.endPosition * aspectRatio - this.props.reliefZone1.startPosition * aspectRatio,
          400 * aspectRatio
        );

        ctx.fillStyle = "#00FF00";
        ctx.fillRect(
          this.props.reliefZone2.startPosition * aspectRatio,
          0,
          this.props.reliefZone2.endPosition * aspectRatio - this.props.reliefZone2.startPosition * aspectRatio,
          400 * aspectRatio
        );

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(
          this.props.shockZone1.startPosition * aspectRatio,
          0,
          this.props.shockZone1.endPosition * aspectRatio - this.props.shockZone1.startPosition * aspectRatio,
          400 * aspectRatio
        );

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(
          this.props.shockZone2.startPosition * aspectRatio,
          0,
          this.props.shockZone2.endPosition * aspectRatio - this.props.shockZone2.startPosition * aspectRatio,
          400 * aspectRatio
        );

        // points
        const points = this.props.points;
        Object.keys(points).forEach(key => {
          if (points[key].y > 350) {
            ctx.fillStyle = "#00FF00";
          } else if (points[key].y < 50) {
            ctx.fillStyle = "#FF0000";
          } else {
            ctx.fillStyle = "#0924ed";
          }
          ctx.fillRect(points[key].x * aspectRatio, points[key].y * aspectRatio, 3, 3)
        });

        //origin line
        ctx.moveTo(0, 200 * aspectRatio);
        ctx.lineTo(1200 * aspectRatio, 200 * aspectRatio);
        ctx.stroke();
      }
    }
  }

  render() {
    return (
      <div>
        {!this.props.reliefZone1
          ? <Loading text='Loading'/>
          : <canvas id="mainChart"></canvas>
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


{/*<script type="text/javascript">*/}

  {/*var c = document.getElementById("myCanvas");*/}
  {/*var ctx = c.getContext("2d");*/}
  {/*var grd = ctx.createLinearGradient(0, 0, 175, 50*/}
{/*)*/}
{/*;*/}
  {/*grd.addColorStop(0, "#FF0000"*/}
{/*)*/}
{/*;*/}
  {/*grd.addColorStop(1, "#00FF00"*/}
{/*)*/}
{/*;*/}
  {/*ctx.fillStyle = grd;*/}
  {/*ctx.fillRect(0, 0, 175, 50*/}
{/*)*/}
{/*;*/}

{/*</script>*/}

{/*< canvas*/}
{/*id = "myCanvas"*/}
{/*style = "display:none;"*/}
{/*width = "200"*/}
{/*height = "15"*/}
{/*style = "border:3px solid #c3c3c3;" >*/}
  {/*Your*/}
{/*browser*/}
{/*does*/}
{/*not*/}
{/*support*/}
{/*the*/}
{/*HTML5*/}
{/*canvas*/}
{/*tag.*/}
{/*</canvas>*/}

{/*<*/}
{/*input*/}
{/*type = "button"*/}
{/*value = "show"*/}
{/*onClick = "return show();" / >*/}

  {/*< script*/}
{/*type = "text/javascript" >*/}
  {/*function show() {*/}
    {/*document.getElementById("myCanvas").style.display = "block";*/}
    {/*return false;*/}
  {/*}*/}
{/*</script>*/}