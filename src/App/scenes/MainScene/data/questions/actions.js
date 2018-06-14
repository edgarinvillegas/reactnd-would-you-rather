import { _getQuestions$ } from "api";
import { LOAD_QUESTIONS } from './actionTypes';


export function getQuestionsPromise(){
    return {
        type: LOAD_QUESTIONS,
        payload: _getQuestions$()
    };
}


