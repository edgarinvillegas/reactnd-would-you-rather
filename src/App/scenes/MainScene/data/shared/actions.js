import {getUsersPromise} from "../users/actions";
import {getQuestionsPromise} from "../questions/actions";

const LOAD_USERS_AND_QUESTIONS = 'App/MainScene/data/LOAD_USERS_AND_QUESTIONS';
export const LOAD_USERS_AND_QUESTIONS_PENDING = LOAD_USERS_AND_QUESTIONS + '_PENDING';
export const LOAD_USERS_AND_QUESTIONS_FULFILLED = LOAD_USERS_AND_QUESTIONS + '_FULFILLED';

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