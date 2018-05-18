import { combineReducers } from 'redux';

import loginSceneReducer from './LoginScene/reducer';
import mainSceneReducer from './MainScene/reducer';

export default combineReducers({
    loginScene: loginSceneReducer,
    mainScene: mainSceneReducer
});