import React from 'react';
import Food from './Food';

export default function Foods({ foods, handleDelete }) {
	return (
		<div>
			{foods.map((food) => (
				<Food key={food.id} food={food} handleDelete={handleDelete} />
			))}
		</div>
	);
}
