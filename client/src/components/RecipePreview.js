import React from "react";
import { useState, useEffect } from "react";
import FavRecipe from "./FavRecipe";
import axios from "axios";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import EditRecipe from "./EditRecipe";
import DeleteRecipe from "./DeleteRecipe";

export default function RecipePreview(props) {
  const { title, prep_time, portion_size, image, category_id } =
    props.recipe || {};

  //this function sets the string value based on the category id integer
  const catName = (category_id) => {
    let name = "";
    if (category_id === 1) {
      name = "breakfast";
    } else if (category_id === 2) {
      name = "lunch";
    } else {
      name = "dinner";
    }
    return name;
  };

  const onClick = () => {
    props.onRecipeClick(props.recipe);
  };

  function handleFavRecipe() {
    //api call to server to then fav or unfav a recipe
    //will probs need recipe ID
    //will need logic before API call if fav or not
  }
  // empty object
  return (
    <div
      onClick={onClick}
      className="m-8 p-5 hover:scale-105 hover:bg-[#D15E51] transition ease-in-out bg-sunset rounded-[20px] w-60 outline outline-offset-2outline-charcoal shadow-[8px_8px_#AE574D]"
    >
      <FavRecipe onClick={handleFavRecipe} isFav={true} />
      {/* Need to change isFav with true/false to change Heart Icon */}
      <div className="flex justify-center">
        <div className="flex-wrap">
          <img src={image} alt="..." className="recipe_img" />
        </div>
      </div>
      <h1 className="text-oatmeal font-medium">{title}</h1>
      <p>{catName(category_id)}</p>

      <p className="text-oatmeal text-sm">{prep_time}</p>
      <p className="text-oatmeal text-sm ">{portion_size}</p>
      {props.isMyRecipe && (
        <>
          <EditRecipe />
          <DeleteRecipe />
        </>
      )}
    </div>
  );
}
