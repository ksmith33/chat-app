import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import SearchArea from "../../components/search-area/search-area.component";
import './create-group.styles.scss';
import Button from "../../components/button/button.component";
import { BsCheckLg, BsX } from "react-icons/bs";
import { createChat } from "../../services/chats.services";
import { Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import GroupMembers from "../../components/list/list.component";
import List from "../../components/list/list.component";

function CreateChat () {
	const { currentUser } = useContext(UserContext);
	const { uid } = currentUser;
	const [members, setMembers] = useState([currentUser]);
	const [groupName, setGroupName] = useState('');
	const navigate = useNavigate();

	async function handleCheckClick (event) {
		event.preventDefault()
		if(members.length == 1 ) return;
		const groupType = members.length > 2 ? 1 : 2;
		const timestamp = Timestamp.now();
		const memberDisplay = members.map(
			member => {
				console.log(member)
				return {displayName: member.displayName, photo: member.photoURL}
			}
		)
		await createChat({createdAt: timestamp, createdBy: uid, members: members.map(member => member.uid), memberDisplay: memberDisplay, modifiedAt: timestamp, name: groupName, type: groupType });
		navigate('/');
	}

	function handleXClick () {
		navigate('/');
	}

	function handleNameChange (event) {
		setGroupName(event.target.value);
	}

	function handleMemberClick(toRemove) {
		if(uid === toRemove.uid) return;
		const filterMembers = members.filter(member => {return member.uid != toRemove.uid});
		setMembers(filterMembers);
	}

	//change members header to h2?
	return (
		<div className="create-chat-container">
			<SearchArea setMembers={setMembers} members={members}/>
			<h1>Members</h1>
			<List listItems={members} onClick={handleMemberClick}/>
			<h2>Group Name</h2>
			<form onSubmit={handleCheckClick}>
				<input type='text' onChange = {handleNameChange} value={groupName} required/>
				<div className="buttons">
					<Button buttonType='chat' type='button' onClick={handleXClick}><BsX/></Button>
					<Button buttonType='chat' type='submit'><BsCheckLg /></Button>
				</div>
			</form>
			
		</div>
	)
}

export default CreateChat;