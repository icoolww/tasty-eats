import { storage } from "./firebase";
import axios from "axios";
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import RecipePreview from "./components/RecipePreview";
import CreateRecipe from "./components/CreateRecipe";
import Breakfast from "./components/Breakfast";
import Sidebar from "./components/Sidebar";

function App() {

  const [state, setState] = useState([]);

  console.log("state", state);
  // console.log("portion", state[1].portion_size)

  // const recipeArray = state.map((recipe) => ({
  //   title = {recipe.title}

  // }));
  
  
  // console.log("recipe array", recipeArray)


  useEffect(() => {
    axios
    // .get(`/api`).then(
      .get(`/api`).then((res)=>{
        const data = res.data;
      console.log('data', data);
      setState(data);
    })

  }, []);

  // const updateRecipe = 
  // call server endpoint to get the data with search value

  // console.log("title", a.title)
  // console.log("time", recipe.prep_time)

return (
    <div className="bg-oatmeal App">
      <Header />
      

    <div className="flex flex-wrap">
    <Sidebar />
      {state.map((recipe) => (
        // <div>{recipe.title} - {recipe.prep_time} - {recipe.portion_size}</div>
        <RecipePreview recipe={recipe} />
      ))}
      
      </div>
      <CreateRecipe />
    </div>
  );
}



export default App;
