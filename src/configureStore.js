import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import appReducer from './App/redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(){
    return createStore(appReducer, composeEnhancers(applyMiddleware(thunk, promiseMiddleware())) );
}