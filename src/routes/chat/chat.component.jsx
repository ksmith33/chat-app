import MessageArea from '../../components/message-area/message-area.component';
import Input from '../../components/input/input';
import ChatHeader from '../../components/chat-header/chat-header.component';
import MembersSidebar from '../../components/members-sidebar/members-sidebar.component';
import './chat.styles.scss';

function Chat ({ selectedChatData = { name: "", id: "", memberDisplay: [] } }) {
	const { name, id, memberDisplay } = selectedChatData;

	return(
		<div className='chat-container'>
			<ChatHeader name={ name } id={ id }/>
			{
				id && <MessageArea id={ id }/>
			}
			<Input id={ id }/>
			<MembersSidebar groupMembers={ memberDisplay }/>
		</div>
	)
}

export default Chat;