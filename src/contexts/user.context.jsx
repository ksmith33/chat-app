import { useState, createContext, useEffect } from "react";
import { onAuthStateChangedListener} from "../utils/firebase/firebase.utils";
import { createUserDoc } from "../services/user.services";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => {}
});

export function UserProvider({ children }){
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		//might not matter when do username thing
		const unsubscribe = onAuthStateChangedListener((user) => {
			if(user){
				createUserDoc(user);
			}
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = { currentUser, setCurrentUser, loading };
	return <UserContext.Provider value={ value }> { children } </UserContext.Provider>
};