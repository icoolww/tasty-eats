import React from "react";
import SearchRecipe from "./SearchRecipe";

export default function Nav() {
  return (
    <>
    <nav className="flex justify-between">
      <h1 className="text-sunset text-4xl font-bold p-10">
        Tasty Eats.
      </h1>
      <SearchRecipe />
   </nav>
    </>
  )
}