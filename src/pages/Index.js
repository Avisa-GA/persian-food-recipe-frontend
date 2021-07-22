import React from 'react';
import Foods from '../pages/Foods';
import Form from '../components/Form';

export default function Index({ foods, handleDelete, handleAdd }) {
	return (
		<div>
			<Form handleAdd={handleAdd} />
			<Foods foods={foods} handleDelete={handleDelete} />
		</div>
	);
}
