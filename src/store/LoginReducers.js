import {createStore} from 'redux';

const authInitState = {
    tokenCode : null,
 }

const LoginReducers = (state = authInitState, action) =>{
    switch (action.type) {
        case 'TOKEN_CODE':

            return {...state, tokenCode: action.payload}
        default:
            return state
    }
}

export const store = createStore(LoginReducers);
