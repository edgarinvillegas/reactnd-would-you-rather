import { LOGIN, loginAction, LOGOUT, logoutAction } from './actions';

/**
 * Reducer for stateTree.data.authedUserId
 * authedUserId is just a string.
 */
export default function(state = '', action){
    switch(action.type){
        case LOGIN:
            return action.authedUserId;
        case LOGOUT:
            return '';
        default:
            return state;
    }
}

//selectors
export const selectors = {
    getAuthedUserId: function  (state){
        return state;
    }
};

//operations
export const operations = {
    loginAction,
    logoutAction
};

