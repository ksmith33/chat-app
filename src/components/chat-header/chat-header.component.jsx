import { useState } from "react";
import { BsPencil, BsCheckLg } from "react-icons/bs";
import Button from "../button/button.component";
import { updateChat } from "../../services/chats.services";
import './chat-header.styles.scss';

function ChatHeader ({ name, id }) {
	const [newName, setNewName] = useState(name);
	const [inputOpen, setInputIsOpen] = useState(false);

	function handleEditClick () {
		setInputIsOpen(!inputOpen);
	}

	function handleInputChange(event) {
		setNewName(event.target.value);
	}

	async function handleSubmit (event) {
		event.preventDefault();

		try {
			await updateChat(id, { name: newName });
		}catch (error) {
			console.log(error);
		}
		setInputIsOpen(false);
	}

	return (
		<header className='chat-header'>
			{inputOpen ? 
				<form onSubmit={ handleSubmit }>
					<input type="text" 
						onChange = { handleInputChange }
						value = { newName }
						aria-label="chat name input"
						required
					/>
					<Button buttonType='invisible' type='submit' aria-label='confirm'><BsCheckLg /></Button>
				</form>
			:
				name &&
					<>
						<h1>{name}</h1>
						<Button buttonType='invisible' type='button' onClick={ handleEditClick } aria-label='edit chat name'><BsPencil/></Button>
					</>
			}
		</header>
	)
}

export default ChatHeader;