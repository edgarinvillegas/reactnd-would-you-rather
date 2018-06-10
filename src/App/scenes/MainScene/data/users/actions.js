import {_getUsers$} from 'api';

//Action types
export const LOAD_USERS = 'App/MainScene/data/LOAD_USERS';
export const LOAD_USERS_FULFILLED = LOAD_USERS + '_FULFILLED';

//Action cretors
export function getUsersPromise() {
    return {
        type: LOAD_USERS,
        payload: _getUsers$()
    };
}
