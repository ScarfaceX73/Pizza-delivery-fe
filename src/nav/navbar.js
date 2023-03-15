import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from "../CONTEXTS/contexts";

function Nav() {
    const [userStatus, setUserStatus] = useContext(AppContext).userState;
    const [user, setuser] = useContext(AppContext).whichUser;
    const [cartList, setCartList] = useContext(AppContext).cartState;


    useEffect(async () => {

        let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/check";
        let userStatusReq = await fetch(url, {
            mode: "cors",
            credentials: 'include',
            method: "GET"
        });

        let userStatusReqBody = await userStatusReq.json();
        if (userStatusReq.status === 200 && userStatusReqBody) {

            setUserStatus(true);
            setuser(userStatusReqBody);

        }

    }, [])

    if (!userStatus) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html"><span className="flaticon-pizza-1 mr-1" />Pizza<br /><small>Delicous</small></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
              </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><span className="nav-link"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/menu" style={{ textDecoration: 'none' }}>Menu</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/ownpizza" style={{ textDecoration: 'none' }}>Create Your Own Pizza</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></span></li>

                            {/* <li className="nav-item"><a href="services.html" className="nav-link">Create Your Pizza</a></li>
                  <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link">Login</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link">Register</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        )
    } else {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html"><span className="flaticon-pizza-1 mr-1" />Pizza<br /><small>Delicous</small></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
              </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><span className="nav-link"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/menu" style={{ textDecoration: 'none' }}>Menu</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/ownpizza" style={{ textDecoration: 'none' }}>Create Your Own Pizza</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/contact" style={{ textDecoration: 'none' }}>Welcome- {user.firstname}</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/cart" style={{ textDecoration: 'none' }}>Cart{(cartList.length) ? `-(${cartList.length})` : ""}</Link></span></li>
                            <li className="nav-item"><span className="nav-link"><Link to="/logout" style={{ textDecoration: 'none' }}>Logout</Link></span></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )

    }

}

export default Nav