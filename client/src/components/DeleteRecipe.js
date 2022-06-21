import React from "react";


export default function DeleteRecipe(props) {
  return (
      <button className="bg-oatmeal text-sunset pt-2 pb-2 pl-5 pr-5 mb-10
       rounded-full" onClick={props.onClick}>Delete</button>
   
  )
}
