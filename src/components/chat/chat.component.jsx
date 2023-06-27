import { useContext, useEffect, useState } from 'react';
import './chat.styles.scss';
import MessageArea from '../message-area/message-area.component';
import { getMessages, sendMessage } from '../../services/chats.services';
import Input from '../input/input';
import Button from '../button/button.component';
import { collection, onSnapshot, Timestamp, orderBy, query } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { BsFillSendFill, BsPlusCircleFill } from 'react-icons/bs'


//might switch back to store id or storing state in messenger
function Chat ({ selectedChat }) {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const { currentUser } = useContext(UserContext);
	const { displayName } = currentUser;
	const {name, id} = selectedChat;

	useEffect(() => {
		//what do I name this?
		//may move to own method
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

	function handleChange (event) {
		const value = event.target.value;
		setNewMessage(value);
	}

	function handleSubmit (event) {
		event.preventDefault();
		sendMessage(id, {messageText: newMessage, sentAt: Timestamp.now(), sentBy: displayName});
		resetInput();
	}

	function resetInput() {
		setNewMessage('');
	}

	return(
		<div className='chat-container'>
			<div className='chat-header'>
				<h1>{name}</h1>
			</div>
			<MessageArea messages={messages}/>
			{/*could move into input component*/}
			<form onSubmit={handleSubmit} className='form'>
				<Button type="button" buttonType='chat'><BsPlusCircleFill /></Button>
				<Input 
					type = 'text'
					//change?
					inputType='chat'
					onChange = {handleChange}
					name = 'chat-input'
					required
					value = {newMessage}
					placeholder = 'type a message'
				/>
				<Button type='submit' buttonType='chat'><BsFillSendFill /></Button>
			</form>

		</div>
		
	)

}

export default Chat;