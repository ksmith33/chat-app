import { getDoc, doc, getDocs, query} from "firebase/firestore"
import { auth, db } from "../utils/firebase/firebase.utils"

export const getUserChats = async () => {
	const { uid } = auth.currentUser;
	const userDocRef = doc(db, 'users', uid);
	const userDocSnapshot = await getDoc(userDocRef);
	const groupRefsArray = userDocSnapshot.data().groups;

	const groupDocsArray = await Promise.all(groupRefsArray.map(async groupDocRef => {
		return (await getDoc(groupDocRef)).data();
	}))

	return groupDocsArray;
}