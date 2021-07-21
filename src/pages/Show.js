import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { StyledTitle } from '../styles';

export default function Show({ foods, match, history, handleUpdate }) {
	const [food, setFood] = useState(null);
	const [toggleForm, setToggleForm] = useState(false);
	useEffect(() => {
		if (foods) {
			const id = match.params.id;
			const recipe = foods.find((f) => f.id == id);
			setFood(recipe);
		} else {
			history.push('/');
		}
	}, [foods]);

	const toggleOpenForm = () => {
		setToggleForm(!toggleForm);
	};

	return (
		<>
			{toggleForm ? (
				<Form food={food} handleUpdate={handleUpdate} />
			) : (
				<div>
					<div>
						{food && (
							<div
								style={{
									width: '80%',
									margin: 'auto',
									marginTop: '5%',
									maxWidth: '700px',
									height: '100%',
								}}
								className="card">
								<div className="card-image">
									<>
										<img src={food.img} alt={food.title} />
										<span className="card-title">{food.title}</span>
									</>
								</div>
								<div className="card-content">
									<StyledTitle style={{ color: '#00796b' }}>
										Ingridients
									</StyledTitle>
									{food.ingredients.map((ingredient, index) => (
										<p key={index}>{ingredient}</p>
									))}

									<StyledTitle style={{ color: '#00796b' }}>
										Directions
									</StyledTitle>
									{food.directions.map((direction, index) => (
										<p key={index}>{direction}</p>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			)}
			<div style={{ margin: 'auto', marginTop: '2%' }}>
				<Link style={{ marginRight: '5%' }} to="/">
					Go Back
				</Link>
				<button
					className="waves-effect waves-light btn teal lighten-3"
					onClick={toggleOpenForm}>
					{toggleForm ? 'Back to Recipe' : 'Edit Recipe'}
				</button>
			</div>
		</>
	);
}
