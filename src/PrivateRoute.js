import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

function PrivateRoute({component: Component, ...rest}) {
    const authenticated = useSelector(state => state.auth.isAuthed)

    return (
        <div>
            <Route {...rest} component={(props) => {
               const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null ;
               if(user !== null && authenticated){
                   return <Component {...props} />
               } else {
                   return <Redirect to={"/"} />
               }
            }} />
        </div>
    )
}

export default PrivateRoute
