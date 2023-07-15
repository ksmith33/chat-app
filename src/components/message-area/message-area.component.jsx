import Message from '../message/message.component';
import './message-area.styles.scss';
function MessageArea ({messages}) {
	//Message Component
	//styling based on sender
	return (
		<div className='message-area-container'>
			{messages.map(message => 
				{
					return(
						<Message message={message} key={message.id}/>
					)
				}
			)}
		</div>
	)
}

export default MessageArea;