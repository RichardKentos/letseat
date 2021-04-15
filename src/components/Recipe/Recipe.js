import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Interweave from 'interweave';
import "./Recipe.css";


const Recipe = (props) => {
// const instruct = steps.map( step => <li>{step.step}</li>);

    if (props) {
        return(
            <div className="recipe">
                <h2>{props.title}</h2>
                <img src={props.image} alt="Recipe"/>
                <div className="clock">
                    <FontAwesomeIcon className="recipe-icon" icon={faClock} />
                    <time>{props.minutes} minutes</time>
                </div>
                <div className="servings">
                    <FontAwesomeIcon className="recipe-icon" icon={faUsers} />
                    <p>{props.servings} servings</p>
                </div>
                
                
                {/* <Interweave content={props.info.summary} /> */}
          
                    {/* <ul>
                        {instruct}
                    </ul> */}
        
                    {/* <li>{props.info.analyzedInstructions.steps[1]}</li>
                    <li>{props.info.analyzedInstructions.steps[2]}</li>
                    <li>{props.info.analyzedInstructions.steps[3]}</li> */}
          
                
            </div>
        )
    }
    else {
        console.log(props);
        return <h1>LOAAAAAAAAAAADING</h1>
    }
    
}

export default Recipe;