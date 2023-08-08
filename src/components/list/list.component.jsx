import ListItem from "../list-item/list-item";
import './list.styles.scss';

function List ({listItems, onClick, listType}) {
	const LIST_TYPES = {
		shaded: 'shaded'
	}
	//unordered list
	return (
		<div className={`list-container ${LIST_TYPES[listType]}`}>
			{listItems.map(
				listItem => {
					return <ListItem item = {listItem} onClick={onClick}/>
				}
			)}
		</div>
		
	)
}

export default List;