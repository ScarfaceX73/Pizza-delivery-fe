import React, { useState } from 'react'
// import { auth } from "../firebase"

export const AppContext = React.createContext()



export const AppProvider = (props) => {

    const [userStatus, setUserStatus] = useState(false);
    const [cartList, setCartList] = useState([]);
    const [user, setuser] = useState({ name: "", email: "", address: "", phone: "" });

    return (
        <AppContext.Provider
            value={{ userState: [userStatus, setUserStatus], cartState: [cartList, setCartList], whichUser: [user, setuser] }}
        >
            { props.children}

        </AppContext.Provider >

    )

}


