import { useEffect, useState } from 'react';

export default function Form(props) {
	const [formState, setFormState] = useState({
		title: '',
		img: '',
		ingredients: '',
		directions: '',
		url: '',
	});

	useEffect(() => {
		if (props.foods) {
			setFormState(props.foods);
		}
	}, [props.foods]);

	function handleChange(event) {
		setFormState((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.handleAdd(formState);
		setFormState({
			title: '',
			img: '',
			ingredients: '',
			directions: '',
			url: '',
		});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={handleChange}
					placeholder="Add Title"
					name="title"
					value={formState.title}
					id="title"
				/>
				<input
					type="text"
					onChange={handleChange}
					placeholder="Add Image"
					name="img"
					value={formState.img}
					id="img"
				/>
				<input
					type="text"
					onChange={handleChange}
					placeholder="Add ingredients"
					name="ingredients"
					value={formState.ingredients}
					id="ingredients"
				/>
				<input
					type="text"
					onChange={handleChange}
					placeholder="Add directions"
					name="directions"
					value={formState.directions}
					id="directions"
				/>
				<input
					type="text"
					onChange={handleChange}
					placeholder="Add Url"
					name="url"
					value={formState.url}
					id="url"
				/>
				<button type="submit">{props.food ? 'Edit' : 'Add'}</button>
			</form>
		</div>
	);
}
