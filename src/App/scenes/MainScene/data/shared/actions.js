import {getUsersPromise} from "../users/actions";
import {getQuestionsPromise} from "../questions/actions";
import { _saveQuestionAnswer$ } from '../api';

const LOAD_USERS_AND_QUESTIONS = 'App/MainScene/data/LOAD_USERS_AND_QUESTIONS';
export const LOAD_USERS_AND_QUESTIONS_PENDING = LOAD_USERS_AND_QUESTIONS + '_PENDING';
export const LOAD_USERS_AND_QUESTIONS_FULFILLED = LOAD_USERS_AND_QUESTIONS + '_FULFILLED';

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

