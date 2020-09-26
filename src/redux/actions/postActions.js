// import db, { auth, timestamp } from "../firebase/firebase";
// import { postTypes } from "../types";


// export const getallposts = (dispatch) => {
//     dispatch({type: postTypes.GET_ALL_POSTS_REQUEST })
//     const allposts = [];
//     const unsuscribe = db.collection('allposts').orderBy('timestamp', 'desc').onSnapshot(snap => {
//         snap.docs.map(doc => {
//             allposts.push(doc.data())
//         })
//         dispatch({type: postTypes.GET_ALL_POSTS_SUCCESS, payload:{allposts}})
//         return unsuscribe
//     })
// }
