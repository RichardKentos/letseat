import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Interweave from 'interweave';
import "./Recipe.css";


const Recipe = (props) => {
// const instruct = steps.map( step => <li>{step.step}</li>);
const [hover, setHover] = useState(false);



    if (props) {
        return(
            <div onMouseEnter={() => setHover(true)} 
                 onMouseLeave={() => setHover(false)} className="recipe">
                {hover ? null : <h2>{props.title}</h2>} 
                {hover ? null : <img src={props.image} alt="The recipe"/>} 
                {hover ? null : <div className="clock">
                    <FontAwesomeIcon className="recipe-icon" icon={faClock} />
                    <time>{props.minutes} minutes</time>
                </div>} 
                {hover ? null : <div className="servings">
                    <FontAwesomeIcon className="recipe-icon" icon={faUsers} />
                    <p>{props.servings} servings</p>
                </div>} 
                {hover ? null : <center>Hover over for instructions</center>} 
            
                {hover ? <div className="instructions">
                            <h3>Instructions</h3>
                            <Interweave content={props.instructions} />
                        </div> : null}
                {hover ? <a className="url" href={props.url}><b>Check out the recipe</b></a> : null}

                          
            </div>
        )
    }
    else {
        return <h1 className="loader">Loading</h1>
    }
    
}

export default Recipe;