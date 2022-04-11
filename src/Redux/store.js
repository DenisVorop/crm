import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import authReducer from "./Reducers/authReducer";
import clinicsReducer from "./Reducers/clinicsReducer";
import usersReducer from "./Reducers/usersReducer";

//========================================================================================================================================================

const reducers = combineReducers(
    {
        usersReducer,
        authReducer,
        clinicsReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.store = store;

//========================================================================================================================================================

export default store;
