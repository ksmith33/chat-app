import './sidebar-tab.styles.scss';

function SidebarTab ({ name, onClick, selected }) {
	return (
		<li className={ `sidebar-tab-container ${selected ? "selected" : ""}` }>
			<button onClick={ onClick } aria-label={`${name} tab`}/>
			<h2>{name}</h2>
		</li>
	)
}

export default SidebarTab;