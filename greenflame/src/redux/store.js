import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import { syncWithStore } from 'react-redux-multilang';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

syncWithStore(store) // step 2: sync language with store

export default store;
