import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default function SearchForm({ handleSearch, getFoods }) {
	
	const [searchValue, setSearchValue] = useState('');
// ******************************** handleChange
	const handleChange = (e) => {
		if (e.target.value === '') {
			getFoods();
		}
		setSearchValue(e.target.value);
	};

// ******************************* handleSubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(searchValue);
	};

	return (
		<form onSubmit={handleSubmit} style={{ display: 'flex' }}>
			<input style={{ color: "#e0f2f1", fontFamily: "var(--title-font)"}}
				type="text"
				placeholder="Search..."
				value={searchValue}
				onChange={(e) => handleChange(e)}
			/>
			<IconButton type="submit" style={{color: "#e0f2f1"}}>
				<Search />
			</IconButton>
		</form>
	);
}
