import React from 'react';
import Food from './Food';

export default function Foods({ foods, handleDelete, URL }) {
	return (
		<div>
			{foods.map((food) => (
				<Food key={food.id} URL={URL} food={food} handleDelete={handleDelete} />
			))}
		</div>
	);
}
