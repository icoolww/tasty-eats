import { storage } from "./firebase";
import axios from "axios";
import React, { Component } from 'react';
import { useState, useEffect } from "react";
// import {BrowserRouter, Link} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import RecipePreview from "./components/RecipePreview";
import CreateRecipe from "./components/CreateRecipe";
import Breakfast from "./components/Breakfast";
import Sidebar from "./components/Sidebar";
import SearchRecipe from "./components/SearchRecipe";

function App() {

  const [state, setState] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
    axios
    // .get(`/api`).then(
      .get(`/api`).then((res)=>{
        const data = res.data;
      // console.log('data', res.data);
      setState(data);
      
    })

  }, []);

  const filterRecipe = () => {
    if (searchValue === '') return state;
    return state.filter((recipe) => recipe.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const filteredRecipe = filterRecipe();
  // const updateRecipe = 
  // call server endpoint to get the data with search value

  // console.log("title", a.title)
  // console.log("time", recipe.prep_time)

return (
    <div className="bg-oatmeal App">
      <Header onSearchValueChanged={setSearchValue} />
      
      
    <div className="flex flex-wrap">
    
      {filteredRecipe.map((recipe) => (
        // <div>{recipe.title} - {recipe.prep_time} - {recipe.portion_size}</div>
        <RecipePreview recipe={recipe} />
      ))}

        {/* <BrowserRouter>
          <nav>
            <Link to="/about">About</Link><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/products">Products</Link><br/>
          </nav>
        </BrowserRouter> */}


        {/* <div className="flex flex-wrap">
      {state.filter((val) => {
        console.log("val", val)
        // list the recipes in object
        if (search == "") {
          return val;
        } else if (val.title.toLowerCase().incudes(search.toLowerCase())) {
          return val;
        }
      }).map((val) => {
          return (
        <SearchRecipe onChange={event => {setSearch(event.target.value)}} />
          );
      })}
          
        </div> */}
        <CreateRecipe />
      </div>
    </div>
  );
}



export default App;
