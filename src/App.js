import { useState, useEffect } from 'react';
import './App.css';
import Index from './components/Index';

function App() {
	const [foodsState, setFoodsState] = useState({ foods: [] });
	const URL = 'https://persian-food-backend.herokuapp.com/foods';

	useEffect(() => {
		async function getFoods() {
			try {
				const foods = await fetch(URL).then((response) => response.json());
				setFoodsState({ foods });
			} catch (error) {
				console.log(error);
			}
		}
		getFoods();
	}, []);

	async function handleAdd(formInputs) {
		try {
			const foods = await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'Application/json',
				},
				body: JSON.stringify(formInputs),
			}).then((res) => res.json());

			setFoodsState({ foods });
		} catch (error) {
			console.log(error);
		}
	}

	async function handleDelete(foodId) {
		try {
			const foods = await fetch(`${URL}/${foodId}`, {
				method: 'DELETE',
			}).then((res) => res.json());
			setFoodsState({ foods });
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="App">
			<Index
				foods={foodsState.foods}
				handleDelete={handleDelete}
				handleAdd={handleAdd}
			/>
		</div>
	);
}

export default App;
