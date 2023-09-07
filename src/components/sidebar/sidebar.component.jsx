import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidMessageAdd } from 'react-icons/bi';
import SidebarTabs from '../sidebar-tabs/sidebar-tabs.component';
import SidebarGroups from '../sidebar-groups/sidebar-groups.component';
import Button from '../button/button.component';
import './sidebar.styles.scss';

const sidebarTabs = [
	{
		id: 1,
		name: "All",
		groupType: null,
	},
	{
		id: 2,
		name: "Groups",
		groupType: 1,
	},
	{
		id: 3,
		name: "Dms",
		groupType: 2,
	}
]

function Sidebar ({ groups }) {
	const [selectedTab, setSelectedTab] = useState(0);
	const groupType = sidebarTabs[selectedTab].groupType;
	const navigate = useNavigate();
	const filteredGroups = groupType ? groups.filter((group) => (group.type === groupType)) : groups; 

	function handleClick () {
		navigate('/new');
	}

	return(
		<aside className='sidebar-container'>
			<SidebarTabs selectedTab={ selectedTab } setSelectedTab={ setSelectedTab } tabs={ sidebarTabs }/>

			<div className='sidebar-body'>
				<SidebarGroups groups={ filteredGroups } />
				<Button buttonType='rounded' type='button' onClick={ handleClick } aria-label='create new group'><BiSolidMessageAdd /></Button>
			</div>
		</aside>
	)
}

export default Sidebar;