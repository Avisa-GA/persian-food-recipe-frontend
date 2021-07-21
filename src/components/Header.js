import { Link, useHistory } from 'react-router-dom';
import { StyledHeader } from '../styles';

export default function Header() {
	const history = useHistory();

	return (
		<StyledHeader>
			<Link to="/">
				<h5>Persian Food Recipes</h5>
			</Link>
			<Link to="/about">
				<h5>About</h5>
			</Link>
		</StyledHeader>
	);
}
