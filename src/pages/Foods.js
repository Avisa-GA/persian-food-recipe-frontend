import React from 'react';
import Food from './Food';
import { StyledTitle } from '../styles';

export default function Foods({ foods, handleDelete}) {
	return (
		<ul style={{ marginTop: '5%' }} className="collection with-header">
			<li className="collection-header">
				<StyledTitle
					style={{ fontSize: '24px', fontWeight: 'bold', color: '#00695c' }}>
					These are some recipes
				</StyledTitle>
			</li>
			{foods.length < 1 ? (
				'No results'
			) : (
				<li className="collection-item">
					{foods.map((food) => (
						<Food
							key={food.id}
							food={food}
							handleDelete={handleDelete}
						/>
					))}
				</li>
			)}
		</ul>
	);
}
