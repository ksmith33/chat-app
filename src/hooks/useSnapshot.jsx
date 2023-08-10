import { query, onSnapshot } from "firebase/firestore";
import { useState, useEffect} from "react";

function useSnapshot (collection, queryString = []) {
	const [data, setData] = useState([]);
	
	useEffect(() => { 
		const q = query(collection, ...queryString);

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