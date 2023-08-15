import './search-bar.styles.scss';

function SearchBar ({ handleChange, searchTerm }) {
	return (
			<input
				className='search-bar'
				type="text"
				required
				onChange={ handleChange }
				name="search"
				placeholder='search users'
				aria-label='user search bar'
				value={ searchTerm }
			/>
	)
}

export default SearchBar