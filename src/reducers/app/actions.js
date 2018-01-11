import * as types from './actiontypes';
/*
Action Creators
*/

export function changeAppRoot(root) {
    return {
        type: types.ROOT_CHANGED,
        root: root
    };
}

export function changeUsername(username) {
    return {
        type: types.USERNAME_CHANGED,
        username: username
    };
}

/*
dispatch the actionCreators
*/

export function appInitialized() {
    return async function(dispatch, getState) {
        // since all business logic should be inside redux actions
        // this is a good place to put your app initialization code
        dispatch(changeAppRoot('login'));
    };
}

export function login() {
    return async function(dispatch, getState) {
        // login logic would go here, and when it's done, we switch app roots
        dispatch(changeAppRoot('after-login'));
    };
}

export function skipLogIn() {
    return async function(dispatch, getState) {
        // login logic would go here, and when it's done, we switch app roots
        dispatch(changeAppRoot('skipLogIn'));
    };
}

export function userNameChange(username) {
    return async function(dispatch, getState) {
        // login logic would go here, and when it's done, we switch app roots
        dispatch(changeUsername(username));
    };
}

