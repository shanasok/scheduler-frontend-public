import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//adds support for redux dev tools
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(){
    return createStore(
        rootReducer,
        {},
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    )
}