import FunctionSection from "../components/FunctionSection";
import TeamSection from "../components/Section"
import MedallSection from "../components/MedallSection"

function Home(){
    return(
        <div id="sectionsContainer">
            <TeamSection></TeamSection>
            <FunctionSection></FunctionSection>
            <MedallSection></MedallSection>

        </div>
    )
}

export default Home;