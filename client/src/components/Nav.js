import React from "react";
import SearchRecipe from "./SearchRecipe";


export default function Nav(props) {
  return (
    <>
    <div  class="static">
    <div className="bg-parchment">
    <nav className="flex justify-between">
      {/* <div className="bg-parchment"> */}
      <h1 className="text-sunset text-4xl font-bold p-10">
        <a href={"/"}>
        Tasty Eats.
        </a>
      </h1>
      <SearchRecipe {...props} />
      {/* </div> */}
   </nav>
   </div>
   </div>
    </>
  )
}