import ListItem from "../list-item/list-item";

function GroupMembers ({members, setMembers, userId}) {
	function handleClick(toRemove) {
		const {uid} = toRemove
		if(userId === uid) return;
		const filterMembers = members.filter(member => {return member.uid != uid});
		setMembers(filterMembers);
	}

	return (
		<div className="members-container">
			{members.map(
				member => {
					return <ListItem item = {member} onClick={handleClick}/>
				}
			)}
		</div>
		
	)
}

export default GroupMembers;