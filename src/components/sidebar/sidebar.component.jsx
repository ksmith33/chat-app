import { useState } from 'react';
import './sidebar.styles.scss';
import Tabs from '../tabs/tabs.component';
import SidebarGroups from '../sidebar-groups/sidebar-groups.component';

const GROUP_TYPES = {
	CHANNEL: 1,
	DM: 2
}

const sidebarTabs = [
	{
		id: 1,
		name: "All",
		filterBy: null
	},
	{
		id: 2,
		name: "Channels",
		//changeMaybe
		filterBy: GROUP_TYPES.CHANNEL
	},
	{
		id: 3,
		name: "Dms",
		filterBy: GROUP_TYPES.DM
	}
]

function Sidebar ({ groups }) {
	const [selectedTab, setSelectedTab] = useState(0);
 	const filteredGroups = sidebarTabs[selectedTab].filterBy ? groups.filter((group) => {
		return group.type === sidebarTabs[selectedTab].filterBy;
	}) : groups; 
	//need all the users groups
	//state value to filter which of users groups we currently see
	return(
		<div className='sidebar-container'>
			<Tabs selectedTab={ selectedTab } setSelectedTab={ setSelectedTab } tabs={ sidebarTabs }/>
			<SidebarGroups groups={ filteredGroups } />
		</div>
	)
}

export default Sidebar;