// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG-MWgc86JvYDPbMS0-sdPPyKoT1SprA8",
  authDomain: "style-cart.firebaseapp.com",
  projectId: "style-cart",
  storageBucket: "style-cart.appspot.com",
  messagingSenderId: "551016659322",
  appId: "1:551016659322:web:3d20089e57769a5f563ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const signInWithGoogleRedirect = () =>signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

  const userDocRef = doc(db, 'users', userAuth.uid );

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;

    const createdAt = new Date();

    try {

      await setDoc(userDocRef, {displayName,email,createdAt,...additionalInformation});

    }catch(error){
      console.log('error creating the user', error.message);

    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {

  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInUserWithEmailAndPassword = async (email,password) => {

  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
}