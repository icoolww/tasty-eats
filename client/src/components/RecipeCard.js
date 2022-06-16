import React from "react";
import { useState, useEffect } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function RecipeCard(props) {
  const { id, title, prep_time, portion_size, image, directions, ingredient } = props.recipe || {};

  const onClick = () => {
    props.onRecipeClick(props.recipe);
  };

  console.log("props", props.recipe);
  // empty object
  return (

    // <BrowserRouter>
    //   <nav>
    //   <Link to="/about">About</Link>
    //   <br />
    // </nav>
    // </BrowserRouter>

    <div onClick={onClick} className="full_recipe">
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
        <p>{ingredient}</p>
        <h1 className="text-oatmeal font-medium">{directions}</h1>
       
      </div>
    </div>
  );
}
