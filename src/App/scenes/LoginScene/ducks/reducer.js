import { LOGIN } from './types';

/*
  authedUser = ''
 */
const loginReducer = function(state = '', action){
    switch(action.type){
        case LOGIN:
            return action.authedUserId;
        default:
            return state;
    }
}

export default loginReducer;