import React from 'react';
import Foods from './Foods';
import Form from './Form';

export default function Index({ foods, handleDelete, handleAdd, URL }) {
	return (
		<div>
			<Form handleAdd={handleAdd} />
			<Foods foods={foods} URL={URL} handleDelete={handleDelete} />
		</div>
	);
}
