import { combineReducers } from 'redux';
import authedUserIdReducer from './authedUserId';
import { selectors as authedUserIdSelectors } from './authedUserId';

export default combineReducers({
    authedUserId: authedUserIdReducer
});

export const selectors = {
    getAuthedUserId: state => authedUserIdSelectors.getAuthedUserId(state.authedUserId)
};



