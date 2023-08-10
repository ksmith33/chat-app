import { useState, createContext} from "react";

export const ChatContext = createContext({
	selectedChat: null,
	setSelectedChat: () => {}
});

export function ChatProvider({ children }){
	const [selectedChat, setSelectedChat] = useState(null);

	const value = { selectedChat, setSelectedChat };
	return <ChatContext.Provider value={ value }> { children } </ChatContext.Provider>
};