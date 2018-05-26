import {combineReducers} from 'redux';

import dataReducer from './data/redux';
import {LOAD_USERS_AND_QUESTIONS_FULFILLED, LOAD_USERS_AND_QUESTIONS_PENDING} from "./data/shared/actions";
// import { selectors as dataSelectors } from './data/redux';

/*
function getLocalState(stateTree){
    console.log(stateTree);
    return stateTree.scenes.mainScene;
}

//Global state selectors
export function getQuestionById(stateTree, questionId){
    dataSelectors.getQuestionById(getLocalState(stateTree).data, questionId);
}

//TODO: Lift to global reducer
export function getAnswersForAuthedUser(stateTree){
    const state = getLocalState(stateTree);
    return dataSelectors.getAnswersForUser(state.data, stateTree.data.authedUserId);      //selector shouldn't know about state non-straightforward structure
}

export function areQuestionsAndUsersLoading(stateTree){
    const state = getLocalState(stateTree);
    return dataSelectors.areQuestionsAndUsersLoading(state.data);
}
*/
//Local selectors

/*
export function getAllQuestions(state) {
    return Object.keys(state.questions);
}

export function getAnswersForUser(state, userId){
    return state.users[userId].questions;
}
export function getQuestionById(state, questionId){
    return state.questions[questionId];
}
*/

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