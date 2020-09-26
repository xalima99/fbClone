import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Sub from './components/Sub';

import {createBrowserHistory} from 'history'
import Accueil from './components/Accueil';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';

export const history = createBrowserHistory()


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Sub} />
          <PrivateRoute path="/homepage" exact component={Accueil} />
          <Route path="/homepage/user/:id" exact component={Profile} />
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
