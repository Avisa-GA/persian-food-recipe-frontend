import { useEffect, useState } from 'react';
import Input from '../components/Input';
import { StyledTitle } from '../styles';
import ImageIcon from '@material-ui/icons/Image';
import { uploadPostImage } from '../services/postImage';

export default function Form(props) {

	// For notify users about all input must be fill
	const [message, setMessage] = useState('');

    // Set a filename to give a value for input type file for uploading image
	const [fileName, setFileName] = useState('');

    // to get an image secure url from cloudinary
	const [imgFromCloud, setImgFromCloud] = useState({
		data: { secure_url: '' },
	});

    // Define a form state and give a default value
	const [formState, setFormState] = useState({
		title: '',
		ingredients: [''],
		directions: [''],
		url: '',
	});
   
	// call useEffect to run the page 
	useEffect(() => {

		// only when food object is not null or undefined
		if (props.food) {
			setFormState(props.food);
			setImgFromCloud({ data: { secure_url: props.food.img } });
		}
		// passing here help us to reload the page and have a value
	}, [props.foods]);


	// * handleChange function pass to each input for update their data state
	function handleChange(event, index = null) {
// ! ******************************************************
		/* because We have two array elements , we check if index of those Array element
		not null if not 👇
		*/
		if (index !== null) {
			// call array from formState
			const arr = [...formState[event.target.name]];
			// pass each value to it's index position
			arr[index] = event.target.value;
			// update the formState
			setFormState((prevState) => ({
				...prevState,
				[event.target.name]: arr,
			}));

		} else {

			// if index === null, set the formState
			setFormState((prevState) => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
		}
	}
// ! **************** This one call in input type file for uploading image
	async function handleImageFile(e) {
		const file = e.target.files[0];
		setFileName(file.name);
		if (file) {
			let imageData;
			const data = new FormData();
			data.append('file', file);
			data.append('upload_preset', 'ljxjnqss');
			imageData = await uploadPostImage(data);
			setImgFromCloud(imageData);
		}
	}
// * ********************************************** Handle Submit for Add
	async function handleSubmit(event) {
		event.preventDefault();
		// if condition not null we can do update
		if (props.food) {
			props.handleUpdate(
				// specfically add img to formState
				{ ...formState, img: imgFromCloud.data.secure_url },
				props.food.id
			);
		} else {

			const { title, url, ingredients, directions } = formState;
            // Add a condition that from must be filled by user 
			if (
				!title ||
				!imgFromCloud ||
				!url ||
				!ingredients[0] ||
				!directions[0]
			) {
				// otherwise we send a message to user
				setMessage('Enter all fields');
			} else {
				// if food object is null it means we need to create a food recipe
				props.handleAdd({ ...formState, img: imgFromCloud.data.secure_url });
				// after creating a form initilize each to empty string and Array
				setFormState({
					title: '',
					ingredients: [''],
					directions: [''],
					url: '',
				});
				setImgFromCloud({ data: { secure_url: '' } });
				setFileName('');
			}
		}
	}

	// ! ************** This function for add more element to Array Ingridients & Directions
	const handleAddInput = (e) => {
		e.preventDefault();
		setFormState((prevState) => ({
			...prevState,
			[e.target.name]: [...formState[e.target.name], ''],
		}));
	};

	// ? ************ This function for remove element from an Array Ingridients and Directions
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
					maxWidth: '600px',
					margin: 'auto',
					marginTop: '5%',
					padding: '5%',
				}}>
				<h5 style={{ color: '#004d40' }}>
					{props.food ? 'Edit Recipe' : 'New Food Recipe'}
				</h5>
				{message && (
					<StyledTitle style={{ color: 'red' }}>{message}</StyledTitle>
				)}
				<Input
					type="text"
					handleChange={handleChange}
					placeholder="Add Title"
					name="title"
					value={formState.title}
					id="title"
				/>
				{/* Add Image here ************************* */}
				<div className="file-field input-field">
					<div className="btn teal darken-3">
						<span style={{ fontSize: 30 }}>
							<ImageIcon />
						</span>
						<input type="file" name="img" id="img" onChange={handleImageFile} />
					</div>
					<div className="file-path-wrapper">
						<input
							className="file-path validate"
							type="text"
							value={
								fileName
									? fileName
									: props.food
									? imgFromCloud.data.secure_url
									: ''
							}
							onChange={() => {}}
						/>
					</div>
				</div>

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
							type="button"
							className="btn-floating btn-tiny waves-effect waves-light  teal darken-3">
							+
						</button>
						<br />
						<br />
						<button
							style={{ width: '50px' }}
							type="button"
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
							type="button"
							className="btn-floating btn-tiny waves-effect waves-light  teal darken-3">
							+
						</button>
						<br />
						<br />
						<button
							style={{ width: '50px' }}
							type="button"
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
					className="btn waves-effect waves-light teal darken-3"
					type="submit"
					onClick={handleSubmit}>
					<i className="material-icons right">send</i>
					{props.food ? 'Edit' : 'Add'}
				</button>
			</form>
		</div>
	);
}
