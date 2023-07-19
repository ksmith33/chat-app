import {
	doc,
	getDoc,
	setDoc,
	getDocs,
	query,
	collection,
	where
} from "firebase/firestore";

import { db } from "../utils/firebase/firebase.utils";


export const createUserDoc = async (userAuth) => {
	if(!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);
	
	if(!userSnapshot.exists()){
		const { displayName, email, uid } = userAuth;
		const createdAt = new Date();

		//add user to general?
		try{
			await setDoc(userDocRef, {
				uid,
				displayName: displayName.toLowerCase(),
				email,
				createdAt,
				groups: [doc(db, 'groups', 'BsunAoZXnodPPo85JOVs')],
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
//maybe filter self out here
export const findUser = async (displayName) => {
	if (!displayName) return [];
	const usersRef = collection(db, 'users');
	const q = query(usersRef, where("displayName", ">=", displayName), where("displayName", "<=", displayName+ '\uf8ff'));
	const querySnapshot = await getDocs(q);

	const usersArray = [];

	querySnapshot.forEach(doc => {
		usersArray.push(doc.data());
	});

	return usersArray;
}