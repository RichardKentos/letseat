import React, {useEffect} from "react";
import "./Search.css";

const Search = (props) => {

const filterTags = (e) => {
    const filtered = props.recipesList.filter((item) => {
        return item.ingredients.includes(e.target.innerText);
    })
    props.getRecipes(filtered);
    console.log(filtered);
}

const filterSearch = (e) => {
    
    console.log(e.target.value)
}



    return(
        <div className="tc search">
            <input onChange={filterSearch} placeholder="Search for recipes or ingredients" className="w-50 h3 br4 pl5" type="text"/>
            <div className="tags">
                <p>Popular tags</p>
                <a onClick={filterTags} href="#">meat</a>
                <a onClick={filterTags} href="#">pizza</a>
                <a onClick={filterTags} href="#">dessert</a>
                <a onClick={filterTags} href="#">pasta   </a>
            </div>
        </div>
    )
}

export default Search;