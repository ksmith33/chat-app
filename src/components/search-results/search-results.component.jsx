function SearchResults ({searchResults, setMembers, members}){

	function handleClick(searchResult) {
		setMembers([...members, searchResult]);
	}

	return (
		<div className='search-results-container'>
			{
				searchResults.map(searchResult => {
					return(
						<div onClick={(searchResult) => handleClick(searchResult)}>{searchResult.displayName}</div>
					)
				})
			}
		</div>
	)
}

export default SearchResults;