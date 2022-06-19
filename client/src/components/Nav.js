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
            className="w-20 bg-sand hover:bg-[#FCD6A8] transition ease-in-out text-burgundy rounded-[20px] p-2 text-sm mt-10 mr-2"
          >
            <img className="category-icon" src="../icons/english-breakfast.png" alt=""></img>
            {" "}
            Breakfast
          </button>
          <button
            onClick={() => props.setMealType("Lunch")}
            className="w-20 bg-sand hover:bg-[#FCD6A8] transition ease-in-out text-burgundy rounded-[20px] p-2 text-sm mt-10 mr-2"
          >
            <img className="category-icon" src="../icons/lunch-box.png" alt=""></img>
            {" "}
            Lunch
          </button>
          <button
            onClick={() => props.setMealType("Dinner")}
            className="w-20 bg-sand hover:bg-[#FCD6A8] transition ease-in-out text-burgundy rounded-[20px] p-2 text-sm mt-10"
          >
            <img className="category-icon" src="../icons/dinner.png" alt=""></img>
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