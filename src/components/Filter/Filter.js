import React, { useState, useContext, useEffect } from "react";
import { toast } from 'react-toastify';
import { ProductsContext } from '../../contexts/ProductsContext';
import { GetAllProducts, GetSortedProducts } from '../../services'
import { ReturnUniqueCategoriesHelper } from '../../utils/ReturnCategoriesHelper'

import Categories from "./Categories";
import PriceRange from './PriceRange'

const Filter = () => {
    const { showFilter, dispatch } = useContext(ProductsContext);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedRange, setSelectedRange] = useState([]);
    const [priceRanges, setPriceRanges] = useState([
        { tag: "Lower than $20", isChecked: false, value: [0, 20] },
        { tag: "$20 - $100", isChecked: false, value: [20, 100] },
        { tag: "$100 - $200", isChecked: false, value: [100, 200] },
        { tag: "More than $200", isChecked: false, value: [200, Number.MAX_SAFE_INTEGER] },
    ])

    useEffect(() => {
        GetAllProducts()
            .then(data => {
                const newCategories = ReturnUniqueCategoriesHelper(data);
                dispatch({
                    type: 'LOAD_CATEGORIES',
                    payload: {
                        categories: newCategories,
                        loadingCategories: false
                    }
                });
                setCategories(newCategories);
            })
            .catch(error => {
                toast.error("Failed to load categories");
                console.error('Error 🥲', error);
            });
    }, [dispatch])

    // second UseEffect to prevent stale closure on "selectedCategories" state 🥺
    useEffect(() => {
        const updateProductList = () => {
            dispatch({ type: 'TOGGLE_PRODUCTS_LOADING', payload: true });

            GetSortedProducts(selectedCategories, selectedRange)
            .then(data => {
                dispatch({
                    type: 'LOAD_PRODUCTS',
                    payload: {
                        products: data,
                        loadingProducts: false,
                    }
                });
                dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
            })
            .catch(error => {
                toast.error("Failed to filter products");
                console.error('Error 🥲', error);
            });
        }

        updateProductList();
    }, [dispatch, selectedCategories, selectedRange])

    const _selectCategoryHandler = (event) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedCategories([...selectedCategories, event.target.value]);
        } else {
            let updatedSelection = selectedCategories.filter(a => a !== event.target.value);
            setSelectedCategories(updatedSelection);
        }
    }

    const _updatePriceHandler = (rangeChange, tag, event) => {

        if (event.target.checked) {
            setSelectedRange(rangeChange);
        } else {
            setSelectedRange([]);
        }

        let priceRangesCopy = priceRanges;
        priceRangesCopy.forEach(range => {
            if (range.tag !== tag) {
                range.isChecked = false
            } else {
                range.isChecked = event.target.checked
            }
        });

        setPriceRanges(priceRangesCopy);
    }

    return (
        <aside className={showFilter?"filter":"filter hidden"}>
            <h1>Category</h1>
            <Categories
                onSelect={_selectCategoryHandler}
                categories={categories}
            />

            <h1>Price range</h1>
            <PriceRange
                onSelect={_updatePriceHandler}
                priceRanges={priceRanges}
            />
        </aside>
    )
}

export default Filter;