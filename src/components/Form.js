import { useEffect, useState } from 'react';
import Input from '../components/Input';
import { StyledTitle } from '../styles';
import ImageIcon from '@material-ui/icons/Image';
import { uploadPostImage } from '../services/postImage';

export default function Form(props)
{

	const [ message, setMessage ] = useState('');

	const [ formState, setFormState ] = useState({
		title: '',
		img: undefined,
		ingredients: [ '' ],
		directions: [ '' ],
		url: '',
	});


	useEffect(() =>
	{
		if (props.food)
		{
			setFormState(props.food);
		}
	}, [ props.foods ]);


	function handleChange(event, index = null)
	{
		if (index !== null)
		{
			const arr = [ ...formState[ event.target.name ] ];
			arr[ index ] = event.target.value;
			setFormState((prevState) => ({
				...prevState,
				[ event.target.name ]: arr,
			}));
		} else
		{
			setFormState((prevState) => ({
				...prevState,
				[ event.target.name ]: event.target.value,
			}));
		}
	}

	function handleImageFile(e)
	{
		const file = e.target.files[ 0 ];
		setFormState((prevState) => ({ ...prevState, img: file }));
		console.log(formState.img)
	}

	async function handleSubmit(event)
	{
		event.preventDefault();
		if (props.food)
		{
			props.handleUpdate(formState, props.food.id);
		} else
		{
			const { title, img, url, ingredients, directions } = formState;
			if (!title || !img || !url || !ingredients[ 0 ] || !directions[ 0 ])
			{
				setMessage('Enter all fields');
				// 
			} else
			{

				let imageData;

				if (formState.img)
				{
					const data = new FormData();
					data.append("file", formState.img);
					data.append("upload_preset", "ljxjnqss");
					imageData = await uploadPostImage(data);
					setFormState((prevState) => ({
						...prevState,
						img: imageData.data.secure_url,
					}));
				}

				props.handleAdd(formState);

				setFormState({
					title: '',
					img: '',
					ingredients: [ '' ],
					directions: [ '' ],
					url: '',
				});
			}
		}
	}
	const handleAddInput = (e) =>
	{
		e.preventDefault();
		setFormState((prevState) => ({
			...prevState,
			[ e.target.name ]: [ ...formState[ e.target.name ], '' ],
		}));
	};
	const handleRemoveInput = (e, index) =>
	{
		e.preventDefault();
		setFormState((prevState) => ({
			...prevState,
			[ e.target.name ]: [ ...formState[ e.target.name ] ].filter(
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
							<ImageIcon /></span>
						<input
							type="file"
							name="img"
							id="img"
							onChange={handleImageFile}
						/>
					</div>
					<div className="file-path-wrapper">
						<input className="file-path validate" type="text" />
					</div>
				</div>
				{/* <Input
					type="text"
					handleChange={handleChange}
					placeholder="Add Image"
					name="img"
					value={formState.img}
					id="img"
				/> */}
				{formState.ingredients.map((ingredient, index) => (
					<div style={{ display: 'flex', marginRight: '20%' }} key={index}>
						<input
							type="text"
							onChange={(e) => handleChange(e, index)}
							placeholder="Add ingredients"
							name="ingredients"
							value={formState.ingredients[ index ]}
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
							value={formState.directions[ index ]}
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
