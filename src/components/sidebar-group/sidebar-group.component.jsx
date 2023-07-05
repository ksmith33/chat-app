import './sidebar-group.styles.scss';

function SidebarGroup ({ group, onClick, selected}){
	const {name, recentMessage} = group;
	const { messageText, sentAt, sentBy } = recentMessage;
	const { displayName } = sentBy;
	const timeStamp = new Intl.DateTimeFormat('en-US', {month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}).format(sentAt.toDate());

	return (
		//button?
		<div className= {`sidebar-group-container ${selected ? "selected" : ""}`}onClick={onClick}>
			<h2>{ name } </h2>
			<div className="recent-message">
				<div className='message-header'>
					<h3>{ displayName }</h3>
					<h3>{ timeStamp } </h3>
				</div>
				<span>{ messageText }</span>
			</div>
		</div>
	)
}

export default SidebarGroup;