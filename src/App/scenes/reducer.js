import { combineReducers } from 'redux';

import loginSceneReducer from './LoginScene/reducer';

export default combineReducers({
    loginScene: loginSceneReducer
});