import "./TeamCards.css"

import TeamImg from "../Atoms/TeamImg"
import TeamNames from "../Atoms/TeamName"

function TeamCard(props){
    return (
        <div id="teamCardCss">
            <TeamImg img={props.img}></TeamImg>
            <TeamNames name={props.name}></TeamNames>

        </div>
    )
}

export default TeamCard;