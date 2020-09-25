import {authTypes} from '../types';

const initState = {
    isAuthing: false,
    isAuthed: false,
    isLogggedIn: false,
    uid: null,
    timestamp: null,
    isOnline: true,
    error: null,
    signupErr:null,
    loginErr:null
}

export default (state = initState, action) => {
    switch (action.type) {
        case authTypes.SIGN_IN_REQUEST:
            return {
                ...state,
                isAuthing: true
            }
        case authTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                ...action.payload.user,
                isAuthed: true,
                isAuthing: false
            }
        case authTypes.SIGN_IN_FAILURE:
            return {
            
                error: action.payload.error,
                signupErr:action.payload.signupErr,
                loginErr:action.payload.loginErr,
                isAuthing: false,
                isOnline: false
            }
        case authTypes.LOGOUT_SUCCESS:{
            return {
                isAuthing: false,
                isAuthed: false,
                isLogggedIn: false,
                uid: null,
                timestamp: null,
                isOnline: true,
                error: null,
                signupErr:null,
                loginErr:null
            }
        }
        case authTypes.LOGOUT_FAILURE:{
            return {
                isAuthing: false,
                isAuthed: false,
                isLogggedIn: false,
                uid: null,
                timestamp: null,
                isOnline: true,
                error: action.payload.error,
                signupErr:null,
                loginErr:null
            }
        }
        default:
            return state
            break;
    }
}