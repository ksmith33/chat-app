import { useContext, useState } from 'react';
import './sidebar.styles.scss';
import SidebarTabs from '../sidebar-tabs/sidebar-tabs.component';
import SidebarGroups from '../sidebar-groups/sidebar-groups.component';
import { ChatContext } from '../../contexts/chat.context';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';

const sidebarTabs = [
	{
		id: 1,
		name: "All",
		groupType: null,
		handleButtonClick: () => {}
	},
	{
		id: 2,
		name: "Groups",
		//changeMaybe
		groupType: 1,
		handleButtonClick: (navigate) => {
			navigate('/add-group');
		}
	},
	{
		id: 3,
		name: "Dms",
		groupType: 2,
		handleButtonClick: (navigate) => {

		}
	}
]

function Sidebar ({ groups }) {
	const [selectedTab, setSelectedTab] = useState(0);
	const groupType = sidebarTabs[selectedTab].groupType;
	const navigate = useNavigate();

	//rename to selectedGroup
 	const filteredGroups = groupType ? groups.filter((group) => {
		return group.type === groupType;
	}) : groups; 
	//need all the users groups
	return(
		<div className='sidebar-container'>
			<SidebarTabs 
				selectedTab={ selectedTab } 
				setSelectedTab={ setSelectedTab } 
				tabs={ sidebarTabs }
			/>

			<SidebarGroups groups={ filteredGroups } />
			
		</div>
	)
}

export default Sidebar;