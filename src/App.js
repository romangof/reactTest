import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/home/Home';
import Who from './components/who/Who';
import How from './components/how/How';
import MainHow from './components/how/MainHow';
import Comms from './components/how/Communications';
import Design from './components/how/Design';
import TI from './components/how/Ti';
import Business from './components/how/Bussiness';
import Contact from './components/Contact';
import './App.css';

export default () => 
<Router history={browserHistory}>
  <Route path='/' component={Main}>
    <IndexRoute component={Home}/>
    <Route path='/who' component={Who}/>
    <Route path='/how' component={MainHow}>
      <IndexRoute component={How}/>
      <Route path='/how/comms' component={Comms}/>
      <Route path='/how/design' component={Design}/>
      <Route path='/how/ti' component={TI}/>
      <Route path='/how/business' component={Business}/>
    </Route>
    {/*<Route path='/blog' component={Blog} />*/}
    <Route path='/contact' component={Contact} />
  </Route>
</Router>;