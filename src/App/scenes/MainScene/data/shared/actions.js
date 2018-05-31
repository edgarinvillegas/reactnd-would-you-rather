import {getUsersPromise} from "../users/actions";
import {getQuestionsPromise} from "../questions/actions";
import { _saveQuestion$, _saveQuestionAnswer$ } from '../api';

const LOAD_USERS_AND_QUESTIONS = 'App/MainScene/data/LOAD_USERS_AND_QUESTIONS';
export const LOAD_USERS_AND_QUESTIONS_PENDING = LOAD_USERS_AND_QUESTIONS + '_PENDING';
export const LOAD_USERS_AND_QUESTIONS_FULFILLED = LOAD_USERS_AND_QUESTIONS + '_FULFILLED';

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

const SAVE_ANSWER = 'App/MainScene/data/SAVE_ANSWER';
export const SAVE_ANSWER_PENDING = SAVE_ANSWER + '_PENDING';
// export const SAVE_ANSWER_FULFILLED = SAVE_ANSWER + '_FULFILLED';

export function saveAnswerPromiseAction(userId, questionId, answer){
    return {
        type: SAVE_ANSWER,
        payload: {
            promise: _saveQuestionAnswer$({authedUser: userId, qid: questionId, answer}),
            data: {userId, questionId, answer}
        }
    };
};

const SAVE_QUESTION = 'App/MainScene/data/SAVE_QUESTION';
export const SAVE_QUESTION_FULFILLED = SAVE_QUESTION + '_FULFILLED';
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
};

/*
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



