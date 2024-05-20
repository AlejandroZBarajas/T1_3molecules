import "./FunctionCard.css"

import "../Atoms/FunctionTitle"
import "../Atoms/FunctionDescriptions"
import FunctionTitle from "../Atoms/FunctionTitle"
import FunctionDescription from "../Atoms/FunctionDescriptions"

function FunctionCard(props){
    return (
        <div id="functionCardCss">  
            <FunctionTitle tittle={props.tittle}></FunctionTitle>
            <FunctionDescription description={props.description}></FunctionDescription>
        </div>
    )
}

export default FunctionCard