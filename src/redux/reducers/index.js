import {combineReducers} from 'redux';
import authReducer from './authReducer'
import postReducer from './postReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    auth: authReducer,
    allpost: postReducer,
    modal: modalReducer
})