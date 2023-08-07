import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
  authDomain: `${import.meta.env.VITE_REACT_APP_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.VITE_REACT_APP_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_REACT_APP_APP_ID}`
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const createUser = async (email, password) => {
	if(!email || !password) return;
	
	return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithGooglePopup = async () => signInWithPopup(auth, provider);
export const signOutUser = async () => signOut(auth);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

