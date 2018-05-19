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

export function getQuestionById(state, questionId){
    return state[questionId];
}