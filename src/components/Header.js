import { Link, useHistory } from 'react-router-dom';
import { StyledHeader } from '../styles';
import SearchForm from './SearchForm';

export default function Header({ handleSearch, getFoods }) {
	const history = useHistory();

	return (
		<StyledHeader>
			<Link to="/" onClick={() => getFoods()}>
				<h5>Persian Food Recipes</h5>
			</Link>
			<Link to="/about">
				<h5>About</h5>
			</Link>
			<SearchForm handleSearch={handleSearch} getFoods={getFoods} />
		</StyledHeader>
	);
}
