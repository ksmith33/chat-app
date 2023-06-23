import { getDoc, doc, getDocs, query, collection, where} from "firebase/firestore"
import { auth, db } from "../utils/firebase/firebase.utils"

export const getUserChats = async (uid) => {
	const groupsRef = collection(db, 'groups');
	const q = query(groupsRef, where("members", "array-contains", uid));

	return q;
}

export const getMessages = async (chatId) => {
	const chatsRef = collection(db, "groups", chatId, 'messages');
	const querySnapshot = await getDocs(chatsRef);
	
	const messagesArray = querySnapshot.docs.reduce((acc, docSnapshot, index) => {
		acc[index] = docSnapshot.data();
		return acc;
	}, []);

	return messagesArray;
}