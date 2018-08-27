import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from "../actions/index";
import Nav from './Nav';
import Dashboard from './Dashboard';
import Charts from './Charts';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/charts' component={Charts}/>
            <Route render={() => <p>Not Found</p>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
