import React from 'react';

export default function Food({ food, handleDelete }) {
	return (
		<div className="container">
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
			<button onClick={() => handleDelete(food.id)}>X</button>
		</div>
	);
}
