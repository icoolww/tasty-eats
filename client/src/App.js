import { storage } from "./firebase";
import axios from "axios";
import React, { Component } from "react";
import { useState, useEffect } from "react";
// import {BrowserRouter, Link} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import RecipePreview from "./components/RecipePreview";
import CreateRecipe from "./components/CreateRecipe";
import Breakfast from "./components/Breakfast";
import Sidebar from "./components/Sidebar";
import SearchRecipe from "./components/SearchRecipe";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [state, setState] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  useEffect(() => {
    axios
      // .get(`/api`).then(
      .get(`/api`)
      .then((res) => {
        const data = res.data;
      // console.log('data', res.data);
      setState(data);
      
    })

  }, []);

  const filterRecipe = () => {
    if (searchValue === "") return state;
    return state.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filteredRecipe = filterRecipe();
  // const updateRecipe = 
  // call server endpoint to get the data with search value

  // console.log("title", a.title)
  // console.log("time", recipe.prep_time)

  // if (selectedRecipe) {
  //   return <RecipeCard recipe={selectedRecipe} />
  // }

  return (
    <div className="bg-oatmeal App">
      <Header onSearchValueChanged={setSearchValue} />
      
    

      <div className="flex flex-wrap">
        <Sidebar />

        {selectedRecipe ? <RecipeCard recipe={selectedRecipe} /> : filteredRecipe.map((recipe) => (
          // <div>{recipe.title} - {recipe.prep_time} - {recipe.portion_size}</div>
          <RecipePreview recipe={recipe} onRecipeClick={setSelectedRecipe} />
          // onClick={props.onClick}
        ))}

          {/* <nav>
            <Link to="/about">About</Link>
            <br />
            <Link to="/">Home</Link>
            <br />
            <Link to="/recipe">Recipe</Link>
            <br />
            <Link to="/favorites">Favorites</Link>
            <br />
          </nav> */}


      </div>
    </div>
  );
}

export default App;
