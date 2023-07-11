function SearchBar ({handleChange, searchTerm}) {
	return (
		<input
			type="text"
			required
			onChange={handleChange}
			name="search"
			value={searchTerm}
		/>
	)
}

export default SearchBar