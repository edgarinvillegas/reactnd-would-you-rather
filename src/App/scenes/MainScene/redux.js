import {combineReducers} from 'redux';

import dataReducer from './data/redux';
import {LOAD_USERS_AND_QUESTIONS_FULFILLED, LOAD_USERS_AND_QUESTIONS_PENDING} from "./data/shared/actions";
import { LOGOUT } from 'App/data/authedUserId/actions';

const initialLoadingState = true;

// Reducer for state.scenes.mainScene
export default combineReducers({
    loading: loadingReducer,
    data: dataReducer,
    scenes: (state, action) => null
});

/*
    Reducer for stateTree.scenes.mainScene.loading piece of state .
    state is just a boolean
 */
function loadingReducer(state = initialLoadingState, action) {
    switch (action.type) {
        case LOAD_USERS_AND_QUESTIONS_PENDING:
            return true;
        case LOAD_USERS_AND_QUESTIONS_FULFILLED:
            return false;
        case LOGOUT:
            return initialLoadingState;
        default:
            return state;
    }
}

//Selectors
export const selectors = {
    areQuestionsAndUsersLoading: function (state) {
        return state;
    }
};