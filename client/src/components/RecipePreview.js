import React from "react";
import DeleteRecipe from "./DeleteRecipe";
import axios from "axios";

export default function RecipePreview(props) {
  const { id, title, prep_time, portion_size, image } = props.recipe || {};
  
  const handleDelete = (id) => {
    axios.delete(`/api/recipes/${id}`)
      .then(result => {
        
      })
      .catch(err => console.error(err));
  };
  // empty object
  return (
    <div className="recipe_container">
      <div className=" hover:scale-105 hover:bg-[#D15E51] transition ease-in-out bg-sunset rounded-[20px] w-60 p-10 m-5 outline outline-offset-2outline-charcoal shadow-[8px_8px_#AE574D]">
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
