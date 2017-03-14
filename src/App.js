import React, { Component } from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
// import Section from './Section';
// import Top from './Navbar';
// import Ss1 from './home/Section1';
// import Ss2 from './home/Section2';
// import Ss3 from './home/Section3';
import Home from './home/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={Home} />
      </Router>
    );
  }
}

export default App;
