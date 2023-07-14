import './search-bar.styles.scss';
function SearchBar ({handleChange, searchTerm}) {

	return (
		<input
			className='search-bar'
			type="text"
			required
			onChange={handleChange}
			name="search"
			value={searchTerm}
		/>
	)
}

export default SearchBar