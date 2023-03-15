import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from 'react-router-dom'


export default function ForgotPassword() {

    let history = useHistory();

    const [show, setShow] = useState('none');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, SetConfirmPass] = useState('');
    const [randKey, SetrandKey] = useState('');
    const [error, setError] = useState('');



    async function handleEmailCheck(e) {
        e.preventDefault();
        let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/emailverify"
        let data = { email: email }

        let req = await fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })

        let body = await req.json();

        if (req.status === 200) {
            setShow('inherit');
        } else {

            setError(body.message);

        }
    }


    async function handlePassReset(e) {
        e.preventDefault();

        if (password === confirmPass) {

            let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/changepass"

            let data = {
                email: email,
                password: password,
                randKey: randKey
            }

            let req = await fetch(url, {
                method: "POST",
                mode: "cors",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            })

            let body = await req.json();

            if (req.status === 200) {
                setError('Pass change Succcess');
                setTimeout(() => {

                    history.push("/login")

                }, 2000);
            } else {

                setError(body.message);

            }

        }

    }

    return (

        <div className="container h-75">
            <div className="row h-100 align=items-center">
                <div className="col-md-8 offset-md-2">
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label className="form-label">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>


                        <Form.Group controlId="formBasicPassword" style={{ display: `${show}` }}>
                            <h6>A Random Key has been generated and sent to your given mail address. Kindly enter the key here</h6>
                            <Form.Label>Random Key</Form.Label>
                            <Form.Control type="text" placeholder="Random Key" value={randKey} onChange={(e) => { SetrandKey(e.target.value) }} />
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => { SetConfirmPass(e.target.value) }} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => { handleEmailCheck(e) }} style={{ display: (show == 'none') ? "inherit" : "none" }}>
                            Submit </Button>

                        <Button variant="primary" type="submit" onClick={(e) => { handlePassReset(e) }} style={{ display: `${show}` }}>
                            Submit </Button>

                        <div className="row justify-content-center">
                            <Form.Label> <span> {error} </span> </Form.Label>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    )

}