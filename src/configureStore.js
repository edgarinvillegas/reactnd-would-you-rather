import { createStore, applyMiddleware } from 'redux';

import appReducer from './App/ducks';

export function configureStore(){
    return createStore(appReducer);
}