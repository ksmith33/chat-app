import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ImExit } from 'react-icons/im';
import {
	collection, 
	where, 
	orderBy
} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import Button from "../../components/button/button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Chat from "../chat/chat.component";
import CreateGroup from "../create-group/create-group.component";
import { ChatContext } from "../../contexts/chat.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import useSnapshot from '../../hooks/useSnapshot';
import "./messenger.styles.scss";

function Messenger () {
	const { currentUser: { uid } } = useContext(UserContext);
	const { selectedChat } = useContext(ChatContext);
	const chats = useSnapshot(collection(db, 'groups'), [where("members", "array-contains", uid), orderBy("modifiedAt", "desc")]);
	const selectedChatData = chats.find(chat => chat.id === selectedChat);

	return (	
		<div className="messenger-container">
			<div className="exit-button">
				<Button type='button' buttonType='invisible' onClick={ signOutUser } aria-label='sign out'><ImExit/></Button> 
			</div>

			<Sidebar groups={ chats }/>

			<main>
				<Routes>
					<Route index element={ <Chat selectedChatData={ selectedChatData } key={ selectedChat }/> }/>
					<Route path='/new' element={ <CreateGroup/> }/>
				</Routes>
			</main>
		</div>
	);
}

export default Messenger;

