import { useContext, useRef, useEffect } from 'react';
import { UserContext } from '../../contexts/user.context';
import './message.styles.scss';

function Message ({ message }) {
	const { 
		sentBy: {
			displayName,
			uid
		}, 
		messageText, 
		sentAt, 
		image 
	} = message;
	const { currentUser } = useContext(UserContext);
	const timestamp = new Intl.DateTimeFormat('en-US', {month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}).format(sentAt.toDate());
	const isSender = uid === currentUser.uid;
	const messageRef = useRef();

	useEffect(() => {
		window.requestAnimationFrame(
			() => messageRef.current?.scrollIntoView({
				behavior: 'smooth'
			})
		);
	}, []);

	return (
		<div className={ `message-container ${isSender ? 'sent' : ''}` } ref={ messageRef }>
			<div className='message-content'>
				<p className='sender'>{ displayName }</p>
				<div className='message-body'>
					<p>{ messageText }</p>
					{ image && <img src={ image } alt='' /> }
					<p className='timestamp'>{ timestamp }</p>
				</div>
			</div>
		</div>
	)
}

export default Message;