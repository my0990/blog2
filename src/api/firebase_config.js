import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';





const firebaseConfig = {
  apiKey: "AIzaSyCiEfTzLSzSej9sLXzU8vTX9EsXsHlp8qw",
  authDomain: "blog-project-f66dc.firebaseapp.com",
  projectId: "blog-project-f66dc",
  storageBucket: "blog-project-f66dc.appspot.com",
  messagingSenderId: "616782058853",
  appId: "1:616782058853:web:4165ffd5feaab9e7ae3d8c",
  measurementId: "G-WL0F4B9JRH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth=firebaseApp.auth();

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider)
}

export const singOutGoogle = () => {
  return auth.signOut()
}

auth.onAuthStateChanged((user) => {
  if(user){
    console.log(user.displayName)
  } else {
    console.log('no user')
  }
})