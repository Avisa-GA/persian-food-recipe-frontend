import React from 'react';
import Foods from './Foods';

export default function Index({ foods, handleDelete,handleAdd }) {
	return (
		<div>
			<Form handleAdd={handleAdd}/>
			<Foods foods={foods} handleDelete={ handleDelete }/>
		</div>
	);
}
