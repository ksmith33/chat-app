import { useState, useContext } from "react";
import { BsCheckLg, BsX } from "react-icons/bs";
import { Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import SearchArea from "../../components/search-area/search-area.component";
import List from "../../components/list/list.component";
import { UserContext } from "../../contexts/user.context";
import { createChat } from "../../services/chats.services";
import './create-group.styles.scss';

function CreateGroup () {
	const { currentUser } = useContext(UserContext);
	const [members, setMembers] = useState([currentUser]);
	const [groupName, setGroupName] = useState('');
	const { uid } = currentUser;
	const navigate = useNavigate();

	async function handleSubmit (event) {
		event.preventDefault();

		if(members.length == 1 ) return;

		const groupType = members.length > 2 ? 1 : 2;
		const timestamp = Timestamp.now();
		const memberDisplay = members.map(
			member => {
				return { displayName: member.displayName, photo: member.photoURL }
			}
		);

		try {
			await createChat({ 
				createdAt: timestamp, 
				createdBy: uid, 
				members: members.map(member => member.uid), 
				memberDisplay: memberDisplay, 
				modifiedAt: timestamp, 
				name: groupName, 
				type: groupType 
			});
		}catch(error){
			console.log(error);
		}
		

		navigate('/');
	}

	function handleXClick () {
		navigate('/');
	}

	function handleNameChange (event) {
		setGroupName(event.target.value);
	}

	function handleListItemClick (toRemove) {
		if(uid === toRemove.uid) return;

		const filteredMembers = members.filter(member => (member.uid != toRemove.uid));
		setMembers(filteredMembers);
	}

	return (
		<div className="create-chat-container">
			<header>
				<h1>Create Group</h1>
			</header>

			<SearchArea setMembers={ setMembers } members={ members }/>

			<h2>Members</h2>
			<List listItems={ members } handleClick={ handleListItemClick } listType='default'/>
			
			<form onSubmit={ handleSubmit }>
				<label>
					Group Name
					<br/>
					<input type='text' onChange = { handleNameChange } value={ groupName } required/>
				</label>

				<div className="buttons">
					<Button buttonType='chat' type='button' onClick={ handleXClick } aria-label='cancel'><BsX/></Button>
					<Button buttonType='chat' type='submit' aria-label='confirm'><BsCheckLg /></Button>
				</div>
			</form>
		</div>
	)
}

export default CreateGroup;