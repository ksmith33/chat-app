import './sidebar-tab.styles.scss';

function SidebarTab ({ name, onClick, selected }) {
	return (
		<div onClick={onClick} className={`sidebar-tab-container ${selected ? "selected" : ""}`}>
			<h1>{name}</h1>
		</div>
	)
}

export default SidebarTab;