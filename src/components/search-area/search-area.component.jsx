import { useEffect, useState } from 'react';
import './search-area.styles.scss';
import { findUser } from '../../services/user.services';
import SearchBar from '../search-bar/search-bar.component';
import SearchResults from '../search-results/search-results.component';
//rename
function SearchArea ({setMembers, members}) {
	const [searchResults, setSearchResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect (() => {
		const delayDebounceFn = setTimeout(async () => {
			const results = await findUser(searchTerm.toLowerCase());
			const filteredResults = results.filter(result => {
				return !members.find(member => {
					return result.uid === member.uid
				});
			});
      setSearchResults(filteredResults);
    }, 500)

    return () => clearTimeout(delayDebounceFn)

	}, [searchTerm]);

	function handleSearchChange (event) {
		setSearchTerm(event.target.value);
	}

	//do something about self popping up
	return(
		<div className='search-container'>
			<SearchBar handleChange={handleSearchChange} searchTerm={searchTerm}/>
			<SearchResults searchResults={searchResults} setMembers={setMembers} members={members}/>
		</div>
	)

}
export default SearchArea;