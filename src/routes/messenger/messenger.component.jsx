import Button from "../../components/button/button.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Sidebar from "../../components/sidebar/sidebar.component";
import { getUserChats } from "../../services/chats.services";
import { useContext, useEffect, useState } from "react";
import "./messenger.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { onSnapshot, collection, query, where} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

function Messenger () {
	const [chats, setChats] = useState([]);
	const [selectedChat, setSelectedChat] = useState(null);
	const { currentUser } = useContext(UserContext);

	//console.log(chats)
	useEffect(() => {
		const { uid } = currentUser;
		const groupsRef = collection(db, 'groups');
		const q = query(groupsRef, where("members", "array-contains", uid));

		const unsubscribe = onSnapshot(q, querySnapshot => {
			const newChats = [];
			querySnapshot.forEach((doc) => {
				newChats.push(doc.data());
			})
			setChats(newChats);
		})

		return unsubscribe;
	}, [currentUser.uid]);

	return (
		<div className="messenger-container">
			<Button onClick={signOutUser}>Sign Out</Button>
			<Sidebar groups={chats} setSelectedChat={setSelectedChat}/>
		</div>

	);
}

export default Messenger;

