import React from "react";
import { useState, useEffect } from "react";




export default function RecipePreview(props) {

  // const [state, setState] = useState([]);
  // console.log("state1", state)
  // empty array

  const { title, prep_time, portion_size } = props.recipe || {};

  console.log("props", props)
  // empty object


  return (
    <>
    <div className="container mx-auto bg-sunset rounded-[20px] w-60 p-10 outline outline-offset-2outline-charcoal shadow-[8px_8px_#AE574D]">
    <div className="flex flex-wrap justify-center">
  <div className="w-full">
    <img src="https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/73/31/5/IPvKrcSrR36q0IXlP5wn_DSC02679.jpg" alt="..." className="recipe_img" />
  </div>
</div>
  <h1 className="text-oatmeal font-medium pt-5">Recipe Title</h1>
  {/* <h1 className="text-oatmeal font-medium pt-5">{title}</h1> */}


    <div>
      
      {title} - {prep_time} - {portion_size}
    
    
  <p className="text-oatmeal text-sm pb-5">{title}</p>
  <p className="text-oatmeal text-sm">{prep_time}</p>
  <p className="text-oatmeal text-sm pb-10">portion size</p>

  </div>

  {/* <p className="text-oatmeal text-sm pb-5">category</p>
  <p className="text-oatmeal text-sm">prep time</p>
  <p className="text-oatmeal text-sm pb-10">portion size</p> */}
</div>
    </>
  )
  }