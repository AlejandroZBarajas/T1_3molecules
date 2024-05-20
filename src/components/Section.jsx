import teamArray from "../data/Molecule1array"
import TeamCard from "./Molecules/TeamCards"

import "./Section.css"

function TeamSection(){
    return(
       
            <div id="teamContainer" >
                {
                    teamArray.team.map(member=><TeamCard img = {member.img} name = {member.name}></TeamCard>)
                }

            </div>
            
        
    )
}

export default TeamSection;