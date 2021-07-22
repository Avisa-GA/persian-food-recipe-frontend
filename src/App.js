import { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import { StyledLayout } from './styles';
import Header from './components/Header';
import Index from './pages/Index';
import Show from './pages/Show';
import About from './pages/About';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
	const [foodsState, setFoodsState] = useState({ foods: [] });
	const URL = 'https://persian-food-backend.herokuapp.com/foods';

	// ? UseEffect to Show all foods
	useEffect(() => {
		getFoods();
	}, []);
// * ******************************* Index
	async function getFoods() {
		try {
			const foods = await fetch(URL).then((response) => response.json());
			setFoodsState({ foods });
		} catch (error) {
			console.log(error);
		}
	}
// * ************************************ Create
	async function handleAdd(formInputs) {
		try {
			const foods = await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'Application/json',
				},
				body: JSON.stringify(formInputs),
			}).then((res) => res.json());
			console.log(foods);
			setFoodsState({ foods });
		} catch (error) {
			console.log(error);
		}
	}
// * ******************************************* Update
	async function handleUpdate(formInputs, id) {
		try {
			const { title, ingredients, img, directions, url } = formInputs;
			const foods = await fetch(`${URL}/${id}`, {
				method: 'PUT',
				headers: { 'Content-type': 'Application/json' },
				body: JSON.stringify({ title, ingredients, img, directions, url }),
			}).then((response) => response.json());
			
			setFoodsState({ foods });
		} catch (err) {
			console.log(err);
		}
	}
// ! ************************************************ Delete
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
 // ? ************************************************* Search
	const handleSearch = (str) => {
		let searchResult = foodsState.foods.filter((food) =>
			food.title.toLowerCase().includes(str.toLowerCase())
		);
		setFoodsState({ foods: [...searchResult] });
	};

	return (
		<StyledLayout>
			<Header handleSearch={handleSearch} getFoods={getFoods} />
			<Switch>
				<Route exact path="/">
					<Index
						URL={URL}
						foods={foodsState.foods}
						handleDelete={handleDelete}
						handleAdd={handleAdd}
					/>
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route
					path="/:id"
					render={(rp) => (
						<Show
							foods={foodsState.foods}
							{...rp}
							handleUpdate={handleUpdate}
						/>
					)}
				/>
			</Switch>
			<Footer />
		</StyledLayout>
	);
}

export default App;
