import functionsArray from "../data/Molecule2array"
import FunctionCard from "./Molecules/FunctionCard"

import "./FunctionSection.css"

function FunctionSection(){
    return(
        <>
            <div id="functionsContainer">
                {
                    functionsArray.functions.map(functions=><FunctionCard tittle = {functions.tittle} description = {functions.description}></FunctionCard>)
                }

            </div>
        </>
    )
}

export default FunctionSection