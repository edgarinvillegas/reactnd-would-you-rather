import {combineReducers} from 'redux';

import dataReducer /*, { selectors as dataSelectors }*/ from './data/redux';
import scenesReducer from './scenes/redux';
import { selectors as usersSelectors } from './scenes/MainScene/data/users/redux';
import { selectors as questionSelectors} from './scenes/MainScene/data/questions/redux';
import { selectors as authedUserIdSelectors } from './data/authedUserId/redux';

// Reducer for stateTree.data.authedUserId
export default combineReducers({
    data: dataReducer,
    scenes: scenesReducer
});

//Selectors

function getAnswersForAuthedUser (stateTree){
    return usersSelectors.getAnswersForUser(stateTree.scenes.mainScene.data.users, stateTree.data.authedUserId);
}

function getUnansweredQuestionsForAuthedUser(stateTree){
    return questionSelectors.getUnansweredQuestionsForUser(stateTree.scenes.mainScene.data.questions, getAuthedUserId(stateTree));
}
function getAuthedUserId(stateTree) {
    return authedUserIdSelectors.getAuthedUserId(stateTree.data.authedUserId);
};

function getAnswerForAuthedUser(stateTree, questionId) {
    return getAnswersForAuthedUser(stateTree)[questionId];
}

export const selectors = {
    getAnswersForAuthedUser,
    getAnswerForAuthedUser,
    getUnansweredQuestionsForAuthedUser,
    getAuthedUserId
};


