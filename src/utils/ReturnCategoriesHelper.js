export const ReturnUniqueCategoriesHelper = (array) => {
    return [...new Set(array.map(obj => obj.category))];
}