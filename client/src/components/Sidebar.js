import React from "react";
<<<<<<< HEAD
// import { useNavigate} from "react-router-dom";

export default function Sidebar() {

  // let navigate = useNavigate();
=======
// import CreatePage from "./components/buttons/CreatePage";
// import YourRecipes from "./components/buttons/Yourrecipes";
// import YourFavorites from "./components/buttons/YourFavorites";


export default function Sidebar(props) {
>>>>>>> 2cfaba6b105e648eaa2eb2284a7bdee96f671af5

  return (
    <>
        
  <div className="sidebar w-60">
<<<<<<< HEAD
  {/* <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out" onClick={() => navigate(-1)}> Go Back</button> */}
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Create Recipe</button>
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Your Recipes</button>
   <button className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Your Favorites</button>
=======
   <button onClick={() => props.onSidebarChange('createRecipe')} className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Create Recipe</button>
   <button onClick={() => props.onSidebarChange('myRecipes')} className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Your Recipes</button>
   <button onClick={() => props.onSidebarChange('favorites')} className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Your Favorites</button>
>>>>>>> 2cfaba6b105e648eaa2eb2284a7bdee96f671af5
  </div>
  
    </>
  )
}