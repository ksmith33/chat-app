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
			if(!searchTerm) return
      setSearchResults(await findUser(searchTerm.toLowerCase()));
    }, 500)

    return () => clearTimeout(delayDebounceFn)

	}, [searchTerm]);

	//search should be own component
	return(
		<div className='search-container'>
			<SearchBar handleChange={(event) => setSearchTerm(event.target.value)} searchTerm={searchTerm}/>
			<SearchResults searchResults={searchResults} setMembers={setMembers} members={members}/>
		</div>
	)

}
export default SearchArea;