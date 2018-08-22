import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Charts from './Charts';

class App extends Component {
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

export default App
