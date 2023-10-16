import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVnVF_x4AYMj-fqa2-teNIoSAVbr0Ed7Y",
    authDomain: "farmhe-kakuma.firebaseapp.com",
    projectId: "farmhe-kakuma",
    storageBucket: "farmhe-kakuma.appspot.com",
    messagingSenderId: "776563338393",
    appId: "1:776563338393:web:3bb416daf503fbb553dc08",
    measurementId: "G-QG3ZBHDCCJ"
  };
  
  const firebaseSApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
   const db = firebaseSApp.firestore();
   const googleProvider = new firebase.auth.GoogleAuthProvider();
   const facebookProvider = new firebase.auth.FacebookAuthProvider();
   const TwitterProvider = new firebase.auth.TwitterAuthProvider();
   const GithubProvider = new firebase.auth.GithubAuthProvider();
   const storage = firebase.storage();
  export default {auth, db, storage};
  export  {db, googleProvider, facebookProvider, TwitterProvider,GithubProvider};
  export  {auth};
  export  {storage};