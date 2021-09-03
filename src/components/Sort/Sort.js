import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

const Sort = () => {
    const { products, dispatch } = useContext(ProductsContext);

    const _sortProductsHandler = (event) => {
        let sortBy = event.target.value;

        if (sortBy === 'name') {
            let sortedProducts = products.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
            dispatch({
                type: "LOAD_PRODUCTS",
                payload: {
                    products: sortedProducts,
                    loadingProducts: false
                }
            })
        } else {
            let sortedProducts = products.sort((a, b) => (a.price > b.price) ? 1 : -1);
            dispatch({
                type: "LOAD_PRODUCTS",
                payload: {
                    products: sortedProducts,
                    loadingProducts: false
                }
            })
        }
    }

    const _reverseSortHandler = () => {
        let reverseSort = products.reverse();
        dispatch({
            type: "LOAD_PRODUCTS",
            payload: {
                products: reverseSort,
                loadingProducts: false
            }
        })
    }

    const _toggleFilterHandler = () =>{
        dispatch({ type: "TOGGLE_FILTER" });
    }

    return (
        <section className="sort-section">
            <div className="contiainer-fluid container-pad">
                <div className="row">
                    <div className="row justify-content-between">
                        <div className="col-auto me-auto">
                            <div className="tag">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><span>Photography</span></li>
                                    <li className="breadcrumb-item active">Premium Photos</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="controls">
                                <div className="desktop">
                                    <button className="btn" aria-label="Toggle sort" onClick={_reverseSortHandler}><i className="bi bi-arrow-down-up"></i> </button> Sort by

                                    <select className="form-select" onChange={_sortProductsHandler}>
                                        <option value="price">Price</option>
                                        <option value="name">A-Z</option>
                                    </select>
                                </div>
                                <div className="mobile">
                                    <button className="btn" aria-label="Toggle Filter" onClick={_toggleFilterHandler}>
                                        <i className="bi bi-sliders"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sort;