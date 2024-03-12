
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
                <ProjectsFrame pathName="/Redux" className="redux" />
                <ProjectsFrame pathName="/React" className={"react"}/>
            </div>       </>
    )
}

export default Projets