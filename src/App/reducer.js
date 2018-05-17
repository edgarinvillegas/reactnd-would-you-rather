import { combineReducers } from 'redux';

import dataReducer from './data/reducer';
import scenesReducer from './scenes/reducer';

export default combineReducers({
    data: dataReducer,
    scenes: scenesReducer
});