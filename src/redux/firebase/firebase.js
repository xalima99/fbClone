import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1-bm7j5eqp6Hyde8uh2SiW3fB2QynuN4",
  authDomain: "social-1b384.firebaseapp.com",
  databaseURL: "https://social-1b384.firebaseio.com",
  projectId: "social-1b384",
  storageBucket: "social-1b384.appspot.com",
  messagingSenderId: "1041197642959",
  appId: "1:1041197642959:web:339d1765a5148e754cf3ba",
  measurementId: "G-7685RRFNVD"
  // apiKey: "AIzaSyDlaLH8esVm2fLCzXgDY0OC7xa24YqHLMc",
  // authDomain: "evernoter-91b6d.firebaseapp.com",
  // databaseURL: "https://evernoter-91b6d.firebaseio.com",
  // projectId: "evernoter-91b6d",
  // storageBucket: "evernoter-91b6d.appspot.com",
  // messagingSenderId: "3485284622",
  // appId: "1:3485284622:web:3f480d2ccc0c44ca587f5f",
  // measurementId: "G-5E0CMSJNSS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, storage };
export default db;
