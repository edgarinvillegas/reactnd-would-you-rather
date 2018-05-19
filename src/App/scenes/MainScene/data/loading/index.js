import {LOAD_USERS_AND_QUESTIONS_PENDING, LOAD_USERS_AND_QUESTIONS_FULFILLED} from '../actions';


export default function (state = true, action){
    switch(action.type) {
        case LOAD_USERS_AND_QUESTIONS_PENDING:
            return true;
        case LOAD_USERS_AND_QUESTIONS_FULFILLED:
            return false;
        default:
            return state;
    }
};