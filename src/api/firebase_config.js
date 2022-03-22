// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvier } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCiEfTzLSzSej9sLXzU8vTX9EsXsHlp8qw",
  authDomain: "blog-project-f66dc.firebaseapp.com",
  projectId: "blog-project-f66dc",
  storageBucket: "blog-project-f66dc.appspot.com",
  messagingSenderId: "616782058853",
  appId: "1:616782058853:web:4165ffd5feaab9e7ae3d8c",
  measurementId: "G-WL0F4B9JRH"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvier();

const auth = getAuth();
signInWithPopup(auth,provider)
  .then((result) => {
    const credential = GoogleAuthProvier.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
  })




// export const googleProvider = new auth.GoogleAuthProvider();