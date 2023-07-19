import './chat.styles.scss';
import MessageArea from '../../components/message-area/message-area.component';
import Input from '../../components/input/input';
import ChatHeader from '../../components/chat-header/chat-header.component';

//might switch back to store id or storing state in messenger
function Chat ({ selectedChat }) {
	const {name, id} = selectedChat;
	
	//could make chat-header more general in order to use it to double ass add group
	return(
		<div className='chat-container'>
			<ChatHeader name={name} id={id}/>
			<MessageArea id={id}/>
			<Input id={id}/>
		</div>
	)
}

export default Chat;