import teamArray from "../data/Molecule1array"
import functionsArray from "../data/Molecule2array"
import TeamCard from "./Molecules/TeamCards"

import "./Section.css"

function TeamSection(){
    return(
        <>
            <div id="teamContainer" >
                {
                    teamArray.team.map(member=><TeamCard img = {member.img} name = {member.name}></TeamCard>)
                }

            </div>
            <div id="functionsContainer">

            </div>
            <div id="medallContainer">

            </div>
        </>
    )
}

export default TeamSection;