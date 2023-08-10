import ListItem from "../list-item/list-item";
import './list.styles.scss';

	const LIST_TYPES = {
		default: '',
		shaded: 'shaded'
	}

function List ({ listItems, handleClick, listType }) {
	return (
		<ul className={ `list-container ${ LIST_TYPES[listType] }` }>
			{
				listItems.map(
					(listItem) => (
						<ListItem item={ listItem } onClick={ handleClick } key={ listItem.uid }/>
					)
				)
			}
		</ul>
	)
}

export default List;