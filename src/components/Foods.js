import React from 'react';
import Food from './Food';

export default function Foods({ foods }) {
	return (
		<div>
			{foods.map((food) => (
				<Food key={food.id} food={food} />
			))}
		</div>
	);
}
