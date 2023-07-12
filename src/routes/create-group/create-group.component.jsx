import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import SearchArea from "../../components/search-area/search-area.component";
import './create-group.styles.scss';
import Button from "../../components/button/button.component";
import { BsCheckLg } from "react-icons/bs";
import { createChat } from "../../services/chats.services";
import { Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CreateChat () {
	const { currentUser } = useContext(UserContext);
	const { uid } = currentUser;
	const [members, setMembers] = useState([currentUser]);
	const navigate = useNavigate();

	async function handleClick () {
		if(members.length == 0 ) return;
		const name = members.length > 2 ? `you, ${members[1].displayName}, and ${members.length - 2} others` : members[0].displayName;
		const groupType = members.length > 2 ? 1 : 2;
		const timestamp = Timestamp.now();
		await createChat({createdAt: timestamp, createdBy: uid, members: members.map(member => member.uid), modifiedAt: timestamp, name: name, type: groupType });
		navigate('/');
	}

	//make members own component, can double with search results
	return (
		<div className="create-chat-container">
			<SearchArea setMembers={setMembers} members={members}/>
			{members && members.map(member => member.displayName)}
			<Button buttonType='chat' type='button' onClick={handleClick}><BsCheckLg /></Button>
		</div>
	)
}

export default CreateChat;