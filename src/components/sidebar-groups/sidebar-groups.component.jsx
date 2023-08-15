import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import SidebarGroup from "../sidebar-group/sidebar-group.component"
import { ChatContext } from "../../contexts/chat.context";

function SidebarGroups({ groups }){
	const { selectedChat, setSelectedChat } = useContext(ChatContext);
	const navigate = useNavigate();
	const location = useLocation();

	function handleClick (id) {
		setSelectedChat(id);
		if(location.pathname !== '/'){
			navigate('/');
		}
	}

	return (
		<>
			{
				groups.map((group) => {
					const { id } = group;
					return <SidebarGroup group={ group } key={ id } onClick={ handleClick } selected={ id === selectedChat }/>
				})
			}		
		</>
	)
}

export default SidebarGroups;