import {LOAD_QUESTIONS_FULFILLED} from "./actions";

/*
Table of questions
*/


const initialState = {}
export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_QUESTIONS_FULFILLED:
            //console.log('LOAD_QUESTIONS_FULFILLED');
            return action.payload;
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
    }
};
