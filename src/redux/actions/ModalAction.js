import db, { auth, timestamp } from "../firebase/firebase";

export const showModal = (id) => async (dispatch) => {
  db.collection("allposts")
    .doc(id)
    .get()
    .then((post) => {
      dispatch({ type: "SHOW", payload: post.data()});
    });
};

export const hideModal = () => {
  return {
    type: "HIDE",
  };
};


export const showShareModal = (id) => async (dispatch) => {
  db.collection("allposts")
    .doc(id)
    .get()
    .then((post) => {
      dispatch({ type: "SHOW_SHARE", payload: post.data()});
    });
};

export const hideShareModal = () => {
  return {
    type: "HIDE_SHARE",
  };
};
