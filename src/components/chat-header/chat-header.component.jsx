import Button from "../button/button.component";
import { BsPencil, BsCheckLg } from "react-icons/bs";
import './chat-header.styles.scss';
import { useState } from "react";
import { updateChat } from "../../services/chats.services";

function ChatHeader ({ name, id }) {
	const [newName, setNewName] = useState(name);
	const [inputOpen, setInputIsOpen] = useState(false);

	function handleClick () {
		setInputIsOpen(!inputOpen);
	}

	function handleInputChange(event) {
		setNewName(event.target.value);
	}

	function handleSubmit (event) {
		event.preventDefault();
		updateChat(id, {name: newName});
		setInputIsOpen(false);
	}
	//name-change component? use composition
	return (
		<div className='chat-header'>
			{inputOpen ? 
				<form onSubmit={handleSubmit}>
					<input type="text" 
						onChange = {handleInputChange}
						value = {newName}
						required
					/>
					<Button buttonType='invisible' type='submit'><BsCheckLg /></Button>
				</form>
			:
				<>
					<h1>{name}</h1>
					<Button buttonType='invisible' type='text' onClick={handleClick}><BsPencil/></Button>
				</>
			}
		</div>
	)
}

export default ChatHeader;