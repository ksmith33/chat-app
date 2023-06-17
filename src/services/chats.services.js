import { getDoc, doc, getDocs, query, collection, where} from "firebase/firestore"
import { auth, db } from "../utils/firebase/firebase.utils"

export const getUserChats = async (uid) => {
	const groupsRef = collection(db, 'groups');
	const q = query(groupsRef, where("members", "array-contains", uid));
	const querySnapshot = await getDocs(q);

	return querySnapshot.data()
}