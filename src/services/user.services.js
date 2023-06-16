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
				groups: [doc(db, 'groups', '7it9zoDQNngnr3GNro65')],
			})
		}catch (error){
			console.log("error creating user", error.message);
		}
	}

	return userDocRef;
}