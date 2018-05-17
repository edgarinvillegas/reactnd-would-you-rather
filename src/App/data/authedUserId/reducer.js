//////Action creator
const LOGIN = 'App/data/LOGIN';
const loginAction = (authedUserId) => ({ type: LOGIN, authedUserId });

export const operations = {
    login: loginAction
}

//////Selectors
export const selectors = {
    /**
     * @returns {string} authedUserId;
     */
    getAuthedUserId: function (state){
        return state;
    }
}

//////Reducer
export default function(state = '', action){
    switch(action.type){
        case LOGIN:
            return action.authedUserId;
        default:
            return state;
    }
}