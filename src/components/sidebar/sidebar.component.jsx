import { useState } from 'react';
import './sidebar.styles.scss';
import SidebarTabs from '../tabs/sidebar-tabs.component';
import SidebarGroups from '../sidebar-groups/sidebar-groups.component';

const sidebarTabs = [
	{
		id: 1,
		name: "All",
		groupType: null
	},
	{
		id: 2,
		name: "Channels",
		//changeMaybe
		groupType: 1
	},
	{
		id: 3,
		name: "Dms",
		groupType: 2
	}
]

function Sidebar ({ groups }) {
	const [selectedTab, setSelectedTab] = useState(0);
 	const filteredGroups = sidebarTabs[selectedTab].groupType ? groups.filter((group) => {
		return group.type === sidebarTabs[selectedTab].groupType;
	}) : groups; 
	//need all the users groups
	//state value to filter which of users groups we currently see
	return(
		<div className='sidebar-container'>
			//move props to new lines
			<SidebarTabs selectedTab={ selectedTab } setSelectedTab={ setSelectedTab } tabs={ sidebarTabs }/>
			<SidebarGroups groups={ filteredGroups } />
		</div>
	)
}

export default Sidebar;