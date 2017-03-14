import React, { Component } from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/asd' component={Home} />
          </Route>
      </Router>
    );
  }
}

export default App;
