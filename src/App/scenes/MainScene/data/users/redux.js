import {LOAD_USERS_FULFILLED} from "./actionTypes";
import { SAVE_ANSWER_PENDING, SAVE_QUESTION_FULFILLED } from '../shared/actions';
import { LOGOUT } from 'App/data/authedUserId/actions';

/**
 * Reducer for state.scenes.mainScene.data.users piece of state.
 * Users state is a 'table' of questions in the same format as returned by the api.
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
            };
        case SAVE_QUESTION_FULFILLED:
            const { author } = action.payload;
            return {
                ...state,
                [author]: userReducer(state[author], action)
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

/**
 *
 * Aux reducer. state is a single user object
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
        case SAVE_QUESTION_FULFILLED:
            const { author } = action.payload;
            return {
                ...state,
                questions: state.questions.concat(author)
            };
        default:
            return state;
    }
}

// Selectors

function getAuthoredQuestionsCount(state, userId) {
    const user = state[userId];
    return user.questions.length;
}
function getAnswersCount(state, userId) {
    const user = state[userId];
    return Object.keys(user.answers).length;
}
function getPoints (state, userId) {
    return getAuthoredQuestionsCount(state, userId) + getAnswersCount(state, userId);
}

export const selectors = {
    getAnswersForUser: function (state, userId){
        return state[userId].answers;
    },
    getUserById: function (state, userId) {
        return state[userId];
    },
    getSortedUsers: function (state){
        return Object.keys(state).sort( (uid1, uid2) => getPoints(state, uid2) - getPoints(state, uid1) );
    },
    getAuthoredQuestionsCount,
    getAnswersCount,
    getPoints
};


