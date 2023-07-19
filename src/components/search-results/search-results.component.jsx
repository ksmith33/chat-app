import ListItem from '../list-item/list-item';
import './search-results.styles.scss';

function SearchResults ({searchResults, setMembers, members}){

	function handleClick(searchResult) {
		if(members.find(member => member.uid === searchResult.uid)) return;
		setMembers([...members, searchResult]);
	}
	//is this the best place to do this?

	return (
		<div className="search-results-container">
			{
				searchResults.map(searchResult => {
						return(
							<ListItem item={searchResult} onClick={handleClick}/>
						)
				})
			}
		</div>
	)
}

export default SearchResults;