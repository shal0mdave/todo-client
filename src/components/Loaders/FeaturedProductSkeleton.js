import React from "react";
import Skeleton from 'react-loading-skeleton';

const FeaturedProductSkeleton = () => {
    return (
        <div className="product-border">

            <h1 className="product-title"><Skeleton width="50%" /></h1>

            <div className="product">
                <Skeleton height={300} />
            </div>

            <div className="product-grid">
                <div className="row">
                    <div className="col-md-7">
                        <div className="product-details">
                            <h1><Skeleton /></h1>
                            <p className="tag"><Skeleton width="50%" /></p>
                            <p className="description"><Skeleton count={4} /></p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="product-suggestions">
                            <h1><Skeleton width="70%" /></h1>
                            <div className="row product-suggestion-imgs">
                                <div className="col">
                                    <Skeleton height={130} />
                                </div>
                                <div className="col">
                                    <Skeleton height={130} />
                                </div>
                                <div className="col">
                                    <Skeleton height={130} />
                                </div>
                            </div>
                            <h1><Skeleton width="30%" /></h1>
                            <p className="detail"><Skeleton width="60%" /></p>
                            <p className="detail"><Skeleton width="20%" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductSkeleton;