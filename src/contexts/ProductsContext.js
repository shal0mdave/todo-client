import { createContext, useReducer } from "react";
import ProductsReducer from '../reducers/ProductsReducer'

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {

    const initialState = {
        sortBy: 'price',
        currentPage: 1,
        productsPerPage: 6,
        showFilter: false,
        products: [],
        loadingProducts: true,
        categories: [],
        loadingCategories: true,
    };

    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    return (
        <ProductsContext.Provider
            value={{
                sortBy: state.sortBy,
                currentPage: state.currentPage,
                productsPerPage: state.productsPerPage,
                showFilter: state.showFilter,
                products: state.products,
                loadingProducts: state.loadingProducts,
                categories: state.categories,
                loadingCategories: state.loadingCategories,
                dispatch: dispatch
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    )
}