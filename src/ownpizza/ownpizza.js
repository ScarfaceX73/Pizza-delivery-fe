import React, { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from "../CONTEXTS/contexts";
import CartItem from "../cartitem/cartitem"
import { Form, Button } from "react-bootstrap"

function Ownpizza() {

    const [dataS, setData] = useState([[{ name: "", price: "", stock: "" }], [{ name: "", price: "", stock: "" }], [{ name: "", price: "", stock: "" }], [{ name: "", price: "", stock: "" }]]);

    useEffect(async () => {

        let url = String(process.env.REACT_APP_BACKEND_URL) + "/mypizzaitems";

        let req = await fetch(url);
        let data = await req.json();
        console.log(data);
        setData([...data.data])


    }, [])

    return (



        <div className="container">
            <Form>

                <div className="row">
                    <div className="col-md-3">
                        <h2>CRUST</h2>

                        {
                            dataS[0].map((i) => (
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label footer-text-muted" htmlFor="flexCheckDefault">
                                        {i.name} </label>
                                </div>
                            ))
                        }




                    </div>
                    <div className="col-md-3">
                        <h2>MEATS</h2>

                        {
                            dataS[1].map((i) => (
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label footer-text-muted" htmlFor="flexCheckDefault">
                                        {i.name} </label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-3">
                        <h2>SAUCES</h2>

                        {
                            dataS[2].map((i) => (
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label footer-text-muted" htmlFor="flexCheckDefault">
                                        {i.name} </label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-3">
                        <h2>VEGGIES</h2>
                        {
                            dataS[3].map((i) => (
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label footer-text-muted" htmlFor="flexCheckDefault">
                                        {i.name} </label>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="row justify-text-center">
                    <Button variant="primary" type="submit"> ADD IT </Button>
                </div>

            </Form>

        </div>

    )

}

export default Ownpizza