import { authTypes } from "../types";

const initState = {
  isAuthing: false,
  isAuthed: false,
  isLogggedIn: false,
  uid: null,
  timestamp: null,
  isOnline: true,
  error: null,
  signupErr: null,
  loginErr: null,
  coverImg: null,
  inInternet: true,
  notif: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case authTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isAuthing: true,
      };
      case 'NOTIF':
        return {
          ...state,
          notif: action.payload
        };
    case authTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload.user,
        isAuthed: true,
        isAuthing: false,
      };
      case 'OFFLINE':
      return {
        ...state,
        inInternet: false
      };
      case 'ONLINE':
      return {
        ...state,
        inInternet: true
      };
    case "UPDATE": {
      return {
        ...state,
        userImg: action.payload.userImg,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
      };
    }
    case "UPDATE_INFOS": {
      return {
        ...state,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
      };
    }
    case "UPDATE_COVER": {
      return {
        ...state,
        coverImg: action.payload.coverImg
      }
    }
    case authTypes.SIGN_IN_FAILURE:
      return {
        error: action.payload.error,
        signupErr: action.payload.signupErr,
        loginErr: action.payload.loginErr,
        isAuthing: false,
        isOnline: false,
      };
    case authTypes.LOGOUT_SUCCESS: {
      return {
        isAuthing: false,
        isAuthed: false,
        isLogggedIn: false,
        uid: null,
        timestamp: null,
        isOnline: true,
        error: null,
        signupErr: null,
        loginErr: null,
      };
    }
    case authTypes.LOGOUT_FAILURE: {
      return {
        isAuthing: false,
        isAuthed: false,
        isLogggedIn: false,
        uid: null,
        timestamp: null,
        isOnline: true,
        error: action.payload.error,
        signupErr: null,
        loginErr: null,
      };
    }
    default:
      return state;
      break;
  }
};
