
import { ADD_TO_CART, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

export const loadProduct = (data) => {
    return {
        type: LOAD_PRODUCT,
        payload: data
    }
}

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        payload: data
    }
}