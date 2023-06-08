import { loadProduct } from "../actionCreators/actionCreators";

const fetchProduct = () => {
    //must be write below function which called thunk function
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/product");
        const data = await res.json();
        if (data) {
            dispatch(loadProduct(data))
        }
    }
}

export default fetchProduct;