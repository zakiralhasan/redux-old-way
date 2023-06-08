import { ADD_TO_CART, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
}

const productReducer = (state = initialState, action) => {

    const selectedProduct = state.cart.find(product => product._id === action.payload._id)

    switch (action.type) {

        //for loading products
        case LOAD_PRODUCT:
            return {
                ...state,
                products: action.payload
            }

        //for adding products on the cart
        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter(product => product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };

        //for removing products from the cart
        case REMOVE_FROM_CART:
            if (selectedProduct.quantity > 1) {
                const newCart = state.cart.filter(product => product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity - 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload._id)
            };

        //for default action    
        default:
            return state;
    };

}

export default productReducer;