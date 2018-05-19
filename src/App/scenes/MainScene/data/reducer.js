import { _getUsers$, _getQuestions$ } from './api';
// import {combineReducers} from "redux";

//types
const LOAD_USERS = 'App/MainScene/data/LOAD_USERS';
const LOAD_USERS_FULFILLED = LOAD_USERS + '_FULFILLED';

const LOAD_QUESTIONS = 'App/MainScene/data/LOAD_QUESTIONS';
const LOAD_QUESTIONS_FULFILLED = LOAD_QUESTIONS + '_FULFILLED';

const LOAD_USERS_AND_QUESTIONS = 'App/MainScene/data/LOAD_USERS_AND_QUESTIONS';
const LOAD_USERS_AND_QUESTIONS_PENDING = LOAD_USERS_AND_QUESTIONS + '_PENDING';
const LOAD_USERS_AND_QUESTIONS_FULFILLED = LOAD_USERS_AND_QUESTIONS + '_FULFILLED';

//actions
function getUsersPromise() {
    return {
        type: LOAD_USERS,
        payload: _getUsers$()
    };
}

function getQuestionsPromise(){
    return {
        type: LOAD_QUESTIONS,
        payload: _getQuestions$()
    };
}

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

/*
export function getAllQuestions(state) {
    return Object.keys(state.questions);
}*/

//TODO: nest more?
function getQuestionsForUser(state, userId){
    return state.users[userId].questions;
}
//TODO: nest more?
function getQuestionById(state, questionId){
    return state.questions[questionId];
}

function areQuestionsAndUsersLoading(state){
    return state.loading;
}

export const selectors = {
    getQuestionsForUser,
    getQuestionById,
    areQuestionsAndUsersLoading
}

const initialState = {
    users: {},
    questions: {},
    loading: true
};
export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_USERS_AND_QUESTIONS_PENDING:
            return {
                ...state,
                loading: true
            };
        case LOAD_USERS_AND_QUESTIONS_FULFILLED:
            return {
                ...state,
                loading: false
            };
        case LOAD_USERS_FULFILLED:
            return {
                ...state,
                users: action.payload
            };
        case LOAD_QUESTIONS_FULFILLED:
            //console.log('LOAD_QUESTIONS_FULFILLED');
            return {
                ...state,
                questions: action.payload
            };
        default:
            return state;
    }
};
