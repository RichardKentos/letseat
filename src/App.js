import './App.css';
import logo from "../src/logo.png"
import Search from "./components/Search/Search";
import Recipes from "./components/Recipes/Recipes";
import React, {useEffect, useState} from "react";


function App() {
  let [scroll, setScroll] = useState(0);
  const [recipesList, setRecipesList] = useState([]);

  const addProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}`;
    setScroll(scrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll",addProgress);
    return () => {
      window.removeEventListener("scroll",addProgress);
    } 
    
  }, [])

const [search, setSearch] = useState("");
const filterSearch = (e) => {
    setSearch(e.target.value)
}
const filteredRecipes = recipesList.filter(item => {
  return item.title.toLowerCase().includes(search.toLowerCase());
})

  return (
    <div className="App">
      <a href="index.html"><img className="logo" src={logo} alt="Logo"/></a>
      <progress value={scroll} max="100"></progress> 
      <Search list={recipesList} filter={filterSearch} />
      <Recipes  list={filteredRecipes ? filteredRecipes : recipesList} setList={setRecipesList} />
    </div>
  );
}

export default App;
