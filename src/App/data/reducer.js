import { combineReducers } from 'redux';
import authedUserIdReducer from './authedUserId/reducer';
import { selectors as authedUserIdSelectors } from './authedUserId/reducer';

export default combineReducers({
    authedUserId: authedUserIdReducer
});

export const selectors = {
    getAuthedUserId: state => authedUserIdSelectors.getAuthedUserId(state.authedUserId)
};



