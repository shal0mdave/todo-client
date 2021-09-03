

const CartReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                showCart: true,
                items: [...state.items, action.payload]
            }

        case 'EMPTY_CART':
            return {
                ...state,
                showCart: false,
                items: []
            }

        case "TOGGLE_CART":
            return {
                ...state,
                showCart: !state.showCart
            }

        default:
            return state;
    }
}

export default CartReducer;