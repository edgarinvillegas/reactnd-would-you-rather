import { combineReducers } from 'redux';
import authedUserIdReducer from './authedUserId/redux';

//Reducer for stateTree.data
export default combineReducers({
    authedUserId: authedUserIdReducer
});

