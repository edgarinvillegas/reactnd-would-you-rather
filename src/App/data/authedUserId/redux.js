//This could have been named reducer1.js
import {LOGIN, loginAction} from './actions';

//@reducer
export default function(state = '', action){
    switch(action.type){
        case LOGIN:
            return action.authedUserId;
        default:
            return state;
    }
}

export const selectors = {
    getAuthedUserId: function  (state){
        return state;
    }
}

export const operations = {
    loginAction
};

