import {combineReducers} from 'redux';

import dataReducer /*, { selectors as dataSelectors }*/ from './data/redux';
import scenesReducer from './scenes/redux';
import { selectors as usersSelectors } from './scenes/MainScene/data/users/redux';
import { selectors as authedUserIdSelectors } from './data/authedUserId/redux';

export default combineReducers({
    data: dataReducer,
    scenes: scenesReducer
});
// export const getAuthedUserId = state => dataSelectors.getAuthedUserId(state.data);




export const selectors = {
    getAnswersForAuthedUser: function(stateTree){
        return usersSelectors.getAnswersForUser(stateTree.scenes.mainScene.data.users, stateTree.data.authedUserId);      //selector shouldn't know about state non-straightforward structure
    },

    getAuthedUserId: stateTree => authedUserIdSelectors.getAuthedUserId(stateTree.data.authedUserId)
};


