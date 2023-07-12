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
							<div onClick={() => handleClick(searchResult)}>{searchResult.displayName}</div>
						)
					}
				})
			}
		</div>
	)
}

export default SearchResults;