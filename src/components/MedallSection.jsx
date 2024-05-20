import medallArray from "../data/Molecule3array"

import MedallCard from "./Molecules/MedallCard"

import "./MedallSection.css"

function MedallSection(){
    return(
        <div id="cardContainer">
            {
                medallArray.medalls.map(medall=><MedallCard tittle = {medall.tittle} img = {medall.img} description = {medall.description}></MedallCard>)
            }

        </div>
    )
}

export default MedallSection