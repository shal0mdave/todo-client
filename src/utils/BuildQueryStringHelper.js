export const BuildCategoryQueryString = (obj) => {
    let queryString = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            queryString.push('category=' + encodeURIComponent(obj[p]));
        }
    }
    return queryString.join("&");
}

export const BuildPriceRangeQuery = (range) => {
    if (range.length > 0) {
        return `price_gte=${range[0]}&price_lte=${range[1]}`;
    }
    return "";
}