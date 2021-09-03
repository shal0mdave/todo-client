import React, { Fragment } from "react";
import Skeleton from 'react-loading-skeleton';

const CategoriesSkeleton = () => {
    return (
        <Fragment>
            {Array(5).fill(1).map((el, i) =>
                <h2 key={i}>
                    <Skeleton width="10%" height="20px" /> { }
                    <Skeleton width="60%" height="20px" />
                </h2>
            )}
        </Fragment>
    )
}

export default CategoriesSkeleton;