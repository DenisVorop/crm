import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import usersReducer from "./Reducers/UsersReducer";

//========================================================================================================================================================

const reducers = combineReducers(
    {
        usersReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.store = store;

//========================================================================================================================================================

export default store;
