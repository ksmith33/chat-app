import { useContext, useEffect, useState } from 'react';
import './chat.styles.scss';
import { ChatContext } from '../../contexts/chat.context';
import { getMessages } from '../../services/chats.services';


//might switch back to store id or storing state in messenger
function Chat ({chat}) {
	return(
		<h1>Hey</h1>
	)

}

export default Chat;