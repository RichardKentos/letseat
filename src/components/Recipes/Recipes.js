import axios from "axios";
import React, {useEffect, useState} from "react";
import Recipe from "../Recipe/Recipe";
import "./Recipes.css"

const Recipes = () => {
const [recipesList, setRecipesList] = useState([])
    
const url = "https://api.spoonacular.com/recipes/random?number=12&apiKey=c88d7725b2454522a6793db9d0159890";

    useEffect(() => {
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => setRecipesList(data.recipes))
    
      }, []);


if (recipesList.length !== 0) {

    const oneRecipe = recipesList.map( (recipe,i) => {
        return <Recipe className="recipe"
             title={recipesList[i].title}
             image={recipesList[i].image}
             minutes={recipesList[i].readyInMinutes}
             servings={recipesList[i].servings} />
    })

    return(
        <div className="recipes">
                {oneRecipe}
        </div>
    )
}
else {
    return(
        <h1>Loading</h1>
    )
} 
}

export default Recipes;