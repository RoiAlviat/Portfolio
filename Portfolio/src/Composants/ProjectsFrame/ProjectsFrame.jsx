import { Link } from "react-router-dom"
import "./ProjectsFrame.css"

function ProjectsFrame({className, pathName}) {
    return (
        <Link to={pathName} >
            
            <div className={`tp-container ${className}`}>
                <h4></h4>
                <h1></h1>
                <h3> </h3>
          </div>
          </Link>
    )
}

export default ProjectsFrame