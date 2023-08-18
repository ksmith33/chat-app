import Button from "../button/button.component";
import './sidebar-tab.styles.scss';

function SidebarTab ({ name, onClick, selected }) {
	return (
		<li className={ `sidebar-tab-container ${selected ? "selected" : ""}` }>
			<Button onClick={ onClick } buttonType="listItem" aria-label={`${name} tab`}/>
			<h2>{name}</h2>
		</li>
	)
}

export default SidebarTab;