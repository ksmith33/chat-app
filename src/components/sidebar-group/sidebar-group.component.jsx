import './sidebar-group.styles.scss';

function SidebarGroup ({ group, onClick, onKeyPress, selected }){
	const { 
					name,
					recentMessage : {
						messageText, 
						sentAt, 
						sentBy: {
							displayName
						} = ''
					} = '', 
					id,
				} = group;
	const timeStamp = sentAt ? new Intl.DateTimeFormat('en-US', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(sentAt.toDate()) : "";

	return (
		<section className= { `sidebar-group-container ${selected ? "selected" : ""}` }>
			<button onClick={() => onClick(id)} aria-label={`select ${name} group`}/>
			<h2>{ name } </h2>
			<div className="recent-message">
				<div className='message-header'>
					<h3>{ displayName }</h3>
					<h3>{ timeStamp } </h3>
				</div>
				<p>{ messageText }</p>
			</div>
		</section>
	)
}

export default SidebarGroup;