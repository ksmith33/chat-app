import './chat.styles.scss';
import MessageArea from '../../components/message-area/message-area.component';
import Input from '../../components/input/input';
import ChatHeader from '../../components/chat-header/chat-header.component';

function Chat ({selectedChat = { name: "", id: ""}}) {
	const {name, id} = selectedChat;
	//fix header shrinking
	return(
		<div className='chat-container'>
			<ChatHeader name={name} id={id}/>

			{
				id && <MessageArea id={id}/>
			}
			
			<Input id={id}/>
		</div>
	)
}

export default Chat;