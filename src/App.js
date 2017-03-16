import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/home/Home';
import Who from './components/who/Who';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/who' component={Who} />
            {/*<Route path='/how' component={How} />*/}
            {/*<Route path='/blog' component={Blog} />*/}
            {/*<Route path='/contact' component={Contact} />*/}
          </Route>
      </Router>
    );
  }
}

export default App;
