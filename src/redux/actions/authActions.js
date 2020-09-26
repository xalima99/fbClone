import db, { auth, timestamp } from "../firebase/firebase";
import { authTypes } from "../types";
import { history } from "../../App";

export const signIn = (user) => async (dispatch) => {
  dispatch({ type: authTypes.SIGN_IN_REQUEST });
  auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then((currentUser) => {
      currentUser.user
        .updateProfile({
          displayName: `${user.FirstName} ${user.LastName}`,
        })
        .then(() => {
          db.collection("users")
            .doc(currentUser.user.uid)
            .set({
              createdAt: timestamp,
              isOnline: true,
              FirstName: user.FirstName,
              LastName: user.LastName,
              email: user.email,
              uid: currentUser.user.uid,
              birthday: `${user.Day} ${user.Month} ${user.Year}`,
              Gender: user.Gender,
            })
            .then(() => {
              const loggedInUser = {
                ...user,
                uid: currentUser.user.uid,
                timestamp: timestamp,
                isOnline: true,
                birthday: `${user.Day} ${user.Month} ${user.Year}`,
                Gender: user.Gender,
              };
              console.log(loggedInUser);
              localStorage.setItem("user", JSON.stringify(loggedInUser.uid));
              dispatch({
                type: authTypes.SIGN_IN_SUCCESS,
                payload: { user: loggedInUser },
              });
              history.push("/homepage");
            })
            .catch((error) => {
              dispatch({
                type: authTypes.SIGN_IN_FAILURE,
                payload: { error: error.message, signupErr: error },
              });
            });
        })
        .catch((error) => {
          dispatch({
            type: authTypes.SIGN_IN_FAILURE,
            payload: { error: error.message, signupErr: error },
          });
        });
    })
    .catch((error) => {
      dispatch({
        type: authTypes.SIGN_IN_FAILURE,
        payload: { error: error.message, signupErr: error },
      });
    });
};

export const logIn = (user) => async (dispatch) => {
  dispatch({
    type: 'LOGIN_REQUEST'
  })
  auth
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      db.collection("users")
        .doc(data.user.uid)
        .update({
          isOnline: true,
        })
        .then(() => {
          console.log(data);
          const name = data.user.displayName.split(" ");
          const [firstName, lastName] = name;
          const loggedInUser = {
            FirstName: firstName,
            LastName: lastName,
            uid: data.user.uid,
            email: data.user.email,
            isOnline: true,
          };
          console.log(loggedInUser);
          localStorage.setItem("user", JSON.stringify(loggedInUser));
          dispatch({
            type: authTypes.SIGN_IN_SUCCESS,
            payload: { user: loggedInUser },
          });
          // history.push("/homepage");
        })
        .catch((e) => alert(e));
    })
    .catch((error) => {
      dispatch({
        type: authTypes.SIGN_IN_FAILURE,
        payload: { error, loginErr: error },
      });
    });
};

export const signout = (uid) => async (dispatch) => {
  dispatch({
    type: authTypes.LOGOUT_REQUEST,
  });

  db.collection("users")
    .doc(uid)
    .update({ isOnline: false })
    .then(() => {
      auth.signOut().then(function () {
        // Sign-out successful.
 
        dispatch({ type: authTypes.LOGOUT_SUCCESS });
        history.push("/");
        localStorage.clear();
       
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: authTypes.LOGOUT_FAILURE,
        payload: { error },
      });
    });
};
