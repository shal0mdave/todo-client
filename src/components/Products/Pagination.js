import React, { useContext } from "react";
import { ProductsContext } from '../../contexts/ProductsContext';

const Pagination = () => {

    const { currentPage, products, productsPerPage, dispatch } = useContext(ProductsContext);
    const pageNumbers = [];
    const totalProducts = products.length;

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => {
        let maxPage = Math.ceil(totalProducts / productsPerPage);
        if (pageNumber <= maxPage && pageNumber >= 1) {
            dispatch({
                type: 'SET_CURRENT_PAGE',
                payload: pageNumber
            })
        }
    }

    return (
        <section className="pagination justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className="page-item">
                        <a onClick={() => paginate(currentPage - 1)} className="page-link" href="#top" aria-label="Previous">
                            <span>
                                <i className="bi bi-arrow-left-short"></i>
                            </span>
                        </a>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className={number === currentPage ? "page-item disabled" : "page-item"}>
                            <a onClick={() => paginate(number)} className="page-link" href="#top">
                                {number}
                            </a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a onClick={() => paginate(currentPage + 1)} className="page-link" href="#top" aria-label="Next">
                            <span>
                                <i className="bi bi-arrow-right-short"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Pagination;