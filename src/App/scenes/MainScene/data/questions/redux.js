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

