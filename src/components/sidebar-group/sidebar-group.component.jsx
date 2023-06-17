function SidebarGroup ({ group }){
	const {name, recentMessage} = group;
	const { messageText, sentAt, sentBy } = recentMessage;
	return (
		<div className="sidebar-group-container">
			<h2>{ name } </h2>
			<div className="recent-message-group">
				<h3>{ sentBy }</h3>
				<div className="message-body">
					<span>{ messageText }</span>
					<span> { new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(sentAt) } </span>
				</div>
			</div>
		</div>
	)
}

export default SidebarGroup;