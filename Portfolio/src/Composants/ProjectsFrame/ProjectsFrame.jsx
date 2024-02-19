import { Link } from "react-router-dom"
import "./ProjectsFrame.css"

function ProjectsFrame({className, pathName}) {
    return (
        <Link to={pathName}>
                <div class={className}>
          </div>
          </Link>
    )
}

export default ProjectsFrame