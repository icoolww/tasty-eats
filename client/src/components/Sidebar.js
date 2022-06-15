import React from "react";


export default function Sidebar() {
  return (
    <>
    <div className="h-full w-60">
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5"> Create Recipe</button>
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5"> Your Recipes</button>
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5"> Your Favorites</button>
   </div>
    </>
  )
}