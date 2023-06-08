import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import thunk from "redux-thunk";

const store = createStore(productReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;