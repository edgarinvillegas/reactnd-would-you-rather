import { createStore/*, applyMiddleware*/ } from 'redux';

import appReducer from './App/reducer';

export function configureStore(){
    return createStore(appReducer);
}