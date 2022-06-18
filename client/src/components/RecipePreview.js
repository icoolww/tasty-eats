import React from "react";
// import { useState, useEffect } from "react";
// import FavRecipe from "./FavRecipe";
import axios from "axios";

// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import EditRecipe from "./EditRecipe";
import DeleteRecipe from "./DeleteRecipe";


export default function RecipePreview(props) {
  const { id, title, prep_time, portion_size, image, category_id } =
    props.recipe || {};


  //this function sets the string value based on the category id integer
  const catName = (category_id) => {
    let name = "";
    if (category_id === 1) {
      name = "Breakfast";
    } else if (category_id === 2) {
      name = "Lunch"
    } else {
      name = "Dinner"
    }
    return name;
  };

  const handleDelete = () => {

    axios.delete(`/api/recipes/${id}`)
      .then(result => {
       props.removeRecipe(id)
      })
      .catch(e => console.error(e));

  };

  const handleEdit = () => {
 
    props.onRecipeClick(props.recipe);
    props.setPageState("editRecipe");
};

  // handling single recipe card page
  const onClick = () => {
    props.onRecipeClick(props.recipe);
    console.log("clicked", props.recipe)
  };

 
  // empty object
  return (
    
      <div onClick={onClick} className="cursor-pointer recipe_container hover:scale-105 hover:bg-[#D15E51] transition ease-in-out bg-sunset rounded-[20px] w-60 p-10 m-5 outline outline-offset-2outline-charcoal shadow-[8px_8px_#AE574D]" /*data-value ={id}*/>
      
      {/* Need to change isFav with true/false to change Heart Icon */}
        <div className="flex justify-center">
          <div className="flex-wrap">
            <img src={image} alt="..." 
            className="recipe_img" 
            />
          </div>
        </div>
        <h1 className="text-oatmeal font-medium">{title}</h1>
        <p className="text-[#FCD6A8] text-sm pb-5">{catName(category_id)}</p>

      <div className="recipe_details flex">
      <img className="icon" src="../icons/stopwatch.png" alt=""/>
     <p className="text-oatmeal text-sm">{prep_time}</p>
      </div>
          
          
          <div className="flex">
          <img className="icon" src="../icons/user.png" alt="" />
       <p className="text-oatmeal text-sm ">{portion_size}</p>
      
       
        </div>
        {props.isMyRecipe && (
        <div className="pt-10">
          <EditRecipe onClick={handleEdit} />
          <DeleteRecipe onClick={handleDelete} />
          
          </div>)}
</div>
  );
}

