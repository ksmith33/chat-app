import SidebarTab from '../sidebar-tab/sidebar-tab.component';
import './sidebar-tabs.styles.scss';

function SidebarTabs ({ selectedTab, setSelectedTab, tabs }) {

	function handleTabClick (tabIndex) {
		setSelectedTab(tabIndex);
	}

	return (
		<ul className='tabs-container'>
			{
				tabs.map((tab, index) => {
					const { name } = tab;
					return(
						<SidebarTab key= { tab.id } name={ name } onClick={ () => handleTabClick(index) } selected={ index === selectedTab }/>
					)
				})
			}
		</ul>
	)
}

export default SidebarTabs;