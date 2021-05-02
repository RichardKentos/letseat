import React, {useEffect, useState} from "react";
import Recipe from "../Recipe/Recipe";
import "./Recipes.css";

const Recipes = (props) => {

const url = "https://api.spoonacular.com/recipes/random?number=100&apiKey=c88d7725b2454522a6793db9d0159890";

    useEffect(() => {
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => props.setList(data.recipes))
    
      }, []);


if (props.list.length !== 0) {

    const oneRecipe = props.list.map( (recipe,i) => {
        return <Recipe className="recipe"
             title={props.list[i].title}
             image={props.list[i].image}
             minutes={props.list[i].readyInMinutes}
             servings={props.list[i].servings} 
             url={props.list[i].sourceUrl}
             instructions={props.list[i].instructions} />
    })

    return(
        <div className="recipes">
                {oneRecipe}
        </div>
    )
}
else {
    return(
        <h1 className="loader">Loading</h1>
    )
} 
}

export default Recipes;