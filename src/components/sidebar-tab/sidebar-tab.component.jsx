import './sidebar-tab.styles.scss';

function SidebarTab ({ name, onClick, selected }) {
	return (
		//button?
		<div onClick={onClick} className={`sidebar-tab-container ${selected ? "selected" : ""}`}>
			<h2>{name}</h2>
		</div>
	)
}

export default SidebarTab;