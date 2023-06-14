import './tabs.styles.scss';
import SidebarTab from '../sidebar-tab/sidebar-tab.component';

function Tabs ({ selectedTab, setSelectedTab, tabs}) {

	function handleTabClick (tabIndex) {
		setSelectedTab(tabIndex);
	}

	return (
		<div className='tabs-container'>
			{
				tabs.map((tab, index) => {
					const { name } = tab;
					return(
						<SidebarTab key= {tab.id} name={ name } onClick={(e) => handleTabClick(index)} selected={index === selectedTab}/>
					)
				})
			}
		</div>
	)
}

export default Tabs;