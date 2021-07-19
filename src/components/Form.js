import { useEffect, useState } from 'react';

export default function Form(props) {

	const [formState, setFormState] = useState({
		title: '',
		img: '',
		ingredients: [],
		directions: [],
		url: '',
	});

	useEffect(() => {
		if (PaymentResponse.foods) {
			setFormState(props.foods);
		}
	}, [props.foods]);

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
