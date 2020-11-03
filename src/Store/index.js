import { createStore , applyMiddleware } from "redux";
import thunk from 'redux-thunk';

/* Reducers */
import rootReducer from './Reducers';

const initialState = {};

const middlewares = {thunk};

const store =  createStore(
    rootReducer,
    initialState,
    applyMiddleware{...middlewares}
)

export default store;