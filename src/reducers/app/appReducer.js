import * as types from './actiontypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    root: undefined, // 'login' / 'after-login'
    username:"init",
});

//root reducer
export function app(state = initialState, action = {}) {

    switch (action.type) {

        case types.ROOT_CHANGED:
            return state.merge({
                root: action.root
            });

        case types.USERNAME_CHANGED:
            return state.merge({
                username: action.username
            });

        default:
            return state;
    }
}
