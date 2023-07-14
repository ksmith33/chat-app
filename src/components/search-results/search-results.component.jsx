import ListItem from '../list-item/list-item';
import './search-results.styles.scss';

function SearchResults ({searchResults, setMembers, members}){

	function handleClick(searchResult) {
		setMembers([...members, searchResult]);
	}
	//is this the best place to do this?

	return (
		<div className="search-results-container">
			{
				searchResults.map(searchResult => {
					if(members[0].uid !== searchResult.uid){
						return(
							<ListItem item={searchResult} onClick={handleClick}/>
						)
					}
				})
			}
		</div>
	)
}

export default SearchResults;