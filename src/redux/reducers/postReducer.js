import {postTypes} from '../types';

const initState = {
    allposts: [],
    postsLoading: false,
    postsLoaded: false,
    error: null
}


export default (state =  initState, action) => {
    switch (action.type) {
        case postTypes.GET_ALL_POSTS_REQUEST:
            return {
                ...state,
                postsLoading: true
            }
     
        case postTypes.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                allposts: [...action.payload.allposts],
                postsLoading: false,
                postsLoaded: true
            }
        case postTypes.GET_ALL_POSTS_FAILURE:
            return {
                allposts: [],
                postsLoading: false,
                postsLoaded: false,
                error: action.payload.error
            }
        default:
            return state
          
    }
}