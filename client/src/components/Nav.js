import React from "react";
import SearchRecipe from "./SearchRecipe";

export default function Nav(props) {
  return (
    <>
    <nav className="flex justify-between">
      <h1 className="text-sunset text-4xl font-bold p-10">
        <a href={"/"}>
        Tasty Eats.
        </a>
      </h1>
      <SearchRecipe {...props} />
   </nav>
    </>
  )
}