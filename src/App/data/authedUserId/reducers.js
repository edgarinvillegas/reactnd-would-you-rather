//This could have been named reducer1.js
import { LOGIN } from './actions';

//@reducer
export default function(state = '', action){
    switch(action.type){
        case LOGIN:
            return action.authedUserId;
        default:
            return state;
    }
}

//@selector
export function getAuthedUserId (state){
    return state;
}

