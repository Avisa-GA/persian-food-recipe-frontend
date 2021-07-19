import React from 'react';

export default function Foods({ foods }) {
	return (
		<div>
			{foods.map((food) => (
				<Food key={food.id} food={food} />
			))}
		</div>
	);
}
