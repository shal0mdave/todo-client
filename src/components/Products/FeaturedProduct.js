import React, { useEffect, useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import FeaturedProductSkeleton from '../Loaders/FeaturedProductSkeleton';
import { GetFeaturedProduct } from '../../services';
import { CartContext } from '../../contexts/CartContext';

const FeaturedProduct = () => {
    const [featuredProduct, setFeaturedProduct] = useState();
    const [loading, setLoading] = useState(true);
    const { items, dispatch } = useContext(CartContext);


    useEffect(() => {
        GetFeaturedProduct()
            .then(data => {
                const featured = data.find(product => product.featured === true);
                setFeaturedProduct(featured);
                setLoading(false);
            })
            .catch(error => {
                toast.error("Failed to load featured product");
                console.error('Error 🥲', error)
            });
    }, [])


    const _addProductHandler = () => {
        const maxId = items.reduce((previous, current) => (previous.id > current.id) ? previous.id : current.id, 0);
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: maxId + 1,
                name: featuredProduct.name,
                price: featuredProduct.price,
                image: featuredProduct.image
            }
        })
    }

    return (
        <section className="featured-product">
            <ToastContainer />
            <div className="contiainer-fluid container-pad">

                {
                    loading ? <FeaturedProductSkeleton />
                        : <div className="product-border">

                            <h1 className="product-title">{featuredProduct.name}</h1>

                            <div className="product">
                                <img
                                    src={featuredProduct.image.src}
                                    alt={featuredProduct.image.alt}
                                    className="product-image"
                                />
                                <div className="product-image-tag">
                                    Photo of the day
                                </div>
                            </div>

                            <button className="btn add-btn" onClick={_addProductHandler}>Add to cart</button>

                            <div className="product-grid">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="product-details">
                                            <h1>About {featuredProduct.name}</h1>
                                            <p className="tag">{featuredProduct.category}</p>
                                            <p className="description">{featuredProduct.details.description}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="product-suggestions">
                                            <h1>People also buy</h1>
                                            <div className="row product-suggestion-imgs">
                                                {
                                                    featuredProduct.details.recommendations.map((rec) => (
                                                        <div className="col" key={rec.alt}>
                                                            <img
                                                                src={rec.src}
                                                                alt={rec.alt}
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <h1>Details</h1>
                                            <p className="detail">Size: {featuredProduct.details.dimensions.width} x {featuredProduct.details.dimensions.height} pixel</p>
                                            <p className="detail">Size: {featuredProduct.details.size / 1000} mb</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </section>
    )
}

export default FeaturedProduct;