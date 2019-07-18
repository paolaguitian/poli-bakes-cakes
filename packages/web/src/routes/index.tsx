import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";


import App from '../modules/App';
import Add from '../modules/Add';

const history = createBrowserHistory()

export const Routes = () => (
 <Router history={history}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/add" component={Add} />
    </Switch>
 </Router>
)