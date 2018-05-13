import { LOGIN } from './types';

const loginAction = (authedUserId) => ({ type: LOGIN, authedUserId });

export {
   loginAction
}