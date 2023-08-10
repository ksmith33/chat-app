import { useEffect, useState } from 'react';
import SearchBar from '../search-bar/search-bar.component';
import List from '../list/list.component';
import { findUser } from '../../services/user.services';
import './search-area.styles.scss';

function SearchArea ({ setMembers, members }) {
	const [searchResults, setSearchResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect (() => {
		const delayDebounceFn = setTimeout(async () => {
			try{
				const results = await findUser(searchTerm.toLowerCase());
				const filteredResults = results.filter(
					(result) => {
						return !members.find(
							member => {
								return result.uid === member.uid
							}
						);
					}
				);
				setSearchResults(filteredResults);
			}catch(error){
				console.log(error);
			}
    }, 500)
		
    return () => clearTimeout(delayDebounceFn)
	}, [searchTerm]);

	function handleSearchChange (event) {
		setSearchTerm(event.target.value);
	}

	function handleListItemClick (searchResult) {
		if(members.find(member => member.uid === searchResult.uid)) return;
		setMembers([...members, searchResult]);
	}

	return(
		<div className='search-container'>
			<SearchBar handleChange={ handleSearchChange } searchTerm={ searchTerm }/>
			<List listItems={ searchResults } handleClick={ handleListItemClick } listType='shaded'/>
		</div>
	)

}
export default SearchArea;