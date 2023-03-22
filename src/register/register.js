import React, { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap"
import { Link, useHistory, useLocation } from 'react-router-dom'



function Register() {

    let history = useHistory();
    let location = useLocation();


    const [firstname, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmpassword, SetConfirmPassword] = useState("");
    const [address, SetAddress] = useState("");
    const [city, SetCity] = useState("");
    const [state, SetState] = useState("");
    const [zip, SetZip] = useState("");
    const [error, SetError] = useState("");

    let stateList = ["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"]

    async function handleRegisterationSubmission(e) {
        e.preventDefault();

        if (password !== confirmpassword) {

            SetError("Passwords Dont Match")

        } else {

            let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/register";

            let data = {
                firstname: firstname,
                secondName: secondName,
                email: email,
                password: password,
                address: address,
                // city: city,
                // state: state,
                // zip: zip
            }
            let registerRequest = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            });

            let registerReqBody = await registerRequest.json()
            console.log(registerReqBody, registerRequest.status)

            if (registerRequest.status !== 200) {
                SetError(registerReqBody.message)

            } else {

                history.push("/")
            }

        }

    }

    return (
        <div className="row h-75 align-items-center">
            <div className="col-lg-8 offset-lg-2">

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={firstname} onChange={(e) => { setFirstName(e.target.value) }} type="text" placeholder="Enter First Name" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="secondname">
                            <Form.Label>Second Name</Form.Label>
                            <Form.Control value={secondName} onChange={(e) => { setSecondName(e.target.value) }} type="text" placeholder="Enter Second Name" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={(e) => { SetEmail(e.target.value) }} type="email" placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Row>

                        <Form.Group as={Col} controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={(e) => { SetPassword(e.target.value) }} type="password" placeholder="Enter Password" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control value={confirmpassword} onChange={(e) => { SetConfirmPassword(e.target.value) }} type="password" placeholder="Confirm Password" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="address1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={address} onChange={(e) => { SetAddress(e.target.value) }} placeholder="Address Line 1" required />
                    </Form.Group>

                    {/* <Form.Row>
                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={city} onChange={(e) => { SetCity(e.target.value) }} type="text" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control value={state} onChange={(e) => { SetState(e.target.value) }} as="select" defaultValue="Choose..." required>
                                {
                                    stateList.map(s => <option style={{ color: "black" }}>{s}</option>)
                                }
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control value={zip} onChange={(e) => { SetZip(e.target.value) }} required />
                        </Form.Group>
                    </Form.Row> */}
                    <div className="row justify-content-center">
                        <Button variant="primary" type="submit" style={{ width: "75%" }} onClick={(e) => { handleRegisterationSubmission(e) }}>
                            Register </Button>
                    </div>

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

export default Register