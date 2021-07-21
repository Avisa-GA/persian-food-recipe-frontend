import React from 'react';
import Foods from '../pages/Foods';
import Form from '../components/Form';

export default function Index({ foods, handleDelete, handleAdd, URL }) {
	return (
		<div>
			<Form handleAdd={handleAdd} />
			<Foods foods={foods} URL={URL} handleDelete={handleDelete} />
		</div>
	);
}
