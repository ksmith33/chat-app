import './input.styles.scss';
import Button from '../button/button.component';
import { sendMessage } from '../../services/chats.services';
import { useState, useContext, useRef } from 'react';
import { UserContext } from '../../contexts/user.context';
import { BsFillSendFill, BsPlusCircleFill } from 'react-icons/bs';
import { Timestamp } from 'firebase/firestore';
import { storage } from '../../utils/firebase/firebase.utils';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import imageCompression from 'browser-image-compression';

function Input ({ id }) {
	const [newMessage, setNewMessage] = useState("");
	const [newImage, setNewImage] = useState(null);
	const imageInputRef = useRef(null);
	const { currentUser: { displayName, uid } } = useContext(UserContext);
	
	function handleInputChange (event) {
		setNewMessage(event.target.value);
	}

	function handleImageChange (event) {
		setNewImage(event.target.files[0]);
	}

	async function handleSubmit (event) {
		event.preventDefault();

		if(newImage) {
			const options = {
				maxSizeMB: .5,
				maxWidthOrHeight: 480,
				useWebWorker: true
			}

			try {
				const compressedImage = await imageCompression(newImage, options);
				const imageRef = ref(storage, compressedImage.name);
				const snapshot = await uploadBytes(imageRef, compressedImage);
				const downloadUrl = await getDownloadURL(snapshot.ref);
				await sendMessage(id, { 
					messageText: newMessage, 
					image: downloadUrl, 
					sentAt: Timestamp.now(), 
					sentBy: { displayName, uid } 
				});
			}catch(error){
				console.log(error);
			}
			
		}else{
			try{
				await sendMessage(id, {
					messageText: newMessage, 
					sentAt: Timestamp.now(), 
					sentBy: {displayName, uid}
				});
			}catch (error){
				console.log(error);
			}
		}

		resetInput();
	}

	function resetInput() {
		setNewMessage('');
		setNewImage(null);
		imageInputRef.current.value = '';
	}

	return(
		<div className='input-container'>
			<form onSubmit={ handleSubmit }>
				<label htmlFor='image-upload'>
					<BsPlusCircleFill />
				</label>

				<input
					className='image-upload'
					id = 'image-upload'
					type = "file"
					onChange = { handleImageChange }	
					name = 'image'
					accept="image/*"
					ref = { imageInputRef }
					disabled = { !id }
				/>

				<input
					className='message-input'
					type = 'text'
					onChange = { handleInputChange }
					name = 'text'
					value = { newMessage }
					placeholder = 'type a message'
					required = { !newImage && !newMessage }
					disabled ={ !id }
				/>

				<Button type='submit' buttonType='chat' aria-label='send message'><BsFillSendFill /></Button>
			</form>
		</div>
	)
}

export default Input;