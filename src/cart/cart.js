import React, { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from "../CONTEXTS/contexts";
import CartItem from "../cartitem/cartitem"
import useRazorpay from "react-razorpay";


const loadRazorpay = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        document.body.appendChild(script);
        script.onload = () => {
            resolve(true)
        };
        script.onerror = () => {
            resolve(false)
        }
    })
}

export default function Cart() {
    const Razorpay = useRazorpay();

    const displayrazorpay = () => {
        const options = {
            "key": "YOUR_KEY_ID",
            "amount": "50000",
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_9A33XWu170gUtm",
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        const rzp1 = new Razorpay(options);
    }



    const [user, setuser] = useContext(AppContext).whichUser;
    const [cartList, setCartList] = useContext(AppContext).cartState;
    const [total, setTotal] = useState(0);

    let sum = 0;

    useEffect(() => {
        cartList.forEach(element => {
            sum = sum + parseInt(element.price);
        });
        setTotal(sum)

    }, [cartList]);


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4 footer-text">Welcome-{user.firstname}</div>
                <div className="col-md-4 footer-text">Items will be delivered at {user.address}</div>
                <div className="col-md-4 footer-text">Total is: {total} </div>
                <div><button onClick={loadRazorpay()}>Buy</button></div>
            </div>
            <div className="row">

                {
                    cartList.map((item, index) => {
                        return (
                            <CartItem item={item} key={index} ></CartItem>
                        )
                    })

                }

            </div>
        </div>


    )
}