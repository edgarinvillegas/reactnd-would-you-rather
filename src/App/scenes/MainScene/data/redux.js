import {combineReducers} from "redux";

import usersReducer from "./users/redux";
import questionsReducer from "./questions/redux";
import { loadUsersAndQuestionsThunk, saveAnswerPromiseAction } from "./shared/actions";

export default combineReducers({
    questions: questionsReducer,
    users: usersReducer,
});

//These don't belong to any specific state field
export const operations = {
    loadUsersAndQuestionsThunk,
    saveAnswerPromiseAction
};

//These didn't belong to any children.
export const selectors = {

}



