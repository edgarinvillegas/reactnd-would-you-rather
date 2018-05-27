import {combineReducers} from 'redux';

import dataReducer /*, { selectors as dataSelectors }*/ from './data/redux';
import scenesReducer from './scenes/redux';
import { selectors as usersSelectors } from './scenes/MainScene/data/users/redux';
import { selectors as questionSelectors} from './scenes/MainScene/data/questions/redux';
import { selectors as authedUserIdSelectors } from './data/authedUserId/redux';

export default combineReducers({
    data: dataReducer,
    scenes: scenesReducer
});
// export const getAuthedUserId = state => dataSelectors.getAuthedUserId(state.data);


function getAnswersForAuthedUser (stateTree){
    return usersSelectors.getAnswersForUser(stateTree.scenes.mainScene.data.users, stateTree.data.authedUserId);      //selector shouldn't know about state non-straightforward structure
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


