import { combineReducers } from 'redux';

import loginReducer from '../scenes/LoginScene/ducks/index';

export default combineReducers({
   authedUserId: loginReducer
});