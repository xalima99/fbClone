import db, { auth, timestamp } from "../firebase/firebase";
import { friendsTypes } from "../types";



export const addFriend = (infos) => async dispatch => {
    dispatch({type: friendsTypes.ADD_FRIEND_REQUEST})
    db.collection('users').doc(infos.source).collection('pending').doc(infos.target).set({
        id: infos.target,
        timestamp:timestamp
    }).then(() => {
        db.collection('users').doc(infos.target).collection('asked').doc(infos.source).set({
            id: infos.source,
            name: infos.name,
            timestamp: timestamp,
            userImg: infos.userImg
        }).then(() => {
            dispatch({type: friendsTypes.ADD_FRIEND_SUCCESS})
        }).catch((error) => {
        
            dispatch({type: friendsTypes.ADD_FRIEND_FAILURE, payload: {error}})
        })
    }).catch((error) => {
       
        dispatch({type: friendsTypes.ADD_FRIEND_FAILURE, payload: {error}})
    })
}


export const acceptFriend = (infos) => async dispatch => {
    dispatch({type: friendsTypes.ACCEPT_FRIEND_REQUEST})
    db.collection('users').doc(infos.source).collection('pending').doc(infos.source).delete()
    .then(() => {
        db.collection('users').doc(infos.source).collection('friends').doc(infos.target).set({
            id: infos.target,
            timestamp: timestamp
        })
    }).then(() => {
        db.collection('users').doc(infos.target).collection('asked').doc(infos.source).delete()
        .then(() => {
            db.collection('users').doc(infos.target).collection('friends').doc(infos.source).set({
                id: infos.source,
                timestamp: timestamp
            }).then(() => {
                dispatch({type: friendsTypes.ACCEPT_FRIEND_SUCCESS})
            }).catch(error => {
             
                dispatch({type: friendsTypes.ACCEPT_FRIEND_FAILURE, payload:{error}})
            })
        }).catch(error => {
          
            dispatch({type: friendsTypes.ACCEPT_FRIEND_FAILURE, payload:{error}})
        })
    }).catch(error => {
   
        dispatch({type: friendsTypes.ACCEPT_FRIEND_FAILURE, payload:{error}})
    })
}

export const denyFriend = (infos) => async dispatch => {
    dispatch({type: friendsTypes.DENY_FRIEND_REQUEST})
    db.collection('users').doc(infos.source).collection('pending').doc(infos.source).delete()
    db.collection('users').doc(infos.target).collection('asked').doc(infos.source).delete()
    .then(() => {
        db.collection('users').doc(infos.target).collection('asked').doc(infos.source).delete()
        db.collection('users').doc(infos.source).collection('asked').doc(infos.target).delete()
    })
    .then(() => {
        dispatch({type: friendsTypes.DENY_FRIEND_SUCCESS})
    }).catch(error => {
      
        dispatch({type: friendsTypes.DENY_FRIEND_FAILURE, payload: {error}})
    })
}

export const unfriend = (infos) => async dispatch => {
    dispatch({type: friendsTypes.DENY_FRIEND_REQUEST})
    db.collection('users').doc(infos.source).collection('friends').doc(infos.target).delete()
    .then(() => {
        db.collection('users').doc(infos.target).collection('friends').doc(infos.source).delete()
        .then(() => {
            dispatch({type: friendsTypes.DELETE_FRIEND_SUCCESS})
            window.location.reload()
        }).catch(error => {
      
            dispatch({type: friendsTypes.DELETE_FRIEND_SUCCESS, payload: {error}})
        })
    }).catch(error => {
      
        dispatch({type: friendsTypes.DELETE_FRIEND_SUCCESS, payload: {error}})
    })
}