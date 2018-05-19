import { loginAction } from './actions';
import reducer, { getAuthedUserId } from './reducers'


//@down Operations can be used by self or children components
export const operations = {
    loginAction
};

export const selectors = {
    getAuthedUserId
};

//@up Reducer can be used by parent combiners
export default reducer;




