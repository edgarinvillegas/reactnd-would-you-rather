import {_getUsers$} from "../api";

export const LOAD_USERS = 'App/MainScene/data/LOAD_USERS';
export const LOAD_USERS_FULFILLED = LOAD_USERS + '_FULFILLED';

//actions
export function getUsersPromise() {
    return {
        type: LOAD_USERS,
        payload: _getUsers$()
    };
}
