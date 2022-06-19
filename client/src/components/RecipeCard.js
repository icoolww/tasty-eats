import React from "react";
import { useState, useEffect } from "react";
import FavRecipe from "./FavRecipe";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import axios from "axios";

export default function RecipeCard(props) {
  const { id, title, prep_time, portion_size, image, directions, ingredient } =
    props.recipe || {};
  const ingredientArray = ingredient.split("\n");
  const directionsArray = directions.split("\n");
  console.log("DIRECTIONS", ingredientArray);
  // const onClick = () => {
  //   props.onRecipeClick(props.recipe);
  // };

  // empty object

  function handleFavRecipe(events) {
    console.log("props", props.recipe);

    axios.post(`http://localhost:8001/api/favorites/1`).then((res) => {
      //api call to server to then fav or unfav a recipe
      //will probs need recipe ID
      //will need logic before API call if fav or not
    });
  }

  return (
    <div className="full_recipe">
      <div className=" bg-sunset rounded-[20px]  p-10 m-5 outline outline-offset-2outline-charcoal shadow-[8px_8px_#AE574D]">
        <div className="flex justify-center">
          <div className="flex-wrap">
            <img src={image} alt="..." className="full_recipe_img" />
          </div>
        </div>
        <h1 className="text-oatmeal font-medium">{title}</h1>
        <div>
          <p className="text-oatmeal text-sm">{prep_time}</p>
          <p className="text-oatmeal text-sm pb-10">{portion_size}</p>
        </div>
        <ul>
          {ingredientArray.map((ingredientItem) => {
            return <li>{ingredientItem}</li>;
          })}
        </ul>
        <br></br>
        <ul className="text-oatmeal font-medium">
          {directionsArray.map((directionItem) => {
            return <li>{directionItem}</li>;
          })}
        </ul>
        {/* <h1 className="text-oatmeal font-medium">{directions}</h1> */}

        <FavRecipe onClick={handleFavRecipe} isFav={true} />
      </div>
    </div>
  );
}
