import { useEffect, useState } from 'react';
import Input from './Input';

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
			<form
				className="card"
				style={{
					width: '400px',
					marginLeft: '30%',
					padding: '5%',
				}}>
				<h5>New Food Recipe</h5>
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
					<div style={{ display: 'flex', marginRight: '20%' }} key={index}>
						<input
							type="text"
							onChange={(e) => handleChange(e, index)}
							placeholder="Add ingredients"
							name="ingredients"
							value={formState.ingredients[index]}
							id="ingredients"
						/>
						<button
							style={{ width: '50px' }}
							onClick={(e) => handleAddInput(e)}
							name="ingredients"
							type="text"
							className="btn-floating btn-tiny waves-effect waves-light green">
							+
						</button>
						<br />
						<br />
						<button
							style={{ width: '50px' }}
							type="text"
							onClick={(e) => handleRemoveInput(e, index)}
							disabled={index === 0 ? true : false}
							name="ingredients"
							index={index}
							className="btn-floating btn-tiny waves-effect waves-light red">
							-
						</button>
					</div>
				))}
				<br />
				{formState.directions.map((direction, index) => (
					<div style={{ display: 'flex', marginRight: '20%' }} key={index}>
						<input
							type="text"
							onChange={(e) => handleChange(e, index)}
							placeholder="Add directions"
							name="directions"
							value={formState.directions[index]}
							id="directions"
						/>
						<button
							style={{ width: '50px' }}
							onClick={(e) => handleAddInput(e)}
							name="directions"
							type="text"
							className="btn-floating btn-tiny waves-effect waves-light green">
							+
						</button>
						<br />
						<br />
						<button
							style={{ width: '50px' }}
							type="text"
							onClick={(e) => handleRemoveInput(e, index)}
							disabled={index === 0 ? true : false}
							name="directions"
							index={index}
							className="btn-floating btn-tiny waves-effect waves-light red">
							-
						</button>
					</div>
				))}
				<Input
					type="text"
					handleChange={handleChange}
					placeholder="Add Url"
					name="url"
					value={formState.url}
					id="url"
				/>
				<button
					className="btn waves-effect waves-light"
					type="submit"
					onClick={handleSubmit}>
					<i className="material-icons right">send</i>
					{props.food ? 'Edit' : 'Add'}
				</button>
			</form>
		</div>
	);
}