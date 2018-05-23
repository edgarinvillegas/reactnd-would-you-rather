import {combineReducers} from "redux";

import usersReducer/*, {selectors as userSelectors}*/ from "./users/redux";
import questionsReducer/*, {selectors as questionSelectors}*/ from "./questions/redux";
import {loadUsersAndQuestionsThunk} from "./shared/actions";

export default combineReducers({
    questions: questionsReducer,
    users: usersReducer,
    // loading: loadingReducer
});

/*
export const selectors = {
    getAnswersForUser: (state, userId) => userSelectors.getAnswersForUser(state.users, userId),
    getQuestionById: (state, questionId) => questionSelectors.getQuestionById(state.questions, questionId),
    areQuestionsAndUsersLoading: (state) => state.loading
};
*/


//These don't belong to any specific state field
export const operations = {
    loadUsersAndQuestionsThunk
};

//These didn't belong to any children.
export const selectors = {
    /**
     *
     * @param state
     * @param userId
     * @param questionId
     * @returns {string} 'option1', 'option2' or ''
     */
    getAnsweredOption: function(state, userId, questionId){
        return state.users[userId].answers[questionId] || '';
    }
}



