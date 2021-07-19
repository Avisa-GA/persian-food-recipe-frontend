import React from 'react';
import Foods from './Foods';

export default function Index({ foods }) {
	return (
		<div>
			<Foods foods={foods} />
		</div>
	);
}
