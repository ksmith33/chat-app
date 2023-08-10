import SidebarTab from '../sidebar-tab/sidebar-tab.component';
import './sidebar-tabs.styles.scss';

function SidebarTabs ({ selectedTab, setSelectedTab, tabs }) {

	function handleTabClick (tabIndex) {
		setSelectedTab(tabIndex);
	}

	function handleKeyPress (event, index) {
		if(event.key === 'Enter' || event.key === ' ') handleTabClick(index);
	}

	return (
		<div className='tabs-container'>
			{
				tabs.map((tab, index) => {
					const { name } = tab;
					return(
						<SidebarTab key= { tab.id } name={ name } onClick={ () => handleTabClick(index) } onKeyPress = { (event) => handleKeyPress(event, index) } selected={ index === selectedTab }/>
					)
				})
			}
		</div>
	)
}

export default SidebarTabs;