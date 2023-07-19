import Message from '../message/message.component';
import './message-area.styles.scss';
import useSnapshot from '../../hooks/useSnapshot';
import { collection, orderBy } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';

function MessageArea ({id}) {
	const messages = useSnapshot(collection(db, "groups", id, 'messages'), [orderBy("sentAt", "asc")]);
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