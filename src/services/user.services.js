import {
	doc,
	getDoc,
	setDoc
} from "firebase/firestore";

import { db } from "../utils/firebase/firebase.utils";


export const createUserDoc = async (userAuth) => {
	if(!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);
	
	if(!userSnapshot.exists()){
		const { displayName, email, uid } = userAuth;
		const createdAt = new Date();

		try{
			await setDoc(userDocRef, {
				uid,
				displayName,
				email,
				createdAt,
				groups: [doc(db, 'groups', 'GwhBZihVBjzMZrG9ABvm')],
			})
		}catch (error){
			console.log("error creating user", error.message);
		}
	}
	
	return userDocRef;
}

export const isDnAvailable = async (displayName) => {
	if(!displayName) return;

	const dnDocRef = doc(db, 'displayNames', displayName);
	const dnDocSnapshot = await getDoc(dnDocRef);

	if(dnDocSnapshot.exists()){
		return false;
	}

	return true;
}