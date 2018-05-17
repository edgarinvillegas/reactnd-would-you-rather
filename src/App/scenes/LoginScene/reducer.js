import { combineReducers } from 'redux';
import dataReducer, {
    operations as dataOperations,
    selectors as dataSelectors
} from './data/reducer';

export const operations = {
    login: dataOperations.login
};

export const selectors = {
    getAuthedUserId: function(state){
        dataSelectors.getAuthedUserId(state.data)
    }
}

export default combineReducers({
    data: dataReducer
});

