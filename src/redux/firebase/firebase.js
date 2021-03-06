import firebase from "firebase";

const firebaseConfig = {
  //PROVIDE YOUR INFOS HERE
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, storage };
export default db;
