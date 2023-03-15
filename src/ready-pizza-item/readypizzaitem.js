import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { AppContext } from "../CONTEXTS/contexts"

export default function ReadyPizzaItem(props) {


    const [cartList, setCartList] = useContext(AppContext).cartState;

    const addToCart = (cartList) => {

        cartList = [...cartList, props.item]
        setCartList(() => [...cartList])
        console.log(props.item, cartList)
    }

    return (
        <Card style={{ width: '18rem', height: "auto", margin: "10px" }}>
            <Card.Img variant="top" src={props.item.img} style={{ backgroundColor: "rgba(0,0,0,1)" }} />
            <Card.Body>
                <Card.Title style={{ color: "black" }}>{props.item.name}</Card.Title>
                <Card.ImgOverlay style={{ color: "white", fontWeight: "bold", position: "relative", top: "-105px", left: "190px" }}> Rs{props.item.price} </Card.ImgOverlay>
                <Card.Text style={{ fontSize: "14px" }}>
                    {props.item.discription}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(cartList)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )

}