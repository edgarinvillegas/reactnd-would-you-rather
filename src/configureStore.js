import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import appReducer from './App/reducer';

function tempReducer(state, action){
    console.log("ROOT REDUCER, action: ", action);
    return appReducer(state, action);
}

export function configureStore(){
    return createStore(tempReducer, applyMiddleware(thunk, promiseMiddleware()) );
}