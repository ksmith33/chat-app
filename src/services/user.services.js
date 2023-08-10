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

	try{
		const userSnapshot = await getDoc(userDocRef);
		if(!userSnapshot.exists()){
			const { displayName, email, uid, photoURL } = userAuth;
			const createdAt = new Date();
			await setDoc(userDocRef, {
				uid,
				displayName: displayName.toLowerCase(),
				email,
				createdAt,
				photoURL,
				groups: [doc(db, 'groups', 'BsunAoZXnodPPo85JOVs')],
			});
		}
	}catch (error){
		console.log("error creating user", error.message);
	}
	return userDocRef;
}

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