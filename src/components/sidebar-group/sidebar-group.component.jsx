import './sidebar-group.styles.scss';

function SidebarGroup ({ group, onClick, selected}){
	const {name, recentMessage} = group;
	const { messageText, sentAt, sentBy } = recentMessage;

	return (
		//button?
		<div className= {`sidebar-group-container ${selected ? "selected" : ""}`}onClick={onClick}>
			<h2>{ name } </h2>
			<div className="recent-message">
				<div className='message-header'>
					<h3>{ sentBy }</h3>
					<h3>{ new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(sentAt) } </h3>
				</div>
				<span>{ messageText }</span>
			</div>
		</div>
	)
}

export default SidebarGroup;