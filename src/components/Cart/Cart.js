import React, { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const { items } = useContext(CartContext);

    useEffect(() => {
        setCartItems(items);
    }, [items])

    return (
        <div className={`cart ${props.display ? 'show' : 'hide'}`}>

            <button className="btn close-btn"
                onClick={props.toggle}>
                <i className="bi bi-x-lg"></i>
            </button>

            <ul className="item-list">
                {
                    cartItems.length > 0 ? (
                        <Fragment>
                            {cartItems.slice(0).reverse().map((item) => (
                                <li key={item.id}>
                                    <div className="d-flex item-container">
                                        <div className="p-2 flex-grow-1">
                                            <p className="item-name">{item.name}</p>
                                            <p className="item-price">${item.price}</p>
                                        </div>
                                        <div className="p-2 item-image-container">
                                            <img
                                                src={item.image.src}
                                                alt={item.image.alt}
                                            />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </Fragment>
                    ) :
                        (
                            <li>
                                <div className="d-flex item-container">
                                    <div className="p-2 flex-grow-1">
                                        <p className="item-name">Your cart is empty.</p>
                                    </div>
                                </div>
                            </li>
                        )
                }
            </ul>

            <div className="d-grid mx-auto">
                <button className="btn clear-btn" onClick={props.clear}>Clear</button>
            </div>
        </div>
    )
}

export default Cart;