import FunctionSection from "../components/FunctionSection";
import TeamSection from "../components/Section"
import MedallSection from "../components/MedallSection"
import "./Home.css"

function Home(){
    return(
        <div id="sectionsContainer">
            <div id="titulo1">
                <h2 id="members">Miembros del equipo</h2>
                <TeamSection></TeamSection>
            </div>
            <div id="titulo2">
                <h2 id="caracteristicas">Caracteristicas Principales</h2>
                <FunctionSection></FunctionSection>
            </div>
            <div id="titulo3">
                <h2 id="medallas">Algunas de las medallas</h2>
                <MedallSection></MedallSection>
            </div>

        </div>
    )
}

export default Home;