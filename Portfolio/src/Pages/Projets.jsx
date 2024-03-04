
import Header from "../Composants/Header/Header"
import ProjectsFrame from "../Composants/ProjectsFrame/ProjectsFrame"
import TextProjects from "../Composants/TextProjects/TextProjects"
import Github from "../Assets/github.png"
import { Link } from "react-router-dom"

function Projets() {
    return(
        <>
            <Header/>
            <TextProjects/>
            <div className="projet-container">
             <Link to="https://github.com/RoiAlviat"><img className="github" src={Github}/></Link>
            </div>        </>
    )
}

export default Projets