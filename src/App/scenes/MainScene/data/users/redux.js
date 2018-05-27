import {LOAD_USERS_FULFILLED} from "./actions";
import { SAVE_ANSWER_PENDING } from '../shared/actions';


/**
 * Table<User>
 */
const initialState = {};
export default function(state = initialState, action){
    switch(action.type) {
        case LOAD_USERS_FULFILLED:
            return action.payload;
        case SAVE_ANSWER_PENDING:
            const { userId } = action.payload;
            return {
                ...state,
                [userId]: userReducer(state[userId], action)
            }
        default:
            return state;
    }
};

/**
 *
 * @param state user object
 */
function userReducer(state = {}, action){
    switch(action.type){
        case SAVE_ANSWER_PENDING:
            const { questionId, answer } = action.payload;
            const answers = state.answers;
            return {
                ...state,
                answers: {
                    ...answers,
                    [questionId]: answer
                }
            };
        default:
            return state;
    }
}

function getAuthoredQuestionsCount(state, userId) {
    const user = state[userId];
    return user.questions.length;
}
function getAnswersCount(state, userId) {
    const user = state[userId];
    return Object.keys(user.answers).length;
}

export const selectors = {
    getAnswersForUser: function (state, userId){
        return state[userId].answers;
    },
    getUserById: function (state, userId) {
        return state[userId];
    },
    getAuthoredQuestionsCount,
    getAnswersCount,
    getPoints: function(state, userId) {
        return getAuthoredQuestionsCount(state, userId) + getAnswersCount(state, userId);
    }
};


