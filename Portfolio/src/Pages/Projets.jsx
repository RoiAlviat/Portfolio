import Header from "../Composants/Header/Header"
import ProjectsFrame from "../Composants/ProjectsFrame/ProjectsFrame"
import TextProjects from "../Composants/TextProjects/TextProjects"

function Projets() {
    return(
        <>
            <Header/>
            <TextProjects/>
            <div className="projet-surcontainer">
            <div class="projet-container">
                <ProjectsFrame className={"tp-container p1"}/>
                <ProjectsFrame className={"tp-container p2"}/>
                <ProjectsFrame className={"tp-container p3"}/>
                <ProjectsFrame className={"tp-container p4"}/>
                <ProjectsFrame className={"tp-container p5"}/>
            </div>
            </div>
        </>
    )
}

export default Projets