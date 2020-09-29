import React,{useState,useEffect} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Sub from './components/Sub';

import {createBrowserHistory} from 'history'
import Accueil from './components/Accueil';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import ModalEdit from './components/Modal'
import {useDispatch} from 'react-redux';
export const history = createBrowserHistory()



function App() {
  const dispatch = useDispatch()
  const [inInternet, setinInternet] = useState(true);
useEffect(() => {
  window.addEventListener('offline', () => {
    dispatch({type: "OFFLINE"})
    alert('Oops ! Seems You are no longer connected to internet')
  })
  window.addEventListener('online', () => {
    dispatch({type: "ONLINE"})
    window.location.reload()
  })
  return () => {
    setinInternet(true)
  };
}, [inInternet]);
  return (
    <div className="App">
      <Router history={history}>
      <ModalEdit />
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
