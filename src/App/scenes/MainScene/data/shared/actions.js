/**
 * shared/actions.js
 * These are considered 'shared' actions because they potentially modify
 * mixed portions of state: questions and users.
 */
import {getUsersPromise} from "../users/actions";
import {getQuestionsPromise} from "../questions/actions";
import { _saveQuestion$, _saveQuestionAnswer$ } from 'api';

//Action types for loading users and questions
const LOAD_USERS_AND_QUESTIONS = 'App/MainScene/data/LOAD_USERS_AND_QUESTIONS';
export const LOAD_USERS_AND_QUESTIONS_PENDING = LOAD_USERS_AND_QUESTIONS + '_PENDING';
export const LOAD_USERS_AND_QUESTIONS_FULFILLED = LOAD_USERS_AND_QUESTIONS + '_FULFILLED';

//Action creators for loading users and questions

export function loadUsersAndQuestionsThunk(){
    return dispatch => {
        dispatch({
            type: LOAD_USERS_AND_QUESTIONS,
            payload: Promise.all([
                dispatch(getUsersPromise()),
                dispatch(getQuestionsPromise())
            ])
        });
    }
}

//Action types for saving answer
const SAVE_ANSWER = 'App/MainScene/data/SAVE_ANSWER';
export const SAVE_ANSWER_PENDING = SAVE_ANSWER + '_PENDING';

//Acction creators for saving answers
export function saveAnswerPromiseAction(userId, questionId, answer){
    return {
        type: SAVE_ANSWER,
        payload: {
            promise: _saveQuestionAnswer$({authedUser: userId, qid: questionId, answer}),
            data: {userId, questionId, answer}
        }
    };
}

//Action types for saving question
const SAVE_QUESTION = 'App/MainScene/data/SAVE_QUESTION';
export const SAVE_QUESTION_FULFILLED = SAVE_QUESTION + '_FULFILLED';

//Action creators for saving questions
export function saveQuestionPromiseAction( optionOne, optionTwo, userId ){
    return {
        type: SAVE_QUESTION,
        payload: {
            promise: _saveQuestion$({
                optionOneText: optionOne,
                optionTwoText: optionTwo,
                author: userId
            })
        }
    };
}

/*
// This is an alternative way composing redux-promise dispatchers
function loadUsersAndQuestionsOperation(){
    return {
        type: LOAD_USERS_AND_QUESTIONS,
        payload: Promise.all([
            _getUsers$(),
            _getQuestions$()
        ]).then(([users, questions]) => {
            return {
                users,
                questions
            };
        })
    };
}
*/



