import { createContext, useReducer } from "react";
import CartReducer from '../reducers/CartReducer'

export const CartContext = createContext();

export const CartProvider = (props) => {

    const initialState = {
        items: [],
        showCart: false
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                showCart: state.showCart,
                dispatch: dispatch
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}