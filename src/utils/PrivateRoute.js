import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth =localStorage.getItem('auth')
    return (
        <Route
            {...rest}
            render={props =>  auth  ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
            )}
        />
    )
}
export default PrivateRoute;