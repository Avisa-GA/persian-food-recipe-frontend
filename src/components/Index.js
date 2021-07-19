import React from 'react';
import Foods from './Foods';

export default function Index({ foods, handleDelete }) {
	return (
		<div>
			<Foods foods={foods} handleDelete={ handleDelete }/>
		</div>
	);
}
