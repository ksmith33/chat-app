import { useContext, useEffect, useState } from 'react';
import './chat.styles.scss';
import MessageArea from '../message-area/message-area.component';
import Input from '../input/input';
import { collection, onSnapshot, Timestamp, orderBy, query } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';


//might switch back to store id or storing state in messenger
function Chat ({ selectedChat }) {
	const [messages, setMessages] = useState([]);
	const {name, id} = selectedChat;

	useEffect(() => {
		//what do I name this?
		//may move to own method, limit amount of messages
		const messageRef = collection(db, "groups", id, 'messages');

		const q = query(messageRef, orderBy("sentAt", "asc"));
		const unsubscribe = onSnapshot(q, querySnapshot => {
			const newMessages = [];
			querySnapshot.forEach((doc) => {
				newMessages.push(doc.data());
			})
			setMessages(newMessages);
		});
		
		return unsubscribe;

	}, [id]);

	return(
		<div className='chat-container'>
			<div className='chat-header'>
				<h1>{name}</h1>
			</div>
			<MessageArea messages={messages}/>
			{/*could move into input component*/}
			<Input id={id}/>
		</div>
		
	)

}

export default Chat;