import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import { AppContext } from "../CONTEXTS/contexts";

export default function LogOut() {

    let history = useHistory();
    const [message, setMessage] = useState("You are loggingOut");
    let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/logout";

    const [userStatus, setUserStatus] = useContext(AppContext).userState;
    const [user, setuser] = useContext(AppContext).whichUser;

    useEffect(async () => {

        let logoutRequest = await fetch(url, {
            mode: "cors",
            credentials: 'include',
            method: "GET"
        });
        let logoutRequestBody = await logoutRequest.json();

        if (logoutRequest.status === 200) {
            setMessage("Log Out Succcessful");

            setTimeout(() => {

                setUserStatus(false);
                setuser({});
                history.push("/")

            }, 2000);

        } else {
            setMessage(logoutRequestBody.message)
        }


    }, [])

    return (
        <div>
            {message}
        </div>
    )

}