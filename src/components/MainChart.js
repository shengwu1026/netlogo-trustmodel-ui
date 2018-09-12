import React, {Component} from "react";
import {connect} from 'react-redux';
import Loading from './Loading';
import '../styles/mainChart.css';

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
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(
          this.props.reliefZone1Starts * aspectRatio,
          0,
          this.props.reliefZone1Ends * aspectRatio - this.props.reliefZone1Starts * aspectRatio,
          400 * aspectRatio
        );

        ctx.fillStyle = "#00FF00";
        ctx.fillRect(
          this.props.reliefZone2Starts * aspectRatio,
          0,
          this.props.reliefZone2Ends * aspectRatio - this.props.reliefZone2Starts * aspectRatio,
          400 * aspectRatio
        );

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(
          this.props.shockZone1Starts * aspectRatio,
          0,
          this.props.shockZone1Ends * aspectRatio - this.props.shockZone1Starts * aspectRatio,
          400 * aspectRatio
        );

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(
          this.props.shockZone2Starts * aspectRatio,
          0,
          this.props.shockZone2Ends * aspectRatio - this.props.shockZone2Starts * aspectRatio,
          400 * aspectRatio
        );

        // points
        // const points = this.props.points;
        // Object.keys(points).forEach(key => {
        //   if (points[key].y > 350) {
        //     ctx.fillStyle = "#00FF00";
        //   } else if (points[key].y < 50) {
        //     ctx.fillStyle = "#FF0000";
        //   } else {
        //     ctx.fillStyle = "#0924ed";
        //   }
        //   ctx.fillRect(points[key].x * aspectRatio, points[key].y * aspectRatio, 3, 3)
        // });

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
  }
};

export default connect(mapStateToProps)(MainChart);


{/*<script type="text/javascript">*/
}

{/*var c = document.getElementById("myCanvas");*/
}
{/*var ctx = c.getContext("2d");*/
}
{/*var grd = ctx.createLinearGradient(0, 0, 175, 50*/
}
{/*)*/
}
{/*;*/
}
{/*grd.addColorStop(0, "#FF0000"*/
}
{/*)*/
}
{/*;*/
}
{/*grd.addColorStop(1, "#00FF00"*/
}
{/*)*/
}
{/*;*/
}
{/*ctx.fillStyle = grd;*/
}
{/*ctx.fillRect(0, 0, 175, 50*/
}
{/*)*/
}
{/*;*/
}

{/*</script>*/
}

{/*< canvas*/
}
{/*id = "myCanvas"*/
}
{/*style = "display:none;"*/
}
{/*width = "200"*/
}
{/*height = "15"*/
}
{/*style = "border:3px solid #c3c3c3;" >*/
}
{/*Your*/
}
{/*browser*/
}
{/*does*/
}
{/*not*/
}
{/*support*/
}
{/*the*/
}
{/*HTML5*/
}
{/*canvas*/
}
{/*tag.*/
}
{/*</canvas>*/
}

{/*<*/
}
{/*input*/
}
{/*type = "button"*/
}
{/*value = "show"*/
}
{/*onClick = "return show();" / >*/
}

{/*< script*/
}
{/*type = "text/javascript" >*/
}
{/*function show() {*/
}
{/*document.getElementById("myCanvas").style.display = "block";*/
}
{/*return false;*/
}
{/*}*/
}
{/*</script>*/
}