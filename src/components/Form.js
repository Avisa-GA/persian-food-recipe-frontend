import { useEffect, useState } from 'react';
import Input from './Input';
import KitchenIcon from '@material-ui/icons/Kitchen';

export default function Form(props) {
	const [formState, setFormState] = useState({
		title: '',
		img: '',
		ingredients: [],
		directions: [],
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
		<div className="card" style={{
			width: "400px"}}>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					handleChange={handleChange}
					placeholder="Add Title"
					name="title"
					value={formState.title}
					id="title"
				/>
				<Input
					type="text"
					handleChange={handleChange}
					placeholder="Add Image"
					name="img"
					value={formState.img}
					id="img"
				/>
				<Input
					type="text"
					handleChange={handleChange}
					placeholder="Add ingredients"
					name="ingredients"
					value={formState.ingredients}
					id="ingredients"
				/>
				<Input
					type="text"
					handleChange={handleChange}
					placeholder="Add directions"
					name="directions"
					value={formState.directions}
					id="directions"
				/>
				<Input
					type="text"
					handleChange={handleChange}
					placeholder="Add Url"
					name="url"
					value={formState.url}
					id="url"
				/>
				<input type="submit" value={ props.food ? 'Edit' : 'Add' } />
			</form>
		</div>
	);
}
