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
  apiKey: "AIzaSyBb3PuBWbgmIJzarbUw5lD44v_Q6Mr9je0",
  authDomain: "chat-app-affac.firebaseapp.com",
  projectId: "chat-app-affac",
  storageBucket: "chat-app-affac.appspot.com",
  messagingSenderId: "385619147794",
  appId: "1:385619147794:web:66952658f53c34817c6ccb"
};

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

