import React from "react";
import Skeleton from 'react-loading-skeleton';

const AllProductsSkeleton = () => {
    return (
        <main className="products-grid">
            <div className="row">
                {Array(6).fill(1).map((el, i) =>
                    <div key={i} className="col-md-4">
                        <div className="product">
                            <Skeleton width="100%" height="400px" />
                            <p className="mt-2"><Skeleton width="40%" height="10px" /></p>
                            <h1><Skeleton width="100%" height="20px" /></h1>
                            <p className="price"><Skeleton width="30%" height="15px" /> </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default AllProductsSkeleton;