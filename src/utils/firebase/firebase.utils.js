import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb3PuBWbgmIJzarbUw5lD44v_Q6Mr9je0",
  authDomain: "chat-app-affac.firebaseapp.com",
  projectId: "chat-app-affac",
  storageBucket: "chat-app-affac.appspot.com",
  messagingSenderId: "385619147794",
  appId: "1:385619147794:web:66952658f53c34817c6ccb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => signInWithPopup(auth, provider);
export const signOutUser = async () => signOut(auth);
export const createUserDocumentFromAuth = async (userAuth) => {
	if(!userAuth) return;

	const userDoc = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDoc);
	
	if(!userSnapshot.exists()){
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		const groups = [];
		const dms = [];

		try{
			await setDoc(userDoc, {
				displayName,
				email,
				createdAt,
				groups,
				dms
			})
		}catch (error){
			console.log("error creating user", error.message);
		}
	}

	return userDoc;
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

