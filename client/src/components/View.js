import React from "react";

export default function ViewRecipe(props) {

 return (
    <>
  <button className="bg-oatmeal text-sunset mt-5 pt-2 pb-2 pl-5 pr-5
  rounded-full" onClick={props.onClick}>View Recipe</button>
   </>
  )
}