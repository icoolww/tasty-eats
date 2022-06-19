import axios from "axios";
import React, { useEffect } from "react"; 
import FavRecipe from "./FavRecipe";
import RecipePreview from "./RecipePreview";
import { useState } from "react";


//On load of fav page; load all fav recipes for user

//use effect to create a get request 

export default function FavoritePage(props) {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const handleDeleteFavoriteRecipe = function(){
        axios
        .delete(`http://localhost:8001/api/favorites/1`)
        //Replace 1 with the recipe ID
        .then((res) => {
          });

    };

useEffect(() => {
    axios
    .get(`http://localhost:8001/api/favorites`)
    .then((res) => {
    const data = res.data;
    setFavoriteRecipes(data)
    })
    }, []);

    const filteredFavoriteRecipes = function (){
        console.log(favoriteRecipes)
        const favoritedRecipes=favoriteRecipes.filter((recipe) => {
           return recipe.user_id === 2
           //2 is a hardcoded value to a dummy user
        })
        const uniqueFavorites = [...new Set(favoritedRecipes)] 
        return uniqueFavorites
    } 

    //still wont work if its a favrecipe list because line 26 only accesses the first recipe in the list 
    //need another for loop for favrecipes to check the recipe ID


return(
    <> 
    <div> 
    Favorite Page
    </div>

   <div>  
   <FavRecipe isFav = {true} /> 
   </div>
   { (favoriteRecipes.length) &&
       
       filteredFavoriteRecipes().map((recipe) => {
       
   return <div onClick={handleDeleteFavoriteRecipe}> <RecipePreview recipe={recipe} onRecipeClick={props.setSelectedRecipe} />
 
    </div> 

   })} </>
)

}
