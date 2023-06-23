import Button from "../../components/button/button.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Sidebar from "../../components/sidebar/sidebar.component";
import { getUserChats } from "../../services/chats.services";
import { useContext, useEffect, useState } from "react";
import "./messenger.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { onSnapshot, collection, query, where} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import Chat from "../../components/chat/chat.component";
import { ChatContext } from "../../contexts/chat.context";

function Messenger () {
	const [chats, setChats] = useState([]);
	const [loading, setIsLoading] = useState(true);

	const { currentUser } = useContext(UserContext);
	const {selectedChat} = useContext(ChatContext);

	const selectedChatData = chats[selectedChat];

	//console.log(chats)
	useEffect(() => {
		//might move into own method
		setIsLoading(true);
		const { uid } = currentUser;
		const groupsRef = collection(db, 'groups');
		const q = query(groupsRef, where("members", "array-contains", uid));

		const unsubscribe = onSnapshot(q, querySnapshot => {
			const newChats = [];
			querySnapshot.forEach((doc) => {
				newChats.push(doc.data());
			})
			setChats(newChats);
			setIsLoading(false);
		});
		
		return unsubscribe;
	}, [currentUser]);

	return (	

		<div className="messenger-container">
				{/* <Button onClick={signOutUser}>Sign Out</Button> */}
				<Sidebar groups={chats}/>
				<Chat chat={selectedChatData} />
		</div>
	);
}

export default Messenger;

