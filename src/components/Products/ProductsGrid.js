import React, { useContext, useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import Product from './Product'
import { GetAllProducts } from '../../services'
import { ProductsContext } from '../../contexts/ProductsContext';
import AllProductsSkeleton from '../Loaders/AllProductsSkeleton'

const ProductsGrid = () => {
    const { loadingProducts, productsPerPage, currentPage, products, dispatch } = useContext(ProductsContext);

    useEffect(() => {
        GetAllProducts()
            .then(data => {
                let sortedData = data.sort((a, b) => (a.price > b.price) ? 1 : -1);
                dispatch({
                    type: 'LOAD_PRODUCTS',
                    payload: {
                        products: sortedData,
                        loadingProducts: false
                    }
                });
            })
            .catch(error => {
                toast.error("Failed to load products");
                console.error('Error 🥲', error)
            });
    }, [dispatch])

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <main className="products-grid">
            {
                loadingProducts ? (
                    <AllProductsSkeleton />
                ) :
                    (
                        <div className="row">

                            {currentProducts.length > 0 ? (
                                <Fragment>
                                    {currentProducts.map(product => (
                                        <div key={product.id} className="col-md-4">
                                            <Product
                                                bestseller={product.bestseller}
                                                image={product.image}
                                                category={product.category}
                                                name={product.name}
                                                price={product.price}
                                            />
                                        </div>
                                    ))}
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <section className="no-products mt-3 mb-5">
                                        <h1><i className="bi bi-inbox"></i> No products to display</h1>
                                    </section>
                                </Fragment>
                            )}
                        </div>
                    )
            }
        </main>
    )
}

export default ProductsGrid;