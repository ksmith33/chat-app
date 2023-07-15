import { query, onSnapshot } from "firebase/firestore";
import { useState, useEffect} from "react";
function useSnapshot (collection, queryString = []) {
	const [data, setData] = useState([]);
	
	useEffect(() => { 
		//may move to own method, limit amount of messages
		//const messageRef = collection(db, "groups", id, 'messages');
		const q = query(collection, ...queryString);
		//const q = query(messageRef, orderBy("sentAt", "asc"));
		const unsubscribe = onSnapshot(q, querySnapshot => {
			const data = [];
			querySnapshot.forEach((doc) => {
				data.push(doc.data());
			})
			setData(data);
		});
		
		return unsubscribe;

	}, []);

	return data;
}

export default useSnapshot;