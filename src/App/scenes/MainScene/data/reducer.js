import {combineReducers} from "redux";

import usersReducer, {selectors as userSelectors} from "./users";
import questionsReducer, {selectors as questionSelectors} from "./questions";
import loadingReducer from './loading';
import {loadUsersAndQuestionsThunk} from "./actions";

export default combineReducers({
    questions: questionsReducer,
    users: usersReducer,
    loading: loadingReducer
});

export const selectors = {
    getQuestionsForUser: (state, userId) => userSelectors.getQuestionsForUser(state.users, userId),
    getQuestionById: (state, questionId) => questionSelectors.getQuestionById(state.questions, questionId),
    areQuestionsAndUsersLoading: (state) => state.loading
};

//These don't belong to any specific state field
export const operations = {
    loadUsersAndQuestionsThunk
}



