import React from "react";
import CategoriesSkeleton from '../Loaders/CategoriesSkeleton'

const Categories = (props) => {

    return (
        <div className="categories">
            {
                props.categories.length > 0 ? (
                    props.categories.map(category => (
                        <div key={category} className="form-check category">
                            <input className="form-check-input" type="checkbox" onChange={props.onSelect} value={category} id={category} />
                            <label className="form-check-label" htmlFor={category}>
                                {category}
                            </label>
                        </div>
                    ))
                ) : (
                    <CategoriesSkeleton />
                )
            }
        </div>
    )
}

export default Categories;