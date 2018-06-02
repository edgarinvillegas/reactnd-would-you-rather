import {combineReducers} from 'redux';

import dataReducer from './data/redux';
import {LOAD_USERS_AND_QUESTIONS_FULFILLED, LOAD_USERS_AND_QUESTIONS_PENDING} from "./data/shared/actions";

export default combineReducers({
    loading: loadingReducer,
    data: dataReducer,
    scenes: (state, action) => null
});

function loadingReducer(state = true, action) {
    switch (action.type) {
        case LOAD_USERS_AND_QUESTIONS_PENDING:
            return true;
        case LOAD_USERS_AND_QUESTIONS_FULFILLED:
            return false;
        default:
            return state;
    }
};
export const selectors = {
    areQuestionsAndUsersLoading: function (state) {
        return state;
    }
};