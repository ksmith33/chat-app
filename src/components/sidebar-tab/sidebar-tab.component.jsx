import './sidebar-tab.styles.scss';

function SidebarTab ({ name, onClick, onKeyPress, selected }) {
	return (
		<div onClick={ onClick } className={ `sidebar-tab-container ${selected ? "selected" : ""}` } onKeyDown={ onKeyPress } tabIndex="0" role="button">
			<h2>{name}</h2>
		</div>
	)
}

export default SidebarTab;