import { useContext } from "react";
import SidebarGroup from "../sidebar-group/sidebar-group.component"
import './sidebar-groups.styles.scss';
import { ChatContext } from "../../contexts/chat.context";

//fix naming of props
function SidebarGroups({ groups }){
	const { selectedChat, setSelectedChat } = useContext(ChatContext);

	function handleClick (index){
		setSelectedChat(index);
	}

	return (
		<div className="sidebar-groups-container">
			{
				groups && groups.map((group, index) => {
					return <SidebarGroup group={ group } key={group.id} onClick={() => handleClick(index)} selected={index === selectedChat}/>
				})
			}		
		</div>
	)
}

export default SidebarGroups;