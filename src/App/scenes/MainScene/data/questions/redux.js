import {LOAD_QUESTIONS_FULFILLED} from "./actions";
import { SAVE_ANSWER_PENDING, SAVE_QUESTION_FULFILLED } from '../shared/actions';
import { LOGOUT } from 'App/data/authedUserId/actions';

/**
 * Reducer for state.scenes.mainScene.data.questions piece of state.
 * Questions state is a 'table' of questions in the same format as returned by the api.
 */
const initialState = {};
export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_QUESTIONS_FULFILLED:
            return action.payload;
        case SAVE_ANSWER_PENDING:
            const { questionId } = action.payload;
            return {...state, [questionId]: questionReducer(state[questionId], action) };
        case SAVE_QUESTION_FULFILLED:
            const question = action.payload;
            return {...state, [question.id]: question };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

//Selectors
function getQuestionById(state, questionId){
    return state[questionId];
}

export const selectors = {
    getQuestionById,
    getUnansweredQuestionsForUser: function(state, userId) {
        return Object.keys(state).filter( questionId => {
            const question = state[questionId];
            return !question.optionOne.votes.concat(question.optionTwo.votes).includes(userId);
        })
    },
    getQuestionPercentages: function(question){
        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const total = optionOneVotes + optionTwoVotes;
        return {
            optionOne: total ? (optionOneVotes/total * 100).toFixed() : 0,
            optionTwo: total ? (optionTwoVotes/total * 100).toFixed() : 0
        };
    },
    getSortedQuestionsByTimestamp: function(state, questionIds){
       return questionIds.sort((qid1, qid2) => {
           return getQuestionById(state, qid2).timestamp - getQuestionById(state, qid1).timestamp;
       })
    }
};

/**
 * Aux reducer for a single question.
 * state here is a question object
 */
function questionReducer(state = {}, action){
    switch(action.type) {
        case SAVE_ANSWER_PENDING:
            const { userId, answer } = action.payload;
            const answeredOption = state[answer];
            return {
                ...state,
                [answer]: {
                    ...answeredOption,
                    votes: answeredOption.votes.concat([userId])
                }
            };
        default:
            return state;
    }
}


