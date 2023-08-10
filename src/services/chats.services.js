import { db } from "../utils/firebase/firebase.utils"
import { setDoc, doc, collection, updateDoc } from "firebase/firestore"

export const createChat = async (data) => {
	const groupRef = doc(collection(db, "groups"));
	await setDoc(groupRef, {
			...data,
			id: groupRef.id,
	});
}

export const updateChat = async (groupId, data) => {
	const groupDocRef = doc(db, 'groups', groupId);
	await updateDoc(groupDocRef, {
		...data
	});		
}

export const sendMessage = async (groupId, data) => {
	const docRef = doc(collection(db, "groups", groupId, "messages"));
	await setDoc(docRef, {
		...data,
		id: docRef.id
	});

	const {sentAt} = data;
	await updateChat(groupId, {
		modifiedAt: sentAt, 
		recentMessage: data
	});
}


