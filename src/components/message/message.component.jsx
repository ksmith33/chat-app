import { useContext, useRef, useEffect } from 'react';
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
//fix invisible display name
//find some way to account for image popping in
	const messageRef = useRef();

	useEffect(() => {
		window.requestAnimationFrame(() => messageRef.current?.scrollIntoView({
			behavior: 'smooth'
		}));
	}, []);

	return (
		<div className={`message-container ${isSender ? 'sent' : ''}`} ref={messageRef}>
			<div className='message-content'>
				<span className='sender'>{displayName}</span>
				<div className='message-body'>
					<p>{messageText}</p>
					{image && <img src={image} alt="" />}
					<span className='timestamp'>{timestamp}</span>
				</div>
			</div>
		</div>
	)
}

export default Message;