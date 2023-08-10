import './members-sidebar.styles.scss';

function MembersSidebar({ groupMembers }) {
	return (
		<aside className="members-sidebar-container">
			<h2>Members</h2>
			<ul>
				{
					groupMembers.map(
						(groupMember, index) => {
							return (
								<li className='member-details' key={ index }>
									<img src={ groupMember.photo } alt={ groupMember.displayName }/>
									<p>{ groupMember.displayName }</p>		
								</li>
							)
						}
					)
				}
			</ul>
			
		</aside>
	)
}

export default MembersSidebar;