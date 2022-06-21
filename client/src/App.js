import { storage } from "./firebase";
import axios from "axios";
import React, { Component } from "react";
import { useState, useEffect } from "react";
// import {BrowserRouter, Link} from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import RecipePreview from "./components/RecipePreview";
import CreateRecipe from "./components/CreateRecipe";

import Sidebar from "./components/Sidebar";
// import SearchRecipe from "./components/SearchRecipe";
import RecipeCard from "./components/RecipeCard";
import FavoritePage from "./components/FavoritePage";

function App() {
  const [state, setState] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [pageState, setPageState] = useState("initial");
  const [MealType, setMealType] = useState("")

  useEffect(() => {
    axios.get(`/api`).then((res) => {
      const data = res.data;
      setState(data);
    });
  }, []);

const removeRecipe = (id) => {
  const newState = [...state]
  setState(newState.filter(recipe => recipe.id !== id));
}

// const editRecipe = (id) => {
//   setPageState("editRecipe")

// }



  const filterRecipe = () => {
    console.log(state)
    // if (searchValue === "") return state;
    return state.filter((recipe) => {
      if (MealType !== "") {
        if (MealType === "Breakfast" && recipe.category_id !== 1)
        return false
        if (MealType === "Lunch" && recipe.category_id !== 2)
        return false
        if (MealType === "Dinner" && recipe.category_id !== 3)
        return false
      }
      return recipe.title.toLowerCase().includes(searchValue.toLowerCase())
      
    }
      
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

  const content = () => {
    if (pageState === 'editRecipe') return <CreateRecipe recipe={selectedRecipe} />;
    if (selectedRecipe) return <RecipeCard setPageState={setPageState} recipe={selectedRecipe} />;
    if (pageState === 'createRecipe') return <CreateRecipe setPageState={setPageState} />;
    if (pageState === 'myRecipes') {

      // handling my recipes button
      return filteredRecipe.filter((recipe) => recipe.user_id === 1).map((recipe) => (
        <RecipePreview removeRecipe={removeRecipe}  setPageState={setPageState} recipe={recipe} onRecipeClick={setSelectedRecipe} isMyRecipe={true} />
      ));
    }

    // handling favorite page
    if (pageState === "favorites") {
      return (
        <FavoritePage
          filteredRecipe={filteredRecipe}
          onRecipeClick={setSelectedRecipe}
        />
      );
    }
    return filteredRecipe.map((recipe) => (
      <RecipePreview
        setPageState={setPageState}
        removeRecipe={removeRecipe}
        recipe={recipe}
        onRecipeClick={setSelectedRecipe}
        // isMyRecipe={recipe.user_id === 1}
      />
    ));
  };

  const onSidebarChange = (value) => {
    setSelectedRecipe(null);
    setPageState(value);
  };

  return (
    <div className="bg-oatmeal App">
      <Header onSearchValueChanged={setSearchValue} setMealType={setMealType} />

      {/* <div className="flex flex-wrap"> */}
      <div class="homepage">
        <div class="sidebar">
          <Sidebar onSidebarChange={onSidebarChange} />
        </div>

        <div class="content">
          <div className="flex flex-wrap flex-1">{content()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
