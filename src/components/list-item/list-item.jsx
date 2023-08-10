import './list-item.styles.scss';

function ListItem ({ item, onClick }){

	function handleKeyDown (event) {
		if(event.key === 'Enter' || event.key === ' ') onClick(item);
	}

	return (
		<li className='list-item-container' onClick={ () => onClick(item) } onKeyDown={ handleKeyDown } tabIndex='0' role='button'>{ item.displayName }</li>
	)
}

export default ListItem;