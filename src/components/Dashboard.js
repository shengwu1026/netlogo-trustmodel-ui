import React, { Component } from 'react';
import '../styles/dashboard.css';
import Linechart from './MainChart';

class Dashboard extends Component {
  render () {
    return (
      <div className='dashboard-container'>
        <div className='dashboard-header text-center'>
        </div>
        <div className='container-fluid dashboard-body row'>
          {/*<Linechart/>*/}
        </div>
      </div>
    )
  }
}

export default Dashboard