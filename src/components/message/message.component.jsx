import { useContext } from 'react';
import './message.styles.scss';
import { UserContext } from '../../contexts/user.context';

function Message ({ message }) {
	//will need user id in the case of users with same name
	const { sentBy, messageText, sentAt, image } = message;
	const {displayName, uid} = sentBy;
	const { currentUser } = useContext(UserContext);
	const timestamp = new Intl.DateTimeFormat('en-US', {month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}).format(sentAt.toDate());
	const isSender = uid === currentUser.uid;
//what semantic tag instead of span
	return (
		<div className={`message-container ${isSender ? 'sent' : ''}`}>
			<div className='message-content'>
				<span className='sender'>{displayName}</span>
				<div className='message-text'>
					<p>{messageText}</p>
					{image && <img src={image} alt="" />}
					<span className='timestamp'>{timestamp}</span>
				</div>
			</div>
		</div>
	)
}

export default Message;