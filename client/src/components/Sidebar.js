import React from "react";
// import { useNavigate} from "react-router-dom";
// let navigate = useNavigate();
// import CreatePage from "./components/buttons/CreatePage";
// import YourRecipes from "./components/buttons/Yourrecipes";
// import YourFavorites from "./components/buttons/YourFavorites";


export default function Sidebar(props) {

  return (
    <>
        
  <div className="sidebar h-screen sticky top-0 w-60 mr-40">
   <button onClick={() => props.onSidebarChange('createRecipe')} className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> Create Recipe</button>
   <button onClick={() => props.onSidebarChange('myRecipes')} className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out"> My Recipes</button>
   <button onClick={() => props.onSidebarChange('favorites')} className="outline outline-offset-2 outline-charcoal rounded-md p-2 m-5 hover:bg-sunset hover:text-oatmeal transition ease-in-out">  Favorites</button>
  </div>
  
    </>
  )
}