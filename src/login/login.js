import React, { useState, useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import { AppContext } from "../CONTEXTS/contexts";

function Login(props) {
    let history = useHistory();
    let location = useLocation();

    const [userStatus, setUserStatus] = useContext(AppContext).userState;
    const [user, setuser] = useContext(AppContext).whichUser;
    // const [cartList, setCartList] = useContext(AppContext).cartState;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLoginAttempt(e, user) {

        e.preventDefault();

        let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/login";
        let data = {
            email: email,
            password: password
        }

        let loginRequest = await fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })

        let loginReqBody = await loginRequest.json()

        if (loginRequest.status === 200) {

            user = loginReqBody;

            setUserStatus(true);
            setuser(user);
            console.log(user);

            history.push("/")



        } else {

            setError(loginReqBody.message)
        }

    }


    return (
        <div className="row h-75 align-items-center">
            <div className="col-lg-8 offset-lg-2">
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label className="form-label">Email address</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="form-label">Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="row justify-content-center">
                        <Button style={{ width: "50%" }} variant="primary" type="submit" onClick={(e) => handleLoginAttempt(e, user)}>
                            Submit
                        </Button>

                    </div>

                    <br />

                    <div className="row justify-content-center">
                        <Link to="/forgotpassword">
                            <span className="forgotPass">
                                Forgot Password?</span>
                        </Link>
                    </div>

                    <div className="row justify-content-center">
                        <Form.Label> <span> {error} </span> </Form.Label>
                    </div>

                </Form>
            </div>

        </div>
    )
}

export default Login