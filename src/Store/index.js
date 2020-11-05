 import { createStore , applyMiddleware } from 'redux';
 import thunk from 'redux-thunk';

// /* Reducers */
import rootReducer from './Reducers';

 const initialState = {};

 const middlewares = [thunk];

 const Store =  createStore(
     rootReducer,
     initialState,
     applyMiddleware(...middlewares)
 );

 export default Store;