import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";


import App from '../modules/App';
import AddReceipe from '../modules/addReceipe/AddReceipe';

const history = createBrowserHistory()

export const Routes = () => (
 <Router history={history}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/add" component={AddReceipe} />
    </Switch>
 </Router>
)