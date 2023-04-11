import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import { filterReducer } from "./reducers/filterReducer";


const rootReducer = combineReducers( {

    cart: cartReducer,
    filter: filterReducer,

})

export default rootReducer;