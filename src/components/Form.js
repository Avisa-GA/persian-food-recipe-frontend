import { useState } from 'react';

export default function Form({ handleAdd }) {
	const [formState, setFormState] = useState({
		title: '',
		img: '',
		ingredients: [],
		directions: [],
		url: '',
	});

	function handleChange(event) {
		setFormState((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	}
	return (
		<div>
			<form></form>
		</div>
	);
}
