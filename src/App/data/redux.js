import { combineReducers } from 'redux';
import authedUserIdReducer from './authedUserId/redux';
// import { selectors as authedUserIdSelectors } from './authedUserId/redux';

export default combineReducers({
    authedUserId: authedUserIdReducer
});

/*
export const selectors = {
    getAuthedUserId: state => authedUserIdSelectors.getAuthedUserId(state.authedUserId)
};
*/



