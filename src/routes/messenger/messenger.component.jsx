import Button from "../../components/button/button.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Sidebar from "../../components/sidebar/sidebar.component";
import { getUserChats } from "../../services/chats.services";
import { useEffect, useState } from "react";
import "./messenger.styles.scss";

function Messenger () {
	const [chats, setChats] = useState(null);
	const [selectedChat, setSelectedChat] = useState(null);

	useEffect(() => {
		async function getChats () {
			setChats(await getUserChats());
		}

		getChats();
	}, []);

	return (
		<div className="messenger-container">
			
			<Sidebar groups={chats} setSelectedChat={setSelectedChat}/>
		</div>

	);
}

export default Messenger;

