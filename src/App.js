import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Sub from './components/Sub';

import createBrowserHistory from 'history/createBrowserHistory'
import Accueil from './components/Accueil';
import PageNotFound from './components/PageNotFound';

export const history = createBrowserHistory()


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Sub} />
          <PrivateRoute path="/homepage" component={Accueil} />
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
