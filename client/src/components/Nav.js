import React from "react";
import SearchRecipe from "./SearchRecipe";


export default function Nav(props) {
  return (
    <>
    <div  className="static">
    <div className="bg-parchment">
    <nav className="flex justify-between">
      {/* <div className="bg-parchment"> */}
      <h1 className="text-sunset text-4xl font-bold p-10">
        <a href={"/"}>
        Recipe Book.
        </a>
      </h1>
      <div className="new-set-of-styles" >
        
      <button
            onClick={() => props.setMealType("Breakfast")}
            className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"
          >
            {" "}
            Breakfast
          </button>
          <button
            onClick={() => props.setMealType("Lunch")}
            className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"
          >
            {" "}
            Lunch
          </button>
          <button
            onClick={() => props.setMealType("Dinner")}
            className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"
          >
            {" "}
            Dinner
          </button>
          </div>
      <SearchRecipe {...props} />
      {/* </div> */}
   </nav>
   </div>
   </div>
    </>
  )
}