import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [foodsState, setFoodsState] = useState({ foods: [] });
  const URL = "http://localhost:3000/foods";

  useEffect(() => {
    async function getFoods() {
      try {
        const foods = await fetch(URL)
        .then(response => response.json());
        console.log(foods);
        setFoodsState({foods});
      } catch (error) {
        console.log(error)
      }
    }
    getFoods();
  }, []);

  return <div className="App">
    
  </div>;
}

export default App;
