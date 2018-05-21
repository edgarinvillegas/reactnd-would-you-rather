import { combineReducers } from 'redux';

import loginSceneReducer from './LoginScene/redux';
import mainSceneReducer from './MainScene/redux';

export default combineReducers({
    loginScene: loginSceneReducer,
    mainScene: mainSceneReducer
});