import { legacy_createStore as createStore,applyMiddleware,compose } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(){

    return createStore(
        rootReducer,
        compose(composeEnhancers(applyMiddleware(thunk))))
}