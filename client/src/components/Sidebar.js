import React from "react";
// import { useNavigate} from "react-router-dom";

export default function Sidebar() {

  // let navigate = useNavigate();

  return (
    <>
        
  <div className="sidebar w-60">
  {/* <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out" onClick={() => navigate(-1)}> Go Back</button> */}
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Create Recipe</button>
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Your Recipes</button>
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Your Favorites</button>
  </div>
  
    </>
  )
}