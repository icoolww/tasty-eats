import { storage } from "./firebase";
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import RecipePreview from "./components/RecipePreview";
import axios from "axios";



function App() {

  const [state, setState] = useState([]);

  console.log(state);

  useEffect(() => {
    axios
    // .get(`/api`).then(
      .get(`/api`).then((res)=>{
        const data = res.data;
      console.log('data', data);
      setState(data);
    })

  }, []);




  return (
    <div className="bg-oatmeal App">
      <Header />
      {state.map((recipe) => (
        <div>{recipe.title} - {recipe.prep_time} - {recipe.portion_size}</div>
        // <RecipePreview recipe />
      ))}
      <RecipePreview />
    </div>
  );
}



export default App;
