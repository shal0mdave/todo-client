import { URL } from '../configs/Endpoint';
import { BuildCategoryQueryString, BuildPriceRangeQuery } from '../utils/BuildQueryStringHelper';

const GetSortedProducts = async (categoriesObject, priceRange) => {

    let categoriesQueryString = BuildCategoryQueryString(categoriesObject);
    let priceRangeQueryString = BuildPriceRangeQuery(priceRange);
    let fetchURL = `${URL}?featured=false&${categoriesQueryString}&${priceRangeQueryString}`;
    fetchURL.replace(/\s+/g, '');

    return fetch(fetchURL, {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                return response.json()
            })
}

export default GetSortedProducts;