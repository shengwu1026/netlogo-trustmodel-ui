import React, {Component} from "react";
import {connect} from 'react-redux';
import Loading from './Loading';
import '../styles/mainChart.css';
import {convertCordinate} from '../utils/helpers'

class View extends Component {
  render() {
    return (
      <div>
        {!this.props.view.imgSrc
          ? <Loading text='Loading'/>
          : <div>
            <img src={this.props.view.imgSrc} width={'100%'}/>
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
    view: state.view
  }
};

export default connect(mapStateToProps)(View);