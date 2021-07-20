import { useEffect, useState } from 'react';
import Input from './Input';
import KitchenIcon from '@material-ui/icons/Kitchen';
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export default function Form(props) {
	const [formState, setFormState] = useState({
		title: '',
		img: '',
		ingredients: [''],
		directions: [''],
		url: '',
	});

	useEffect(() => {
		if (props.foods) {
			setFormState(props.foods);
		}
	}, [props.foods]);

	function handleChange(event, index = null) {
		if (index !== null) {
			const arr = [...formState[event.target.name]];
			arr[index] = event.target.value;
			setFormState((prevState) => ({
				...prevState,
				[event.target.name]: arr,
			}));
		} else {
			setFormState((prevState) => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(formState);
		console.log(event.target);
		props.handleAdd(formState);
		setFormState({
			title: '',
			img: '',
			ingredients: [''],
			directions: [''],
			url: '',
		});
	}

	const handleAddInput = (e) => {
		e.preventDefault();
		setFormState((prevState) => ({
			...prevState,
			[e.target.name]: [...formState[e.target.name], ''],
		}));
	};

	const handleRemoveInput = (e, index) => {
		e.preventDefault();
		setFormState((prevState) => ({
			...prevState,
			[e.target.name]: [...formState[e.target.name]].filter(
				(item, id) => id !== index
			),
		}));
	};

	return (

		<div>
			<form>
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

				{formState.ingredients.map((ingredient, index) => (
					<Container key={index}>
						<input
							type="text"
							onChange={(e) => handleChange(e, index)}
							placeholder="Add ingredients"
							name="ingredients"
							value={formState.ingredients[index]}
							id="ingredients"
						/>
						<button
							name="ingredients"
							type="text"
							onClick={(e) => handleAddInput(e)}
							className="btn-floating btn-large waves-effect waves-light green" >
							<i class="material-icons">add</i>
						</button>
						<button
							name="ingredients"
							type="text"
							index={index}
							onClick={(e) => handleRemoveInput(e, index)}
							className="btn-floating btn-large waves-effect waves-light red" >
							<i class="material-icons">remove</i>
						</button>
					</Container>
				))}

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
				<input
					type="submit"
					onClick={handleSubmit}
					value={props.food ? 'Edit' : 'Add'}
				/>
			</form>
		</div>
	);
}
