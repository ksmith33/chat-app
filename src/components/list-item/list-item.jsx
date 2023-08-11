import './list-item.styles.scss';

function ListItem ({ item, onClick }){
	return (
		<button className='list-item-container' onClick={ () => onClick(item)}>{item.displayName}</button>
	)
}

export default ListItem;