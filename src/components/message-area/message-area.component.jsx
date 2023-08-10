import { collection, orderBy } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import Message from '../message/message.component';
import useSnapshot from '../../hooks/useSnapshot';
import './message-area.styles.scss';

function MessageArea ({ id }) {
	//limit amount of messages
	const messages = useSnapshot(collection(db, "groups", id, 'messages'), [orderBy("sentAt", "asc")]);

	return (
		<div className='message-area-container'>
			{
				messages.map(
					(message) => (
							<Message message={ message } key={ message.id }/>
						)
				)
			}
		</div>
	)
}

export default MessageArea;