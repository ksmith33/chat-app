import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import SearchArea from "../../components/search-area/search-area.component";
import Button from "../../components/button/button.component";

function CreateChat () {
	const { currentUser } = useContext(UserContext);
	const { uid } = currentUser;
	const [members, setMembers] = useState([uid]);
	const [name, setName] = useState('');

	function handleNameChange (event) {
		setName(event.target.value);
	}

	//make members own component, can double with search results
	return (
		<div className="create-chat-container">
			<label>
				Name
				<input 
					type="text"
					required
					onChange={handleNameChange}
					name="name"
					value={name}
				/>	
			</label>
			<label>
				Add Member
				<SearchArea setMembers={setMembers} members={members}/>
			</label>
			
			<Button type="button">Submit</Button>
			{members && members.map(member => member.displayName)}
		</div>
	)
}

export default CreateChat;