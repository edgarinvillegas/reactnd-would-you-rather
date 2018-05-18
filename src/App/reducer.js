import {combineReducers} from 'redux';

import dataReducer, { selectors as dataSelectors } from './data/reducer';
import scenesReducer from './scenes/reducer';

export default combineReducers({
    data: dataReducer,
    scenes: scenesReducer
});
export const getAuthedUserId = state => dataSelectors.getAuthedUserId(state.data);

