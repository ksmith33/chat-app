import './sidebar-tab.styles.scss';

function SidebarTab ({ name, onClick, selected }) {
	return (
		<div className={ `sidebar-tab-container ${selected ? "selected" : ""}` }>
			<button onClick={ onClick } aria-label={`${name} tab`}/>
			<h2>{name}</h2>
		</div>
	)
}

export default SidebarTab;