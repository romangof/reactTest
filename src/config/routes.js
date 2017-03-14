import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import App from '../App';

var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={App} />

    </Router>
);

module.exports = routes;