import {LOAD_USERS_FULFILLED} from "./actions";


/**
 * Table<User>
 */
const initialState = {};
export default function(state = initialState, action){
    switch(action.type) {
        case LOAD_USERS_FULFILLED:
            return action.payload;
        default:
            return state;
    }
};

export const selectors = {
    getAnswersForUser: function (state, userId){
        return state[userId].answers;
    },
    getUserById: function (state, userId) {
        return state[userId];
    }
};


