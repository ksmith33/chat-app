import './list-item.styles.scss';

function ListItem ({ item, onClick }){
	return (
		<li>
			<button className='list-item-container' onClick={ () => onClick(item)}>{item.displayName}</button>
		</li>
	);
}

export default ListItem;