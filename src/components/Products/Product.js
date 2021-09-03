import React, { useContext } from "react";
import { CartContext } from '../../contexts/CartContext';

const Product = (props) => {
    const { items, dispatch } = useContext(CartContext);

    const _addProductHandler = () => {
        const maxId = items.reduce((previous, current) => (previous.id > current.id) ? previous.id : current.id, 0);
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: maxId + 1,
                name: props.name,
                price: props.price,
                image: props.image
            }
        })
    }

    return (
        <div className="product">
            {props.bestseller && (<span className="bestseller">Bestseller</span>)}
            <img src={props.image.src} alt={props.image.alt} className="product-image" />
            <div className="d-grid gap-2">
                <button className="btn add-btn" onClick={_addProductHandler}>Add to cart</button>
            </div>
            <p className="category">{props.category}</p>
            <h1>{props.name}</h1>
            <p className="price">${props.price}</p>
        </div>
    )
}

export default Product;