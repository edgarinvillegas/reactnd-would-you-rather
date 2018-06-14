import { _getUsers$ } from 'api';
import { LOAD_USERS } from './actionTypes';


//Action cretors
export function getUsersPromise() {
    return {
        type: LOAD_USERS,
        payload: _getUsers$()
    };
}
