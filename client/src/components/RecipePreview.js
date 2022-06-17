import React from "react";
import { useState, useEffect } from "react";
import FavRecipe from "./FavRecipe";
import axios from "axios";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function RecipePreview(props) {
  const { title, prep_time, portion_size, image, id } = props.recipe || {};

  const onClick = () => {
    props.onRecipeClick(props.recipe);
    console.log("clicked", props.recipe)
  };

 
  // empty object
  return (
    <div onClick={onClick} className="recipe_container" data-value ={id}  >
      <div className=" hover:scale-105 hover:bg-[#D15E51] transition ease-in-out bg-sunset rounded-[20px] w-60 p-10 m-5 outline outline-offset-2outline-charcoal shadow-[8px_8px_#AE574D]">
      
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


