import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDpUs8-u1w01It8TPZs7lKd3MHfoqC9FcM",
    authDomain: "oauth2v1-frontend.firebaseapp.com",
    projectId: "oauth2v1-frontend",
    storageBucket: "oauth2v1-frontend.appspot.com",
    messagingSenderId: "185634663165",
    appId: "1:185634663165:web:4ed591588d9ea3c3aeec94",
   };

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
