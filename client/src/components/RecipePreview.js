import React from "react";
import { useState, useEffect } from "react";
import FavRecipe from "./FavRecipe";

export default function RecipePreview(props) {
  const { title, prep_time, portion_size, image } = props.recipe || {};

  function handleFavRecipe () {

  //api call to server to then fav or unfav a recipe
  //will probs need recipe ID
  //will need logic before API call if fav or not

  };


  console.log("props", props.recipe);
  // empty object
  return (
    <div className="">
      <div className=" bg-sunset rounded-[20px] w-60 p-10 m-5 outline outline-offset-2outline-charcoal shadow-[8px_8px_#AE574D]">
        <FavRecipe onClick={handleFavRecipe} isFav = {true} /> 
        {/* Need to change isFav with true/false to change Heart Icon */}
        <div className="flex justify-center">
          <div className="flex-wrap">
            <img src={image} alt="..." className="recipe_img" />
          </div>
        </div>
        <h1 className="text-oatmeal font-medium">{title}</h1>
        <div>
          <p className="text-oatmeal text-sm">{prep_time}</p>
          <p className="text-oatmeal text-sm pb-10">{portion_size}</p>
        </div>
      </div>
    </div>
  );
}


