import Button from "../../components/button/button.component";
import { ImExit } from 'react-icons/im';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Sidebar from "../../components/sidebar/sidebar.component";
import { useContext } from "react";
import "./messenger.styles.scss";
import { UserContext } from "../../contexts/user.context";
import {collection, where, orderBy} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import Chat from "../chat/chat.component";
import { ChatContext } from "../../contexts/chat.context";
import { Route, Routes } from "react-router-dom";
import CreateChat from "../create-group/create-group.component";
import useSnapshot from '../../hooks/useSnapshot';

function Messenger () {
	const { currentUser:{uid} } = useContext(UserContext);
	const chats = useSnapshot(collection(db, 'groups'), [where("members", "array-contains", uid), orderBy("modifiedAt", "desc")]);
	const { selectedChat } = useContext(ChatContext);
	const selectedChatData = chats.find(chat => chat.id === selectedChat);

	return (	
		<div className="messenger-container">
			<div className="exit">
				<Button type='button' buttonType='invisible' onClick={signOutUser}><ImExit/></Button> 
			</div>
			
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

