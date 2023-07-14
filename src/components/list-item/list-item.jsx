import './list-item.styles.scss';

function ListItem ({item, onClick}){
	return (
		<div className="list-item-container" onClick={() => onClick(item)}>
			<span>{item.displayName}</span>
		</div>
	)
}

export default ListItem;