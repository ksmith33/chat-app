import './members-sidebar.styles.scss'
function MembersSidebar({members}) {
	return (
		<div className="members-sidebar-container">
			<h2>Members</h2>
			{
				members && members.map(member => {
					return (
						<div className='member-details'>
							<img src={member.photo} alt={member.displayName}/>
							<p>{member.displayName}</p>		
						</div>
					)
				})
			}
		</div>
	)
}

export default MembersSidebar;