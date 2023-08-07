import { useContext } from "react";
import SidebarGroup from "../sidebar-group/sidebar-group.component"
import './sidebar-groups.styles.scss';
import { ChatContext } from "../../contexts/chat.context";
import { useLocation, useNavigate } from "react-router-dom";

//fix naming of props
function SidebarGroups({ groups }){
	const { selectedChat, setSelectedChat } = useContext(ChatContext);
	const navigate = useNavigate();
	const location = useLocation();

	function handleClick (id){
		setSelectedChat(id);

		if(location.pathname !== '/'){
			navigate('/');
		}
	}

	return (
		<div className="sidebar-groups-container">
			{
				groups.map((group) => {
					const {id} = group;
					return <SidebarGroup group={ group } key={group.id} onClick={handleClick} selected={id === selectedChat}/>
				})
			}		
		</div>
	)
}

export default SidebarGroups;