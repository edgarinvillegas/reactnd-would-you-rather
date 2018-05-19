//////Action creator
export const LOGIN = 'App/data/LOGIN';

export const loginAction = (authedUserId) => ({ type: LOGIN, authedUserId });
