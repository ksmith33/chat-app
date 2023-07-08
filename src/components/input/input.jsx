import './input.styles.scss';
import Button from '../button/button.component';
import { sendMessage } from '../../services/chats.services';
import { useState, useContext, useRef } from 'react';
import { UserContext } from '../../contexts/user.context';
import { BsFillSendFill, BsPlusCircleFill } from 'react-icons/bs';
import { Timestamp } from 'firebase/firestore';
import { storage } from '../../utils/firebase/firebase.utils';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';

function Input ({id}) {
	const [newMessage, setNewMessage] = useState("");
	const [newImage, setNewImage] = useState(null);

	const inputRef = useRef(null);

	const { currentUser } = useContext(UserContext);
	const { displayName, uid } = currentUser;
	
	function handleInputChange (event) {
		setNewMessage(event.target.value);
	}

	function handleImageChange (event) {
		setNewImage(event.target.files[0]);
	}

	async function handleSubmit (event) {
		event.preventDefault();
		if(newImage) {
			console.log(newImage);
			const imageRef = ref(storage, newImage.name);
			uploadBytes(imageRef, newImage).then(
				(snapshot) => {
					getDownloadURL(snapshot.ref).then(async (downloadUrl) => {
						await sendMessage(id, {messageText: newMessage, image: downloadUrl, sentAt: Timestamp.now(), sentBy: {displayName, uid}});
					});
				},
				(error) => {
					console.log(error);
				}
			);
		}else{
			await sendMessage(id, {messageText: newMessage, sentAt: Timestamp.now(), sentBy: {displayName, uid}});
		}
		resetInput();
	}

	function resetInput() {
		setNewMessage('');
		setNewImage(null);
		inputRef.current.value = '';
	}

	//maybe allow sending files too
	//is there a better way to display attached images?
	return(
		<div className='input-container'>
			<form onSubmit={handleSubmit} className='form'>
				<label htmlFor='image-upload'>
					<BsPlusCircleFill />
				</label>

				<input
					className='image-upload'
					id = 'image-upload'
					type = "file"
					onChange = {handleImageChange}	
					name = 'image'
					accept="image/*"
					ref = {inputRef}
				/>

				<input
					className='message-box'
					type = 'text'
					onChange = {handleInputChange}
					name = 'text'
					value = {newMessage}
					placeholder = 'type a message'
					required = {!newImage && !newMessage}
				/>

				<Button type='submit' buttonType='chat'><BsFillSendFill /></Button>
			</form>
		</div>
	)
}

export default Input;