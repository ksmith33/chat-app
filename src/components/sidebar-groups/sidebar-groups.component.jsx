import { useContext } from "react";
import SidebarGroup from "../sidebar-group/sidebar-group.component"
import './sidebar-groups.styles.scss';
import { ChatContext } from "../../contexts/chat.context";

//fix naming of props
function SidebarGroups({ groups }){
	const { selectedChat, setSelectedChat } = useContext(ChatContext);

	function handleClick (id){
		setSelectedChat(id);
	}

	//move fetching groups here

	return (
		<div className="sidebar-groups-container">
			{
				groups && groups.map((group) => {
					const {id} = group;
					return <SidebarGroup group={ group } key={group.id} onClick={() => handleClick(id)} selected={id === selectedChat}/>
				})
			}		
		</div>
	)
}

export default SidebarGroups;