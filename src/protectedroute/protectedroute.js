import React, { useContext } from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { AppContext } from "../CONTEXTS/contexts";





export const ProtectedRoute = ({ component: Component, ...rest }) => {

    let history = useHistory();
    let location = useLocation();
    const [userStatus, setUserStatus] = useContext(AppContext).userState;

    if (userStatus) {
        console.log(history, location)
    }

    return (
        <Route {...rest}>
            {
                (userStatus) ? <Component /> : <Redirect to="/login"></Redirect>
            }
        </Route>

    )


}