import { combineReducers } from 'redux';
import authorUserIdReducer, {
    operations as authedUserIdOperations,
    selectors as authedUserIdSelectors
} from './authedUserId/reducer';

export const operations = {
    login: authedUserIdOperations.login
}

//////Selectors
export const selectors = {
    /**
     * @returns {string} authedUserId;;
     */
    getAuthedUserId: function (state){
        return authedUserIdSelectors(state.authedUserId);
    }
}

export default combineReducers({
    authedUserId: authorUserIdReducer
});