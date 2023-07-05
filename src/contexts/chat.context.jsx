import { useState, createContext} from "react";

export const ChatContext = createContext({
	selectedChat: null,
	setSelectedChat: () => {}
});

export function ChatProvider({ children }){
	//maybe get chat last in
	const [selectedChat, setSelectedChat] = useState(null);

	const value = { selectedChat, setSelectedChat };
	return <ChatContext.Provider value={ value }> { children } </ChatContext.Provider>
};