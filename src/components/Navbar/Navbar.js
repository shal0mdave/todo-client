import React, { useEffect, useState, useContext } from 'react';
import Cart from "../Cart/Cart";
import Logo from '../../assets/img/logo.svg';
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {

    const { items, showCart, dispatch } = useContext(CartContext);
    const [display, setDisplay] = useState(false);
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        setDisplay(showCart);
        setCartCount(items.length);
    }, [showCart, items.length])

    const _toggleCartHandler = () => {
        setDisplay(!display);
        dispatch({
            type: 'TOGGLE_CART'
        });
    }

    const _clearCartHandler = () => {
        setDisplay(false);
        dispatch({
            type: 'EMPTY_CART'
        });
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container-fluid container-pad">
                <div className="nav-border">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="Bejamas" />
                    </a>

                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link"
                                href=""
                                onClick={_toggleCartHandler}
                            >
                                <i className="bi bi-cart3"></i>
                                <span className="badge">{cartCount}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <Cart
                display={display}
                toggle={_toggleCartHandler}
                clear={_clearCartHandler}
            />
        </nav>
    )
}

export default Navbar;