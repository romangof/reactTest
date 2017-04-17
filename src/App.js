import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import ReactGA from 'react-ga';
import Main from './components/Main';
import Home from './components/home/Home';
import Who from './components/who/Who';
import HowSection from './components/how/SectionizedHow';
import Contact from './components/Contact';
import Thanks from './components/thanks/Thanks';
import './App.css';

ReactGA.initialize('UA-82163217-1');

function update() {
  window.scrollTo(0, 0);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const NotFound = () => <h1>404.. This page is not found!</h1>

export default () => 
<Router onUpdate={update} history={browserHistory}>
  <Route path='/' component={Main}>
    <IndexRoute component={Home}/>
    <Route path='somos' component={Who}/>
    <Route path='contacto' component={Contact} />
    <Route path='gracias' component={Thanks} />
    <Route path='ayudamos'>
      <Route path='/ayudamos(/:section)' component={HowSection}/>
    </Route>
    {/*<Route path='/blog' component={Blog} />*/}
    <Route path='*' component={NotFound} />
  </Route>
</Router>;