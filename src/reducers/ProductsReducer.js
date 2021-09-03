

const ProductsReducer = (state, action) => {

    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                products: action.payload.products,
                loadingProducts: action.payload.loadingProducts
            }

        case 'TOGGLE_PRODUCTS_LOADING':
            return {
                ...state,
                loadingProducts: action.payload
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }

        case 'LOAD_CATEGORIES':
            return {
                ...state,
                categories: action.payload.categories,
                loadingCategories: action.payload.loadingCategories
            }
        
        case 'TOGGLE_FILTER':
            return {
                ...state,
                showFilter: !state.showFilter
            }

        default:
            return state;
    }
}

export default ProductsReducer;