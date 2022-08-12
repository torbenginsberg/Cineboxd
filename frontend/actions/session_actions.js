import * as UserApiUtil from '../util/session_api_util';

// action types, exported
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// regular action creator
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

//regular action creator
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

//regular action creator
export const receiveErrors = errors => ({ //errors argument here is an array
    type: RECEIVE_ERRORS,
    errors
});

//thunk action creator
export const login = formUser => dispatch => UserApiUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
    

//thunk action creator
export const logout = () => dispatch => UserApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));

//thunk action creator
export const signup = formUser => dispatch => UserApiUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));