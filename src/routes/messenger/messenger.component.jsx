import Button from "../../components/button/button.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Sidebar from "../../components/sidebar/sidebar.component";
import { useContext, useEffect, useState } from "react";
import "./messenger.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { onSnapshot, collection, query, where, orderBy} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import Chat from "../chat/chat.component";
import { ChatContext } from "../../contexts/chat.context";
import { Route, Routes } from "react-router-dom";
import CreateChat from "../create-group/create-group.component";

function Messenger () {
	const [chats, setChats] = useState([]);
	const { currentUser } = useContext(UserContext);
	const { selectedChat } = useContext(ChatContext);
	const selectedChatData = chats.find(chat => chat.id === selectedChat);

	useEffect(() => {
		//might move into own method
		const { uid } = currentUser;
		const groupsRef = collection(db, 'groups');
		const q = query(groupsRef, where("members", "array-contains", uid), orderBy("modifiedAt", "desc"));
		const unsubscribe = onSnapshot(q, querySnapshot => {
			const newChats = [];
			querySnapshot.forEach((doc) => {
				newChats.push(doc.data());
			})
			setChats(newChats);
		});
		
		return unsubscribe;
	}, [currentUser]);

	return (	
		<div className="messenger-container">
			<Button onClick={signOutUser}>Sign Out</Button> 
			<Sidebar groups={chats}/>
			<div className="content">
				<Routes>
					<Route 
						index element = {selectedChatData ?
					//how to get attached image to stay?
						(<Chat selectedChat={selectedChatData} key={selectedChat}/>) : 
						//make a component
						(<h1> Select a chat to begin chatting</h1>)}
					/>
					<Route path = '/new' element={<CreateChat />} />
				</Routes>
			</div>
			
		</div>
	);
}

export default Messenger;

