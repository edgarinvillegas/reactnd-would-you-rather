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

export function getQuestionsForUser(state, userId){
    return state[userId].questions;
}