import "./MedallCard.css"

import MedallTittle from "../Atoms/MedallTittle"
import MedallImg from "../Atoms/Medallimg"
import MedallDescription from "../Atoms/MedallDescription"

function MedallCard(props){
    return(
        <div id="medallContainer">
            <MedallTittle tittle={props.tittle}></MedallTittle>
            <MedallImg img={props.img}></MedallImg>
            <MedallDescription description={props.description}></MedallDescription>
        </div>
    )
}

export default MedallCard