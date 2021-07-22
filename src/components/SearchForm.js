import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { TextField } from '@material-ui/core';

export default function SearchForm({ handleSearch, getFoods }) {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (e) => {
		if (e.target.value === '') {
			getFoods();
		}
		setSearchValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(searchValue);
	};

	return (
		<form onSubmit={handleSubmit} style={{ display: 'flex' }}>
			<input
				type="text"
				placeholder="Search..."
				value={searchValue}
				onChange={(e) => handleChange(e)}
			/>
			<IconButton type="submit">
				<Search />
			</IconButton>
		</form>
	);
}
