export const LOGIN = 'App/data/LOGIN';
export const LOGOUT = 'App/data/LOGOUT';

export const loginAction = (authedUserId) => ({ type: LOGIN, authedUserId });
export const logoutAction = () => ({ type: LOGOUT });
