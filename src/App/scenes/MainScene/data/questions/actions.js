import {_getQuestions$} from "../api";

export const LOAD_QUESTIONS = 'App/MainScene/data/LOAD_QUESTIONS';
export const LOAD_QUESTIONS_FULFILLED = LOAD_QUESTIONS + '_FULFILLED';

export function getQuestionsPromise(){
    return {
        type: LOAD_QUESTIONS,
        payload: _getQuestions$()
    };
}


