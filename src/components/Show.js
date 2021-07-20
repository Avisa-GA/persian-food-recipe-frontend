import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

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
				<div className="container">
					<Link to="/">Go Back</Link>
					{food && (
						<>
							<img
								src={food.img}
								alt={food.title}
								style={{ width: '300px', height: '300px' }}
							/>
							<h3>{food.title}</h3>
							<ul>
								{food.ingredients.map((ingredient, index) => (
									<li key={index}>{ingredient}</li>
								))}
							</ul>
							<div>
								{food.directions.map((direction, index) => (
									<p key={index}>{direction}</p>
								))}
							</div>
						</>
					)}
				</div>
			)}
			<button onClick={toggleOpenForm}>
				{toggleForm ? 'Back to Recipe' : 'Edit Recipe'}{' '}
			</button>
		</>
	);
}
