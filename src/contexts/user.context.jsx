import { useState, createContext, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, auth } from "../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => {}
});

export function UserProvider({ children }){
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	
	const value = { currentUser, setCurrentUser, loading };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if(user){
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={ value }> { children } </UserContext.Provider>
};