import {LOAD_QUESTIONS_FULFILLED} from "./actions";
import { SAVE_ANSWER_PENDING } from '../shared/actions';

/*
Table of questions
*/


const initialState = {};
export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_QUESTIONS_FULFILLED:
            //console.log('LOAD_QUESTIONS_FULFILLED');
            return action.payload;
        case SAVE_ANSWER_PENDING:
            const { questionId } = action.payload;
            return {...state, [questionId]: questionReducer(state[questionId], action) };
        default:
            return state;
    }
}

export const selectors = {
    getQuestionById: function (state, questionId){
        return state[questionId];
    },
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
    }
};

//state here is a question object
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


