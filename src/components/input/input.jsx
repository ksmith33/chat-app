import './input.styles.scss';
import Button from '../button/button.component';
import { sendMessage } from '../../services/chats.services';
import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { BsFillSendFill, BsPlusCircleFill } from 'react-icons/bs';
import { Timestamp } from 'firebase/firestore';

function Input ({id}) {
	const [newMessage, setNewMessage] = useState("");
	const [newImage, setNewImage] = useState(null);
	const { currentUser } = useContext(UserContext);
	const { displayName, uid } = currentUser;
	
	function handleInputChange (event) {
		setNewMessage(event.target.value);
	}

	function handleImageChange (event) {
		setNewImage(event.target.files[0]);
	}

	function handleSubmit (event) {
		event.preventDefault();
		//doesn't work. fix
		sendMessage(id, {messageText: newMessage, image: newImage, sentAt: Timestamp.now(), sentBy: {displayName, uid}});
		resetInput();
	}

	function resetInput() {
		setNewMessage('');
		setNewImage(null);
	}

	return(
		<div className='input-container'>
			<form onSubmit={handleSubmit} className='form'>
				<input
					className='image-upload'
					id = 'image-upload'
					type = "file"
					onChange = {handleImageChange}	
					name = 'image'
					accept="image/png, image/jpeg"
				/>

				<label htmlFor='image-upload'>
					<BsPlusCircleFill />
				</label>

				<input
					className='message-box'
					type = 'text'
					onChange = {handleInputChange}
					name = 'text'
					value = {newMessage}
					placeholder = 'type a message'
				/>

				<Button type='submit' buttonType='chat'><BsFillSendFill /></Button>
			</form>
		</div>
	)
}

export default Input;