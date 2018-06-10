import { combineReducers } from 'redux';

import loginSceneReducer from './LoginScene/redux';
import mainSceneReducer from './MainScene/redux';

//Reducer for stateTree.scenes piece of state .
export default combineReducers({
    loginScene: loginSceneReducer,
    mainScene: mainSceneReducer
});