import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import ReadyPizzaItem from "../ready-pizza-item/readypizzaitem"
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { AppContext } from "../CONTEXTS/contexts"


function Menu() {

    let history = useHistory();
    const [userStatus, setUserStatus] = useContext(AppContext).userState;
    const [menuItems, setMenuItems] = useState([]);


    useEffect(async () => {

        console.log(String(process.env.REACT_APP_BACKEND_URL) + "/readypizza");
        console.log(`${process.env.NODE_ENV}+"/readypizza"`);
        axios.get(String(process.env.REACT_APP_BACKEND_URL) + "/readypizza")
            .then(response => setMenuItems(response.data))
            .catch(err => console.log(err))

        if (userStatus) {
        }

    }, [])
    return (
        <div className="row">

            {
                menuItems.map((item, index) => {
                    return (
                        <div className="col-lg-3">
                            <ReadyPizzaItem item={item} key={index} ></ReadyPizzaItem>
                        </div>

                    )
                })
            }

        </div>
    )


}


export default Menu