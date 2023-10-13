import { ADD_PRODUCT, DELETE_PRODUCT } from"./types";

function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        payload: roduct,
    };
}

function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
}