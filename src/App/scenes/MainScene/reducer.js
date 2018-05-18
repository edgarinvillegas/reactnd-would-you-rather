import { combineReducers } from 'redux';

import dataReducer from './data/reducer';
import { selectors as dataSelectors } from './data/reducer';

function getLocalState(stateTree){
    console.log(stateTree);
    return stateTree.scenes.mainScene;
}

//Global state selectors
export function getQuestionById(stateTree, questionId){
    dataSelectors.getQuestionById(getLocalState(stateTree).data, questionId);
}

//TODO: Lift to global reducer
export function getQuestionsForAuthedUser(stateTree){
    const state = getLocalState(stateTree);
    return dataSelectors.getQuestionsForUser(state.data, stateTree.data.authedUserId);      //selector shouldn't know about state non-straightforward structure
}

export function areQuestionsAndUsersLoading(stateTree){
    const state = getLocalState(stateTree);
    return dataSelectors.areQuestionsAndUsersLoading(state.data);
}

//Local selectors

/*
export function getAllQuestions(state) {
    return Object.keys(state.questions);
}

export function getQuestionsForUser(state, userId){
    return state.users[userId].questions;
}
export function getQuestionById(state, questionId){
    return state.questions[questionId];
}
*/

export default combineReducers({
    data: dataReducer,
    scenes: (state, action) => null
});